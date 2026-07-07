import React from 'react'

import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { HeaderPage } from '../components/HeaderPage';

export const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <div className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 py-10 md:py-14">

        <HeaderPage 
          badge="Contacto"
          title="Estamos para acompañarte."
          description="Escribinos y te respondemos en menos de 48hs."
        />

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-card border border-border/60 rounded-2xl p-6 md:p-8 shadow-(--shadow-card) space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-semibold">Nombre</span>
                <input
                  required
                  className="mt-1.5 w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold">Email</span>
                <input
                  required
                  type="email"
                  className="mt-1.5 w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-semibold">Tema</span>
              <select className="mt-1.5 w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40">
                <option>Consulta general</option>
                <option>Inscripción a un programa</option>
                <option>Voluntariado</option>
                <option>Prensa</option>
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-semibold">Mensaje</span>
              <textarea
                required
                rows={5}
                className="mt-1.5 w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
              />
            </label>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {sent ? (
                <p className="text-sm text-primary font-semibold">¡Gracias! Te escribimos pronto.</p>
              ) : (
                <span className="text-xs text-muted-foreground">
                  Al enviar aceptás nuestra política de privacidad.
                </span>
              )}
              <button
                type="submit"
                className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-dark transition-colors shadow-(--shadow-btn)"
              >
                Enviar mensaje
              </button>
            </div>
          </form>

          <aside className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "hola@cruxes.org" },
              { icon: Phone, label: "Teléfono", value: "+54 11 5555 0100" },
              { icon: MapPin, label: "Sede", value: "Buenos Aires, Argentina" },
            ].map((i) => (
              <div key={i.label} className="bg-card border border-border/60 rounded-2xl p-5 flex items-start gap-4">
                <span className="w-11 h-11 rounded-xl bg-accent grid place-items-center text-primary shrink-0">
                  <i.icon className="w-5 h-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{i.label}</p>
                  <p className="font-semibold truncate">{i.value}</p>
                </div>
              </div>
            ))}
          </aside>
        </div>
    </div>
  )
}
