import type { Metadata } from "next";
import Link from "next/link";
import { CONDITIONS, STEPS, TRUST_BADGES, PROBLEM_ITEMS } from "@/lib/constants";
import { WaitlistForm } from "@/components/ui/WaitlistForm";
import { faqSchema, jsonLd } from "@/lib/schema";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aera Health | Frauengesundheit: Hormone, Wechseljahre & Hashimoto verstehen",
  description:
    "Personalisierte Unterstützung für Wechseljahre, Hashimoto, Schilddrüse und hormonelle Balance. Wissenschaftlich fundiert, für Frauen in Deutschland.",
  alternates: {
    canonical: "/",
  },
};

const HOME_FAQS = [
  {
    question: "Was ist Aera Health?",
    answer:
      "Aera Health ist eine digitale Plattform, die Frauen dabei hilft, hormonelle Beschwerden wie Wechseljahre, Hashimoto und Schilddrüsenerkrankungen besser zu verstehen. Wir bieten evidenzbasierte Informationen, einen Symptom-Check und Zugang zu Expertinnen.",
  },
  {
    question: "Für wen ist Aera Health geeignet?",
    answer:
      "Aera Health richtet sich an Frauen, die unter hormonellen Beschwerden leiden – insbesondere Wechseljahre (Perimenopause, Menopause), Hashimoto Thyreoiditis, Schilddrüsenunterfunktion oder allgemeine Hormonstörungen.",
  },
  {
    question: "Ersetzt Aera Health den Arztbesuch?",
    answer:
      "Nein. Aera Health ersetzt keine ärztliche Beratung oder Behandlung. Wir bieten Informationen und Orientierung, damit Frauen besser informiert in Arztgespräche gehen können. Bei gesundheitlichen Beschwerden wende dich immer an eine Ärztin oder einen Arzt.",
  },
  {
    question: "Ist Aera Health kostenlos?",
    answer:
      "Der Symptom-Check und grundlegende Informationen sind kostenlos. Trage dich in unsere Warteliste ein, um frühen Zugang zu allen Funktionen zu erhalten.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(faqSchema(HOME_FAQS))}
      />
      <div className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative px-6 py-16 md:py-32 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-32 md:pt-40">
          <div className="z-10 order-2 md:order-1">
            <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              Die Zukunft der Frauengesundheit
            </span>
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-on-surface leading-[1.1] mb-8">
              Aera – Verstehe deinen Körper.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-12 max-w-lg font-body italic opacity-90">
              Personalisierte Unterstützung für deine Hormone, Energie und langfristige Gesundheit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/check"
                className="bg-primary text-on-primary px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:shadow-2xl transition-all active:scale-95 text-center"
              >
                Frühen Zugang sichern
              </Link>
              <Link
                href="/check"
                className="bg-transparent text-primary px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest border border-primary/20 hover:bg-surface-container transition-all active:scale-95 text-center"
              >
                2-Min. Check starten
              </Link>
            </div>
          </div>
          <div className="relative order-1 md:order-2 h-[400px] md:h-[700px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/hero.webp"
              alt="Frau in ihrer späten 30er Jahre in einem natürlichen, stilvollen Ambiente"
              fill
              className="object-cover"
              quality={70}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[3rem]" />
          </div>
        </section>

        {/* Problem Section */}
        <section className="bg-surface-container-low py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-on-surface mb-6 italic">
                Frauengesundheit wird noch immer unterschätzt
              </h2>
              <p className="text-on-surface-variant text-lg font-body mt-4">
                Du bist oft allein gelassen, es selbst herauszufinden.
              </p>
              <div className="w-16 h-0.5 bg-primary/20 mx-auto mt-8" />
            </div>
            <div className="grid md:grid-cols-4 gap-12">
              {PROBLEM_ITEMS.map((item) => (
                <div key={item.title} className="group text-center">
                  <div className="mb-8 inline-block">
                    <span className="material-symbols-outlined text-primary text-4xl font-extralight group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Bento */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-headline font-bold italic">
              Aera verbindet die Punkte
            </h2>
            <p className="text-xl text-on-surface-variant font-body mt-4">
              Wir helfen dir zu verstehen, was wirklich in deinem Körper vorgeht.
            </p>
            <p className="text-primary font-bold mt-2 uppercase tracking-widest text-xs">
              Von Verwirrung → zu Klarheit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[700px]">
            <div className="md:col-span-2 bg-primary-container p-12 rounded-[2.5rem] flex flex-col justify-end relative overflow-hidden group">
              <div className="z-10 relative">
                <h3 className="text-3xl font-headline font-bold text-on-primary-container mb-4">
                  Personalisierte Erkenntnisse basierend auf deinen Symptomen
                </h3>
                <p className="text-on-primary-container/80 max-w-md font-body">
                  Tiefgreifende Analyse, die die Signale deines Körpers in handlungsrelevante Daten übersetzt.
                </p>
              </div>
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-1000">
                <Image
                  src="/images/wellness.webp"
                  alt="Wellness-Ästhetik"
                  fill
                  className="object-cover opacity-30 mix-blend-overlay"
                  quality={50}
                  sizes="100vw"
                />
              </div>
            </div>
            <div className="bg-tertiary-container p-12 rounded-[2.5rem] flex flex-col justify-between border border-tertiary/10">
              <span className="material-symbols-outlined text-on-tertiary-container text-4xl font-extralight">
                science
              </span>
              <div>
                <h3 className="text-2xl font-headline font-bold text-on-tertiary-container mb-4">
                  Wissenschaftsbasierte Empfehlungen
                </h3>
                <p className="text-on-tertiary-container/70 text-sm font-body">
                  Evidenzbasierte Empfehlungen, angepasst an deine einzigartige Biologie.
                </p>
              </div>
            </div>
            <div className="bg-secondary-container p-12 rounded-[2.5rem] md:col-span-1 flex flex-col justify-between border border-secondary/10">
              <span className="material-symbols-outlined text-on-secondary-container text-4xl font-extralight">
                spa
              </span>
              <div>
                <h3 className="text-2xl font-headline font-bold text-on-secondary-container mb-4">
                  Ein ganzheitlicher Blick auf deine Gesundheit
                </h3>
                <p className="text-on-secondary-container/70 text-sm font-body">
                  Deinen Körper als ein vollständiges, vernetztes System betrachten – nicht als isolierte Teile.
                </p>
              </div>
            </div>
            <div className="bg-surface-container p-12 rounded-[2.5rem] md:col-span-2 flex items-center justify-between overflow-hidden border border-outline-variant/10">
              <div className="max-w-xs relative z-10">
                <h3 className="text-2xl font-headline font-bold mb-4">Maßgeschneiderte Unterstützung</h3>
                <p className="text-on-surface-variant text-sm font-body">
                  Von Expert:innen geprüfte Protokolle, um dich zurück in Balance zu bringen.
                </p>
              </div>
              <div className="relative w-64 h-64 flex items-center justify-center flex-shrink-0">
                <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl" />
                <div className="w-48 h-48 border border-primary/10 rounded-full animate-spin" style={{ animationDuration: "30s" }} />
                <span className="material-symbols-outlined text-primary text-5xl font-extralight absolute">
                  all_inclusive
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Condition Explorer */}
        <section id="loesungen" className="bg-background py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6">
                Womit kämpfst du gerade?
              </h2>
              <p className="text-on-surface-variant text-lg font-body italic opacity-80">
                Wähle ein Thema für personalisierte Erkenntnisse.
              </p>
            </div>
            <div className="flex flex-nowrap md:grid md:grid-cols-5 gap-8 overflow-x-auto pb-12">
              {CONDITIONS.map((condition) => (
                <Link
                  key={condition.title}
                  href={condition.href}
                  className="min-w-[280px] snap-center p-10 rounded-[2.5rem] bg-white hover:bg-surface-container-low transition-all duration-500 cursor-pointer group border border-outline-variant/10 shadow-sm hover:shadow-xl"
                >
                  <div className="w-16 h-16 rounded-2xl bg-surface-container-low mb-8 flex items-center justify-center text-primary group-hover:bg-white transition-colors">
                    <span className="material-symbols-outlined font-extralight">
                      {condition.icon}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-4 leading-tight">{condition.title}</h3>
                  <p className="text-xs text-on-surface-variant font-body leading-relaxed">
                    {condition.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="wie-es-funktioniert" className="py-32 px-6 bg-surface-container-low">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-center mb-32 italic">
              Einfach. Persönlich. Für dich gemacht.
            </h2>
            <div className="space-y-40">
              {STEPS.map((step, index) => (
                <div
                  key={step.number}
                  className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center gap-20`}
                >
                  <div className="w-full md:w-1/2">
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary/40 mb-6">
                      Schritt {step.number}
                    </div>
                    <h3 className="text-3xl font-headline font-bold mb-6 italic">{step.title}</h3>
                    <p className="text-on-surface-variant text-lg font-body leading-relaxed opacity-90">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl relative">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={70}
                    />
                    <div className="absolute inset-0 bg-primary/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-20 px-6 bg-white border-y border-outline-variant/5">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center justify-center gap-4">
                <span className="material-symbols-outlined text-2xl font-extralight">
                  {badge.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest">{badge.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist CTA */}
        <section id="warteliste" className="py-32 px-6">
          <div className="max-w-4xl mx-auto bg-stone-50 p-12 md:p-24 rounded-[4rem] text-center shadow-sm border border-outline-variant/10">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 italic">
              Verstehe endlich deinen Körper.
            </h2>
            <p className="text-lg text-on-surface-variant mb-16 max-w-xl mx-auto leading-relaxed font-body opacity-80">
              Werde Teil von Aera und erhalte frühen Zugang zur personalisierten Frauengesundheit.
            </p>
            <WaitlistForm />
          </div>
        </section>
      </div>
    </>
  );
}
