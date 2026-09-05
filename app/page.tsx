import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { designers } from "@/lib/lillia-data";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow hero-enter hero-enter--one">Private bridal house · Aberdeenshire</p>
          <h1 className="hero-enter hero-enter--two">
            <span>The appointment</span>
            <em>you remember.</em>
          </h1>
          <p className="home-hero__intro hero-enter hero-enter--three">
            A considered edit of designer gowns. A beautiful room reserved only for you. Honest, instinctive guidance from the first dress to the one.
          </p>
          <div className="home-hero__actions hero-enter hero-enter--four">
            <Link className="button button--dark" href="/appointment">
              Request an appointment <ArrowRight size={17} strokeWidth={1.4} />
            </Link>
            <Link className="text-link" href="/designers">
              View the designers <ArrowUpRight size={16} strokeWidth={1.4} />
            </Link>
          </div>
          <div className="home-hero__notes hero-enter hero-enter--five">
            <span>One bride</span><i /><span>One stylist</span><i /><span>One private space</span>
          </div>
        </div>

        <figure className="home-hero__media">
          <div className="home-hero__image"><img src="/images/couture-ballroom.webp" alt="Couture bridal gown in a grand light-filled room" fetchPriority="high" /></div>
          <figcaption><span>Editorial 01</span><span>Étoile Élysée</span></figcaption>
          <div className="home-hero__statement">No audience.<br />No pressure.<br /><em>Just your moment.</em></div>
        </figure>

        <a className="home-hero__scroll" href="#the-house" aria-label="Scroll to discover Lillia Bridal">
          <span>Discover</span><ArrowDown size={17} strokeWidth={1.2} />
        </a>
      </section>

      <div className="house-rail" aria-label="Lillia Bridal highlights">
        <span>Appointment only</span><i />
        <span>Designer gowns from £500</span><i />
        <span>Kemnay · Aberdeenshire</span><i />
        <span>Personal styling with Limara</span>
      </div>

      <section id="the-house" className="home-intro section-shell">
        <div className="home-intro__heading" data-reveal>
          <p className="section-number">01 / The house</p>
          <h2>A quieter kind of<br /><em>bridal experience.</em></h2>
        </div>
        <div className="home-intro__body" data-reveal>
          <p className="lead-copy">The search for your dress should never feel like a performance.</p>
          <p>At Lillia, the door closes behind you and the room becomes yours. Limara listens first, edits thoughtfully and gives you the space to recognise the gown that feels right—not simply the one you expected to choose.</p>
          <Link className="text-link" href="/experience">Inside the experience <ArrowUpRight size={16} strokeWidth={1.4} /></Link>
        </div>
      </section>

      <section className="editorial-pair section-shell" aria-label="The Lillia experience">
        <figure className="editorial-pair__large" data-reveal>
          <img src="/images/bride-window.webp" alt="Bride holding a bouquet by a window" loading="lazy" />
          <figcaption>Time to take it all in</figcaption>
        </figure>
        <div className="editorial-pair__copy" data-reveal>
          <span className="editorial-pair__mark">L</span>
          <p className="eyebrow">The room is yours</p>
          <h3>Private means<br /><em>properly personal.</em></h3>
          <p>Your appointment is shaped around how you want to feel, who you want beside you and the story of the celebration ahead.</p>
          <div className="editorial-pair__features">
            <span><small>01</small>Unhurried one-to-one styling</span>
            <span><small>02</small>An intentionally edited collection</span>
            <span><small>03</small>Clear guidance, without pressure</span>
          </div>
        </div>
        <figure className="editorial-pair__small" data-reveal>
          <img src="/images/lace-train.webp" alt="Intricate lace train of a wedding gown" loading="lazy" />
          <figcaption>The detail stays with you</figcaption>
        </figure>
      </section>

      <section className="designers-preview">
        <div className="designers-preview__head section-shell" data-reveal>
          <div>
            <p className="section-number section-number--light">02 / The designers</p>
            <h2>Four houses.<br /><em>One considered edit.</em></h2>
          </div>
          <p>From sculpted minimalism to intricate romance, every gown earns its place in the room.</p>
        </div>
        <div className="designers-preview__list section-shell">
          {designers.map((designer, index) => (
            <Link className={`designer-preview designer-preview--${designer.format}`} href="/designers" key={designer.name} data-reveal>
              <div className="designer-preview__image"><img src={designer.image} alt={designer.alt} style={{ objectPosition: designer.position }} loading="lazy" /></div>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <div><h3>{designer.name}</h3><p>{designer.signature}</p></div>
              <ArrowUpRight size={21} strokeWidth={1.2} />
            </Link>
          ))}
        </div>
        <div className="designers-preview__link section-shell">
          <Link className="text-link text-link--light" href="/designers">Explore the full collection <ArrowRight size={17} strokeWidth={1.3} /></Link>
        </div>
      </section>

      <section className="real-stories section-shell">
        <div className="real-stories__title" data-reveal>
          <p className="section-number">03 / Real stories</p>
          <h2>Chosen here.<br /><em>Lived everywhere.</em></h2>
          <p>Real Lillia brides, photographed in the moments that made the search worthwhile.</p>
          <Link className="text-link" href="/gallery">Enter the gallery <ArrowUpRight size={16} strokeWidth={1.4} /></Link>
        </div>
        <figure className="real-stories__one" data-reveal>
          <img src="/images/real-couple-celebration.webp" alt="Newlyweds celebrating together" loading="lazy" />
          <figcaption>Joy, unedited</figcaption>
        </figure>
        <figure className="real-stories__two" data-reveal>
          <img src="/images/real-bride-coast.webp" alt="Newlyweds walking beside the coast" loading="lazy" />
          <figcaption>A love story in Aberdeenshire</figcaption>
        </figure>
      </section>

      <section className="home-closing">
        <img src="/images/real-couple-veil.webp" alt="Bride and groom beneath a softly flowing veil" loading="lazy" />
        <div className="home-closing__veil" />
        <div className="home-closing__copy" data-reveal>
          <p className="eyebrow eyebrow--light">The beginning of yours</p>
          <h2>Come as you are.<br /><em>Leave with the one.</em></h2>
          <Link className="button button--light" href="/appointment">Book your private appointment <ArrowRight size={17} strokeWidth={1.4} /></Link>
        </div>
      </section>
    </main>
  );
}
