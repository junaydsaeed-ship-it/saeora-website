import Image from "next/image";
import Link from "next/link";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/saeora-logo-colour.png"
              alt="Saeora"
              width={159}
              height={100}
              className="h-11 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap gap-8">
            <Link
              href="#brands"
              className="text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors"
            >
              Brands
            </Link>
            <Link
              href="#creators"
              className="text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors"
            >
              Creators
            </Link>
            <Link
              href="#how-it-works"
              className="text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="text-xs tracking-widest uppercase text-white/40 hover:text-white/70 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Social + email */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:junayd@saeora.space"
              className="text-xs tracking-wide text-white/40 hover:text-white/70 transition-colors"
            >
              junayd@saeora.space
            </a>
            <a
              href="https://www.instagram.com/saeora.agency/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Saeora. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Influencer Marketing Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
