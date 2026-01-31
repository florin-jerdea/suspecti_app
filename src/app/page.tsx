import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <main className="relative z-10 flex flex-col items-center text-center">
        {/* Construction Icon */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-yellow-500/20 text-6xl">
          🚧
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Under Construction
        </h1>

        {/* Subheading */}
        <p className="mb-8 max-w-md text-lg text-zinc-400">
          We&apos;re working hard to bring you something amazing. Stay tuned for updates!
        </p>

        {/* Progress bar */}
        <div className="mb-10 w-64 overflow-hidden rounded-full bg-zinc-700">
          <div className="h-2 w-3/5 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse" />
        </div>

        {/* CTA Button */}
        <Link
          href="/counter"
          className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 text-lg font-semibold text-zinc-900 shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25"
        >
          Try the Counter
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>

        {/* Footer text */}
        <p className="mt-12 text-sm text-zinc-500">
          © 2025 Suspecti. All rights reserved.
        </p>
      </main>
    </div>
  );
}
