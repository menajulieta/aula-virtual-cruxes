import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import { COURSES } from '@/data/courses'
import videoPoster from "@/assets/course-video.jpg";
import { Play, Download, ChevronDown, CheckCircle2, Circle, MessageCircle } from "lucide-react";
import { CourseNotFound } from './CourseNotFound';

const MODULES = [
  {
    title: "MÓDULO 1: INTRODUCCIÓN",
    lessons: [
      { title: "¿Qué es la Oración Centrante?", done: true },
      { title: "Historia y Fundamentos.", done: false },
    ],
  },
  {
    title: "MÓDULO 2: LA PRÁCTICA",
    lessons: [
      { title: "Los Cuatro Pasos (video activo).", done: true },
      { title: "La Palabra Sagrada.", done: true },
      { title: "Postura y respiración.", done: false },
      { title: "Silencio interior.", done: false },
      { title: "El fruto de la práctica.", done: false },
    ],
  },
];

const MATERIALS = [
  "Guía de Oración",
  "Cuaderno de Estudio",
  "Manual de Integración",
];

const FORUM = [
  { name: "Gracias, P. Juan...", meta: "Descargar una visual" },
  { name: "Pregunta sobre el paso 3...", meta: "Descargar rezo" },
];

export const Course = () => {

  const { slug } = useParams();
  const [tab, setTab] = useState("modulos");
  const [open, setOpen] = useState(0);
  const course = COURSES.find((c) => c.slug === slug);

  if (!course) {
    return <CourseNotFound />;
  }

  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-10 flex-1">
      <div className="mb-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Volver al catálogo
          </Link>
          <h1 className="mt-3 text-2xl md:text-4xl font-bold">{course.title} (Ejemplo)</h1>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-6 lg:gap-10">
          {/* Left column */}
          <div className="min-w-0">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-(--shadow-card) group">
              <img
                src={videoPoster}
                alt={course.title}
                className="w-full h-full object-cover opacity-90"
                width={1280}
                height={720}
              />
              <button
                aria-label="Reproducir"
                className="absolute inset-0 grid place-items-center"
              >
                <span className="w-20 h-20 rounded-full bg-primary/95 text-primary-foreground grid place-items-center shadow-(--shadow-btn) group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 ml-1" />
                </span>
              </button>
              <div className="absolute left-0 right-0 bottom-0 p-3 bg-linear-to-t from-black/70 to-transparent text-white text-xs flex items-center gap-3">
                <Play className="w-4 h-4" />
                <div className="flex-1 h-1 rounded-full bg-white/30">
                  <div className="h-full w-1/3 bg-primary rounded-full" />
                </div>
                <span>12:34 / 38:20</span>
              </div>
            </div>

            <div className="mt-6 flex border-b border-border">
              {[
                { id: "modulos", label: "MÓDULOS" },
                { id: "detalles", label: "DETALLES Y MATERIALES" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`flex-1 sm:flex-none px-4 sm:px-6 py-3 text-sm font-bold transition-colors relative ${
                    tab === t.id ? "text-primary" : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {t.label}
                  {tab === t.id && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {tab === "modulos" ? (
              <div className="mt-6">
                <div className="flex gap-6 mb-4 text-sm font-semibold">
                  <span className="text-primary border-b-2 border-primary pb-1">Lecciones</span>
                  <span className="text-foreground/60">Curriculum</span>
                </div>
                <div className="space-y-3">
                  {MODULES.map((m, i) => {
                    const isOpen = open === i;
                    return (
                      <div key={m.title} className="border border-border rounded-xl bg-card overflow-hidden">
                        <button
                          onClick={() => setOpen(isOpen ? null : i)}
                          className="w-full flex items-center justify-between px-4 md:px-5 py-4 text-left"
                        >
                          <div>
                            <h3 className="font-bold text-sm md:text-base">{m.title}</h3>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {m.lessons.length} lecciones
                            </p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-foreground/60 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <ul className="border-t border-border divide-y divide-border">
                            {m.lessons.map((l, j) => (
                              <li
                                key={j}
                                className="flex items-center gap-3 px-4 md:px-5 py-3 text-sm hover:bg-muted/60 cursor-pointer"
                              >
                                <span className="text-muted-foreground w-8 shrink-0 tabular-nums">
                                  {i + 1}.{j + 1}
                                </span>
                                <span className="flex-1 min-w-0 truncate">{l.title}</span>
                                {l.done ? (
                                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                ) : (
                                  <Circle className="w-5 h-5 text-foreground/30 shrink-0" />
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-xl border border-border bg-card p-5 md:p-6 text-sm text-foreground/80 space-y-3">
                <p>{course.summary}</p>
                <p>
                  Duración: <strong>{course.duration}</strong> · {course.lessons} lecciones ·
                  Ámbito: <strong>{course.ambito}</strong>
                </p>
              </div>
            )}
          </div>

          {/* Right rail */}
          <aside className="space-y-6 lg:sticky lg:top-24 self-start">
            <section className="bg-card rounded-2xl p-5 md:p-6 border border-border/60">
              <h2 className="text-sm font-bold tracking-wider text-foreground/60 uppercase mb-4">
                Detalles del curso
              </h2>
              <h3 className="font-bold mb-2">Descripción</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{course.summary}</p>
            </section>

            <section className="bg-card rounded-2xl p-5 md:p-6 border border-border/60">
              <h3 className="font-bold mb-4">Materiales descargables</h3>
              <ul className="space-y-3">
                {MATERIALS.map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <Download className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{m}</p>
                      <button className="text-xs text-primary hover:underline">Descargar</button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-5 md:p-6 border border-border/60">
              <h3 className="font-bold mb-4">Foro de la comunidad</h3>
              <p className="text-xs text-muted-foreground mb-3">Recientes:</p>
              <ul className="space-y-3">
                {FORUM.map((f) => (
                  <li key={f.name} className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{f.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{f.meta}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>


    </div>
  )
}
