import { Link } from "@tanstack/react-router";
import logo from "../assets/galsport-logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center group" aria-label="GalSport - Accueil">
      <div className={`rounded-md overflow-hidden transition-transform group-hover:scale-105 ${light ? "bg-white p-1.5" : ""}`}>
        <img
          src={logo}
          alt="GalSport"
          width={1080}
          height={280}
          className="h-9 md:h-10 w-auto block"
        />
      </div>
    </Link>
  );
}
