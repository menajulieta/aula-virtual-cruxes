import React from 'react'

const categorias = ["ESPIRITUALIDAD", "SERVICIO", "DESARROLLO PERSONAL"];
const ambitos = ["RETIROS", "CENÁCULOS/ADORACIONES"];

export const Sidebar = () => {
  return (
    <aside className="lg:w-64 shrink-0 lg:sticky lg:top-24 self-start bg-sidebar rounded-2xl p-5 md:p-6 border border-border/60">
      <h3 className="text-base font-bold mb-4 text-foreground">Categorías</h3>
      <ol className="space-y-2 mb-8 border-l-2 border-primary pl-4">
        {categorias.map((c, i) => (
          <li
            key={c}
            className="text-sm text-foreground/80 hover:text-primary cursor-pointer transition-colors font-medium"
          >
            {i + 1}. {c}
          </li>
        ))}
      </ol>
      <h3 className="text-base font-bold mb-4 text-foreground">Ámbito</h3>
      <div className="space-y-3">
        {ambitos.map((a) => (
          <label key={a} className="flex items-center gap-3 text-sm cursor-pointer group">
            <span className="w-4 h-4 border-2 border-foreground/40 rounded-sm group-hover:border-primary transition-colors shrink-0" />
            <span className="text-foreground/80 group-hover:text-primary transition-colors font-medium">
              {a}
            </span>
          </label>
        ))}
      </div>
    </aside>
  )
}
