import React from 'react'
import { Link } from 'react-router'

export const CourseCard = ({ course }) => {
  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-(--shadow-card) border border-border/50 flex flex-col group hover:-translate-y-1 hover:shadow-[0_12px_32px_-8px_oklch(0_0_0/0.18)] transition-all duration-300">
      <div className="aspect-4/3 overflow-hidden bg-muted">
        <img
          src={course.img}
          alt={course.title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 md:p-5 flex flex-col flex-1">
        <h3 className="text-base md:text-lg font-bold leading-snug mb-4 text-foreground min-h-12 md:min-h-14">
          {course.title}
        </h3>
        <Link
          to={`/curso/${course.slug}`}
          className="mt-auto self-start px-5 py-2 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary-dark transition-colors shadow-(--shadow-btn)"
        >
          {course.cta}
        </Link>
      </div>
    </article>
  )
}
