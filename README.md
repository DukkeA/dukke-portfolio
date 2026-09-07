# Portfolio

Portfolio interactivo construido con Next.js, React, TypeScript y Tailwind CSS.
Las animaciones usan GSAP, el desplazamiento suave usa Lenis y los carruseles usan Swiper.

## Desarrollo

Requiere Node.js 20.9 o posterior.

```bash
npm ci
npm run dev
```

Abrir http://127.0.0.1:3000.

## Producción y validación

```bash
npm run build
npm start
npm run typecheck
npm run lint
```

## Estructura

- `src/app/`: rutas, configuración visual y estilos globales.
- `src/components/`: secciones y elementos interactivos.
- `src/content/`: perfil, proyectos y preguntas frecuentes.
- `src/lib/`: animaciones y carga de videos.
- `src/styles/`: estilos responsive y transiciones.
- `public/assets/`: imágenes, fuentes y videos que utiliza la aplicación.
