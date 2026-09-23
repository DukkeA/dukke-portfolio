import Link from "next/link";
import { SourceIcon } from "@/components/source-icons";
import { profile } from "@/content/profile";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col overflow-hidden bg-dukke-paper px-5 py-5 font-body text-dukke-ink sm:px-8 sm:py-7 lg:px-12">
      <header className="flex items-center justify-between gap-4 border-b border-black/20 pb-5">
        <Link
          href="/"
          aria-label="Dukke — home"
          className="inline-flex w-28 text-black transition-colors hover:text-black/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:w-36"
        >
          <SourceIcon
            name="asset2"
            viewBox="0 0 1288 338"
            className="h-auto w-full"
            aria-hidden="true"
          />
        </Link>
        <span className="font-display text-xs uppercase tracking-[0.14em] sm:text-sm">
          Andrés Duque / Portfolio
        </span>
      </header>

      <div className="mx-auto grid w-full max-w-[90rem] flex-1 items-center gap-6 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-20">
        <div className="relative w-fit">
          <span className="absolute -top-7 left-1 inline-flex items-center gap-2 rounded-full border border-black/30 px-3 py-1 font-display text-[0.7rem] uppercase tracking-[0.14em] sm:-top-8 sm:text-xs">
            <span className="size-2 rounded-full bg-black" />
            Page missing
          </span>
          <p
            aria-hidden="true"
            className="m-0 font-display text-[clamp(9rem,31vw,29rem)] leading-[0.77] tracking-[-0.09em] text-black"
          >
            404<span className="text-dukke-yellow">.</span>
          </p>
        </div>

        <div className="max-w-xl self-end pb-4 lg:self-center">
          <h1 className="mb-5 font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-black">
            This page isn&apos;t here.
          </h1>
          <p className="mb-8 max-w-md text-base leading-relaxed text-black/70 sm:text-lg">
            The link may have changed, or the address might be wrong. You can
            head back to the portfolio or go straight to the projects.
          </p>
          <nav aria-label="Where to go next" className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-dukke-yellow px-6 font-display text-sm text-black transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:text-base"
            >
              Back home <span aria-hidden="true" className="ml-3">↗</span>
            </Link>
            <Link
              href="/#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/30 px-6 font-display text-sm text-black transition-colors hover:bg-black hover:text-dukke-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:text-base"
            >
              View projects <span aria-hidden="true" className="ml-3">↗</span>
            </Link>
          </nav>
        </div>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-black/20 pt-5 font-display text-xs uppercase tracking-[0.12em] sm:text-sm">
        <span>{profile.tagline}</span>
        <span>404 / Page not found</span>
      </footer>
    </main>
  );
}
