"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const menuItems = {
  Primeros: [
    { name: "Alcachofas Salteadas con Jamón", price: "13,90€", description: "Alcachofas tiernas salteadas al momento con jamón ibérico en su punto.", image: "/Alcachofas-con-jamon.avif" },
    { name: "Ensalada de Tomate, Mezclum, Caballa y Cebolla Morada", price: "10,90€", description: "Fresca ensalada con productos de temporada y caballa marinada.", image: "/EnsaladaDeTomateI.avif" },
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
    { name: "Bacalao Rebozado con Pimientos Asados", price: "17,90€", description: "Bacalao fresco rebozado y acompañado de pimientos asados caseros.", image: "/Bacalao.jpg" },
    { name: "Atún Encebollado", price: "18,90€", description: "Atún fresco preparado con cebolla y un toque de vinagre de jerez.", image: "/Atun.webp" },
  ],
  Postres: [
    { name: "Natillas Caseras", price: "4,50€", description: "Natillas cremosas preparadas de manera tradicional.", image: "/natillas.jpg" },
    { name: "Puding de Limón", price: "4,50€", description: "Puding casero con un toque fresco de limón.", image: "/pudin_de_limon.webp" },
    { name: "Fruta del Día", price: "3,50€", description: "Selección de frutas frescas de temporada.", image: "/Las_frutas_del_dia.webp" },
  ],
};

const menuCategories = ["Primeros", "Segundos", "Postres"];

// Animation variants - using 'as const' for proper typing
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

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Primeros");
  
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);
  const parallaxY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-cream-base overflow-x-hidden">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-cream-base/80 backdrop-blur-lg border-b border-light-divider"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-xl md:text-2xl text-charcoal-dark"
            >
              Entre Chamos y Tíos
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Menú", "Nosotros", "Reservas", "Contacto"].map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.05, color: "#C9A96E" }}
                  className="font-body text-sm font-medium text-charcoal-dark transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-charcoal-dark p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={isMenuOpen ? "open" : "closed"}
              >
                {isMenuOpen ? (
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.svg>
            </motion.button>
          </nav>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 pb-4 border-t border-light-divider"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col space-y-4 pt-4"
                >
                  {["Menú", "Nosotros", "Reservas", "Contacto"].map((item, i) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-body text-sm font-medium text-charcoal-dark hover:text-warm-accent transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          <Image
            src="/EntreChamosYTiosHero.png"
            alt="Entre Chamos y Tíos"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-cream-base"
          style={{ opacity: heroOpacity }}
        />
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4 md:px-6 max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1 bg-warm-accent/20 backdrop-blur-sm border border-warm-accent/30 rounded-full text-cream-base text-xs md:text-sm font-medium tracking-wider">
              ✦ FUSIÓN VENEZOLANA · ESPAÑOLA
            </span>
          </motion.div>

          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-cream-base mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
          >
            Entre Chamos y Tíos
          </motion.h1>
          
          <motion.p 
            className="font-body text-base md:text-lg lg:text-xl text-cream-base/90 mb-6 md:mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Una fusión de sabores venezolanos y españoles en el corazón de Ocaña.
            Desde un desayuno completo hasta unas cervezas al final del día.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(201, 169, 110, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-warm-accent text-charcoal-dark font-body text-sm font-medium px-6 md:px-8 py-3 md:py-4 rounded-full"
            >
              Ver Menú
            </motion.a>
            <motion.a
              href="#reservations"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(201, 169, 110, 0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-warm-accent text-warm-accent font-body text-sm font-medium px-6 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-sm"
            >
              Reservar Mesa
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-cream-base/60 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-cream-base/40 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-3 bg-warm-accent rounded-full"
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <motion.section 
        id="menu" 
        className="py-12 md:py-20 px-4 md:px-6 bg-cream-base"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-10 md:mb-16"
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-block text-warm-accent text-xs md:text-sm font-medium tracking-widest uppercase mb-4"
              variants={fadeInUp}
            >
              La Carta
            </motion.span>
            <motion.h2 
              className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-dark mb-4"
              variants={fadeInUp}
            >
              Nuestro Menú
            </motion.h2>
            <motion.p 
              className="font-body text-sm md:text-base text-charcoal-dark/70 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Cada plato es una obra de arte culinaria, preparada con ingredientes frescos 
              y técnicas tradicionales que han pasado de generación en generación.
            </motion.p>
          </motion.div>

          {/* Menu Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
            variants={staggerContainer}
          >
            {menuCategories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`font-body text-xs md:text-sm font-medium px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-warm-accent text-charcoal-dark shadow-lg shadow-warm-accent/30"
                    : "bg-transparent text-charcoal-dark hover:bg-warm-accent/10 border border-light-divider"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Grid with AnimatePresence */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {menuItems[activeCategory as keyof typeof menuItems].map((item: any, index: number) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -40 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    type: "spring", 
                    stiffness: 200, 
                    damping: 20 
                  }}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 25px 50px -12px rgba(201, 169, 110, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                  className="bg-surface-white border border-light-divider hover:border-warm-accent rounded-2xl overflow-hidden cursor-pointer group"
                >
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <motion.h3 
                        className="font-display text-lg md:text-xl text-charcoal-dark"
                        whileHover={{ color: "#C9A96E" }}
                      >
                        {item.name}
                      </motion.h3>
                      <motion.span 
                        className="font-body text-warm-accent font-bold text-sm md:text-base whitespace-nowrap ml-2"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.price}
                      </motion.span>
                    </div>
                    <p className="font-body text-xs md:text-sm text-charcoal-dark/70">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0 bg-charcoal-dark"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        
        <div className="relative max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.span 
                className="inline-block text-warm-accent text-xs md:text-sm font-medium tracking-widest uppercase mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Nuestra Historia
              </motion.span>
              <motion.h2 
                className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream-base mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Un Punto de Encuentro
              </motion.h2>
              <motion.p 
                className="font-body text-sm md:text-base text-cream-base/80 mb-4 md:mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Entre Chamos y Tíos nace como un punto de encuentro entre dos culturas: la venezolana y la española.
                En nuestro local de la Calle Pilarejo, 8 de Ocaña, ofrecemos una carta que satisface tanto a los
                nostálgicos de los sabores caribeños como a los paladares acostumbrados a la gastronomía local.
              </motion.p>
              <motion.p 
                className="font-body text-sm md:text-base text-cream-base/80 mb-6 md:mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Desde desayunos completos hasta cenas con cervezas bien frías, cada preparación refleja el
                compromiso con la calidad y la fusión de dos tradiciones culinarias.
              </motion.p>
              
              {/* Stats */}
              <motion.div 
                className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { value: "+500", label: "Comensales Semanales" },
                  { value: "15+", label: "Platos Únicos" },
                  { value: "4.3 ★", label: "218 Reseñas" },
                ].map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="font-display text-2xl md:text-3xl text-warm-accent mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="font-body text-xs md:text-sm text-cream-base/60">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              className="relative h-64 md:h-96 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <Image
                src="/plato2.jpg"
                alt="Plato típico de Entre Chamos y Tíos"
                fill
                className="object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/50 to-transparent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <motion.section 
        id="reservations" 
        className="py-12 md:py-20 px-4 md:px-6 bg-cream-base"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-8 md:mb-12"
            variants={fadeInUp}
          >
            <motion.span 
              className="inline-block text-warm-accent text-xs md:text-sm font-medium tracking-widest uppercase mb-4"
              variants={fadeInUp}
            >
              Reserva tu Mesa
            </motion.span>
            <motion.h2 
              className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-dark mb-4"
              variants={fadeInUp}
            >
              Haz tu Reserva
            </motion.h2>
            <motion.p 
              className="font-body text-sm md:text-base text-charcoal-dark/70"
              variants={fadeInUp}
            >
              Asegura tu lugar para una experiencia culinaria inolvidable.
            </motion.p>
          </motion.div>

          <motion.form 
            className="bg-surface-white p-6 md:p-8 border border-light-divider rounded-2xl shadow-xl"
            variants={fadeInUp}
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(201, 169, 110, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6"
              variants={staggerContainer}
            >
              {[
                { label: "Nombre", type: "text", placeholder: "Tu nombre" },
                { label: "Email", type: "email", placeholder: "tu@email.com" },
                { label: "Fecha", type: "date", placeholder: "" },
                { label: "Hora", type: "select", placeholder: "" },
                { label: "Personas", type: "select", placeholder: "" },
                { label: "Teléfono", type: "tel", placeholder: "+34 600 000 000" },
              ].map((field, i) => (
                <motion.div 
                  key={field.label}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <motion.select 
                      whileFocus={{ borderColor: "#C9A96E", boxShadow: "0 0 0 3px rgba(201, 169, 110, 0.2)" }}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark rounded-lg focus:outline-none transition-all bg-white"
                    >
                      {field.label === "Hora" && (
                        <>
                          <option>12:00 PM</option>
                          <option>1:00 PM</option>
                          <option>2:00 PM</option>
                          <option>7:00 PM</option>
                          <option>8:00 PM</option>
                          <option>9:00 PM</option>
                        </>
                      )}
                      {field.label === "Personas" && (
                        <>
                          <option>1 persona</option>
                          <option>2 personas</option>
                          <option>3 personas</option>
                          <option>4 personas</option>
                          <option>5+ personas</option>
                        </>
                      )}
                    </motion.select>
                  ) : (
                    <motion.input 
                      type={field.type}
                      placeholder={field.placeholder}
                      whileFocus={{ borderColor: "#C9A96E", boxShadow: "0 0 0 3px rgba(201, 169, 110, 0.2)" }}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark rounded-lg focus:outline-none transition-all"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mb-6"
              variants={fadeInUp}
            >
              <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">
                Solicitudes Especiales
              </label>
              <motion.textarea 
                whileFocus={{ borderColor: "#C9A96E", boxShadow: "0 0 0 3px rgba(201, 169, 110, 0.2)" }}
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark rounded-lg focus:outline-none transition-all h-24 md:h-32 resize-none"
                placeholder="Alergias, celebraciones, preferencias..."
              />
            </motion.div>
            
            <motion.button 
              type="submit" 
              className="w-full bg-warm-accent text-charcoal-dark font-body text-sm font-medium py-3 md:py-4 rounded-full"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(201, 169, 110, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Reservar Ahora
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-12 md:py-20 px-4 md:px-6 bg-charcoal-dark"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream-base mb-8 md:mb-12 text-center"
            variants={fadeInUp}
          >
            Encuéntranos
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Map */}
            <motion.div 
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden border border-warm-accent/30"
              variants={fadeInUp}
              whileHover={{ borderColor: "rgba(201, 169, 110, 0.6)" }}
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.766323456789!2d-3.5000!3d39.9500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229f5e5e5e5e5d%3A0xabcdef1234567890!2sC.%20Pilarejo%2C%208%2C%2045300%20Oca%C3%B1a%2C%20Toledo!5e0!3m2!1ses!2ses!4v1700000000000"
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-col justify-center space-y-6"
              variants={staggerContainer}
            >
              {[
                { icon: "📍", title: "Dirección", lines: ["C. Pilarejo, 8", "45300 Ocaña, Toledo"] },
                { icon: "📞", title: "Teléfono", lines: ["+34 643 61 89 41", "Abierto hasta las 22:59"] },
                { icon: "💳", title: "Pagos", lines: ["American Express", "Mastercard, Visa"] },
              ].map((item, i) => (
                <motion.div 
                  key={item.title}
                  className="flex items-start gap-4"
                  variants={slideInRight}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-12 h-12 md:w-14 md:h-14 bg-warm-accent/20 rounded-xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(201, 169, 110, 0.3)" }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-cream-base mb-1">{item.title}</h3>
                    {item.lines.map((line, j) => (
                      <p key={j} className="font-body text-sm md:text-base text-cream-base/70">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.a
                href="https://www.google.com/maps/dir/?api=1&destination=C.%20Pilarejo%2C%208%2C%2045300%20Oca%C3%B1a%2C%20Toledo%2C%20Espa%C3%B1a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-warm-accent text-charcoal-dark font-body text-sm font-medium px-6 py-3 rounded-full w-fit mt-4"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(201, 169, 110, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Cómo Llegar →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="py-8 md:py-12 px-4 md:px-6 border-t border-light-divider bg-cream-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="font-display text-lg md:text-xl text-charcoal-dark mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              Entre Chamos y Tíos
            </motion.div>
            <div className="flex space-x-4 md:space-x-6">
              {["Instagram", "Facebook", "Google Maps"].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  className="font-body text-xs md:text-sm text-charcoal-dark hover:text-warm-accent transition-colors"
                  whileHover={{ scale: 1.1, color: "#C9A96E" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <motion.div 
            className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-light-divider text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-xs text-charcoal-dark/60">
              © 2026 Entre Chamos y Tíos. Todos los derechos reservados. Fusión Venezolana-Española en Ocaña.
            </p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}