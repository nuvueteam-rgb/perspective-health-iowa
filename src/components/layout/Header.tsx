"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { NAVIGATION_LINKS, SITE_CONFIG, SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { PinwheelLogo } from "@/components/ui/PinwheelLogo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-charcoal text-white text-sm py-2 hidden md:block">
        <div className="section-container flex justify-between items-center">
          <div className="flex items-center gap-1 text-gray-300">
            {SERVICES.map((service, i) => (
              <span key={service.slug} className="flex items-center">
                {i > 0 && <span className="mx-1.5">&bull;</span>}
                <Link
                  href={`/services/${service.slug}`}
                  className="hover:text-teal transition-colors"
                >
                  {service.shortName}
                </Link>
              </span>
            ))}
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-2 text-teal hover:text-teal-300 transition-colors font-medium"
          >
            <Phone size={14} />
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-white transition-shadow duration-300",
          isScrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 flex-shrink-0"
              aria-label="Perspective Health Iowa — Home"
            >
              <PinwheelLogo className="w-12 h-12" />
              <div className="hidden sm:block">
                <span className="block font-bold text-charcoal text-lg leading-tight">
                  Perspective Health
                </span>
                <span className="block text-teal text-sm font-medium">Iowa</span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden lg:flex items-center gap-1"
              ref={dropdownRef}
              aria-label="Main navigation"
            >
              {NAVIGATION_LINKS.map((link) => (
                <div key={link.href} className="relative">
                  {link.children ? (
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.href ? null : link.href
                        )
                      }
                      className={cn(
                        "nav-link flex items-center gap-1 px-3 py-2 rounded-lg text-sm",
                        pathname.startsWith(link.href) && link.href !== "/"
                          ? "text-teal"
                          : "text-charcoal"
                      )}
                      aria-expanded={activeDropdown === link.href}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.href ? "rotate-180" : ""
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "nav-link px-3 py-2 rounded-lg text-sm block",
                        (pathname === link.href ||
                          (link.href !== "/" &&
                            pathname.startsWith(link.href)))
                          ? "text-teal"
                          : "text-charcoal"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown menu */}
                  {link.children && activeDropdown === link.href && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-charcoal hover:bg-sage hover:text-teal transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
              >
                Start Your Health Journey
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-gray-100 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="section-container py-4 space-y-1" aria-label="Mobile navigation">
              {NAVIGATION_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg font-medium transition-colors",
                      pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href))
                        ? "bg-teal/10 text-teal"
                        : "text-charcoal hover:bg-gray-50"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-teal rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-sm"
                >
                  Start Your Health Journey
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
