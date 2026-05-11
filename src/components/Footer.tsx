import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaYoutube,
  FaTiktok,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        
        {/* Logo + description */}
        <div className="space-y-4">
          <Logo light />

          <p className="text-sm text-white/60 max-w-xs">
            L'agence digitale qui propulse le sport sénégalais vers l'excellence.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-3 pt-2">
            
            {/* YouTube */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-red-600 hover:text-white hover:shadow-lg"
            >
              <FaYoutube className="text-lg" />
            </a>

            {/* TikTok */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-black hover:text-white hover:shadow-lg"
            >
              <FaTiktok className="text-lg" />
            </a>

            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-600 hover:text-white hover:shadow-lg"
            >
              <FaFacebookF className="text-lg" />
            </a>

            {/* Twitter / X */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white hover:text-black hover:shadow-lg"
            >
              <FaXTwitter className="text-lg" />
            </a>

          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Navigation
          </h4>

          <ul className="space-y-2 text-sm text-white/60">
            <li>
              <Link
                to="/"
                className="hover:text-primary transition-colors"
              >
                Accueil
              </Link>
            </li>

            <li>
              <Link
                to="/a-propos"
                className="hover:text-primary transition-colors"
              >
                À propos
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Services
          </h4>

          <ul className="space-y-2 text-sm text-white/60">
            <li>Stratégie digitale</li>
            <li>Branding athlète</li>
            <li>Réseaux sociaux</li>
            <li>Publicité en ligne</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-white">
            Contact
          </h4>

          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Dakar, Sénégal
            </li>

            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              contact@galsport.sn
            </li>

            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              +221 77 000 00 00
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-5 text-xs text-white/40 text-center">
          © {new Date().getFullYear()} GalSport. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}