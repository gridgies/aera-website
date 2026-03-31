"use client";

import { useState } from "react";
import Link from "next/link";

const FILTER_OPTIONS = [
  { value: "all", label: "Alle Bereiche" },
  { value: "gynaekologie", label: "Gynäkologie" },
  { value: "hashimoto", label: "Hashimoto & Schilddrüse" },
  { value: "kinderwunsch", label: "Kinderwunsch" },
  { value: "endometriose", label: "Endometriose" },
  { value: "pcos", label: "PCOS" },
];

const EXPERTS = [
  {
    id: "1",
    name: "[Bald verfügbar]",
    title: "Spezialistin für Wechseljahre & Hormone",
    specialty: "gynaekologie",
    badge: "Gynäkologie",
    badgeColor: "bg-secondary-container text-on-secondary-container",
    description: "Über 15 Jahre Erfahrung in ganzheitlicher Hormontherapie und präventiver Frauengesundheit.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvOb-MZy738kzI_RYWWjtXc5HVd1GnFVbCJ9ALpHQJAZ8YgawjLEf9fO2xdyzj5ZRoQx2F_tBnMg3t4xiAHgim8n1CXLtRY6LTWHxLml2n6YbgayG0Lyok2eJ5hU0mwRUuEWxTUJTkqMS197K5V4gU7qeNU5N7T7uPaDEeo6AsD3hPvSmL2OiFdsW6MvLC_1FRRLrMUMl9aEzvmWAzL21gwpasux2tQkP1I6toTTg9XqTBUOE-ikgHKhji4xJWkxI-59r4MWoUYGkG",
  },
  {
    id: "2",
    name: "[Bald verfügbar]",
    title: "Ernährungswissenschaftlerin (M.Sc.)",
    specialty: "hashimoto",
    badge: "Ernährung",
    badgeColor: "bg-tertiary-container text-on-tertiary-container",
    description: "Expertin für anti-entzündliche Ernährung bei Hashimoto und Autoimmunerkrankungen.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5QLiy3YeJOZPU-LvjCtBgtpD0bizgl9U0e-rNnHrMQYhP6MNCFF2CcTT1dxQrni3gAn_c6AvhYdb4IsZsvuahDC9qqsHHZFD1tUT5drrDtA9yRPAw6ILH_gC3VKbyBTVpi_kbOYolfxxfu5ov7_I5d7tQc5mcsbcuywO1GvsdpGOp1i4zF3vnl2o8wDgw2jfY3l1GpLdJf3Ly9pWjCFM0tTcKrTTN5sGk4DjVkbsOcTp68nCWj_IKwQhERL_j764WQDp2jC2Ca2tt",
  },
  {
    id: "3",
    name: "[Bald verfügbar]",
    title: "Fachärztin für Endokrinologie",
    specialty: "pcos",
    badge: "Endokrinologie",
    badgeColor: "bg-secondary-container text-on-secondary-container",
    description: "Spezialisiert auf komplexe Hormonstörungen und metabolische Gesundheit bei Frauen.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCB4N-W8ZeFkMSgeNuOmglPObtK9g07H5pwqe2Rl_ekkCkFe9j3j5ePS3OHoa0qNC3cEsnQWAiI9PPVySS-Qsryc9xNGUXS2n8wTDm-DVD2mAGCukL76VkIy3SB6mf2alqByza71pumbOh0-PBd88FdDYmKL1xpKSUQLa02RaKcJj7_XU4KX6l3P-1MGaR20uYeYVz0aQ_qI6w5YBhFK1Akii9xmzm2wic1bnYZ7dBszbr7Ju57RuWyjzXfFPTj5k0K1inHKz5UVTv",
  },
];

export default function ExpertenPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExperts =
    activeFilter === "all"
      ? EXPERTS
      : EXPERTS.filter((e) => e.specialty === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="pt-32 pb-0 px-8 max-w-7xl mx-auto">
        <header className="mb-16 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary mb-6 leading-[1.1]">
            Die richtige Unterstützung finden
          </h1>
          <p className="text-lg text-on-surface-variant font-body leading-relaxed">
            Wissenschaftlich fundierte Begleitung von erstklassigen Spezialist:innen. Wir verbinden
            medizinische Expertise mit ganzheitlichem Wohlbefinden – in jeder Lebensphase.
          </p>
        </header>
      </div>

      <div className="px-8 max-w-7xl mx-auto pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filter */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-surface-container-low rounded-xl p-8 sticky top-32">
              <h2 className="text-xl font-headline font-semibold text-primary mb-6">
                Fachgebiet
              </h2>
              <nav className="flex flex-col gap-4">
                {FILTER_OPTIONS.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-3 group cursor-pointer">
                    <input
                      type="checkbox"
                      checked={opt.value === "all" ? activeFilter === "all" : activeFilter === opt.value}
                      onChange={() => setActiveFilter(opt.value)}
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20"
                    />
                    <span className="text-on-surface-variant group-hover:text-primary transition-colors">
                      {opt.label}
                    </span>
                  </label>
                ))}
              </nav>
              <div className="mt-10 pt-8 border-t border-outline-variant/20">
                <h2 className="text-xl font-headline font-semibold text-primary mb-6">
                  Verfügbarkeit
                </h2>
                <label className="flex items-center gap-3 group cursor-pointer">
                  <input
                    type="radio"
                    name="availability"
                    className="w-5 h-5 border-outline-variant text-primary focus:ring-primary/20"
                  />
                  <span className="text-on-surface-variant">Diese Woche</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Expert Grid */}
          <section className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredExperts.map((expert) => (
                <div
                  key={expert.id}
                  className="bg-surface-container-lowest rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-80 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt={expert.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={expert.image}
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${expert.badgeColor} px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase`}>
                        {expert.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-headline font-bold text-on-surface mb-1">
                      {expert.name}
                    </h3>
                    <p className="text-tertiary font-medium mb-4">{expert.title}</p>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                      {expert.description}
                    </p>
                    <button className="w-full bg-primary-container text-on-primary-container py-3 rounded-xl font-bold hover:bg-primary hover:text-on-primary transition-colors duration-300 flex items-center justify-center gap-2">
                      Termin buchen
                      <span className="material-symbols-outlined text-lg">calendar_today</span>
                    </button>
                  </div>
                </div>
              ))}

              {/* CTA Card */}
              <div className="bg-primary text-on-primary rounded-xl p-10 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-on-primary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-4xl text-primary-container">
                    clinical_notes
                  </span>
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4">
                  Nicht sicher, wen du brauchst?
                </h3>
                <p className="text-on-primary/80 mb-8 max-w-xs">
                  Mach unseren Aera-Check und wir finden die passende Expert:in für deine Bedürfnisse.
                </p>
                <Link
                  href="/check"
                  className="bg-surface-container-lowest text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary-container transition-colors"
                >
                  Check starten
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Featured Section */}
        <section className="mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden bg-surface-container-high">
            <div className="relative h-[500px] lg:h-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Modernes, warmes Klinik-Ambiente"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjqLzXxpHKlHh1rBQ1f_xQtVsJ5EYex5w2_HHBWwAwKlaQHzoy-UwSHcYtpceRRsGWXq-LDHbwDH42iMS04i4rji5FO6OmfrFGmdIUr47u2QK3y35NSCP8A3pnOiWuckhLVtYw_qCvUDNubPknC_W7W7KHpf2MuEGUP0Q1aify8Ev3kd6dF96IvI-aHLrNQ7mT8hdSsNmPloUkaMTdyqKJcT7CKIJyOb5KxbDSMX6zKnVe42P0eyCor6D9HCGxkL9SpUzw6_HPIrNC"
              />
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <span className="text-tertiary font-semibold tracking-widest uppercase text-xs mb-4">
                Mit ärztlicher Expertise entwickelt
              </span>
              <h2 className="text-4xl font-headline font-bold text-primary mb-8 leading-tight">
                Ganzheitliche Begleitung auf höchstem medizinischen Niveau.
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">verified_user</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Zertifizierte Expertise</h4>
                    <p className="text-on-surface-variant text-sm">
                      Alle unsere Partner:innen verfügen über ärztliche Approbation oder qualifizierte Master-Abschlüsse.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary">sync_alt</span>
                  <div>
                    <h4 className="font-bold text-on-surface">Interdisziplinärer Ansatz</h4>
                    <p className="text-on-surface-variant text-sm">
                      Wir arbeiten vernetzt: Deine Gynäkologin spricht mit deiner Ernährungsberaterin – für optimale Ergebnisse.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
