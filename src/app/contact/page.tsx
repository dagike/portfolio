import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send me a message — I read everything that comes through.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <Container className="py-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
        Contact
      </p>
      <h1 className="mt-sm max-w-[42rem] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Get in touch.
      </h1>
      <p className="mt-md max-w-[36rem] text-lg text-muted">
        Questions about a project, work, or just want to say hello? Fill in the
        form and I&rsquo;ll get back to you.
      </p>

      <div className="mt-2xl max-w-[36rem]">
        <ContactForm />
        <p className="mt-xl text-sm text-muted">
          You can also find me on{" "}
          <a
            href="https://github.com/dagike"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-2"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://www.linkedin.com/in/isaacdelarosa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline underline-offset-2"
          >
            LinkedIn
          </a>
          .
        </p>
      </div>
    </Container>
  );
}
