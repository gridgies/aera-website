import Link from "next/link";
import { METHODOLOGY_STEPS, SCIENCE_PRINCIPLES } from "@/lib/constants";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wissenschaftliche Methodik – Evidenzbasierte Frauengesundheit",
  description:
    "Erfahre, wie Aera Health evidenzbasierte Medizin, aktuelle Leitlinien und Hormonforschung vereint, um Frauen bei Wechseljahren, Hashimoto und hormonellen Beschwerden zu unterstützen.",
  alternates: {
    canonical: "/wissenschaft",
  },
  openGraph: {
    title: "Wissenschaftliche Methodik – Aera Health",
    description:
      "Evidenzbasierte Frauengesundheit: Hormone, Wechseljahre und Hashimoto nach aktuellen medizinischen Leitlinien.",
    url: "https://www.aerahealth.de/wissenschaft",
  },
};

export default function WissenschaftPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[716px] flex items-center px-8 py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center w-full">
          <div className="md:col-span-7 z-10 pt-16 md:pt-0">
            <span className="inline-block py-1 px-4 rounded-full bg-tertiary-container text-on-tertiary-container text-sm font-semibold mb-6 tracking-widest uppercase">
              Methodik & Wissenschaft
            </span>
            <h1 className="text-5xl md:text-7xl font-headline text-primary mb-8 leading-tight">
              Wissenschaft trifft{" "}
              <span className="italic">ganzheitliche</span> Langlebigkeit.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-body max-w-2xl leading-relaxed mb-10">
              Aera wird von einem deutschen Expert:innen-Team entwickelt – eine Verbindung aus
              klinischer Präzision und fortschrittlicher Technologie für personalisierte Gesundheit.
            </p>
            <p className="text-sm font-body text-on-surface-variant italic">
              Wissenschaftsbasiert · Entwickelt in Deutschland · DSGVO-konform
            </p>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl shadow-primary/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Modernes Labor-Setting"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5itPKncn3YwK-DjtcMFO6O7uMLjktIgOAKBgP9M8V9q-6PsK2oMsFWrquc1PfktsfPAw6OmqS9R10j1Uxci5Uim6ADPHyCih42GxmYe3IDRp5JNf0Wvvwl7dQ1lH_IJCNnh00mECK-lIJkUIyfx3r-W-MUsSXYHGlKq46GsvJayswJ5oH0-kOCkTFThdl0qe1m9t5Um1QDaPr51PMjmMvXLdlh99yRUw7rHpk2mVvBAYas_ina1BHXWaE1YyTMArC8AZvbym7YQNM"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-[240px] hidden lg:block">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4 block">verified</span>
              <p className="text-sm font-body leading-relaxed text-on-surface-variant">
                &ldquo;Unsere Mission: Medizinische Komplexität in intuitive, wissenschaftsbasierte Alltagshandlungen übersetzen.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wissenschaftliche Grundlage – Bento Grid */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-headline text-primary mb-4">
              Wissenschaftsbasierte Begleitung
            </h2>
            <p className="text-lg text-on-surface-variant font-body max-w-2xl">
              Jede Empfehlung basiert auf validierten klinischen Studien und aktuellen Erkenntnissen
              aus Endokrinologie und Psychoneuroimmunologie.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-tertiary mb-6 text-3xl block">biotech</span>
                <h3 className="text-2xl font-headline text-primary mb-4">
                  Evidenzbasierte Protokolle
                </h3>
                <p className="text-on-surface-variant leading-relaxed max-w-xl">
                  Jedes Programm wird durch Meta-Analysen klinischer Studien gestützt. Wir nutzen
                  Biomarker-Tracking, um physiologische Muster zu erkennen, bevor sie sich als
                  Symptome manifestieren.
                </p>
              </div>
              <div className="mt-12 flex gap-4 overflow-x-auto pb-4">
                {["Hormonelle Balance", "Zirkadiane Rhythmen", "Metabolische Flexibilität"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-dim p-10 rounded-[2rem] text-on-primary">
              <h3 className="text-4xl font-headline mb-6">94%</h3>
              <p className="text-on-primary/80 font-body leading-relaxed">
                unserer Nutzer:innen berichten von einer signifikanten Verbesserung ihres Wohlbefindens
                innerhalb der ersten 12 Wochen.
              </p>
              <div className="mt-12 h-32 flex items-end gap-2">
                <div className="w-full bg-on-primary/20 h-1/2 rounded-t-lg" />
                <div className="w-full bg-on-primary/40 h-2/3 rounded-t-lg" />
                <div className="w-full bg-on-primary/60 h-3/4 rounded-t-lg" />
                <div className="w-full bg-primary-container h-full rounded-t-lg" />
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container-highest p-10 rounded-[2rem]">
              <span className="material-symbols-outlined text-primary mb-6 text-3xl block">neurology</span>
              <h3 className="text-2xl font-headline text-primary mb-4">Neuroplastizität</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Unser Ansatz nutzt die Körper-Geist-Verbindung, um Stresshormone durch gezielte
                kognitive Protokolle nachhaltig zu senken.
              </p>
            </div>
            <div className="md:col-span-8 overflow-hidden rounded-[2rem] relative group min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Ganzheitliche Integration – Bewegung als Gesundheitsmodulator"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmFWPWquSZkJ1JlrfFDSKCaex0ocvK0rOr3yXrbK39Aw9mjcQ1_iUVrskhTfo4WW09aYbIx_DDh0yMyVvwB0g88NnuzQ7Jh4bBGQ2n2Zq_4loVMiFKCiD6afTgZoB_SIA_mXAwfJT9xqIGAmEONESBaOwd1q8xghC3P8Rrb3guni7jppuZ8EpiEJJMvQVgF1wtOl1W2kV-_4-4nIuMeJ8JqKE-dUX1nNK8WU50nJT0hOOQE8GpW7uw8sS48FyEJT46SlcxVnhs9OUQ"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-headline mb-2">Ganzheitliche Integration</h3>
                <p className="text-white/90">Bewegung als biologischer Gesundheitsmodulator.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodik-Schritte */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-headline text-primary mb-4">Unsere Methodik</h2>
          <div className="w-24 h-1 bg-primary-container mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-16 relative">
          {METHODOLOGY_STEPS.map((step) => (
            <div key={step.number} className="text-center space-y-6">
              <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto relative z-10">
                <span className="material-symbols-outlined text-primary text-3xl">{step.icon}</span>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-headline text-primary">{step.title}</h3>
              <p className="text-on-surface-variant font-body leading-relaxed px-4">
                {step.description}
              </p>
            </div>
          ))}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-2/3 h-px bg-surface-container-highest hidden md:block" />
        </div>
      </section>

      {/* Vertrauen & Datensicherheit */}
      <section className="bg-primary text-on-primary py-24 px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <svg className="w-full h-full fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.7,-76.4C58.3,-69.2,70,-58.5,78.8,-45.6C87.6,-32.7,93.5,-17.6,92.5,-3C91.5,11.5,83.7,25.5,74.5,38.1C65.3,50.7,54.7,61.9,42.1,70.1C29.5,78.2,14.7,83.3,-0.6,84.4C-15.9,85.4,-31.8,82.4,-45.5,74.9C-59.2,67.4,-70.7,55.4,-78.3,41.5C-85.9,27.5,-89.6,11.6,-88.4,-3.7C-87.3,-19.1,-81.3,-33.9,-71.4,-46.1C-61.6,-58.3,-47.9,-67.9,-34.1,-74.9C-20.3,-81.9,-10.1,-86.3,2.4,-90.4C14.9,-94.5,29.8,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-headline mb-8">Vertrauen & Datensicherheit</h2>
              <p className="text-xl text-on-primary/80 font-body leading-relaxed mb-12">
                Deine Daten sind dein privatestes Gut. Entwickelt in Deutschland, verarbeiten wir
                sie mit höchster Sorgfalt gemäß DSGVO und medizinischen Datenschutzstandards.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-on-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-primary">lock</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-headline mb-2">Ende-zu-Ende-Verschlüsselung</h4>
                    <p className="text-on-primary/60 text-sm">
                      Nur du hast Zugang zu deinen persönlichen Gesundheitsdaten.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-on-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-primary">policy</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-headline mb-2">Ethik-Kodex</h4>
                    <p className="text-on-primary/60 text-sm">
                      Kein Datenverkauf. Keine Werbung. Nur deine Gesundheit im Fokus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Unsere Prinzipien – kein Advisory Board */}
            <div className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10">
              <h3 className="text-2xl font-headline mb-6">Unsere Prinzipien</h3>
              <ul className="space-y-6">
                {SCIENCE_PRINCIPLES.map((principle) => (
                  <li key={principle} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary-container shrink-0" />
                    <span className="text-on-primary/80">{principle}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm italic text-on-primary/40">
                  Alle internen Algorithmen werden regelmäßig auf medizinische Validität geprüft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 text-center bg-surface">
        <h2 className="text-4xl md:text-5xl font-headline text-primary mb-6">
          Bereit für deine Aera?
        </h2>
        <p className="text-xl text-on-surface-variant font-body mb-12 max-w-2xl mx-auto leading-relaxed">
          Beginne noch heute deine Reise zu optimaler Gesundheit – unterstützt durch
          deutsche Präzision und wissenschaftliche Erkenntnisse.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/check"
            className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-dim transition-colors shadow-xl shadow-primary/10 active:scale-95"
          >
            Programm starten
          </Link>
          <Link
            href="/experten"
            className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity active:scale-95"
          >
            Expert:innen kennenlernen
          </Link>
        </div>
      </section>
    </div>
  );
}
