import React from 'react'
import { Logo } from './Logo'
import { NavLink } from "react-router";

const NAV = [
  { label: "INICIO", to: "/" },
  { label: "¿QUIÉNES SOMOS?", to: "/quienes-somos" },
  { label: "PROGRAMAS", to: "/programas" },
  { label: "NOVEDADES", to: "/novedades" },
  { label: "CONTACTO", to: "/contacto" },
];

export const FooterLayout = () => {
  return (
    <footer className="border-t border-border mt-16 bg-sidebar">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Comunidad de formación católica: espiritualidad, servicio y desarrollo personal.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Explorar</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="hover:text-primary transition-colors">
                  {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Comunidad</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Aula Virtual</li>
            <li>Donaciones</li>
            <li>Voluntariado</li>
            <li>Retiros</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hola@cruxes.org</li>
            <li>+54 11 5555 0100</li>
            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} Cruxes. Formación con propósito.</p>
          <p>Hecho con fe y comunidad.</p>
        </div>
      </div>
    </footer>
  )
}
