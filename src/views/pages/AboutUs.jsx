import React from 'react'
import { Heart, Compass, Users } from "lucide-react";
import hero from "@/assets/hero-community.jpg";

const PILARES = [
  { icon: Heart, title: "Espiritualidad", desc: "Prácticas de oración, silencio y sacramentos como raíz de nuestra vida." },
  { icon: Users, title: "Comunidad", desc: "Cenáculos pequeños donde acompañarnos y crecer juntos en fe." },
  { icon: Compass, title: "Servicio", desc: "Formación con propósito: llevar el evangelio a obras concretas." },
];

export const AboutUs = () => {
  return (
    <div className="flex-1">
      <section className="relative h-95 md:h-115 overflow-hidden">
          <img src={hero} alt="Comunidad Cruxes" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-black/20" />
          <div className="relative max-w-5xl mx-auto px-4 md:px-8 h-full flex flex-col justify-end pb-10 md:pb-14 text-white">
            <span className="text-xs md:text-sm font-bold tracking-widest text-primary uppercase">Nuestra historia</span>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              Formación con propósito, comunidad con raíces.
            </h1>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16 grid md:grid-cols-3 gap-6">
          {PILARES.map((p) => (
            <div key={p.title} className="bg-card border border-border/60 rounded-2xl p-6 shadow-(--shadow-card)">
              <span className="w-12 h-12 rounded-xl bg-accent grid place-items-center text-primary mb-4">
                <p.icon className="w-6 h-6" />
              </span>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </section>

        <section className="max-w-4xl mx-auto px-4 md:px-8 pb-16 md:pb-24 space-y-6 text-foreground/80 leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Nuestra misión</h2>
          <p>
            Cruxes acompaña a laicos, familias y agentes pastorales en un camino integral de
            formación: espiritualidad viva, servicio concreto y desarrollo personal. Ofrecemos
            talleres, retiros y cenáculos accesibles desde cualquier lugar.
          </p>
          <p>
            Creemos que la fe se enciende en comunidad. Por eso combinamos contenidos on-demand
            con encuentros en vivo, foros y materiales para llevar la práctica a la vida diaria.
          </p>
        </section>
    </div>
  )
}
