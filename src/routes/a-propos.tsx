import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import {
  Sparkles,
  Users,
  Shield,
  Target,
  Eye,
  Heart,
  ArrowRight,
} from "lucide-react";

import heroAbout from "@/assets/hero-about.jpg";

import team1 from "@/assets/PO.png";
import team2 from "@/assets/Ndom.jpg";
import team3 from "@/assets/Papi.png";
import team4 from "@/assets/Bamba.png";
import team5 from "@/assets/Fatima.png";
import team6 from "@/assets/Gnima.png";
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
      {
        property: "og:title",
        content: "À propos — GalSport",
      },
      {
        property: "og:description",
        content:
          "Notre mission : moderniser le sport sénégalais grâce au digital.",
      },
    ],
  }),
  component: About,
});

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
  { image: team1, name: "Moustapha", role: "PO" },

  { image: team6, name: "Gnima", role: "Scrute master" },

  { image: team3, name: "Papi", role: "Equipe dev" },

  { image: team4, name: "Bamba", role: "Designer" },

  { image: team5, name: "Fatima", role: "Developpeuse web" },

  { image: team2, name: "Ndom", role: "Equipe dev" },

  { image: team7, name: "Dadji", role: "Equipe dev" },
];

function About() {
  return (
    <SiteLayout>

      {/* HERO SECTION */}
      <section
        className="relative text-white py-24 md:py-40 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${heroAbout})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        <div className="relative container mx-auto px-4 md:px-8">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Notre histoire
            </span>

            <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] max-w-3xl">
              L'agence qui digitalise le{" "}
              <span className="text-primary italic">
                sport sénégalais
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              GalSport est le moteur de la transformation numérique du sport au
              Sénégal. Nous fusionnons passion athlétique et excellence
              technologique.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 md:px-8">

          <Reveal className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              L'ÉQUIPE GalSport
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Les talents derrière la performance
            </h2>

            <p className="mt-5 text-muted-foreground">
              Une équipe passionnée qui construit l’avenir digital du sport sénégalais.
            </p>
          </Reveal>

          <div className="space-y-12">

            {/* LIGNE 1 */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

              {teamMembers.slice(0, 4).map((member, i) => (
                <Reveal key={member.name} delay={i * 50}>

                  <div className="group overflow-hidden rounded-[2.5rem] bg-[#0B0F19] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    {/* IMAGE */}
                    <div className="aspect-[3/4] relative overflow-hidden bg-[#0B0F19]">

                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-[center_top] transition-all duration-500 group-hover:scale-105"
                      />

                    </div>

                    {/* TEXTE */}
                    <div className="py-2 text-center">
                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>

                      <p className="mt-3 text-primary font-medium text-sm tracking-wide bg-primary/10 py-2 px-4 rounded-full inline-block">
                        {member.role}
                      </p>

                    </div>

                  </div>

                </Reveal>
              ))}

            </div>

            {/* LIGNE 2 */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[75%] mx-auto">

              {teamMembers.slice(4).map((member, i) => (
                <Reveal key={member.name} delay={i * 50}>

                  <div className="group overflow-hidden rounded-[2.5rem] bg-[#0B0F19] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    {/* IMAGE */}
                    <div className="aspect-[3/4] relative overflow-hidden bg-[#0B0F19]">

                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-[center_top] transition-all duration-500 group-hover:scale-105"
                      />

                    </div>

                    {/* TEXTE */}
                   <div className="py-2 text-center">

                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>

                      <p className="mt-3 text-primary font-medium text-sm tracking-wide bg-primary/10 py-2 px-4 rounded-full inline-block">
                        {member.role}
                      </p>

                    </div>

                  </div>

                </Reveal>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 grid gap-6 md:grid-cols-3">

          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>

              <div className="group h-full rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] hover:border-primary/40">

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <p.icon className="h-6 w-6" />
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {p.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {p.text}
                </p>

              </div>

            </Reveal>
          ))}

        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 bg-muted">

        <div className="container mx-auto px-4 md:px-8">

          <Reveal className="text-center max-w-2xl mx-auto mb-14">

            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Ce qui nous anime
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold">
              Trois valeurs, un seul objectif
            </h2>

          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">

            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>

                <div className="group h-full rounded-2xl bg-card p-8 border border-border transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] hover:border-primary/40">

                  <v.icon className="h-8 w-8 text-primary mb-4 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6" />

                  <h3 className="text-lg font-bold mb-2">
                    {v.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {v.text}
                  </p>

                </div>

              </Reveal>
            ))}

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24">

        <div className="container mx-auto px-4 md:px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Travaillons ensemble
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Vous portez un projet sportif ambitieux ? Nous avons les outils pour le faire grandir.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-8 py-4 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:scale-105 transition-transform"
          >
            Démarrer un projet

            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </section>

    </SiteLayout>
  );
}