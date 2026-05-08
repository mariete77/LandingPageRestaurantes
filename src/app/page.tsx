"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import * as Toast from "@radix-ui/react-toast";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Tooltip from "@radix-ui/react-tooltip";

const menuItems = {
  Brasas: [
    { name: "Chuletón de Buey Madurado", price: "32€", description: "500g de carne madurada 45 días, cocinada a la parrilla de carbón.", image: "/plato2.jpg", tags: ["gf", "keto"] },
    { name: "Costillas BBQ Ahumadas", price: "24€", description: "Costillas de cerdo ibérico, 12 horas de cocción lenta con salsa BBQ casera.", image: "/plato3.webp", tags: ["spicy", "gf"] },
    { name: "Picanha a la Brasa", price: "28€", description: "Corte brasileño jugoso, sellado al fuego con sal gruesa.", image: "/Biftec.webp", tags: ["gf", "keto"] },
    { name: "Rack de Cordero", price: "34€", description: "Cordero lechal con hierbas frescas y reducción de vino tinto.", image: "/codillo.webp", tags: ["gf"] },
    { name: "Entrecot Black Angus", price: "29€", description: "Carne premium americana, punto exacto a tu gusto.", image: "/PresaCerdo.webp", tags: ["gf", "keto"] },
    { name: "Parrillada de la Casa", price: "45€", description: "Selección de carnes para dos personas con guarniciones.", image: "/Carnes.webp", tags: ["gf", "spicy"] },
  ],
  Pescados: [
    { name: "Lubina a la Sal", price: "26€", description: "Lubina salvaje horneada en costra de sal, servida con verduras.", image: "/Emperador.webp", tags: ["gf", "keto"] },
    { name: "Pulpo a las Brasas", price: "22€", description: "Pulpo gallego con patatas confitadas y pimentón de la Vera.", image: "/Bacalao.jpg", tags: ["gf", "df"] },
    { name: "Bacalao Skrei", price: "28€", description: "Bacalao noruego a la plancha con pil pil de ajo negro.", image: "/plato1.webp", tags: ["gf", "df"] },
    { name: "Atún Rojo Sellado", price: "30€", description: "Lomo de atún de almadraba con sésamo y jengibre.", image: "/Atun.webp", tags: ["gf", "df"] },
    { name: "Gambones al Carbón", price: "24€", description: "Gambones frescos con aceite de oliva virgen y limón.", image: "/Emperador.webp", tags: ["gf", "keto"] },
    { name: "Calamar de Potera", price: "20€", description: "Calamar fresco a la plancha con ajo y perejil.", image: "/Bacalao.jpg", tags: ["gf", "df"] },
  ],
  Guarniciones: [
    { name: "Patatas Bravas del Fuego", price: "8€", description: "Patatas caseras con salsa brava picante y alioli.", image: "/natillas.jpg", tags: ["v", "spicy"] },
    { name: "Verduras de la Huerta", price: "9€", description: "Parrillada de verduras de temporada con aceite de trufa.", image: "/EnsaladaDeTomateI.avif", tags: ["vegan", "gf"] },
    { name: "Ensalada de Burrata", price: "12€", description: "Burrata fresca con tomate heirloom y albahaca.", image: "/EnsaladaDeTomateI.avif", tags: ["v", "gf"] },
    { name: "Puré de Patata Trufado", price: "10€", description: "Cremoso puré con aceite de trufa negra.", image: "/pudin_de_limon.webp", tags: ["v", "gf"] },
    { name: "Pimientos del Padrón", price: "8€", description: "Fritos en aceite de oliva con sal marina.", image: "/Berenjenas.webp", tags: ["vegan", "gf", "spicy"] },
    { name: "Setas Silvestres", price: "11€", description: "Mix de setas salteadas con ajo y perejil.", image: "/Alcachofas-con-jamon.avif", tags: ["vegan", "gf"] },
  ],
};

const menuCategories = ["Brasas", "Pescados", "Guarniciones"] as const;

const tagConfig: Record<string, { icon: string; label: string; color: string; bg: string }> = {
  vegan: { icon: "🌱", label: "Vegano", color: "text-green-400", bg: "bg-green-900/50" },
  v: { icon: "🥬", label: "Vegetariano", color: "text-lime-400", bg: "bg-lime-900/50" },
  gf: { icon: "🌾", label: "Sin Gluten", color: "text-amber-400", bg: "bg-amber-900/50" },
  df: { icon: "🥛", label: "Sin Lácteos", color: "text-blue-400", bg: "bg-blue-900/50" },
  keto: { icon: "🥑", label: "Keto", color: "text-purple-400", bg: "bg-purple-900/50" },
  spicy: { icon: "🔥", label: "Picante", color: "text-red-400", bg: "bg-red-900/50" },
};

const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } };
const slideInRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };

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
                  className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${config.bg} ${config.color} text-sm shadow-lg border border-white/10 cursor-help`}
                >
                  {config.icon}
                </motion.span>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content side="top" sideOffset={5} className="z-50 px-3 py-1.5 bg-bone text-ink-black text-xs font-body rounded-lg shadow-xl">
                  {config.label}
                  <Tooltip.Arrow className="fill-bone" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          );
        })}
      </div>
    </Tooltip.Provider>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof menuItems["Brasas"][0] | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);
  const headerBg = useTransform(scrollY, [0, 100], ["rgba(15, 15, 15, 0.8)", "rgba(15, 15, 15, 0.95)"]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("¡Reserva confirmada! Te esperamos en El Fuego Negro.");
  };

  return (
    <Toast.Provider swipeDirection="right">
      <div className="min-h-screen bg-ink-black overflow-x-hidden">
        {/* Header */}
        <motion.header
          initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
          style={{ backgroundColor: headerBg }}
          className="sticky top-0 z-50 backdrop-blur-xl border-b border-copper/20"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
            <nav className="flex items-center justify-between">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <span className="font-display text-2xl md:text-3xl text-copper tracking-wider">EL FUEGO NEGRO</span>
              </motion.div>

              <div className="hidden md:flex space-x-8">
                {["Carta", "Nosotros", "Reservas", "Contacto"].map((item, i) => (
                  <motion.a key={item} href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, color: "#D4A574" }}
                    className="font-body text-sm font-medium text-bone/80 hover:text-copper transition-colors uppercase tracking-widest"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>

              <div className="md:hidden">
                <DropdownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <DropdownMenu.Trigger asChild>
                    <motion.button whileTap={{ scale: 0.95 }} className="text-copper p-2" aria-label="Menu">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </motion.button>
                  </DropdownMenu.Trigger>
                  <AnimatePresence>
                    {isMenuOpen && (
                      <DropdownMenu.Portal forceMount>
                        <DropdownMenu.Content asChild align="end" sideOffset={8} className="z-50">
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-graphite border border-copper/30 rounded-xl shadow-2xl p-2 min-w-[180px]"
                          >
                            {["Carta", "Nosotros", "Reservas", "Contacto"].map((item, i) => (
                              <DropdownMenu.Item key={item} asChild>
                                <motion.a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)}
                                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                                  className="block px-4 py-2 font-body text-sm text-bone hover:bg-copper/20 hover:text-copper rounded-lg cursor-pointer outline-none transition-colors"
                                >
                                  {item}
                                </motion.a>
                              </DropdownMenu.Item>
                            ))}
                          </motion.div>
                        </DropdownMenu.Content>
                      </DropdownMenu.Portal>
                    )}
                  </AnimatePresence>
                </DropdownMenu.Root>
              </div>
            </nav>
          </div>
        </motion.header>

        {/* Hero Section - Industrial Style */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
            <div className="absolute inset-0 bg-gradient-to-b from-ink-black via-transparent to-ink-black z-10" />
            <Image src="/EntreChamosYTiosHero.png" alt="El Fuego Negro" fill className="object-cover opacity-60" priority />
          </motion.div>

          <motion.div className="absolute inset-0 bg-gradient-to-t from-ink-black via-ink-black/50 to-transparent" style={{ opacity: heroOpacity }} />

          <motion.div className="relative z-20 text-center px-4 md:px-6 max-w-5xl"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mb-6">
              <span className="inline-block px-4 py-1 bg-copper/20 backdrop-blur-sm border border-copper/40 rounded-full text-copper text-xs md:text-sm font-body font-medium tracking-[0.2em] uppercase">
                Asador de Carbón
              </span>
            </motion.div>

            <motion.h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-bone mb-4 md:mb-6 leading-none tracking-tight"
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
              <span className="copper-text">EL FUEGO</span>
              <br />
              <span className="text-bone">NEGRO</span>
            </motion.h1>

            <motion.p className="font-serif text-lg md:text-xl lg:text-2xl text-bone/80 mb-8 max-w-2xl mx-auto italic"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
              "Donde el fuego transforma lo ordinario en extraordinario"
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
              <motion.a href="#carta" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="bg-copper text-ink-black font-body text-sm font-semibold px-8 py-4 rounded-none uppercase tracking-widest hover:bg-copper-light transition-colors fire-glow">
                Ver Carta
              </motion.a>
              <motion.a href="#reservas" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="border-2 border-copper text-copper font-body text-sm font-semibold px-8 py-4 rounded-none uppercase tracking-widest hover:bg-copper/10 transition-colors">
                Reservar Mesa
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="absolute bottom-12 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2">
              <span className="text-bone/40 text-xs tracking-[0.3em] uppercase font-body">Descubre</span>
              <div className="w-px h-16 bg-gradient-to-b from-copper to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* Menu Section */}
        <motion.section id="carta" className="py-20 md:py-32 px-4 md:px-6 bg-ink-black relative noise-overlay"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <span className="inline-block text-copper text-xs md:text-sm font-body font-medium tracking-[0.3em] uppercase mb-4">Nuestra Propuesta</span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-bone mb-6">LA CARTA</h2>
              <p className="font-serif text-lg md:text-xl text-bone/60 max-w-2xl mx-auto italic">
                Carnes seleccionadas, pescados frescos y guarniciones que honran el fuego
              </p>
            </motion.div>

            <Tabs.Root defaultValue="Brasas" className="w-full">
              <motion.div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12" variants={staggerContainer}>
                <Tabs.List className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {menuCategories.map((category) => (
                    <Tabs.Trigger key={category} value={category} asChild>
                      <motion.button variants={scaleIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className="font-display text-sm md:text-base tracking-widest uppercase px-6 md:px-8 py-3 rounded-none border border-copper/30 text-bone/70 hover:text-copper hover:border-copper transition-all data-[state=active]:bg-copper data-[state=active]:text-ink-black data-[state=active]:border-copper data-[state=active]:fire-glow">
                        {category}
                      </motion.button>
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
              </motion.div>

              {menuCategories.map((category) => (
                <Tabs.Content key={category} value={category} className="outline-none">
                  <AnimatePresence mode="wait">
                    <motion.div key={category} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                      {menuItems[category].map((item, index) => (
                        <motion.div key={item.name} initial={{ opacity: 0, scale: 0.8, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                          whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(184, 115, 51, 0.25)" }}
                          onClick={() => setSelectedItem(item)}
                          className="bg-graphite border border-copper/20 hover:border-copper rounded-none overflow-hidden cursor-pointer group">
                          <div className="relative h-56 bg-charcoal overflow-hidden">
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                              <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-ink-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="absolute top-4 left-4">
                              <DietaryBadges tags={item.tags} />
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <span className="font-display text-3xl text-copper">{item.price}</span>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="font-display text-xl md:text-2xl text-bone mb-2 group-hover:text-copper transition-colors uppercase tracking-wide">{item.name}</h3>
                            <p className="font-body text-sm text-bone/60 leading-relaxed">{item.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </Tabs.Content>
              ))}
            </Tabs.Root>
          </div>
        </motion.section>

        {/* Dialog */}
        <Dialog.Root open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <AnimatePresence>
            {selectedItem && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-ink-black/90 backdrop-blur-md z-50" onClick={() => setSelectedItem(null)} />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg bg-graphite border border-copper/30 rounded-none shadow-2xl z-50 overflow-hidden">
                    <div className="relative h-72 overflow-hidden">
                      <Image src={selectedItem.image} alt={selectedItem.name} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSelectedItem(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-copper text-ink-black rounded-full flex items-center justify-center text-xl font-bold hover:bg-copper-light transition-colors">
                        ×
                      </motion.button>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <Dialog.Title className="font-display text-2xl md:text-3xl text-bone uppercase tracking-wide">{selectedItem.name}</Dialog.Title>
                        <span className="font-display text-3xl text-copper">{selectedItem.price}</span>
                      </div>
                      <div className="mb-4">
                        <DietaryBadges tags={selectedItem.tags} />
                      </div>
                      <Dialog.Description className="font-body text-base text-bone/70 mb-8 leading-relaxed">{selectedItem.description}</Dialog.Description>
                      <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => { setSelectedItem(null); showToast(`${selectedItem.name} añadido`); }}
                        className="w-full bg-copper text-ink-black font-body font-semibold py-4 uppercase tracking-widest hover:bg-copper-light transition-colors">
                        Añadir al Pedido
                      </motion.button>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </Dialog.Portal>
            )}
          </AnimatePresence>
        </Dialog.Root>

        {/* About Section */}
        <section id="nosotros" className="py-20 md:py-32 px-4 md:px-6 bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-copper/5 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <span className="inline-block text-copper text-xs font-body font-medium tracking-[0.3em] uppercase mb-4">Nuestra Esencia</span>
                <h2 className="font-display text-5xl md:text-6xl text-bone mb-6 uppercase">Pasión por<br />el Fuego</h2>
                <p className="font-body text-base text-bone/70 mb-6 leading-relaxed">
                  En El Fuego Negro creemos que la magia sucede cuando las llamas encuentran a los ingredientes correctos.
                  Nuestra parrilla de carbón de encina es el corazón de cada plato que sale de nuestra cocina.
                </p>
                <p className="font-body text-base text-bone/70 mb-8 leading-relaxed">
                  Seleccionamos cuidadosamente cada pieza de carne, cada pescado, cada verdura.
                  No hay atajos, solo fuego, tiempo y respeto por el producto.
                </p>
                <div className="flex flex-wrap gap-8">
                  {[
                    { value: "15+", label: "Años de experiencia" },
                    { value: "1200°", label: "Grados de calor" },
                    { value: "4.8★", label: "Valoración media" },
                  ].map((stat) => (
                    <motion.div key={stat.label} className="text-center" whileHover={{ scale: 1.1 }}>
                      <div className="font-display text-4xl text-copper mb-1">{stat.value}</div>
                      <div className="font-body text-xs text-bone/50 uppercase tracking-widest">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="relative h-80 md:h-[500px]" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
                <Image src="/plato2.jpg" alt="Cocina de El Fuego Negro" fill className="object-cover" />
                <div className="absolute inset-0 border-2 border-copper/30 m-4" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reservations Section */}
        <motion.section id="reservas" className="py-20 md:py-32 px-4 md:px-6 bg-ink-black relative"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <div className="max-w-3xl mx-auto">
            <motion.div className="text-center mb-12" variants={fadeInUp}>
              <span className="inline-block text-copper text-xs font-body font-medium tracking-[0.3em] uppercase mb-4">Reservas</span>
              <h2 className="font-display text-5xl md:text-6xl text-bone mb-6 uppercase">Tu Mesa Te Espera</h2>
              <p className="font-serif text-lg text-bone/60 italic">Reserva con al menos 24h de antelación</p>
            </motion.div>

            <motion.form onSubmit={handleReservationSubmit} className="bg-graphite border border-copper/20 p-8 md:p-12" variants={fadeInUp}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {[
                  { label: "Nombre", type: "text", placeholder: "Tu nombre" },
                  { label: "Email", type: "email", placeholder: "tu@email.com" },
                  { label: "Fecha", type: "date" },
                  { label: "Teléfono", type: "tel", placeholder: "+34 600 000 000" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block font-body text-xs text-copper uppercase tracking-widest mb-2">{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} required
                      className="w-full px-4 py-3 bg-ink-black border border-copper/30 text-bone font-body text-sm focus:outline-none focus:border-copper transition-colors" />
                  </div>
                ))}
              </div>
              <div className="mb-6">
                <label className="block font-body text-xs text-copper uppercase tracking-widest mb-2">Personas</label>
                <select className="w-full px-4 py-3 bg-ink-black border border-copper/30 text-bone font-body text-sm focus:outline-none focus:border-copper">
                  <option>2 personas</option>
                  <option>3-4 personas</option>
                  <option>5-6 personas</option>
                  <option>7+ personas</option>
                </select>
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full bg-copper text-ink-black font-body font-semibold py-4 uppercase tracking-widest hover:bg-copper-light transition-colors fire-glow">
                Confirmar Reserva
              </motion.button>
            </motion.form>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contacto" className="py-20 md:py-32 px-4 md:px-6 bg-charcoal"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <div className="max-w-7xl mx-auto">
            <motion.h2 className="font-display text-5xl md:text-6xl text-bone mb-16 text-center uppercase" variants={fadeInUp}>Encuéntranos</motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div className="relative h-80 md:h-96 border-2 border-copper/20" variants={fadeInUp}>
                <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.766323456789!2d-3.5000!3d39.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229f5e5e5e5e5d%3A0xabcdef1234567890!2sC.%20Pilarejo%2C%208%2C%2045300%20Oca%C3%B1a%2C%20Toledo!5e0!3m2!1ses!2ses!4v1700000000000" />
              </motion.div>
              <motion.div className="flex flex-col justify-center space-y-8" variants={staggerContainer}>
                {[
                  { icon: "📍", title: "Dirección", lines: ["Calle del Fuego, 23", "28013 Madrid"] },
                  { icon: "📞", title: "Reservas", lines: ["+34 910 123 456", "reservas@elfuegonegro.es"] },
                  { icon: "🕐", title: "Horario", lines: ["Martes - Domingo", "13:30 - 16:00 | 20:00 - 00:00"] },
                ].map((item) => (
                  <motion.div key={item.title} className="flex items-start gap-4" variants={slideInRight} whileHover={{ x: 10 }}>
                    <div className="w-12 h-12 border border-copper/30 flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-display text-lg text-copper uppercase tracking-widest mb-1">{item.title}</h3>
                      {item.lines.map((line, j) => <p key={j} className="font-body text-sm text-bone/70">{line}</p>)}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-12 px-4 md:px-6 border-t border-copper/20 bg-ink-black">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="font-display text-2xl text-copper tracking-wider">EL FUEGO NEGRO</div>
              <div className="flex space-x-6">
                {["Instagram", "Facebook"].map((item) => (
                  <motion.a key={item} href="#" whileHover={{ scale: 1.1, color: "#D4A574" }} className="font-body text-sm text-bone/50 hover:text-copper transition-colors uppercase tracking-widest">
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-copper/10 text-center">
              <p className="font-body text-xs text-bone/30 uppercase tracking-widest">© 2026 El Fuego Negro. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>

        {/* Toast */}
        <Toast.Root open={toastOpen} onOpenChange={setToastOpen} duration={3000}
          className="fixed bottom-4 right-4 z-50 bg-copper text-ink-black px-6 py-4 font-body font-medium">
          <Toast.Title>{toastMessage}</Toast.Title>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 p-4 z-[2147483647]" />
      </div>
    </Toast.Provider>
  );
}
