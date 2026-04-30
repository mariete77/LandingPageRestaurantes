# Landing Page Restaurantes - Next.js + Tailwind CSS

Landing page para restaurante inspirada en el diseño de Amrit Palace.

## Características

- ✅ Next.js 16 con App Router
- ✅ Tailwind CSS v4
- ✅ Diseño responsive (mobile-first)
- ✅ Menú hamburguesa para móvil
- ✅ Secciones: Hero, Menú, Nosotros, Reservaciones, Contacto, Footer
- ✅ Formulario de reservaciones
- ✅ Colores personalizados según DESIGN.md

## Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

## Deploy en Vercel

### Paso 1: Login en Vercel
```bash
vercel login
```

### Paso 2: Deploy
```bash
# Deploy de desarrollo
vercel

# Deploy a producción
vercel --prod
```

### Paso 3: Configuración automática
Vercel detectará automáticamente:
- Framework: Next.js
- Build command: `npm run build`
- Output directory: `.next`

## Estructura del Proyecto

```
landing-page/
├── src/
│   └── app/
│       ├── globals.css      # Estilos personalizados
│       ├── layout.tsx       # Layout principal
│       └── page.tsx         # Página principal
├── public/                  # Archivos estáticos
├── vercel.json              # Configuración de Vercel
├── package.json
└── next.config.ts
```

## Personalización

### Colores
Edita `src/app/globals.css` para cambiar los colores:
- `--color-cream-base`: Fondo principal (#D8CBB8)
- `--color-warm-accent`: Color de acento (#D49653)
- `--color-charcoal-dark`: Color de texto (#2C2C2C)

### Contenido
Edita `src/app/page.tsx` para cambiar:
- Textos del menú
- Información del restaurante
- Datos de contacto
- Formulario de reservaciones

## Tecnologías

- **Next.js 16** - Framework React
- **Tailwind CSS v4** - Utility-first CSS
- **TypeScript** - Tipado estático
- **React 19** - UI library

## License

MIT
