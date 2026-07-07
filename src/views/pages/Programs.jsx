import React from 'react'
import { COURSES } from "@/data/courses"
import { Clock, BookOpen } from "lucide-react";
import { Link } from 'react-router';
import { HeaderPage } from '../components/HeaderPage';

const AMBITOS = ["TALLERES", "RETIROS", "CENÁCULOS/ADORACIONES"]

export const Programs = () => {
  return (
    <div className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-10 md:py-14">

        <HeaderPage 
          badge="Programas"
          title="Un camino de formación para cada etapa."
          description="Elegí por ámbito: talleres online, retiros presenciales o cenáculos semanales."
        />

        {AMBITOS.map((amb) => {
          const items = COURSES.filter((c) => c.ambito === amb);
          if (!items.length) return null;
          return (
            <section key={amb} className="mb-14">
              <div className="flex items-end justify-between mb-5 border-b border-border pb-3">
                <h2 className="text-xl md:text-2xl font-bold">{amb}</h2>
                <span className="text-sm text-muted-foreground">{items.length} programas</span>
              </div>
              <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/curso/${c.slug}`}
                    className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-(--shadow-card) hover:-translate-y-1 transition-transform"
                  >
                    <div className="aspect-4/3 overflow-hidden bg-muted">
                      <img
                        src={c.img}
                        alt={c.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                        {c.category}
                      </span>
                      <h3 className="mt-1 font-bold leading-snug">{c.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{c.summary}</p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{c.duration}</span>
                        <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" />{c.lessons} lecciones</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
    </div>
  )
}
