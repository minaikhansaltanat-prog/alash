"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { EmblaTrack } from "@/components/carousel/embla-track";
import { TestimonialCard } from "@/components/carousel/testimonial-card";
import { testimonialsByType } from "@/lib/testimonials";
import { Reveal } from "@/components/motion/reveal";

// Placeholder teacher credentials — swap with real staff bios/photos later.
const TEACHERS = [
  { name: "Бекзат Оспанов", subject: "Математикалық сауаттылық", photo: "/photos/teacher-1.jpg" },
  { name: "Гүлнұр Сатыбалдина", subject: "Оқу сауаттылығы", photo: "/photos/study-1.jpg" },
  { name: "Ерасыл Жаңабергенов", subject: "Физика", photo: "/photos/study-2.jpg" },
  { name: "Аружан Дүйсенова", subject: "Тарих", photo: "/photos/study-3.jpg" },
];

export function ResultsCarousel() {
  const t = useTranslations("results");

  const written = testimonialsByType("written").map((item) => <TestimonialCard key={item.id} item={item} />);
  const video = testimonialsByType("video").map((item) => <TestimonialCard key={item.id} item={item} />);
  const audio = testimonialsByType("audio").map((item) => <TestimonialCard key={item.id} item={item} />);

  return (
    <section id="results" className="scroll-mt-16 bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-container container-px">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">{t("eyebrow")}</span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">{t("title")}</h2>
          <p className="mt-3 text-sm text-ink/55 sm:text-base">{t("subtitle")}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Tabs defaultValue="written">
            <TabsList className="mx-auto flex h-auto w-fit gap-1 rounded-full bg-white p-1 shadow-sm">
              <TabsTrigger value="written" className="rounded-full px-4 py-2">
                {t("tabs.written")}
              </TabsTrigger>
              <TabsTrigger value="video" className="rounded-full px-4 py-2">
                {t("tabs.video")}
              </TabsTrigger>
              <TabsTrigger value="audio" className="rounded-full px-4 py-2">
                {t("tabs.audio")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="written" className="mt-8">
              <EmblaTrack slides={written} ariaLabel={t("tabs.written")} />
            </TabsContent>
            <TabsContent value="video" className="mt-8">
              <EmblaTrack slides={video} ariaLabel={t("tabs.video")} />
            </TabsContent>
            <TabsContent value="audio" className="mt-8">
              <EmblaTrack slides={audio} ariaLabel={t("tabs.audio")} />
            </TabsContent>
          </Tabs>
        </Reveal>
      </div>

      <div id="teachers" className="scroll-mt-16 mx-auto mt-20 max-w-container container-px">
        <Reveal className="text-center">
          <h3 className="font-heading text-xl font-semibold text-ink sm:text-2xl">{t("teachersTitle")}</h3>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {TEACHERS.map((teacher, i) => (
            <Reveal key={teacher.name} delay={i * 0.06} className="text-center">
              <div className="relative mx-auto aspect-square w-24 overflow-hidden rounded-full border-4 border-white shadow-md sm:w-28">
                <Image src={teacher.photo} alt={teacher.name} fill sizes="112px" className="object-cover" />
              </div>
              <p className="mt-3 text-sm font-semibold text-ink">{teacher.name}</p>
              <p className="text-xs text-ink/50">{teacher.subject}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
