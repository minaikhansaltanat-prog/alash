// Placeholder sample data — replace `before/after/name/quote` with real
// student records and set `mediaSrc` once real video/audio files exist.
// Until `mediaSrc` is set, the card shows a "coming soon" state instead
// of a broken/fake player.

export type TestimonialType = "written" | "video" | "audio";

export interface Testimonial {
  id: string;
  type: TestimonialType;
  name: string;
  before: number;
  after: number;
  photo: string;
  quote: { kk: string; ru: string };
  mediaSrc?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "azamat",
    type: "written",
    name: "Азамат Н.",
    before: 82,
    after: 131,
    photo: "/photos/student-1.jpg",
    quote: {
      kk: "AI-ментор әр апта сайын нақты не оқу керегін айтып тұрды. Уақытым босқа кетпеді.",
      ru: "AI-ментор каждую неделю точно говорил, что учить. Время не уходило впустую.",
    },
  },
  {
    id: "aigerim",
    type: "written",
    name: "Айгерім С.",
    before: 74,
    after: 124,
    photo: "/photos/student-2.jpg",
    quote: {
      kk: "Ата-ана панелі арқасында анам да үрдісімді көріп отырды — бұл мені жауапкершілікке үйретті.",
      ru: "Благодаря панели родителя мама видела мой прогресс — это научило меня ответственности.",
    },
  },
  {
    id: "daniyar",
    type: "written",
    name: "Данияр Қ.",
    before: 68,
    after: 118,
    photo: "/photos/student-3.jpg",
    quote: {
      kk: "Куратор әр тестен кейін қоңырау шалып, қай жерде қателескенімді түсіндіріп берді.",
      ru: "Куратор звонил после каждого теста и объяснял, в чём была ошибка.",
    },
  },
  {
    id: "madina",
    type: "written",
    name: "Мадина Т.",
    before: 91,
    after: 137,
    photo: "/photos/student-4.jpg",
    quote: {
      kk: "Геймификация арқасында оқу жалықтырмады, әр күн жаңа мақсат болды.",
      ru: "Благодаря геймификации учёба не надоедала, каждый день была новая цель.",
    },
  },
  {
    id: "yerlan",
    type: "video",
    name: "Ерлан Ж.",
    before: 79,
    after: 129,
    photo: "/photos/study-1.jpg",
    quote: {
      kk: "6 айда репетиторсыз 50 балл қостым — толық видео пікірімді қара.",
      ru: "За 6 месяцев без репетитора набрал 50 баллов — смотри полный видео-отзыв.",
    },
  },
  {
    id: "saniya",
    type: "video",
    name: "Сания Б.",
    before: 85,
    after: 139,
    photo: "/photos/study-2.jpg",
    quote: {
      kk: "AI-демо мені бірден сендірді. Нәтиже видеода — өз көзіңмен көр.",
      ru: "AI-демо сразу меня убедило. Результат — на видео, смотри сам(а).",
    },
  },
  {
    id: "arman",
    type: "video",
    name: "Арман Т.",
    before: 71,
    after: 121,
    photo: "/photos/study-3.jpg",
    quote: {
      kk: "Live эфирлер маған ұнады — сұрақ қойсам, бірден жауап алдым.",
      ru: "Мне понравились прямые эфиры — задавал вопрос и сразу получал ответ.",
    },
  },
  {
    id: "dinara",
    type: "audio",
    name: "Динара Е.",
    before: 76,
    after: 122,
    photo: "/photos/study-4.jpg",
    quote: {
      kk: "Аудио-пікірімде толық хикаямды айттым — тыңда.",
      ru: "В аудио-отзыве рассказала свою историю полностью — послушай.",
    },
  },
  {
    id: "nurlan",
    type: "audio",
    name: "Нұрлан С.",
    before: 88,
    after: 133,
    photo: "/photos/teacher-1.jpg",
    quote: {
      kk: "Куратормен байланыс тым жеңіл болды, дауыстық пікірде толық айттым.",
      ru: "Связь с куратором была очень простой, рассказал об этом в аудио.",
    },
  },
  {
    id: "zhanel",
    type: "audio",
    name: "Жанель Қ.",
    before: 80,
    after: 130,
    photo: "/photos/student-2.jpg",
    quote: {
      kk: "Дайын жоспар болмаса, мұндай нәтижеге жетпес едім.",
      ru: "Без готового плана я бы не достигла такого результата.",
    },
  },
];

export const testimonialsByType = (type: TestimonialType) =>
  testimonials.filter((t) => t.type === type);
