import { COURSES } from '@/data/courses'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { CourseCard } from '../components/CourseCard'
import { Sidebar } from '../components/Sidebar'

export const Main = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10 flex-1">
      <div className="flex items-center justify-between mb-6 md:mb-8 flex-wrap gap-4">
          <h1 className="text-2xl md:text-4xl font-bold text-foreground">Filtered View</h1>
          <label className="flex items-center gap-3 text-sm text-foreground/70">
            <span className="hidden sm:inline">Filtrar por:</span>
            <div className="relative">
              <select className="appearance-none bg-card border border-border rounded-md pl-4 pr-10 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 min-w-40">
                <option>Filtros</option>
                <option>Más recientes</option>
                <option>Más populares</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-foreground/50" />
            </div>
          </label>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <Sidebar />
          <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {COURSES.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </section>
        </div>
    </div>
  )
}
