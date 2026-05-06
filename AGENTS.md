<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Rebranding: Cambiar de un negocio a otro

Guía para adaptar esta landing page a un nuevo restaurante/bar.

## Archivos a modificar

| Archivo | Qué cambiar |
|---------|-------------|
| `src/app/layout.tsx` | `title` y `description` del metadata (SEO) |
| `src/app/page.tsx` | Header, Hero, About, Contacto, Footer |
| `src/app/globals.css` | Fuente display (`@font-face` + `--font-display`) |

## Checklist de cambios en `page.tsx`

### 1. Header (nav)
- Línea ~49: nombre del restaurante en el `<div>` del nav

### 2. Hero
- `src` de la imagen (`/HeroNueva.webp`) — poner la imagen en `public/`
- `alt` de la imagen
- `<h1>`: título principal
- `<p>`: descripción / tagline

### 3. Menú (opcional)
- Cambiar categorías, platos, precios, descripciones e imágenes si procede

### 4. About / Nuestra Historia
- Párrafos de historia (adaptar al nuevo negocio)
- Stats: comensales, platos, puntuación/reseñas de Google

### 5. Contacto
- `iframe` src del Google Maps embed (nueva ubicación)
- Dirección física
- `href` del enlace "Cómo Llegar" (Google Maps directions)
- Teléfono (`href="tel:..."` y texto)

### 6. Footer
- Nombre del restaurante
- Copyright con ciudad y tipo de cocina

## Assets

- **Imagen Hero**: colocar en `public/` (ej: `HeroNombre.webp`) y referenciar como `/HeroNombre.webp`
- **Fuentes**: colocar `.ttf` en `public/fonts/`, registrar en `globals.css` con `@font-face` y actualizar `--font-display`

## Comandos

```bash
npm run dev    # Arrancar servidor de desarrollo (http://localhost:3000)
npm run build  # Build de producción
npm run lint   # Linting
```
