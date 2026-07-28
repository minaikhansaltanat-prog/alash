import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";

export function Faq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section id="faq" className="scroll-mt-16 bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-2xl container-px">
        <Reveal className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">{t("eyebrow")}</span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">{t("title")}</h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 rounded-card border border-ink/8 bg-white px-6">
          <Accordion>
            {items.map((item, i) => (
              <AccordionItem key={item.q} value={i} className="border-ink/8">
                <AccordionTrigger className="py-4 font-heading text-base font-medium text-ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-ink/60">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
