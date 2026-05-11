import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import {
  TrendingUp,
  PlayCircle,
  Users,
  Target,
  Megaphone,
  PieChart,
  Handshake,
  ArrowRight,
  Trophy,
  BarChart3,
  Globe,
  Lightbulb,
  Users2,
  ShieldCheck,
} from "lucide-react";
import heroImg from "@/assets/hero-stadium.jpg";
import aboutStadium from "@/assets/about-stadium.jpg";

import aboutCelebration from "@/assets/about-celebration.jpg";
import aboutTeam from "@/assets/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GalSport — Agence digitale sportive au Sénégal" },
      { name: "description", content: "GalSport propulse clubs, académies et athlètes sénégalais grâce à des stratégies digitales innovantes." },
      { property: "og:title", content: "GalSport — Agence digitale sportive" },
      { property: "og:description", content: "Stratégie digitale, branding et performance pour le sport sénégalais." },
    ],
  }),
  component: Home,
});

const heroFeatures = [
  { icon: TrendingUp, title: "Stratégies digitales", text: "Basées sur l'analyse du marché sportif sénégalais" },
  { icon: PlayCircle, title: "Contenus percutants", text: "Branding & storytelling pour booster votre notoriété" },
  { icon: Users, title: "Communautés engagées", text: "Gestion de vos réseaux sociaux et interaction avec vos fans" },
  { icon: Target, title: "Résultats mesurables", text: "Données & optimisation pour un impact maximal" },
];

const services = [
  { icon: TrendingUp, title: "Stratégie digitale", subtitle: "(Sport & Performance)", description: "Analyse du marché sportif et élaboration de stratégies sur mesure pour atteindre vos objectifs." },
  { icon: PlayCircle, title: "Marketing de contenu", subtitle: "(Branding Athlète)", description: "Création de contenus de haute qualité pour captiver votre public et renforcer votre image de marque." },
  { icon: Users, title: "Gestion des réseaux sociaux", subtitle: "", description: "Animation de communautés engagées et interaction authentique avec vos supporters." },
  { icon: Megaphone, title: "Publicité en ligne", subtitle: "", description: "Campagnes ciblées pour accroître la visibilité de vos événements et générer des opportunités de sponsoring." },
  { icon: PieChart, title: "Analyse & optimisation", subtitle: "", description: "Suivi des performances et optimisation continue pour maximiser votre retour sur investissement." },
  { icon: Handshake, title: "Partenariats & sponsoring", subtitle: "", description: "Mise en relation avec des partenaires et accompagnement dans la recherche de sponsoring." },
];

const stats = [
  { icon: Trophy, value: "70+", label: "Clubs accompagnés" },
  { icon: Users, value: "180+", label: "Athlètes suivis" },
  { icon: BarChart3, value: "300%", label: "Croissance moyenne" },
  { icon: Globe, value: "15+", label: "Partenaires actifs" },
];

const values = [
  { icon: Lightbulb, title: "Innovation", text: "Nous utilisons les dernières technologies pour des solutions novatrices." },
  { icon: Users2, title: "Collaboration", text: "Nous travaillons en étroite synergie avec nos partenaires pour atteindre vos objectifs." },
  { icon: ShieldCheck, title: "Intégrité", text: "Nous agissons avec éthique, transparence et mettons vos intérêts en priorité." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Footballeur frappant le ballon dans un stade" width={1920} height={1080} className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/30" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 py-20 md:py-28 grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 animate-[slide-up_0.8s_ease-out]">
            <div className="inline-flex items-center rounded-full bg-primary/20 border border-primary/40 px-4 py-1.5 text-[11px] font-bold tracking-wider text-primary uppercase mb-7">
              Agence de communication & performance sportive
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
              Propulsons <span className="text-primary">le sport</span><br />
              sénégalais vers l'excellence
            </h1>
            <p className="text-base md:text-lg text-white/75 max-w-xl mb-8 leading-relaxed">
              GalSport accompagne les clubs, les académies et les athlètes dans leur développement grâce à des stratégies digitales innovantes et un accompagnement sur mesure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-all duration-200 hover:bg-primary/90 hover:scale-[1.04] hover:shadow-[var(--shadow-elegant)]">
                Découvrir nos services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/15 hover:scale-[1.04]">
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Hero feature card */}
          <div className="lg:col-span-2 animate-[fade-in_1s_ease-out]">
            <div className="rounded-2xl bg-secondary/80 border border-primary/30 backdrop-blur-md p-6 md:p-7 space-y-5 shadow-2xl">
              {heroFeatures.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-[15px]">{f.title}</h3>
                    <p className="text-sm text-white/65 leading-snug">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-14">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Nos services</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Des solutions complètes pour votre <span className="text-primary">croissance</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-2xl bg-card border border-border p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] hover:border-primary/30">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{s.title}</h3>
                      {s.subtitle && <p className="text-sm font-semibold text-foreground/80">{s.subtitle}</p>}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-20 md:py-24 bg-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,oklch(0.62_0.19_145/0.18),transparent_60%)]" />
        <div className="relative container mx-auto px-4 md:px-8">
          <Reveal className="text-center mb-12">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Nos chiffres</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              Un impact <span className="text-primary">concret</span> pour le sport sénégalais
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.03] hover:bg-white/10 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_oklch(0.62_0.19_145/0.5)]">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>
                  <div className="text-5xl md:text-6xl font-extrabold leading-none tracking-tight">
                    <AnimatedCounter value={s.value} />
                  </div>
                  <div className="mt-3 text-sm font-medium text-white/75">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* À PROPOS */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image collage */}
          <Reveal y={32}>
            <div className="grid grid-cols-2 gap-4 h-[520px]">
              <div className="img-zoom relative rounded-2xl min-h-0 shadow-[var(--shadow-card)]">
                <img src={aboutStadium} alt="Stade Abdoulaye Wade" loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-primary text-primary-foreground p-4 flex items-start gap-3 z-10">
                  <Users2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm font-semibold leading-snug">Engagés pour le développement du sport au Sénégal</p>
                </div>
              </div>
              <div className="grid grid-rows-2 gap-4 min-h-0">
                <div className="img-zoom rounded-2xl min-h-0 shadow-[var(--shadow-card)]">
                  <img src={aboutCelebration} alt="Athlète sénégalaise" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="img-zoom rounded-2xl min-h-0 shadow-[var(--shadow-card)]">
                  <img src={aboutTeam} alt="Équipe nationale du Sénégal" loading="lazy" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">À propos de GalSport</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Votre partenaire de confiance<br />
              pour le <span className="text-primary">sport sénégalais</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              GalSport est une plateforme intégrée de services digitaux dédiée à la modernisation de l'écosystème sportif au Sénégal. Nous mettons notre expertise digitale au service des clubs, académies et athlètes pour stimuler leur croissance et leur professionnalisation.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {values.map((v) => (
                <div key={v.title} className="group">
                  <div className="flex items-center gap-2 mb-2">
                    <v.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                    <h3 className="font-bold text-sm">{v.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              ))}
            </div>

            <Link to="/a-propos" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:scale-[1.04] hover:shadow-[var(--shadow-elegant)]">
              En savoir plus sur nous <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
