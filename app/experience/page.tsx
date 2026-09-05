import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "The Private Experience",
  description: "Discover the calm, personal and entirely private Lillia Bridal appointment in Aberdeenshire.",
};

const journey = [
  { number: "01", title: "Before we meet", text: "Tell Limara about your wedding, your budget and the feeling you are searching for. It gives the appointment a thoughtful starting point without deciding the ending for you." },
  { number: "02", title: "The room becomes yours", text: "When you arrive, the boutique is reserved for you and your chosen guests. There is time to settle in, talk and explore without competing voices or another appointment waiting." },
  { number: "03", title: "A considered edit", text: "Limara brings together gowns around your instincts, then introduces unexpected possibilities with care. Every choice has a reason; nothing is pushed." },
  { number: "04", title: "The moment it changes", text: "When a gown begins to feel like yours, we slow down. Move in it, photograph it, imagine the day and decide only when the answer feels clear." },
];

export default function ExperiencePage() {
  return (
    <main>
      <PageHero
        number="01"
        eyebrow="The private experience"
        title={<><span>Everything slows down.</span><em>You come into focus.</em></>}
        intro="One bride, one stylist and an entire boutique set aside for the people and the moment that matter to you."
        image="/images/bride-window.webp"
        alt="Bride standing quietly beside a window with her bouquet"
        caption="A room to feel like yourself"
        position="42% 50%"
        mobilePosition="38% 50%"
        variant="experience"
      />

      <section className="experience-intro section-shell">
        <div data-reveal>
          <p className="section-number">The Lillia difference</p>
          <h2>Luxury is not more noise.<br /><em>It is more attention.</em></h2>
        </div>
        <div data-reveal>
          <p className="lead-copy">You are never one appointment in a busy room.</p>
          <p>The experience is deliberately intimate: enough structure to make the search easy, enough freedom to let surprise happen, and the confidence of having one honest voice beside you throughout.</p>
        </div>
      </section>

      <section className="journey-section">
        <div className="journey-section__title section-shell" data-reveal>
          <p className="eyebrow eyebrow--light">From enquiry to the one</p>
          <h2>Your appointment,<br /><em>in four quiet chapters.</em></h2>
        </div>
        <div className="journey-list section-shell">
          {journey.map((step) => (
            <article key={step.number} data-reveal>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-cinema">
        <img src="/images/night-portrait.webp" alt="Newlyweds sharing a quiet moment at night" loading="lazy" />
        <div className="experience-cinema__shade" />
        <div className="experience-cinema__copy" data-reveal>
          <p className="eyebrow eyebrow--light">What the appointment protects</p>
          <h2>The laugh.<br />The pause.<br /><em>The knowing look.</em></h2>
          <p>The best part is rarely the mirror. It is the moment you turn and see your people realise it too.</p>
        </div>
      </section>

      <section className="experience-details section-shell">
        <div className="experience-details__head" data-reveal>
          <p className="section-number">Before your visit</p>
          <h2>A few useful<br /><em>details.</em></h2>
        </div>
        <div className="experience-details__table" data-reveal>
          <div><span>Setting</span><p>A private, appointment-only boutique in Kemnay, Aberdeenshire.</p></div>
          <div><span>Collection</span><p>A curated designer edit beginning from £500.</p></div>
          <div><span>Guidance</span><p>Personal styling with Limara and complete clarity around budget.</p></div>
          <div><span>Your people</span><p>Tell us who you plan to bring when you request your appointment.</p></div>
          <div><span>Questions</span><p>Everything else is covered in the appointment confirmation or our FAQ.</p></div>
        </div>
        <div className="experience-details__links" data-reveal>
          <Link className="button button--dark" href="/appointment">Request an appointment <ArrowRight size={17} /></Link>
          <Link className="text-link" href="/faq">Read the FAQ <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
