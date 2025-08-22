"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

function Sparkle({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2l1.8 4.6L18 8.2l-4.2 1.6L12 14l-1.8-4.2L6 8.2l4.2-1.6L12 2zm7 10l1.2 3 3 1.2-3 1.2L19 20l-1.2-3-3-1.2 3-1.2L19 12zM5 12l1.2 3 3 1.2-3 1.2L5 20l-1.2-3-3-1.2 3-1.2L5 12z"/>
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2">
            <span className="relative grid place-items-center h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-violet-500/30">
              <span className="text-sm font-bold">o</span>
              <span className="pointer-events-none absolute inset-0 rounded-full blur-2xl bg-violet-500/20" />
            </span>
            <span className="text-lg font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                OneTree SEO
              </span>
              <Sparkle className="ml-1 inline h-4 w-4 text-yellow-400/80" />
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm transition-colors",
                  isActive(item.href)
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/audit"
              className="relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow-lg"
            >
              <span className="absolute -inset-1 rounded-lg blur-2xl bg-fuchsia-500/20 pointer-events-none" />
              <span className="relative">Get Free Audit</span>
              <Sparkle className="relative h-4 w-4 text-white/90" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((s) => !s)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 text-gray-700"
            aria-label="Toggle Menu"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-black/5 py-3">
            <nav className="flex flex-col gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-md px-2 py-2 text-sm",
                    isActive(item.href)
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/audit"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow-lg"
              >
                Get Free Audit <Sparkle className="h-4 w-4 text-white/90" />
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
