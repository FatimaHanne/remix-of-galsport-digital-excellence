import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { TrendingUp, Camera, Share2, Target, BarChart3, ArrowRight, Check } from "lucide-react";
import heroServices from "@/assets/hero-services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GalSport" },
      { name: "description", content: "Stratégie digitale, contenu, réseaux sociaux, publicité et analyse pour clubs et athlètes." },
      { property: "og:title", content: "Services — GalSport" },
      { property: "og:description", content: "Une suite complète de services digitaux pour le sport." },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: TrendingUp,
    title: "Stratégie digitale",
    description: "Une stratégie basée sur l'analyse fine du marché sportif sénégalais et africain.",
    features: ["Audit digital complet", "Étude de positionnement", "Roadmap 6 à 12 mois", "Définition d'objectifs SMART"],
  },
  {
    icon: Camera,
    title: "Création de contenu",
    description: "Photos professionnelles, vidéos immersives et storytelling pour faire vibrer vos audiences.",
    features: ["Shootings photo & vidéo", "Storytelling athlète", "Motion design", "Identité visuelle"],
  },
  {
    icon: Share2,
    title: "Gestion des réseaux sociaux",
    description: "Communautés engagées sur Instagram, TikTok, X, Facebook et YouTube.",
    features: ["Calendrier éditorial", "Community management", "Modération 7j/7", "Reporting mensuel"],
  },
  {
    icon: Target,
    title: "Campagnes publicitaires",
    description: "Publicité Meta Ads, Google Ads et TikTok Ads pour atteindre la bonne audience.",
    features: ["Ciblage avancé", "A/B testing créatif", "Optimisation budget", "Tracking conversions"],
  },
  {
    icon: BarChart3,
    title: "Analyse & optimisation",
    description: "Tableaux de bord, KPIs et insights basés sur l'IA pour décider avec précision.",
    features: ["Dashboards temps réel", "Analyse prédictive IA", "Recommandations actionnables", "Reporting transparent"],
  },
];

function Services() {
  return (
    <SiteLayout>
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroServices})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/80" />
        <div className="relative container mx-auto px-4 md:px-8 max-w-4xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Nos services</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            Une expertise <span className="text-primary">360°</span> au service de votre performance
          </h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            De la stratégie à l'exécution, nous prenons en charge l'ensemble de votre présence digitale pour des résultats mesurables.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 space-y-8 max-w-5xl">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="group grid md:grid-cols-[auto_1fr] gap-8 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] hover:border-primary/40">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <s.icon className="h-8 w-8" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary">0{i + 1}</span>
                    <span className="h-px flex-1 bg-border" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-5">{s.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-10 md:p-14 text-center text-primary-foreground shadow-[var(--shadow-elegant)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Un projet en tête ?</h2>
            <p className="opacity-90 mb-7">Recevez un devis personnalisé sous 48h.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-white hover:scale-105 transition-transform">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
