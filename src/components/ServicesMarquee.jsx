import Marquee from './Marquee';

const services = [
  'Sites Sob Medida',
  'Google Ads',
  'Meta Ads',
  'SEO Técnico',
  'Aplicativos Mobile',
  'E-commerce',
  'Landing Pages',
  'Estratégia Digital',
  'Branding',
  'Performance Premium',
];

export default function ServicesMarquee() {
  return (
    <section className="py-10 bg-[#0a0a0a] border-y border-[#C9A84C]/10 overflow-hidden">
      <Marquee
        items={services}
        speed={40}
        separator="✦"
        className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white/90"
      />
    </section>
  );
}
