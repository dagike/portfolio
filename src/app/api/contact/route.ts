import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  parseContactBody,
  readHoneypot,
  validateContact,
} from "@/lib/contact";

/**
 * Contact form endpoint. The client form validates first for a good
 * experience; this route re-does every check because the client is never
 * trusted, then delivers the message through Resend.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed request body." }, { status: 400 });
  }

  // Honeypot before anything else: a filled hidden field means a bot, so
  // return the same success it would see for a real send and do nothing.
  if (readHoneypot(body)) {
    return NextResponse.json({ ok: true });
  }

  const values = parseContactBody(body);
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error(
      "Contact route misconfigured: RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL must all be set.",
    );
    return NextResponse.json(
      { error: "The contact form is unavailable right now." },
      { status: 500 },
    );
  }

  // Constructed here, not at module scope: a module-level `new Resend()`
  // with no key throws during `next build`.
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: values.email,
    subject: `Portfolio contact from ${values.name}`,
    text: `From: ${values.name} <${values.email}>\n\n${values.message}`,
  });

  if (error) {
    console.error("Resend failed to send contact message:", error);
    return NextResponse.json(
      { error: "The message could not be sent. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
