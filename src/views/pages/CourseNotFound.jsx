import React from 'react'
import { HeaderLayout } from '../components/HeaderLayout'
import { FooterLayout } from '../components/FooterLayout'
import { Link } from 'react-router'

export const CourseNotFound = () => {
  return (
      <main className="flex-1 max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-3">Curso no encontrado</h1>
        <p className="text-muted-foreground mb-6">El curso que buscás no existe o fue movido.</p>
        <Link to="/" className="inline-flex px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold">
          Ver todos los cursos
        </Link>
      </main>
      
  )
}
