import type { Metadata } from "next";
import { AppointmentForm } from "@/components/site/AppointmentForm";

export const metadata: Metadata = {
  title: "Book a Private Appointment",
  description: "Request your private bridal appointment with Limara at Lillia Bridal in Kemnay, Aberdeenshire.",
};

export default function AppointmentPage() {
  return (
    <main className="appointment-page">
      <section className="appointment-masthead">
        <div className="appointment-masthead__copy">
          <div className="page-hero__index hero-enter hero-enter--one"><span>06</span><i /></div>
          <p className="eyebrow hero-enter hero-enter--two">Your private appointment</p>
          <h1 className="hero-enter hero-enter--three"><span>Tell us where</span><em>your story begins.</em></h1>
          <p className="hero-enter hero-enter--four">Share a few details and Limara will be in touch personally to shape and confirm your visit.</p>
          <div className="appointment-contact hero-enter hero-enter--five">
            <div><small>Prefer to speak?</small><a href="tel:+447581385143">07581 385143</a></div>
            <div><small>Prefer to write?</small><a href="mailto:Limara@LilliaBridal.com">Limara@LilliaBridal.com</a></div>
          </div>
        </div>
        <figure>
          <img src="/images/romantic-gown.webp" alt="Romantic designer wedding gown outdoors" fetchPriority="high" />
          <figcaption><span>Private appointments</span><span>Kemnay · Aberdeenshire</span></figcaption>
        </figure>
      </section>

      <section className="appointment-content section-shell">
        <aside data-reveal>
          <p className="section-number">Request your visit</p>
          <h2>A little context.<br /><em>A completely personal reply.</em></h2>
          <p>Your answers help Limara understand where you are in the search before she gets in touch. You do not need to know exactly what you want yet.</p>
          <div className="appointment-assurances">
            <div><span>01</span><p>The boutique is reserved only for you.</p></div>
            <div><span>02</span><p>Gowns begin from £500.</p></div>
            <div><span>03</span><p>Every request is answered personally.</p></div>
          </div>
        </aside>
        <AppointmentForm />
      </section>

      <section className="appointment-location">
        <div data-reveal>
          <p className="eyebrow eyebrow--light">Your destination</p>
          <h2>Lillia Bridal<br /><em>in Aberdeenshire.</em></h2>
        </div>
        <div data-reveal>
          <address>Netherton Business Centre<br />Kemnay, Aberdeenshire<br />AB51 5LX</address>
          <p>Appointment only. Full arrival details are shared when your visit is confirmed.</p>
        </div>
      </section>
    </main>
  );
}
