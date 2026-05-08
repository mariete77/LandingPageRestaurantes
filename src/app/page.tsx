"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import * as Toast from "@radix-ui/react-toast";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const menuItems = {
  Primeros: [
    { name: "Alcachofas Salteadas con Jamón", price: "13,90€", description: "Alcachofas tiernas salteadas al momento con jamón ibérico en su punto.", image: "/Alcachofas-con-jamon.avif" },
    { name: "Ensalada de Tomate, Mezclum, Caballa", price: "10,90€", description: "Fresca ensalada con productos de temporada y caballa marinada.", image: "/EnsaladaDeTomateI.avif" },
    { name: "Berenjenas Rellenas Gratinadas", price: "11,90€", description: "Berenjenas rellenas de carne y gratinadas en el horno con queso fundido.", image: "/Berenjenas.webp" },
    { name: "Pimientos de Piquillo Rellenos", price: "14,90€", description: "Delicados pimientos de piquillo rellenos de queso fresco y jamón ibérico.", image: "/plato1.webp" },
    { name: "Entrecot a la Parrilla", price: "18,90€", description: "Corte premium de carne jugoso y tierno, cocinado a la parrilla con sal marina.", image: "/plato2.jpg" },
    { name: "Carnes a la Brasa", price: "19,90€", description: "Surtido selecto de carnes frescas asadas lentamente a la brasa.", image: "/plato3.webp" },
  ],
  Segundos: [
    { name: "Biftec de Ternera", price: "18,90€", description: "Carnes de calidad, cocinadas a la parrilla con el punto que prefieras.", image: "/Biftec.webp" },
    { name: "Codillo Asado a Baja Temperatura", price: "17,90€", description: "Codillo de cerdo asado lentamente hasta quedar tierno y jugoso.", image: "/codillo.webp" },
    { name: "Presa de Cerdo a la Plancha", price: "16,90€", description: "Presa de cerdo seleccionada, hecha a la plancha con un punto de sal marina.", image: "/PresaCerdo.webp" },
    { name: "Emperador a la Plancha", price: "19,90€", description: "Pescado fresco del día preparado a la plancha con aceite de oliva virgen.", image: "/Emperador.webp" },
    { name: "Bacalao Rebozado", price: "17,90€", description: "Bacalao fresco rebozado y acompañado de pimientos asados caseros.", image: "/Bacalao.jpg" },
    { name: "Atún Encebollado", price: "18,90€", description: "Atún fresco preparado con cebolla y un toque de vinagre de jerez.", image: "/Atun.webp" },
  ],
  Postres: [
    { name: "Natillas Caseras", price: "4,50€", description: "Natillas cremosas preparadas de manera tradicional.", image: "/natillas.jpg" },
    { name: "Puding de Limón", price: "4,50€", description: "Puding casero con un toque fresco de limón.", image: "/pudin_de_limon.webp" },
    { name: "Fruta del Día", price: "3,50€", description: "Selección de frutas frescas de temporada.", image: "/Las_frutas_del_dia.webp" },
  ],
};

const menuCategories = ["Primeros", "Segundos", "Postres"] as const;

// Animation variants
const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } };
const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const scaleIn = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } };
const slideInRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof menuItems["Primeros"][0] | null>(null);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("¡Reserva realizada con éxito! Te contactaremos pronto.");
  };

  return (
    <Toast.Provider swipeDirection="right">
      <div className="min-h-screen bg-cream-base overflow-x-hidden">
        {/* Header with Radix Dropdown */}
        <motion.header 
          initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
          className="sticky top-0 z-50 bg-cream-base/80 backdrop-blur-lg border-b border-light-divider"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
            <nav className="flex items-center justify-between">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                className="font-display text-xl md:text-2xl text-charcoal-dark">
                Entre Chamos y Tíos
              </motion.div>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex space-x-8">
                {["Menú", "Nosotros", "Reservas", "Contacto"].map((item, i) => (
                  <motion.a key={item} href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ scale: 1.05, color: "#C9A96E" }}
                    className="font-body text-sm font-medium text-charcoal-dark transition-colors">
                    {item}
                  </motion.a>
                ))}
              </div>

              {/* Radix Dropdown for Mobile */}
              <div className="md:hidden">
                <DropdownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <DropdownMenu.Trigger asChild>
                    <motion.button whileTap={{ scale: 0.95 }} className="text-charcoal-dark p-2" aria-label="Menu">
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
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-surface-white border border-light-divider rounded-xl shadow-2xl p-2 min-w-[180px]"
                          >
                            {["Menú", "Nosotros", "Reservas", "Contacto"].map((item, i) => (
                              <DropdownMenu.Item key={item} asChild>
                                <motion.a
                                  href={`#${item.toLowerCase()}`}
                                  onClick={() => setIsMenuOpen(false)}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="block px-4 py-2 font-body text-sm text-charcoal-dark hover:bg-warm-accent/10 hover:text-warm-accent rounded-lg cursor-pointer outline-none transition-colors"
                                >
                                  {item}
                                </motion.a>
                              </DropdownMenu.Item>
                            ))}
                            <DropdownMenu.Arrow className="fill-surface-white" />
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

        {/* Hero Section */}
        <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
            <Image src="/EntreChamosYTiosHero.png" alt="Entre Chamos y Tíos" fill className="object-cover" priority />
          </motion.div>
          <motion.div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-cream-base" style={{ opacity: heroOpacity }} />
          <motion.div className="relative z-10 text-center px-4 md:px-6 max-w-4xl"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="mb-6">
              <span className="inline-block px-4 py-1 bg-warm-accent/20 backdrop-blur-sm border border-warm-accent/30 rounded-full text-cream-base text-xs md:text-sm font-medium tracking-wider">
                ✦ FUSIÓN VENEZOLANA · ESPAÑOLA
              </span>
            </motion.div>
            <motion.h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-cream-base mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }}>
              Entre Chamos y Tíos
            </motion.h1>
            <motion.p className="font-body text-base md:text-lg lg:text-xl text-cream-base/90 mb-6 md:mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}>
              Una fusión de sabores venezolanos y españoles en el corazón de Ocaña.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
              <motion.a href="#menu" whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(201, 169, 110, 0.3)" }} whileTap={{ scale: 0.95 }}
                className="bg-warm-accent text-charcoal-dark font-body text-sm font-medium px-6 md:px-8 py-3 md:py-4 rounded-full text-center">
                Ver Menú
              </motion.a>
              <motion.a href="#reservations" whileHover={{ scale: 1.05, backgroundColor: "rgba(201, 169, 110, 0.15)" }} whileTap={{ scale: 0.95 }}
                className="border-2 border-warm-accent text-warm-accent font-body text-sm font-medium px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-sm text-center">
                Reservar Mesa
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2">
              <span className="text-cream-base/60 text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-6 h-10 border-2 border-cream-base/40 rounded-full flex justify-center pt-2">
                <motion.div className="w-1.5 h-3 bg-warm-accent rounded-full" animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Menu Section with Radix Tabs */}
        <motion.section id="menu" className="py-12 md:py-20 px-4 md:px-6 bg-cream-base"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-10 md:mb-16" variants={fadeInUp}>
              <span className="inline-block text-warm-accent text-xs md:text-sm font-medium tracking-widest uppercase mb-4">La Carta</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-dark mb-4">Nuestro Menú</h2>
              <p className="font-body text-sm md:text-base text-charcoal-dark/70 max-w-2xl mx-auto">
                Cada plato es una obra de arte culinaria, preparada con ingredientes frescos.
              </p>
            </motion.div>

            {/* Radix Tabs */}
            <Tabs.Root defaultValue="Primeros" className="w-full">
              <motion.div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12" variants={staggerContainer}>
                <Tabs.List className="flex flex-wrap justify-center gap-2 md:gap-4">
                  {menuCategories.map((category) => (
                    <Tabs.Trigger key={category} value={category} asChild>
                      <motion.button
                        variants={scaleIn} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                        className="font-body text-xs md:text-sm font-medium px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 border border-light-divider data-[state=active]:bg-warm-accent data-[state=active]:text-charcoal-dark data-[state=active]:shadow-lg data-[state=active]:shadow-warm-accent/30 text-charcoal-dark hover:bg-warm-accent/10 outline-none">
                        {category}
                      </motion.button>
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
              </motion.div>

              {menuCategories.map((category) => (
                <Tabs.Content key={category} value={category} className="outline-none">
                  <AnimatePresence mode="wait">
                    <motion.div 
                      key={category}
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
                    >
                      {menuItems[category].map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, scale: 0.8, y: 40 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                          whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(201, 169, 110, 0.25)" }}
                          onClick={() => setSelectedItem(item)}
                          className="bg-surface-white border border-light-divider hover:border-warm-accent rounded-2xl overflow-hidden cursor-pointer group"
                        >
                          <div className="relative h-48 bg-gray-200 overflow-hidden">
                            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="absolute inset-0">
                              <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </motion.div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="p-4 md:p-6">
                            <div className="flex justify-between items-start mb-3 md:mb-4">
                              <h3 className="font-display text-lg md:text-xl text-charcoal-dark group-hover:text-warm-accent transition-colors">{item.name}</h3>
                              <span className="font-body text-warm-accent font-bold text-sm md:text-base whitespace-nowrap ml-2">{item.price}</span>
                            </div>
                            <p className="font-body text-xs md:text-sm text-charcoal-dark/70">{item.description}</p>
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

        {/* Radix Dialog for Item Details */}
        <Dialog.Root open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
          <AnimatePresence>
            {selectedItem && (
              <Dialog.Portal forceMount>
                <Dialog.Overlay asChild>
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    onClick={() => setSelectedItem(null)}
                  />
                </Dialog.Overlay>
                <Dialog.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-lg bg-surface-white rounded-2xl shadow-2xl z-50 overflow-hidden outline-none"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image src={selectedItem.image} alt={selectedItem.name} fill className="object-cover" />
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.9)" }} whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedItem(null)}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-charcoal-dark text-xl shadow-lg transition-colors"
                      >
                        ×
                      </motion.button>
                    </div>
                    <div className="p-6 md:p-8">
                      <Dialog.Title className="font-display text-2xl md:text-3xl text-charcoal-dark mb-2">{selectedItem.name}</Dialog.Title>
                      <Dialog.Description className="font-body text-2xl text-warm-accent font-bold mb-4">{selectedItem.price}</Dialog.Description>
                      <p className="font-body text-sm md:text-base text-charcoal-dark/70 mb-6">{selectedItem.description}</p>
                      <motion.button
                        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(201, 169, 110, 0.3)" }} whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          setSelectedItem(null);
                          showToast(`${selectedItem.name} añadido a tu pedido`);
                        }}
                        className="w-full bg-warm-accent text-charcoal-dark font-body font-medium py-3 rounded-full"
                      >
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
        <section id="about" className="relative overflow-hidden">
          <motion.div className="absolute inset-0 bg-charcoal-dark" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
          <div className="relative max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
                <span className="inline-block text-warm-accent text-xs md:text-sm font-medium tracking-widest uppercase mb-4">Nuestra Historia</span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream-base mb-4 md:mb-6">Un Punto de Encuentro</h2>
                <p className="font-body text-sm md:text-base text-cream-base/80 mb-4 md:mb-6">
                  Entre Chamos y Tíos nace como un punto de encuentro entre dos culturas: la venezolana y la española.
                  En nuestro local de la Calle Pilarejo, 8 de Ocaña, ofrecemos una carta que satisface tanto a los
                  nostálgicos de los sabores caribeños como a los paladares acostumbrados a la gastronomía local.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
                  {[
                    { value: "+500", label: "Comensales Semanales" },
                    { value: "15+", label: "Platos Únicos" },
                    { value: "4.3 ★", label: "218 Reseñas" },
                  ].map((stat) => (
                    <motion.div key={stat.label} className="text-center" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
                      <div className="font-display text-2xl md:text-3xl text-warm-accent mb-2">{stat.value}</div>
                      <div className="font-body text-xs md:text-sm text-cream-base/60">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div className="relative h-64 md:h-96 rounded-2xl overflow-hidden" initial={{ opacity: 0, x: 60, scale: 0.9 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
                <Image src="/plato2.jpg" alt="Plato típico" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reservations Section */}
        <motion.section id="reservations" className="py-12 md:py-20 px-4 md:px-6 bg-cream-base"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          <div className="max-w-3xl mx-auto">
            <motion.div className="text-center mb-8 md:mb-12" variants={fadeInUp}>
              <span className="inline-block text-warm-accent text-xs md:text-sm font-medium tracking-widest uppercase mb-4">Reserva tu Mesa</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-dark mb-4">Haz tu Reserva</h2>
            </motion.div>
            <motion.form onSubmit={handleReservationSubmit} className="bg-surface-white p-6 md:p-8 border border-light-divider rounded-2xl shadow-xl" variants={fadeInUp}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                {[
                  { label: "Nombre", type: "text", placeholder: "Tu nombre" },
                  { label: "Email", type: "email", placeholder: "tu@email.com" },
                  { label: "Fecha", type: "date" },
                  { label: "Teléfono", type: "tel", placeholder: "+34 600 000 000" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark rounded-lg focus:outline-none focus:border-warm-accent focus:ring-2 focus:ring-warm-accent/20 transition-all" />
                  </div>
                ))}
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(201, 169, 110, 0.4)" }} whileTap={{ scale: 0.98 }}
                className="w-full bg-warm-accent text-charcoal-dark font-body text-sm font-medium py-3 md:py-4 rounded-full">
                Reservar Ahora
              </motion.button>
            </motion.form>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-charcoal-dark"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <div className="max-w-7xl mx-auto">
            <motion.h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream-base mb-8 md:mb-12 text-center" variants={fadeInUp}>Encuéntranos</motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <motion.div className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-warm-accent/30" variants={fadeInUp}>
                <iframe width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.766323456789!2d-3.5000!3d39.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229f5e5e5e5e5d%3A0xabcdef1234567890!2sC.%20Pilarejo%2C%208%2C%2045300%20Oca%C3%B1a%2C%20Toledo!5e0!3m2!1ses!2ses!4v1700000000000" />
              </motion.div>
              <motion.div className="flex flex-col justify-center space-y-6" variants={staggerContainer}>
                {[
                  { icon: "📍", title: "Dirección", lines: ["C. Pilarejo, 8", "45300 Ocaña, Toledo"] },
                  { icon: "📞", title: "Teléfono", lines: ["+34 643 61 89 41", "Abierto hasta las 22:59"] },
                  { icon: "💳", title: "Pagos", lines: ["American Express", "Mastercard, Visa"] },
                ].map((item) => (
                  <motion.div key={item.title} className="flex items-start gap-4" variants={slideInRight} whileHover={{ x: 10 }}>
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-warm-accent/20 rounded-xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-display text-lg md:text-xl text-cream-base mb-1">{item.title}</h3>
                      {item.lines.map((line, j) => <p key={j} className="font-body text-sm md:text-base text-cream-base/70">{line}</p>)}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer className="py-8 md:py-12 px-4 md:px-6 border-t border-light-divider bg-cream-base" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="font-display text-lg md:text-xl text-charcoal-dark mb-4 md:mb-0">Entre Chamos y Tíos</div>
              <div className="flex space-x-4 md:space-x-6">
                {["Instagram", "Facebook", "Google Maps"].map((item) => (
                  <motion.a key={item} href="#" whileHover={{ scale: 1.1, color: "#C9A96E" }} className="font-body text-xs md:text-sm text-charcoal-dark transition-colors">{item}</motion.a>
                ))}
              </div>
            </div>
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-light-divider text-center">
              <p className="font-body text-xs text-charcoal-dark/60">© 2026 Entre Chamos y Tíos. Todos los derechos reservados.</p>
            </div>
          </div>
        </motion.footer>

        {/* Radix Toast */}
        <Toast.Root open={toastOpen} onOpenChange={setToastOpen} duration={3000}
          className="fixed bottom-4 right-4 z-50 bg-charcoal-dark text-cream-base px-6 py-4 rounded-xl shadow-2xl border border-warm-accent/30 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full">
          <Toast.Title className="font-body font-medium">{toastMessage}</Toast.Title>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 p-4 z-[2147483647]" />
      </div>
    </Toast.Provider>
  );
}
