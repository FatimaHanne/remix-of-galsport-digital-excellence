import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Sparkles, Users, Shield, Target, Eye, Heart, ArrowRight } from "lucide-react";
import heroAbout from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — GalSport" },
      { name: "description", content: "Découvrez la mission, la vision et les valeurs de GalSport, agence digitale du sport sénégalais." },
      { property: "og:title", content: "À propos — GalSport" },
      { property: "og:description", content: "Notre mission : moderniser le sport sénégalais grâce au digital." },
    ],
  }),
  component: About,
});

const pillars = [
  { icon: Target, title: "Notre mission", text: "Accompagner les acteurs du sport sénégalais dans leur croissance grâce à des solutions digitales sur mesure." },
  { icon: Eye, title: "Notre vision", text: "Faire du Sénégal une référence africaine du sport moderne, connecté et professionnalisé." },
  { icon: Heart, title: "Nos valeurs", text: "Innovation, collaboration et intégrité guident chacune de nos décisions au quotidien." },
];

const values = [
  { icon: Sparkles, title: "Innovation", text: "Nous explorons l'IA, la data et les nouveaux médias pour offrir une longueur d'avance à nos partenaires." },
  { icon: Users, title: "Collaboration", text: "Nous co-construisons avec les clubs, académies et athlètes pour des résultats authentiques et durables." },
  { icon: Shield, title: "Intégrité", text: "Transparence des actions, éthique des contenus, honnêteté des résultats : aucune zone grise." },
];

function About() {
  return (
    <SiteLayout>
      <section
        className="relative text-white py-24 md:py-32 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroAbout})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/80" />
        <div className="relative container mx-auto px-4 md:px-8 max-w-4xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Notre histoire</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold leading-tight">
            L'agence qui digitalise le <span className="text-primary">sport sénégalais</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed">
            GalSport est une plateforme digitale dédiée à la modernisation du sport au Sénégal. Nous croyons au potentiel illimité de nos talents et nous mettons la technologie à leur service.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="group h-full rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] hover:border-primary/40">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Ce qui nous anime</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Trois valeurs, un seul objectif</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-card p-8 border border-border transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] hover:border-primary/40">
                  <v.icon className="h-8 w-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />
                  <h3 className="text-lg font-bold mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Travaillons ensemble</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">Vous portez un projet sportif ambitieux ? Nous avons les outils pour le faire grandir.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform">
            Démarrer un projet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
