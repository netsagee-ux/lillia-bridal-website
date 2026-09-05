import type { CSSProperties, ReactNode } from "react";

type PageHeroProps = {
  number: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image: string;
  alt: string;
  caption: string;
  position?: string;
  mobilePosition?: string;
  variant?: "experience" | "designers" | "about" | "faq";
  reverse?: boolean;
};

export function PageHero({
  number,
  eyebrow,
  title,
  intro,
  image,
  alt,
  caption,
  position = "50% 50%",
  mobilePosition,
  variant,
  reverse = false,
}: PageHeroProps) {
  const mediaStyle = {
    "--image-position": position,
    "--image-position-mobile": mobilePosition ?? position,
  } as CSSProperties;

  return (
    <section className={`page-hero ${reverse ? "page-hero--reverse" : ""} ${variant ? `page-hero--${variant}` : ""}`}>
      <div className="page-hero__copy">
        <div className="page-hero__index"><span>{number}</span><i /></div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero__intro">{intro}</p>
      </div>
      <figure className="page-hero__media" style={mediaStyle}>
        <img src={image} alt={alt} fetchPriority="high" />
        <figcaption>{caption}</figcaption>
      </figure>
    </section>
  );
}
