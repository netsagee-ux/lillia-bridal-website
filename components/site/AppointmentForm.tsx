"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <span><Check size={22} strokeWidth={1.4} /></span>
        <p className="eyebrow">Request prepared</p>
        <h2>Thank you.<br /><em>Now let’s find your dress.</em></h2>
        <p>This preview has captured your details. To confirm an appointment today, speak directly with Limara by phone or email.</p>
        <div className="form-success__links">
          <a href="tel:+447581385143">Call 07581 385143</a>
          <a href="mailto:Limara@LilliaBridal.com">Email Limara</a>
        </div>
        <button type="button" onClick={() => setSubmitted(false)}>Send another request</button>
      </div>
    );
  }

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="full-name">Your name</label>
        <input id="full-name" name="name" type="text" autoComplete="name" placeholder="Full name" required />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your number" required />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="wedding-date">Wedding date</label>
          <input id="wedding-date" name="weddingDate" type="date" />
        </div>
        <div className="form-field">
          <label htmlFor="budget">Preferred gown budget</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>£500–£1,000</option>
            <option>£1,000–£1,500</option>
            <option>£1,500–£2,000</option>
            <option>£2,000+</option>
            <option>I’m still deciding</option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="preferred-date">When would you like to visit?</label>
        <input id="preferred-date" name="preferredDate" type="text" placeholder="A preferred day or date range" required />
      </div>
      <div className="form-field">
        <label htmlFor="message">Tell us a little about your plans</label>
        <textarea id="message" name="message" rows={5} placeholder="Your venue, the feeling you are drawn to, or anything Limara should know" />
      </div>
      <label className="form-consent">
        <input type="checkbox" required />
        <span>I’m happy for Lillia Bridal to contact me about this appointment request.</span>
      </label>
      <button className="form-submit" type="submit">
        Send appointment request <ArrowRight size={18} strokeWidth={1.4} />
      </button>
      <p className="form-note">Appointments are confirmed personally by Limara. This form is a website preview and does not send data externally.</p>
    </form>
  );
}
