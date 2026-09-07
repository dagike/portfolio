import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
        Portfolio
      </p>
      <h1 className="mt-sm max-w-[42rem] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Something is being built here.
      </h1>
      <p className="mt-md max-w-[36rem] text-lg text-muted">
        The layout, theming and navigation are in place. Content sections are
        coming next.
      </p>
    </Container>
  );
}
