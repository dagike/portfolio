"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import {
  HONEYPOT_FIELD,
  MESSAGE_MAX,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/contact";

type Status = "idle" | "submitting" | "success" | "error";

const FIELDS = ["name", "email", "message"] as const satisfies readonly ContactField[];

const EMPTY: ContactValues = { name: "", email: "", message: "" };

/** Trim every value so client checks match the server's `parseContactBody`. */
function trimValues(values: ContactValues): ContactValues {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    message: values.message.trim(),
  };
}

const inputClass =
  "w-full rounded-md border border-border bg-surface px-sm py-xs text-base text-foreground transition-colors";

export function ContactForm() {
  const uid = useId();
  const fieldId = (field: ContactField) => `${uid}-${field}`;
  const errorId = (field: ContactField) => `${uid}-${field}-error`;
  const hintId = `${uid}-message-hint`;

  const [values, setValues] = useState<ContactValues>(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Record<ContactField, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState<string | null>(null);

  const refs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  function focusFirstInvalid(found: ContactErrors) {
    const first = FIELDS.find((field) => found[field]);
    if (first) refs[first].current?.focus();
  }

  function revalidateField(field: ContactField, nextValues: ContactValues) {
    const fresh = validateContact(trimValues(nextValues));
    setErrors((prev) => ({ ...prev, [field]: fresh[field] }));
  }

  function handleChange(field: ContactField, value: string) {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field]) revalidateField(field, next);
  }

  function handleBlur(field: ContactField) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    revalidateField(field, values);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const trimmed = trimValues(values);
    const found = validateContact(trimmed);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(found).length > 0) {
      setErrors(found);
      focusFirstInvalid(found);
      return;
    }

    setErrors({});
    setStatus("submitting");

    const honeypot =
      (event.currentTarget.elements.namedItem(HONEYPOT_FIELD) as HTMLInputElement | null)
        ?.value ?? "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...trimmed, [HONEYPOT_FIELD]: honeypot }),
      });

      if (response.ok) {
        setValues(EMPTY);
        setTouched({ name: false, email: false, message: false });
        setStatus("success");
        return;
      }

      const data = (await response.json().catch(() => null)) as
        | { errors?: ContactErrors }
        | null;

      if (response.status === 400 && data?.errors) {
        setErrors(data.errors);
        focusFirstInvalid(data.errors);
        setStatus("idle");
        return;
      }

      setStatus("error");
      setFormError("Something went wrong sending your message. Please try again.");
    } catch {
      setStatus("error");
      setFormError(
        "Could not reach the server. Please check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-border bg-surface p-lg"
      >
        <p className="text-base font-medium text-foreground">Thanks — your message is on its way.</p>
        <p className="mt-2xs text-sm text-muted">
          I&rsquo;ll reply to the address you gave. Want to send another?{" "}
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="font-medium text-accent underline underline-offset-2"
          >
            Reset the form
          </button>
          .
        </p>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-lg">
      <div className="flex flex-col gap-2xs">
        <label htmlFor={fieldId("name")} className="text-sm font-medium text-foreground">
          Name
        </label>
        <input
          ref={refs.name}
          id={fieldId("name")}
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          onBlur={() => handleBlur("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? errorId("name") : undefined}
          className={`${inputClass} ${errors.name ? "border-danger" : ""}`}
        />
        {errors.name && (
          <p id={errorId("name")} className="text-sm text-danger">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2xs">
        <label htmlFor={fieldId("email")} className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          ref={refs.email}
          id={fieldId("email")}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          onBlur={() => handleBlur("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? errorId("email") : undefined}
          className={`${inputClass} ${errors.email ? "border-danger" : ""}`}
        />
        {errors.email && (
          <p id={errorId("email")} className="text-sm text-danger">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2xs">
        <label htmlFor={fieldId("message")} className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          ref={refs.message}
          id={fieldId("message")}
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          onBlur={() => handleBlur("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? `${errorId("message")} ${hintId}` : hintId
          }
          className={`${inputClass} resize-y ${errors.message ? "border-danger" : ""}`}
        />
        <div className="flex items-center justify-between gap-md">
          {errors.message ? (
            <p id={errorId("message")} className="text-sm text-danger">
              {errors.message}
            </p>
          ) : (
            <span />
          )}
          <p id={hintId} className="text-xs text-muted">
            {values.message.trim().length}/{MESSAGE_MAX}
          </p>
        </div>
      </div>

      {/* Honeypot: real visitors never see or reach this. Positioned off-screen
          rather than display:none so bots that skip hidden fields still fill it. */}
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${uid}-${HONEYPOT_FIELD}`}>Company</label>
        <input
          id={`${uid}-${HONEYPOT_FIELD}`}
          name={HONEYPOT_FIELD}
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-sm">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2xs self-start rounded-md bg-accent px-md py-2xs text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {submitting ? "Sending…" : "Send message"}
        </button>

        <div role="status" aria-live="polite">
          {status === "error" && formError && (
            <p className="text-sm text-danger">{formError}</p>
          )}
        </div>
      </div>
    </form>
  );
}
