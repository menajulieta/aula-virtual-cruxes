import React from 'react'
import { NavLink } from 'react-router'

export const Logo = ({ className = "" }) => {
  return (
    <NavLink
      to="/"
      className={`font-display font-extrabold text-2xl tracking-tight text-primary select-none ${className}`}
    >
      CRU<span className="text-foreground">X</span>ES
    </NavLink>
  )
}
