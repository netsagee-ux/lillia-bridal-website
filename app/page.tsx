import Link from "next/link";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import { designers } from "@/lib/lillia-data";
import "./home-atelier.css";

export default function Home() {
  return <main className="atelier-home">
    <section className="atelier-hero">
      <div className="atelier-hero-image"><img src="/images/couture-ballroom.webp" alt="Sculptural couture bridal gown in an elegant ballroom" fetchPriority="high" /></div>
      <div className="atelier-hero-shade" />
      <div className="atelier-hero-content">
        <p className="atelier-overline">LILLIA BRIDAL <span>—</span> KEMNAY, ABERDEENSHIRE</p>
        <h1>For the bride<br/>who feels <em>everything.</em></h1>
        <p className="atelier-hero-description">An intimate bridal house. An extraordinary edit of gowns. A moment entirely your own.</p>
        <Link className="atelier-pill atelier-pill-light" href="/appointment">Discover your appointment <ArrowUpRight size={19}/></Link>
      </div>
      <div className="atelier-hero-bottom"><span>PRIVATE BRIDAL APPOINTMENTS</span><a href="#atelier-intro">SCROLL TO EXPLORE <ArrowDownRight size={17}/></a><span>01 / 04</span></div>
    </section>
    <section className="atelier-intro" id="atelier-intro">
      <p className="atelier-label">01 — THE LILLIA FEELING</p>
      <div><h2>Not just a dress.<br/><em>A feeling you keep.</em></h2><div className="atelier-intro-side"><p>We believe finding your gown should feel like being understood. No crowded rails, no rushing, no expectations. Just a beautiful space, a considered collection, and Limara by your side.</p><Link className="atelier-underline-link" href="/experience">The Lillia experience <ArrowUpRight size={18}/></Link></div></div>
    </section>
    <section className="atelier-story">
      <div className="atelier-story-photo"><img src="/images/bride-window.webp" alt="Bride by a softly lit window" loading="lazy"/><span>THE ART OF FINDING THE ONE</span></div>
      <div className="atelier-story-content"><p className="atelier-label">02 — AN EXPERIENCE OF YOUR OWN</p><span className="atelier-story-ornament">L</span><h2>Time to fall<br/><em>in love.</em></h2><p>One bride. One stylist. One private space. Every detail is designed to make room for your story, your instincts and your moment.</p><Link className="atelier-pill atelier-pill-dark" href="/appointment">Your private appointment <ArrowUpRight size={18}/></Link></div>
    </section>
    <section className="atelier-collections">
      <div className="atelier-collections-heading"><div><p className="atelier-label">03 — THE DESIGNER EDIT</p><h2>Considered.<br/><em>Never ordinary.</em></h2></div><p>From modern sculpture to delicate romance, discover four distinctive bridal houses, each selected with intention.</p></div>
      <div className="atelier-designer-grid">{designers.map((designer,index)=><Link href="/designers" className="atelier-designer" key={designer.name}><div className="atelier-designer-image"><img src={designer.image} alt={designer.alt} loading="lazy" style={{objectPosition:designer.position}}/><span>0{index+1}</span></div><div className="atelier-designer-caption"><div><h3>{designer.name}</h3><p>{designer.signature}</p></div><ArrowUpRight size={22}/></div></Link>)}</div>
      <Link className="atelier-underline-link" href="/designers">Explore all designers <ArrowRight size={19}/></Link>
    </section>
    <section className="atelier-quote"><p>THE BRIDAL HOUSE, REIMAGINED</p><h2>Beautiful things happen<br/>when you feel <em>at home.</em></h2><span>— LILLIA BRIDAL —</span></section>
    <section className="atelier-final"><img src="/images/real-couple-veil.webp" alt="Newlyweds under a softly flowing veil" loading="lazy"/><div><p className="atelier-label">YOUR STORY STARTS HERE</p><h2>Shall we find<br/><em>the one?</em></h2><Link className="atelier-pill atelier-pill-light" href="/appointment">Request your appointment <ArrowUpRight size={19}/></Link></div></section>
  </main>;
}
