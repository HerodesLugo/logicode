const partnerLogos = [
  { src: "https://www.figma.com/api/mcp/asset/098063a2-ef32-47db-9a8c-d165155b2b0e", alt: "Partner 1", width: 82 },
  { src: "https://www.figma.com/api/mcp/asset/97edece0-056e-4521-8146-ee8118a934a0", alt: "CSIRT.es", width: 82 },
  { src: "https://www.figma.com/api/mcp/asset/225f37a2-26d5-4652-963a-aab66e98f30d", alt: "FIRST", width: 82 },
  { src: "https://www.figma.com/api/mcp/asset/87ebd1a3-4f43-42c4-800d-1fb55089dac7", alt: "TF-CSIRT", width: 82 },
  { src: "https://www.figma.com/api/mcp/asset/baf958c5-5b02-4100-b355-36ad257ce5c4", alt: "Partner 5", width: 82 },
  { src: "https://www.figma.com/api/mcp/asset/977dba8d-01f3-412b-95b1-511175bdf68b", alt: "Red Nacional de SOC", width: 82 },
  { src: "https://www.figma.com/api/mcp/asset/ac95b8eb-c797-4934-aa61-d5bece7d40ad", alt: "EGC group", width: 169 },
];

export function PartnersMarquee() {
  /* Duplicate the set 3× so there's always enough content visible */
  const logos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="w-full overflow-hidden py-3 bg-brand-light-bg">
      <div className="marquee-track">
        {logos.map((logo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-[47px] object-contain mx-[100px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            style={{ width: logo.width }}
          />
        ))}
      </div>
    </section>
  );
}
