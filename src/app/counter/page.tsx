"use client";

import { useState } from "react";
import Link from "next/link";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 px-6">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <main className="relative z-10 flex flex-col items-center text-center">
        {/* Back button */}
        <Link
          href="/"
          className="absolute top-8 left-8 flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
        >
          <span>←</span>
          <span>Back</span>
        </Link>

        {/* Heading */}
        <h1 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Counter
        </h1>

        {/* Counter display */}
        <div className="mb-10 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 ring-2 ring-white/10">
          <span className="text-6xl font-bold text-white">{count}</span>
        </div>

        {/* Counter buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-700 text-2xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:bg-zinc-600 active:scale-95"
          >
            −
          </button>
          <button
            onClick={() => setCount(0)}
            className="flex h-14 w-24 items-center justify-center rounded-full bg-zinc-700 text-sm font-semibold text-zinc-300 shadow-lg transition-all hover:scale-105 hover:bg-zinc-600 active:scale-95"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-2xl font-bold text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl hover:shadow-purple-500/25 active:scale-95"
          >
            +
          </button>
        </div>

        {/* Instructions */}
        <p className="mt-10 text-sm text-zinc-500">
          Use the buttons to increment, decrement, or reset the counter
        </p>
      </main>
    </div>
  );
}
