"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface TrackedCTAProps {
  href: string;
  /** Stable, locale-independent event label, e.g. "Cina Gatsby · 11 Sep". */
  trackingName: string;
  className?: string;
  children: React.ReactNode;
}

/** Where the click sends the visitor, so ticket sales and interest forms stay separable. */
function destinationOf(href: string) {
  if (href.includes("ambilet.ro")) return "ambilet";
  if (href.includes("haisasocializam.ro")) return "haisasocializam";
  if (href.includes("forms.gle")) return "form";
  return "other";
}

export default function TrackedCTA({
  href,
  trackingName,
  className,
  children,
}: TrackedCTAProps) {
  const destination = destinationOf(href);

  const handleClick = () => {
    const params = { content_name: trackingName, destination };
    // Standard event first so Meta can optimise ad delivery on it, then the custom
    // one that carries the per-event breakdown. Optional call: fbq is absent when
    // the pixel is blocked, and a blocked tracker must not break the ticket link.
    window.fbq?.(
      "track",
      destination === "form" ? "Lead" : "InitiateCheckout",
      params
    );
    window.fbq?.("trackCustom", "TicketClick", params);
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
