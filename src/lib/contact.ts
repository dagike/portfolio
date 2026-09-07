/**
 * Shared contact-form contract. Imported by both the client form
 * (`src/components/contact-form.tsx`) and the API route
 * (`src/app/api/contact/route.ts`) so validation can never drift.
 */

/** The three real fields a visitor fills in. */
export type ContactField = "name" | "email" | "message";

/** Trimmed string values, one per field. */
export type ContactValues = Record<ContactField, string>;

/** Validation messages, keyed by field; absent key means valid. */
export type ContactErrors = Partial<Record<ContactField, string>>;

/** Max accepted length for the name. */
export const NAME_MAX = 80;
/** Max accepted length for the email (RFC 5321). */
export const EMAIL_MAX = 254;
/** Shortest message worth sending. */
export const MESSAGE_MIN = 10;
/** Longest message accepted. */
export const MESSAGE_MAX = 2000;

/**
 * Name of the hidden anti-bot field. A real visitor never sees or fills
 * it; a non-empty value means "bot" on the server. Exported so the form
 * input and the route check reference the same string.
 */
export const HONEYPOT_FIELD = "company";

/**
 * Loose email shape check — one `@`, a dot in the domain, no spaces.
 * Deliberately not RFC-perfect: the real test is whether the reply lands.
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Coerce an unknown JSON body into trimmed `ContactValues`. The route
 * receives arbitrary input, so every field is treated as `unknown`:
 * non-strings become `""`.
 */
export function parseContactBody(body: unknown): ContactValues {
  const source = (body ?? {}) as Record<string, unknown>;
  const read = (key: string) =>
    typeof source[key] === "string" ? (source[key] as string).trim() : "";

  return {
    name: read("name"),
    email: read("email"),
    message: read("message"),
  };
}

/** Read the honeypot field off an unknown body, trimmed. */
export function readHoneypot(body: unknown): string {
  const source = (body ?? {}) as Record<string, unknown>;
  const value = source[HONEYPOT_FIELD];
  return typeof value === "string" ? value.trim() : "";
}

/** Validate trimmed values. Returns an empty object when everything passes. */
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name) {
    errors.name = "Please enter your name.";
  } else if (values.name.length > NAME_MAX) {
    errors.name = `Please keep your name under ${NAME_MAX} characters.`;
  }

  if (!values.email) {
    errors.email = "Please enter your email.";
  } else if (values.email.length > EMAIL_MAX || !EMAIL_RE.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message) {
    errors.message = "Please enter a message.";
  } else if (values.message.length < MESSAGE_MIN) {
    errors.message = `Please write at least ${MESSAGE_MIN} characters.`;
  } else if (values.message.length > MESSAGE_MAX) {
    errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;
  }

  return errors;
}
