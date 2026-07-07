import React from 'react'

export const HeaderPage = ({
  badge,
  title,
  description,
  className = "mb-10 max-w-2xl",
}) => {
  return (
    <header className={className}>
      {badge && (
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          {badge}
        </span>
      )}

      {title && (
        <h1 className="mt-2 text-3xl md:text-4xl font-bold">
          {title}
        </h1>
      )}

      {description && (
        <p className="mt-3 text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  )
}
