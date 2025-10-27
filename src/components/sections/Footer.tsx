import { content } from "@/lib/content";
import Link from "next/link";
import { SkepsisLogo } from "../SkepsisLogo";

export function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl my-10 sm:my-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Navigation Links */}
          <nav className="w-full md:w-1/3 order-2 md:order-1">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm sm:text-md font-semibold">
              {content.footer.links.map((link) => (
                <li key={link}>
                  <Link
                    href={link === "team" ? "/teams" : `/#${link}`}
                    className="inline-block px-2 py-1 rounded hover:text-gray-600 dark:hover:text-gray-300 transition-colors capitalize"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo (centered on small screens) */}
          <div className="order-1 md:order-2 w-full md:w-auto flex justify-center">
            <div className="flex items-center gap-2">
              <SkepsisLogo />
            </div>
          </div>

          {/* Social Links */}
          <div className="order-3 w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
                aria-label="Platform 1"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-gray-700 dark:text-gray-200"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link
                href="#"
                className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>

              <Link
                href="#"
                className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-gray-700 dark:text-gray-200"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>

              <Link
                href="#"
                className="p-2 rounded hover:bg-gray-300 dark:hover:bg-gray-800 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current text-gray-700 dark:text-gray-200"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* small footer note */}
        <div className="mt-6 text-center text-xs text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} SKEPSIS · Technical Committee, Sister
          Nivedita University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
