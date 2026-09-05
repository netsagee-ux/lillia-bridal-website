export const navigation = [
  { href: "/experience", label: "Experience" },
  { href: "/designers", label: "Designers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const designers = [
  {
    name: "Étoile Élysée",
    signature: "Sculpted romance",
    image: "/images/couture-ballroom.webp",
    alt: "Structured couture bridal gown in a grand interior",
    format: "portrait",
    position: "50% 34%",
    description:
      "Architectural lines meet a softer kind of glamour. For the bride drawn to confident shape, considered detail and an entrance that feels entirely her own.",
  },
  {
    name: "Omélia Bridal",
    signature: "Artful detail",
    image: "/images/couture-detail.webp",
    alt: "Close view of intricate hand-finished bridal embellishment",
    format: "portrait",
    position: "50% 32%",
    description:
      "Expressive textures, dimensional embellishment and couture-minded finishing. Gowns that reward a closer look and feel deeply personal in motion.",
  },
  {
    name: "Love Enzoani",
    signature: "Modern ease",
    image: "/images/modern-column.webp",
    alt: "Modern column wedding dress in a quiet courtyard",
    format: "landscape",
    position: "50% 50%",
    description:
      "Clean silhouettes with an effortless confidence. Contemporary gowns for brides who want clarity, beautiful proportion and understated impact.",
  },
  {
    name: "Élysée",
    signature: "Signature contour",
    image: "/images/romantic-gown.webp",
    alt: "Romantic full-skirt wedding gown outdoors",
    format: "portrait",
    position: "50% 42%",
    description:
      "Romantic scale balanced by graceful construction. A collection shaped around movement, proportion and the unmistakable feeling of occasion.",
  },
] as const;

export const galleryImages = [
  {
    src: "/images/home-couple.webp",
    alt: "Newly married couple sharing a joyful kiss",
    label: "A just-married moment",
    size: "wide",
    position: "46% 50%",
  },
  {
    src: "/images/lace-train.webp",
    alt: "Detailed lace train on a designer wedding gown",
    label: "The finishing detail",
    size: "tall",
    position: "50% 58%",
  },
  {
    src: "/images/bride-window.webp",
    alt: "Bride holding a bouquet beside a window",
    label: "Before the aisle",
    size: "landscape",
    position: "38% 50%",
  },
  {
    src: "/images/couture-detail.webp",
    alt: "Intricately embellished couture bridal gown",
    label: "Couture, considered closely",
    size: "portrait",
    position: "50% 32%",
  },
  {
    src: "/images/real-bride-coast.webp",
    alt: "Newlyweds walking together by the coast",
    label: "Aberdeenshire light",
    size: "wide",
    position: "50% 50%",
  },
  {
    src: "/images/modern-column.webp",
    alt: "Minimal modern wedding gown in a courtyard",
    label: "Quiet confidence",
    size: "landscape",
    position: "50% 38%",
  },
  {
    src: "/images/real-couple-celebration.webp",
    alt: "Newlyweds celebrating together after their ceremony",
    label: "The celebration",
    size: "tall",
    position: "50% 44%",
  },
  {
    src: "/images/romantic-gown.webp",
    alt: "Bride in a romantic full-skirt designer gown",
    label: "A sense of occasion",
    size: "portrait",
    position: "50% 42%",
  },
  {
    src: "/images/night-portrait.webp",
    alt: "Newlyweds photographed together at night",
    label: "After dark",
    size: "landscape",
    position: "50% 45%",
  },
  {
    src: "/images/couture-ballroom.webp",
    alt: "Couture wedding dress in a grand room",
    label: "The entrance",
    size: "tall",
    position: "50% 34%",
  },
  {
    src: "/images/real-couple-veil.webp",
    alt: "Bride and groom beneath a flowing veil",
    label: "Only the two of you",
    size: "portrait",
    position: "46% 44%",
  },
] as const;

export const faqs = [
  {
    category: "Your visit",
    items: [
      {
        question: "Is my appointment completely private?",
        answer:
          "Yes. Lillia Bridal is an appointment-only boutique, so the space is reserved for you and your guests. You will have Limara’s full attention, room to take your time and no pressure from other appointments around you.",
      },
      {
        question: "Who can I bring with me?",
        answer:
          "Your most trusted people are welcome. Let us know who you would like to bring when you enquire so the boutique can be prepared for your party and your appointment can feel relaxed from the moment you arrive.",
      },
      {
        question: "What should I bring to my appointment?",
        answer:
          "Neutral, well-fitting underwear and shoes at roughly the height you imagine wearing are useful, but not essential. More importantly, bring an open mind—many brides fall for a silhouette they had not expected.",
      },
      {
        question: "Where is the boutique?",
        answer:
          "You will find Lillia Bridal at Netherton Business Centre, Kemnay, Aberdeenshire AB51 5LX. Arrival details are shared with your appointment confirmation.",
      },
    ],
  },
  {
    category: "Gowns & ordering",
    items: [
      {
        question: "What is the gown price range?",
        answer:
          "The designer collection begins from £500. If you share your preferred budget before the visit, Limara can guide you towards the most relevant gowns with clarity and without pressure.",
      },
      {
        question: "Which designers can I try?",
        answer:
          "The current Lillia edit includes Étoile Élysée, Omélia Bridal, Love Enzoani and Élysée—an intentionally varied collection spanning sculptural, minimal, romantic and intricately detailed styles.",
      },
      {
        question: "How do I secure my gown?",
        answer:
          "A 50% non-refundable deposit secures your gown order. Timings, the remaining balance and collection arrangements are explained clearly before you make a commitment.",
      },
      {
        question: "Can a purchased gown be returned?",
        answer:
          "Items that have been paid for and taken away cannot be returned. Limara will take you through the relevant terms before purchase so you have the information you need to decide confidently.",
      },
      {
        question: "Can the boutique hold my gown after delivery?",
        answer:
          "Complimentary holding is available for up to two weeks after delivery. If you need longer, storage for up to six months is available for £100; collection details can be agreed directly with Limara.",
      },
    ],
  },
] as const;
