import { useTranslations } from "next-intl";
import { Users, Target, Star, GraduationCap } from "lucide-react";
import { CountUp } from "@/components/motion/count-up";
import { Reveal } from "@/components/motion/reveal";

export function TrustBar() {
  const t = useTranslations("trustBar");

  const stats = [
    { icon: Users, value: 10000, suffix: "+", label: t("students") },
    { icon: Target, value: 128, label: t("avgScore") },
    { icon: Star, value: 4.9, decimals: 1, label: t("rating") },
    { icon: GraduationCap, value: 92, suffix: "%", label: t("grant") },
  ];

  return (
    <section className="bg-ink py-10">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-6 container-px sm:grid-cols-4 sm:gap-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <s.icon className="h-5 w-5 text-gold" />
            <p className="font-heading text-2xl font-bold text-paper sm:text-3xl">
              <CountUp value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </p>
            <p className="text-xs leading-snug text-paper/55 sm:text-sm">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
