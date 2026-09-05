"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/lillia-data";

function Wordmark({ light = false, onNavigate }: { light?: boolean; onNavigate?: () => void }) {
  return (
    <Link className={`wordmark ${light ? "wordmark--light" : ""}`} href="/" aria-label="Lillia Bridal home" onClick={onNavigate}>
      <img src="/images/lillia-logo.png" alt="Lillia Bridal" />
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="site-header__inner">
          <Wordmark />

          <nav className="site-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link className="header-book" href="/appointment">
            Private appointment <ArrowUpRight size={15} strokeWidth={1.5} />
          </Link>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu__head">
          <Wordmark light onNavigate={() => setMenuOpen(false)} />
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation">
            <X size={25} strokeWidth={1.3} />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          <Link href="/" className={pathname === "/" ? "is-active" : ""} onClick={() => setMenuOpen(false)}>
            <small>00</small><span>Home</span><ArrowUpRight />
          </Link>
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "is-active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              <small>0{index + 1}</small><span>{item.label}</span><ArrowUpRight />
            </Link>
          ))}
          <Link href="/appointment" className={pathname === "/appointment" ? "is-active" : ""} onClick={() => setMenuOpen(false)}>
            <small>06</small><span>Book an appointment</span><ArrowUpRight />
          </Link>
        </nav>
        <div className="mobile-menu__details">
          <p>Netherton Business Centre<br />Kemnay, Aberdeenshire AB51 5LX</p>
          <div>
            <a href="tel:+447581385143">07581 385143</a>
            <a href="mailto:Limara@LilliaBridal.com">Limara@LilliaBridal.com</a>
          </div>
        </div>
      </div>
    </>
  );
}
