import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/lillia-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__lead" data-reveal>
        <p className="eyebrow eyebrow--light">Your private appointment awaits</p>
        <h2>Let the search feel<br /><em>as special as the finding.</em></h2>
        <Link className="text-link text-link--light" href="/appointment">
          Request your appointment <ArrowUpRight size={17} strokeWidth={1.4} />
        </Link>
      </div>

      <div className="site-footer__rule" />

      <div className="site-footer__grid">
        <div>
          <p className="footer-label">Visit</p>
          <p>Netherton Business Centre<br />Kemnay, Aberdeenshire<br />AB51 5LX</p>
        </div>
        <div>
          <p className="footer-label">Speak to Limara</p>
          <a href="tel:+447581385143">07581 385143</a>
          <a href="mailto:Limara@LilliaBridal.com">Limara@LilliaBridal.com</a>
        </div>
        <nav aria-label="Footer navigation">
          <p className="footer-label">Explore</p>
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/appointment">Appointment</Link>
        </nav>
        <div className="site-footer__note">
          <p className="footer-label">The house</p>
          <p>Appointment-only bridal styling, thoughtful guidance and a considered designer edit in the heart of Aberdeenshire.</p>
        </div>
      </div>

      <div className="site-footer__base">
        <span>© {new Date().getFullYear()} Lillia Bridal</span>
        <span>Private bridal house · Scotland</span>
      </div>
      <div className="site-footer__word" aria-hidden="true">
        <img src="/images/lillia-logo.png" alt="" />
      </div>
    </footer>
  );
}
