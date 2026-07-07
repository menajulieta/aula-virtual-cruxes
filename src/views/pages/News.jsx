import React from 'react'
import { Calendar, ArrowRight } from "lucide-react";
import { HeaderPage } from '../components/HeaderPage';

const POSTS = [
  {
    tag: "RETIROS",
    date: "12 Jul 2026",
    title: "Retiro de invierno: inscripciones abiertas",
    excerpt: "Tres días para reconectar con lo esencial. Cupos limitados en la casa de Luján.",
  },
  {
    tag: "COMUNIDAD",
    date: "28 Jun 2026",
    title: "Nuevos cenáculos en 5 ciudades",
    excerpt: "Sumate a los grupos que se reúnen semanalmente cerca tuyo.",
  },
  {
    tag: "FORMACIÓN",
    date: "15 Jun 2026",
    title: "Guía práctica de Oración Centrante",
    excerpt: "Publicamos el nuevo cuaderno descargable para acompañar tu práctica.",
  },
  {
    tag: "SERVICIO",
    date: "02 Jun 2026",
    title: "Balance del taller de servicio social",
    excerpt: "Más de 300 personas participaron de los proyectos del semestre.",
  },
];

export const News = () => {
  return (
    <div className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-10 md:py-14">
        <HeaderPage 
          badge="Novedades"
          title="Lo que está pasando en Cruxes."
        />

        <div className="grid gap-5">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group grid md:grid-cols-[140px_1fr_auto] gap-4 md:gap-6 items-start md:items-center bg-card border border-border/50 rounded-2xl p-5 md:p-6 hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{p.date}</span>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  {p.tag}
                </span>
                <h2 className="mt-1 font-bold text-lg leading-snug">{p.title}</h2>
                <p className="text-sm text-muted-foreground mt-1.5">{p.excerpt}</p>
              </div>
              <span className="text-primary text-sm font-semibold flex items-center gap-1 justify-self-start md:justify-self-end group-hover:gap-2 transition-all">
                Leer <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
    </div>
  )
}
