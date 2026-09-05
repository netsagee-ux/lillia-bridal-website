import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { faqs } from "@/lib/lillia-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Everything to know before your private Lillia Bridal appointment, from visiting and budgets to orders and gown collection.",
};

export default function FaqPage() {
  return (
    <main>
      <PageHero
        number="05"
        eyebrow="Good to know"
        title={<><span>Questions answered.</span><em>Pressure removed.</em></>}
        intro="The practical details matter. Find clear answers here, then arrive ready to enjoy the part that cannot be planned."
        image="/images/lace-train.webp"
        alt="Detailed lace train of a designer wedding gown"
        caption="Clarity before the appointment"
        position="50% 58%"
        mobilePosition="50% 56%"
        variant="faq"
        reverse
      />

      <section className="faq-section section-shell">
        <aside data-reveal>
          <p className="section-number">The details</p>
          <h2>Everything you need.<br /><em>Nothing hidden.</em></h2>
          <p>Can’t find the answer you need? Limara will be happy to help personally.</p>
          <a href="mailto:Limara@LilliaBridal.com" className="text-link">Ask Limara <ArrowRight size={16} /></a>
        </aside>
        <div className="faq-groups">
          {faqs.map((group, groupIndex) => (
            <section className="faq-group" key={group.category} data-reveal>
              <h3><span>0{groupIndex + 1}</span>{group.category}</h3>
              <div className="faq-list">
                {group.items.map((item, itemIndex) => (
                  <details key={item.question} open={groupIndex === 0 && itemIndex === 0}>
                    <summary><span>{item.question}</span><i><Plus size={19} strokeWidth={1.2} /></i></summary>
                    <div className="faq-answer"><p>{item.answer}</p></div>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="faq-closing" data-reveal>
        <p className="eyebrow">Ready when you are</p>
        <h2>The only question left:<br /><em>when shall we begin?</em></h2>
        <Link className="button button--dark" href="/appointment">Request an appointment <ArrowRight size={17} /></Link>
      </section>
    </main>
  );
}
