import React from "react";
import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, User, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { label: "INICIO", to: "/" },
  { label: "¿QUIÉNES SOMOS?", to: "/quienes-somos" },
  { label: "PROGRAMAS", to: "/programas" },
  { label: "NOVEDADES", to: "/novedades" },
  { label: "CONTACTO", to: "/contacto" },
];

export const HeaderLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-3 md:gap-6">
        <Logo />
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-medium min-w-0 overflow-hidden">
          {NAV.map((l) => {
            return (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative py-1 whitespace-nowrap transition-colors hover:text-primary ${
                    isActive ? "text-foreground" : "text-foreground/75"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-primary rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
        <div className="flex items-center gap-2 justify-self-end">
          <button className="hidden sm:inline-flex px-3 md:px-4 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-xs md:text-sm hover:bg-primary-dark transition-colors shadow-(--shadow-btn)">
            DONÁ
          </button>
          <button className="hidden md:inline-flex px-4 py-2 rounded-md bg-primary-dark text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
            AULA VIRTUAL
          </button>
          <button
            aria-label="Cuenta"
            className="w-10 h-10 rounded-full border border-border shrink-0 flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors"
          >
            <User className="w-4 h-4" />
          </button>
          <button
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden w-10 h-10 rounded-full border border-border shrink-0 flex items-center justify-center"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV.map((l) => {
              return (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-lg text-sm font-semibold transition-colors ${
                      isActive
                        ? "bg-accent text-primary"
                        : "text-foreground/80 hover:bg-muted"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              );
            })}
            <div className="flex gap-2 pt-3 sm:hidden">
              <button className="flex-1 px-4 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm">
                DONÁ
              </button>
              <button className="flex-1 px-4 py-2.5 rounded-md bg-primary-dark text-primary-foreground font-semibold text-sm">
                AULA VIRTUAL
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
