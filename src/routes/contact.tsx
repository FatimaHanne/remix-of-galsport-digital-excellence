import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GalSport" },
      { name: "description", content: "Contactez GalSport pour donner un nouvel élan digital à votre projet sportif." },
      { property: "og:title", content: "Contact — GalSport" },
      { property: "og:description", content: "Échangeons sur votre projet sportif." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  message: z.string().trim().min(10, "Message trop court").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = schema.safeParse(data);
    if (!res.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of res.error.issues) fieldErrors[issue.path[0] as string] = issue.message;
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <SiteLayout>
      <section className="relative bg-gradient-to-br from-secondary to-secondary/90 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,oklch(0.62_0.19_145/0.25),transparent_60%)]" />
        <div className="relative container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold">Parlons de votre projet</h1>
          <p className="mt-5 text-lg text-white/80">Une réponse personnalisée sous 48h ouvrées.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Adresse", text: "Dakar, Sénégal" },
              { icon: Mail, title: "Email", text: "contact@galsport.sn" },
              { icon: Phone, title: "Téléphone", text: "+221 77 000 00 00" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] flex gap-4 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[var(--shadow-elegant)] hover:border-primary/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-card)] space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Nom complet</label>
              <input id="name" name="name" type="text" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Votre nom" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="vous@exemple.com" />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none" placeholder="Parlez-nous de votre projet..." />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-glow px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] hover:scale-[1.02] transition-transform">
              Envoyer le message <Send className="h-4 w-4" />
            </button>
            {sent && <p className="text-sm text-primary text-center font-medium">✓ Message envoyé ! Nous revenons vers vous très vite.</p>}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
