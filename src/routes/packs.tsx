import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Check, Star, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/packs")({
  head: () => ({
    meta: [
      { title: "Packs & Tarifs — GalSport" },
      { name: "description", content: "Découvrez nos packs Dallal, Yattal et Premium : des solutions adaptées à chaque business, du débutant à l'entreprise avancée." },
      { property: "og:title", content: "Packs & Tarifs — GalSport" },
      { property: "og:description", content: "Des offres claires et professionnelles pour booster votre présence digitale sportive." },
    ],
  }),
  component: PacksPage,
});

const packs = [
  {
    name: "Dallal",
    tagline: "Entrée de gamme",
    target: "Petits business",
    price: "150 000 – 250 000",
    currency: "FCFA / mois",
    accent: "from-emerald-500 to-emerald-400",
    ring: "border-border",
    badge: null,
    features: [
      "8 à 12 posts par mois",
      "Community management",
      "Mini stratégie digitale",
      "Reporting simple",
    ],
  },
  {
    name: "Yattal",
    tagline: "Croissance",
    target: "PME / Startups",
    price: "300 000 – 500 000",
    currency: "FCFA / mois",
    accent: "from-primary to-primary-glow",
    ring: "border-primary",
    badge: "Recommandé",
    features: [
      "12 à 20 posts par mois",
      "CM + création de contenu",
      "Publicité (Ads basique)",
      "Analyse mensuelle",
      "Optimisation continue",
    ],
  },
  {
    name: "Premium",
    tagline: "Performance maximale",
    target: "Entreprises sérieuses",
    price: "600 000 – 1 200 000",
    currency: "FCFA / mois",
    accent: "from-rose-600 to-rose-500",
    ring: "border-border",
    badge: null,
    features: [
      "Stratégie complète sur-mesure",
      "Publicité avancée (Ads)",
      "Content premium",
      "Funnel marketing complet",
      "Reporting détaillé",
    ],
  },
];

function PacksPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary to-secondary/90 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.62_0.19_145/0.3),transparent_60%)]" />
        <div className="relative container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <Reveal>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Tarification</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
              Nos <span className="text-primary">Packs</span> & Tarifs
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Des solutions adaptées à chaque type de business, du débutant à l'entreprise avancée.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Packs grid */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {packs.map((p, idx) => {
              const featured = p.badge !== null;
              return (
                <Reveal key={p.name} delay={idx * 120}>
                  <div
                    className={`relative flex flex-col h-full rounded-3xl border-2 ${p.ring} bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] hover:border-primary ${
                      featured ? "lg:scale-105 lg:-mt-2 ring-4 ring-primary/10" : ""
                    }`}
                  >
                    {p.badge && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-primary-glow px-4 py-1.5 text-xs font-bold text-primary-foreground shadow-lg">
                          <Star className="h-3.5 w-3.5 fill-current animate-pulse" /> {p.badge}
                        </span>
                      </div>
                    )}

                    <div className={`inline-flex w-fit items-center rounded-full bg-gradient-to-r ${p.accent} px-3 py-1 text-xs font-semibold text-white mb-4`}>
                      {p.tagline}
                    </div>

                    <h3 className="text-3xl font-bold">Pack {p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Pour {p.target}</p>

                    <div className="mt-6 mb-6">
                      <div className="text-3xl md:text-4xl font-extrabold leading-none">
                        {p.price}
                      </div>
                      <div className="mt-1 text-sm text-muted-foreground">{p.currency}</div>
                    </div>

                    <div className="h-px bg-border mb-6" />

                    <ul className="space-y-3 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <span className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${p.accent} text-white`}>
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 hover:scale-[1.04] ${
                        featured
                          ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:opacity-90 shadow-[var(--shadow-elegant)]"
                          : "bg-secondary text-white hover:bg-secondary/90"
                      }`}
                    >
                      Choisir ce pack <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
            Besoin d'une offre sur-mesure ? Nous construisons aussi des packs personnalisés selon vos objectifs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-10 md:p-14 text-center text-primary-foreground shadow-[var(--shadow-elegant)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Vous hésitez sur le pack idéal ?</h2>
            <p className="opacity-90 mb-7">Discutons de votre projet et trouvons ensemble la formule parfaite.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 text-sm font-semibold text-white hover:scale-105 transition-transform">
              Nous contacter <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
