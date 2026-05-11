import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  Users,
  Shield,
  Target,
  Eye,
  Heart,
  ArrowRight,
  Trophy,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";

import heroAbout from "@/assets/hero-about.jpg";
import team1 from "@/assets/PO.jpg";
import team2 from "@/assets/Ndom.jpg";
import team3 from "@/assets/Papi.jpg";
import team4 from "@/assets/Bamba.jpg";
import team5 from "@/assets/Fatima.jpeg";
import team6 from "@/assets/Gnima.jpg";
import team7 from "@/assets/Dadji.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — GalSport" },
      {
        name: "description",
        content:
          "Découvrez la mission, la vision et les valeurs de GalSport, agence digitale du sport sénégalais.",
      },
      { property: "og:title", content: "À propos — GalSport" },
      {
        property: "og:description",
        content: "Notre mission : moderniser le sport sénégalais grâce au digital.",
      },
    ],
  }),
  component: About,
});

/* ─────────────────────────────────────────
   DONNÉES
───────────────────────────────────────── */
const stats = [
  { icon: Trophy, value: "30+", label: "Clubs partenaires" },
  { icon: TrendingUp, value: "150%", label: "Croissance moyenne" },
  { icon: Globe, value: "12", label: "Pays couverts" },
  { icon: Zap, value: "5", label: "Ans d'expérience" },
];

const timeline = [
  {
    year: "2023",
    title: "La naissance",
    text: "Création de GalSport avec une ambition claire : moderniser la communication et le développement du sport sénégalais grâce au digital.",
  },
  {
    year: "2024",
    title: "Premières collaborations",
    text: "Accompagnement des premiers clubs, athlètes et structures sportives avec des solutions digitales adaptées.",
  },
  {
    year: "2025",
    title: "Croissance & innovation",
    text: "Développement de nouveaux services, création de contenus performants et renforcement de l’écosystème sportif digital.",
  },
  {
    year: "2026",
    title: "Nouvelle vision",
    text: "GalSport accélère son expansion avec plus de partenaires et une vision tournée vers l’innovation sportive en Afrique.",
  },
];

const pillars = [
  {
    icon: Target,
    title: "Notre mission",
    text: "Accompagner les acteurs du sport sénégalais dans leur croissance grâce à des solutions digitales sur mesure.",
  },
  {
    icon: Eye,
    title: "Notre vision",
    text: "Faire du Sénégal une référence africaine du sport moderne, connecté et professionnalisé.",
  },
  {
    icon: Heart,
    title: "Nos valeurs",
    text: "Innovation, collaboration et intégrité guident chacune de nos décisions au quotidien.",
  },
];

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    text: "Nous explorons l'IA, la data et les nouveaux médias pour offrir une longueur d'avance à nos partenaires.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Nous co-construisons avec les clubs, académies et athlètes pour des résultats authentiques et durables.",
  },
  {
    icon: Shield,
    title: "Intégrité",
    text: "Transparence des actions, éthique des contenus, honnêteté des résultats : aucune zone grise.",
  },
];

const teamMembers = [
  { image: team1, name: "Moustapha", role: "Product Owner", emoji: "🎯" },
  { image: team6, name: "Gnima", role: "Scrum Master", emoji: "🔄" },
  { image: team3, name: "Papi", role: "Equipe dev", emoji: "💻" },
  { image: team4, name: "Bamba", role: "Design UX&UI", emoji: "🎨" },
  { image: team5, name: "Fatima", role: "Développeuse Web", emoji: "🌐" },
  { image: team2, name: "Ndom", role: "Design", emoji: "⚡" },
  { image: team7, name: "Dadji", role: "Créateur de contenue", emoji: "🚀" },
];

/* ─────────────────────────────────────────
   COMPOSANT — carte membre équipe
───────────────────────────────────────── */
function TeamCard({
  member,
  delay,
}: {
  member: (typeof teamMembers)[0];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group relative overflow-hidden rounded-[2rem] bg-[#0B0F19] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_60px_-12px_rgba(var(--primary-rgb),0.35)]">

        {/* IMAGE */}
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-[center_top] transition-all duration-700 group-hover:scale-110"
          />

          {/* Overlay gradient permanent, renforcé au hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

          {/* Badge emoji flottant — visible au hover */}
          <div className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-xl bg-black/60 backdrop-blur-sm border border-white/10 text-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {member.emoji}
          </div>

          {/* Nom + rôle en overlay bas de carte */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
            {/* font-bold au lieu de font-black, comme index.tsx */}
            <h3 className="text-xl font-bold text-white leading-tight">
              {member.name}
            </h3>
            <span className="mt-2 inline-block text-xs font-semibold text-primary bg-primary/15 border border-primary/20 px-3 py-1 rounded-full backdrop-blur-sm">
              {member.role}
            </span>
          </div>
        </div>

      </div>
    </Reveal>
  );
}

/* ─────────────────────────────────────────
   PAGE PRINCIPALE
───────────────────────────────────────── */
function About() {
  return (
    <SiteLayout>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        className="relative text-white py-20 md:py-28 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroAbout})` }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Lignes horizontales animées décoratives */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse"
              style={{
                top: `${25 + i * 25}%`,
                left: 0,
                right: 0,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${2 + i * 0.5}s`,
                opacity: 0.4,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 md:px-8">
          <div className="animate-[slide-up_0.8s_ease-out]">

            {/* Badge — même style que index.tsx */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/40 px-4 py-1.5 text-[11px] font-bold tracking-wider text-primary uppercase mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Notre histoire
            </div>

            {/* Titre — même échelle et font-bold que index.tsx */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-3xl mb-6">
              L'agence qui digitalise le{" "}
              <span className="text-primary">sport sénégalais</span>
            </h1>

            {/* Sous-titre — même style que index.tsx */}
            <p className="text-base md:text-lg text-white/75 max-w-xl mb-8 leading-relaxed">
              GalSport est le moteur de la transformation numérique du sport au
              Sénégal. Nous fusionnons passion athlétique et excellence
              technologique.
            </p>

            {/* CTAs — mêmes classes exactes que index.tsx */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 hover:scale-[1.04] hover:shadow-[var(--shadow-elegant)]"
              >
                Démarrer un projet <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#equipe"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:scale-[1.04]"
              >
                Voir l'équipe
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">

          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Notre parcours</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              3 ans de <span className="text-primary">conquête</span>
            </h2>
          </Reveal>

          <div className="relative">
            {/* Ligne centrale verticale (desktop uniquement) */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 100}>
                  <div
                    className={`flex gap-8 md:gap-16 items-center ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                  >
                    {/* Contenu texte */}
                    <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div
                        className={`inline-block rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 max-w-sm ${i % 2 === 0 ? "ml-auto" : "mr-auto"
                          }`}
                      >
                        {/* font-bold + tracking-[0.2em] comme les labels de index.tsx */}
                        <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                          {item.year}
                        </span>
                        <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>

                    {/* Nœud central */}
                    <div className="hidden md:flex relative z-10 h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)] ring-4 ring-background" />

                    {/* Spacer côté vide */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          ÉQUIPE
      ══════════════════════════════════════ */}
      <section id="equipe" className="py-20 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8">

          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">L'équipe GalSport</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
              Les talents derrière la <span className="text-primary">performance</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Une équipe passionnée qui construit l'avenir digital du sport sénégalais.
            </p>
          </Reveal>

          {/* Ligne 1 — 4 membres */}
          <div className="grid gap-6 grid-cols-2 lg:grid-cols-4 mb-6">
            {teamMembers.slice(0, 4).map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i * 60} />
            ))}
          </div>

          {/* Ligne 2 — 3 membres centrés */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-3 max-w-[75%] mx-auto">
            {teamMembers.slice(4).map((member, i) => (
              <TeamCard key={member.name} member={member} delay={i * 60} />
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          PILLIERS — mission / vision / valeurs
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">

          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Notre ADN</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Ce qui nous <span className="text-primary">définit</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-elegant)] hover:border-primary/40">

                  {/* Coin décoratif */}
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-3xl" />

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <p.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          VALEURS — innovation / collaboration / intégrité
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">

          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Ce qui nous anime</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Trois valeurs, <span className="text-primary">un seul objectif</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-card p-8 border border-border transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] hover:border-primary/40">

                  {/* Numéro géant décoratif en fond */}
                  <span className="absolute -top-4 -right-2 text-8xl font-extrabold text-primary/5 select-none pointer-events-none">
                    {i + 1}
                  </span>

                  <v.icon className="relative z-10 h-8 w-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                  <h3 className="relative z-10 text-lg font-bold mb-2">{v.title}</h3>
                  <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">{v.text}</p>

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 relative overflow-hidden">

        {/* Fond lumineux radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-4 md:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center rounded-full bg-primary/20 border border-primary/40 px-4 py-1.5 text-[11px] font-bold tracking-wider text-primary uppercase mb-7">
              Passons à l'action
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-5 max-w-2xl mx-auto leading-[1.1]">
              Travaillons <span className="text-primary">ensemble</span>
            </h2>

            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Vous portez un projet sportif ambitieux ? Nous avons les outils,
              l'équipe et la passion pour le faire grandir.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 hover:scale-[1.04] hover:shadow-[var(--shadow-elegant)]"
              >
                Démarrer un projet <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Voir nos services
              </Link>
            </div>
          </Reveal>
        </div>

      </section>

    </SiteLayout>
  );
}
