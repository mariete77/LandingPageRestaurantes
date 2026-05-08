# 🎨 Guía de Animaciones & UI - Framer Motion + Radix UI

Guía completa de patrones, componentes y efectos visuales implementados en el proyecto LandingPageRestaurantes.

---

## 📦 Dependencias

```bash
npm install framer-motion @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-dropdown-menu @radix-ui/react-tooltip
```

---

## 🎭 Framer Motion - Patrones Fundamentales

### 1. Animation Variants

Patrón base reutilizable para animaciones:

```tsx
const fadeInUp = { 
  hidden: { opacity: 0, y: 60 }, 
  visible: { opacity: 1, y: 0 } 
};

const staggerContainer = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1 } 
};

const scaleIn = { 
  hidden: { opacity: 0, scale: 0.8 }, 
  visible: { opacity: 1, scale: 1 } 
};

const slideInRight = { 
  hidden: { opacity: 0, x: 60 }, 
  visible: { opacity: 1, x: 0 } 
};
```

### 2. Scroll-Based Animations

```tsx
const { scrollY } = useScroll();
const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
const headerBg = useTransform(scrollY, [0, 100], [
  "rgba(250, 248, 245, 0.6)", 
  "rgba(250, 248, 245, 0.85)"
]);
```

### 3. whileInView Pattern

```tsx
<motion.section
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={staggerContainer}
>
  <motion.div variants={fadeInUp}>Content</motion.div>
</motion.section>
```

### 4. Hover & Tap Effects

```tsx
<motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(201, 169, 110, 0.3)" }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400 }}
>
  Click me
</motion.button>
```

---

## 🎨 Glassmorphism Header

### Implementación completa:

```tsx
const { scrollY } = useScroll();
const headerBg = useTransform(scrollY, [0, 100], [
  "rgba(250, 248, 245, 0.6)", 
  "rgba(250, 248, 245, 0.85)"
]);

<motion.header 
  initial={{ y: -100 }} 
  animate={{ y: 0 }} 
  transition={{ duration: 0.6 }}
  style={{ backgroundColor: headerBg }}
  className="sticky top-0 z-50 backdrop-blur-xl border-b border-warm-accent/20 shadow-lg shadow-black/5"
>
  {/* Content */}
</motion.header>
```

### Propiedades clave:

| Propiedad | Valor | Descripción |
|-----------|-------|-------------|
| `backdrop-blur` | `xl` | Desenfoque intenso |
| `bg-opacity` | `0.6 → 0.85` | Transparencia dinámica |
| `border` | `/20` | Borde sutil |
| `shadow` | `shadow-black/5` | Profundidad suave |

---

## 🏷️ Sistema de Tags/Badges

### Configuración de tags:

```tsx
const tagConfig: Record<string, { icon: string; label: string; color: string; bg: string }> = {
  vegan: { icon: "🌱", label: "Vegano", color: "text-green-700", bg: "bg-green-100" },
  v: { icon: "🥬", label: "Vegetariano", color: "text-lime-700", bg: "bg-lime-100" },
  gf: { icon: "🥞", label: "Sin gluten", color: "text-amber-700", bg: "bg-amber-100" },
  df: { icon: "🥛", label: "Sin lácteos", color: "text-blue-700", bg: "bg-blue-100" },
  keto: { icon: "🥑", label: "Keto", color: "text-purple-700", bg: "bg-purple-100" },
  spicy: { icon: "🌶️", label: "Picante", color: "text-red-700", bg: "bg-red-100" },
};
```

### Componente DietaryBadges con Radix Tooltip:

```tsx
function DietaryBadges({ tags, className = "" }: { tags?: string[]; className?: string }) {
  if (!tags || tags.length === 0) return null;
  
  return (
    <Tooltip.Provider delayDuration={200}>
      <div className={`flex flex-wrap gap-1 ${className}`}>
        {tags.map((tag) => {
          const config = tagConfig[tag];
          if (!config) return null;
          
          return (
            <Tooltip.Root key={tag}>
              <Tooltip.Trigger asChild>
                <motion.span
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center justify-center w-7 h-7 rounded-full 
                    ${config.bg} ${config.color} text-sm shadow-sm backdrop-blur-sm 
                    border border-white/20 cursor-help`}
                >
                  {config.icon}
                </motion.span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  sideOffset={5}
                  className="z-50 px-3 py-1.5 bg-charcoal-dark text-cream-base 
                    text-xs font-body rounded-lg shadow-xl"
                >
                  {config.label}
                  <Tooltip.Arrow className="fill-charcoal-dark" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          );
        })}
      </div>
    </Tooltip.Provider>
  );
}
```

---

## 🎪 Componentes Radix UI + Framer Motion

### 1. Dialog (Modal) Animado

```tsx
<Dialog.Root open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
  <AnimatePresence>
    {selectedItem && (
      <Dialog.Portal forceMount>
        <Dialog.Overlay asChild>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
        </Dialog.Overlay>
        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              w-[90vw] max-w-lg bg-surface-white rounded-2xl shadow-2xl z-50"
          >
            {/* Content */}
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    )}
  </AnimatePresence>
</Dialog.Root>
```

### 2. Tabs Animados

```tsx
<Tabs.Root defaultValue="tab1">
  <Tabs.List className="flex gap-4">
    <Tabs.Trigger value="tab1" asChild>
      <motion.button
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        className="data-[state=active]:bg-warm-accent data-[state=active]:shadow-lg"
      >
        Tab 1
      </motion.button>
    </Tabs.Trigger>
  </Tabs.List>
  
  <Tabs.Content value="tab1">
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -20 }}
      >
        Content
      </motion.div>
    </AnimatePresence>
  </Tabs.Content>
</Tabs.Root>
```

### 3. DropdownMenu Animado

```tsx
<DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
  <DropdownMenu.Trigger asChild>
    <button>Menu</button>
  </DropdownMenu.Trigger>
  
  <AnimatePresence>
    {isOpen && (
      <DropdownMenu.Portal forceMount>
        <DropdownMenu.Content asChild align="end" sideOffset={8}>
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-surface-white border border-light-divider 
              rounded-xl shadow-2xl p-2 min-w-[180px]"
          >
            <DropdownMenu.Item asChild>
              <a className="block px-4 py-2 hover:bg-warm-accent/10 rounded-lg">
                Item
              </a>
            </DropdownMenu.Item>
          </motion.div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    )}
  </AnimatePresence>
</DropdownMenu.Root>
```

### 4. Toast Notifications

```tsx
// State
const [toastOpen, setToastOpen] = useState(false);
const [toastMessage, setToastMessage] = useState("");

// Provider (envolver app)
<Toast.Provider swipeDirection="right">
  {/* App content */}
  
  <Toast.Root 
    open={toastOpen} 
    onOpenChange={setToastOpen} 
    duration={3000}
    className="fixed bottom-4 right-4 z-50 bg-charcoal-dark text-cream-base 
      px-6 py-4 rounded-xl shadow-2xl border border-warm-accent/30"
  >
    <Toast.Title>{toastMessage}</Toast.Title>
  </Toast.Root>
  <Toast.Viewport className="fixed bottom-0 right-0 p-4 z-[2147483647]" />
</Toast.Provider>
```

---

## 🌊 Scroll Effects

### Scroll Indicator

```tsx
<motion.div 
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
  initial={{ opacity: 0 }} 
  animate={{ opacity: 1 }} 
  transition={{ delay: 1.2 }}
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity }}
  >
    <span className="text-xs tracking-widest uppercase">Scroll</span>
    <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2">
      <motion.div 
        className="w-1.5 h-3 bg-warm-accent rounded-full"
        animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </div>
  </motion.div>
</motion.div>
```

### Parallax Hero

```tsx
const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);

<motion.div style={{ y: parallaxY }} className="absolute inset-0">
  <Image src="/hero.jpg" fill className="object-cover" />
</motion.div>
```

---

## 🎨 Mobile-First Design

### Bottom Nav (App-style)

```tsx
<nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-lg 
  border-t border-light-divider pb-safe">
  <div className="flex justify-around items-center h-16">
    {/* Nav items */}
  </div>
</nav>
```

### Safe Areas (iPhone notch)

```css
/* globals.css */
.pb-safe { padding-bottom: env(safe-area-inset-bottom); }
.pt-safe { padding-top: env(safe-area-inset-top); }
```

---

## 🎯 Best Practices

### 1. Performance
- Usar `will-change-transform` en elementos animados
- Preferir `transform` y `opacity` sobre otras propiedades
- Usar `layout` prop con cuidado (puede ser costoso)

### 2. Accessibility
- Siempre incluir `viewport={{ once: true }}` para no repetir animaciones
- Mantener `prefers-reduced-motion` en consideración
- Radix UI maneja accesibilidad automáticamente

### 3. TypeScript
- Tipar correctamente los variants:
```tsx
const fadeInUp = { 
  hidden: { opacity: 0, y: 60 }, 
  visible: { opacity: 1, y: 0 } 
} as const;
```

### 4. Spring vs Easing
- **Spring**: Para interacciones (hover, tap) - se siente natural
- **Easing**: Para entradas/salidas - más predecible

---

## 🔗 Recursos

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)
- [Glassmorphism Generator](https://hype4.academy/tools/glassmorphism-generator)

---

## 📂 Estructura del Proyecto

```
LandingPageRestaurantes/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Página principal con todas las animaciones
│   │   ├── layout.tsx
│   │   └── globals.css
│   └── components/
│       └── (si decides extraer componentes)
├── docs/
│   └── ANIMATION_GUIDE.md    # Este archivo
└── variants/                  # Variantes HTML puras
    ├── 01-minimal-editorial.html
    ├── 02-bold-vibrant.html
    ├── 03-cinematic.html
    ├── 04-neubrutalism.html
    └── 3d-immersive.html
```

---

*Última actualización: Mayo 2026*
*Autor: Mario + Hermes Agent*
