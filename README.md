# Aula Virtual Cruxes

Este proyecto es una aplicación web construida con React y Vite.

## Requisitos

- Node.js 18 o superior
- npm (incluido con Node.js)

## Instalación

1. Abre una terminal en la carpeta del proyecto:

   ```bash
   cd c:/Users/fmerc/OneDrive/Desktop/aula-virtual-cruxes
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecutar en modo de desarrollo

Para iniciar el servidor de desarrollo con recarga en caliente:

```bash
npm run dev
```

Luego abre la URL que indica la terminal (generalmente `http://localhost:5173`).

## Generar versión de producción

Para compilar la aplicación para producción:

```bash
npm run build
```

Los archivos generados quedarán en la carpeta `dist`.

## Vista previa de la versión de producción

Para previsualizar el contenido generado por la compilación:

```bash
npm run preview
```

## Linting

Para ejecutar ESLint y revisar el código:

```bash
npm run lint
```

## Estructura principal

- `src/main.jsx`: punto de entrada de la aplicación
- `src/CruxesApp.jsx`: componente principal
- `src/app.router.jsx`: rutas de la aplicación
- `src/views/`: páginas y layouts
- `src/components/`: componentes reutilizables

## Notas

Esta aplicación usa Vite, React 19 y Tailwind CSS.
