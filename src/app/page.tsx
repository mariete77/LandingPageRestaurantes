"use client";
/* eslint-disable react-hooks/refs */

import { useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Entrantes");

  const menuSection = useInView();
  const aboutSection = useInView();
  const reservationsSection = useInView();
  const contactSection = useInView();

  const menuCategories = ["Entrantes", "De la Tierra", "Postres"];

  const menuItems: Record<string, { name: string; price: string; description: string; image: string }[]> = {
    Entrantes: [
      { name: "Pimientos Rellenos", price: "18,90€", description: "Pimientos rellenos con queso y jamón ibérico.", image: "/plato1.webp" },
      { name: "Ensalada de Tomate", price: "9,90€", description: "Tomates de la huerta laminados con aceite de oliva virgen extra, sal marina y orégano fresco.", image: "/EnsaladaDeTomateI.avif" },
      { name: "Carnes a la Brasa", price: "10,90€", description: "Carnes de la tierra a la brasa, jugosas y tiernas.", image: "/plato3.webp" },
      { name: "Berenjenas Fritas con Miel", price: "9,90€", description: "Láminas de berenjena rebozadas y fritas hasta quedar crujientes, acompañadas de miel de caña.", image: "/Berenjenas.webp" },
      { name: "Alcachofas con Jamón", price: "12,90€", description: "Corazones de alcachofa de la tierra salteados con jamón ibérico, ajo y un toque de limón.", image: "/Alcachofas-con-jamon.avif" },
      { name: "Emperador a la Plancha", price: "14,90€", description: "Filete de emperador fresco a la plancha con sofrito de tomate casero y pimientos asados.", image: "/Emperador.jpg" },
    ],
    "De la Tierra": [
      { name: "Bistec a la Brasa", price: "18,90€", description: "Bistec de ternera a la brasa con patatas panaderas, pimientos asados y salsa de la casa.", image: "/Biftec.jpg" },
      { name: "Presa de Cerdo Ibérico", price: "16,90€", description: "Presa de cerdo ibérico a la brasa, jugosa y tierna, acompañada de verduras de temporada.", image: "/PresaCerdo.webp" },
      { name: "Codillo Asado", price: "17,90€", description: "Codillo de cerdo asado lentamente, crujiente por fuera y jugoso por dentro, con puré de patata casero.", image: "/codillo.webp" },
      { name: "Atún Rojo a la Parrilla", price: "19,90€", description: "Rodaja de atún rojo a la parrilla, sellada por fuera y jugosa por dentro, sobre cama de verduras salteadas.", image: "/Atun.webp" },
      { name: "Chuletillas de Cordero", price: "18,90€", description: "Chuletillas de cordero lechal a la brasa de sarmiento con patatas panaderas crujientes.", image: "/plato1.webp" },
      { name: "Carrilleras al Vino Tinto", price: "16,90€", description: "Carrilleras de cerdo ibérico estofadas lentamente en vino tinto con puré de patata trufado.", image: "/plato3.webp" },
    ],
    Postres: [
      { name: "Pudín de Limón", price: "5,50€", description: "Pudín casero de limón con textura sedosa y un toque de ralladura de cítricos.", image: "/pudin_de_limon.webp" },
      { name: "Frutas Frescas de Temporada", price: "4,90€", description: "Selección de frutas frescas del día, cortadas y presentadas al momento.", image: "/Las_frutas_del_dia.webp" },
      { name: "Natillas Caseras", price: "5,50€", description: "Natillas de la casa elaboradas con yema de huevo, canela y un toque de limón.", image: "/plato3.webp" },
    ],
  };

  return (
    <div className="min-h-screen bg-cream-base overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream-base/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 hover:scale-110 transition-transform duration-500 ease-out">
              <Image
                src="/SinColorDeFondo.png"
                alt="EL CORTIJO"
                fill
                className="object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="font-body text-sm font-medium text-charcoal-dark hover:text-warm-accent transition-colors">
                Menú
              </a>
              <a href="#about" className="font-body text-sm font-medium text-charcoal-dark hover:text-warm-accent transition-colors">
                Nosotros
              </a>
              <a href="#reservations" className="font-body text-sm font-medium text-charcoal-dark hover:text-warm-accent transition-colors">
                Reservas
              </a>
              <a href="#contact" className="font-body text-sm font-medium text-charcoal-dark hover:text-warm-accent transition-colors">
                Contacto
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-charcoal-dark p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-light-divider">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#menu" className="font-body text-sm font-medium text-charcoal-dark hover:text-warm-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Menú
                </a>
                <a href="#about" className="font-body text-sm font-medium text-charcoal-dark hover:text-warm-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Nosotros
                </a>
                <a href="#reservations" className="font-body text-sm font-medium text-charcoal-dark hover:text-warm-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Reservas
                </a>
                <a href="#contact" className="font-body text-sm font-medium text-charcoal-dark hover:text-warm-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Contacto
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 hero-zoom">
          <Image
            src="/HeroCortijo.png"
            alt="EL CORTIJO"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
          <h1 className="animate-hero-title font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
            EL CORTIJO
          </h1>
          <p className="animate-hero-sub font-body text-base md:text-lg lg:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Cocina tradicional manchega en Illescas, Toledo. Chimenea, terraza y platos de siempre elaborados con producto de la tierra.
          </p>
          <div className="animate-hero-cta flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="btn-primary bg-warm-accent text-charcoal-dark font-body text-sm px-8 py-4"
            >
              Ver Menú
            </a>
            <a
              href="#reservations"
              className="btn-outline border-warm-accent text-warm-accent font-body text-sm px-8 py-4 hover:bg-warm-accent hover:text-cream-base"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" ref={menuSection.ref} className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <div className="section-ornament">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l9 10-9 10-9-10z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal-dark mb-4">
              Nuestro Menú
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-dark/70 max-w-2xl mx-auto">
              Cada plato es una obra de arte culinaria, preparada con ingredientes frescos
              y técnicas tradicionales que han pasado de generación en generación.
            </p>
          </div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`menu-cat-btn font-body text-sm font-medium px-5 md:px-7 py-2.5 md:py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-warm-accent text-charcoal-dark shadow-lg shadow-warm-accent/30 scale-105 menu-cat-btn-active-mobile"
                    : "bg-surface-white text-charcoal-dark/70 hover:bg-warm-accent/10 hover:text-charcoal-dark shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div key={activeCategory} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 stagger-children menu-grid-enter ${menuSection.isInView ? 'in-view' : ''}`}>
            {(menuItems[activeCategory] ?? []).map((item, index) => (
              <div key={index} className="card-elevated group animate-bounce-in" style={{ animationDelay: `${index * 120}ms` }}>
                <div className="relative h-48 img-overlay bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <h3 className="font-display text-lg md:text-xl text-charcoal-dark">{item.name}</h3>
                    <span className="font-body text-warm-accent font-semibold text-sm md:text-base whitespace-nowrap ml-2 price-glow">{item.price}</span>
                  </div>
                  <p className="font-body text-xs md:text-sm text-charcoal-dark/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" ref={aboutSection.ref} className="py-12 md:py-20 px-4 md:px-6 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className={`animate-slide-in-left ${aboutSection.isInView ? 'in-view' : ''}`}>
              <div className="section-ornament">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-warm-accent opacity-60">
                  <path d="M12 2l9 10-9 10-9-10z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-base mb-4 md:mb-6">
                Nuestra Historia
              </h2>
              <p className="font-body text-sm md:text-base text-cream-base/75 mb-4 md:mb-6 leading-relaxed">
                EL CORTIJO abre sus puertas en Illescas como homenaje a la cocina de toda la vida,
                la de los fogones de leña, los guisos a fuego lento y el producto de la tierra toledana.
                En nuestro caserón de la Calle Coso, 50, cada plato tiene raíz manchega y alma castellana.
              </p>
              <p className="font-body text-sm md:text-base text-cream-base/75 mb-6 md:mb-8 leading-relaxed">
                Con chimenea en invierno y terraza en verano, EL CORTIJO es el sitio donde celebrar
                una comida familiar, una cena de empresa o simplemente darse el capricho de un buen
                entrecot a la brasa. Porque la tradición, cuando se hace con mimo, nunca pasa de moda.
              </p>
              <div className={`flex flex-wrap justify-center md:justify-start gap-8 md:gap-12 stagger-stats-mobile ${aboutSection.isInView ? 'in-view' : ''}`}>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-warm-accent mb-1">4.6 ★</div>
                  <div className="font-body text-xs md:text-sm text-cream-base/50">1.357 Reseñas</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-warm-accent mb-1">20-30€</div>
                  <div className="font-body text-xs md:text-sm text-cream-base/50">Precio Medio</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-warm-accent mb-1">+132</div>
                  <div className="font-body text-xs md:text-sm text-cream-base/50">Notificaciones</div>
                </div>
              </div>
            </div>
            <div className={`relative h-72 md:h-96 rounded-xl overflow-hidden shadow-2xl animate-slide-in-right ${aboutSection.isInView ? 'in-view' : ''}`}>
              <Image
                src="/PresaCerdo.webp"
                alt="Plato tradicional de EL CORTIJO"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section id="reservations" ref={reservationsSection.ref} className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-8 md:mb-12 fade-in-up ${reservationsSection.isInView ? 'in-view' : ''}`}>
            <div className="section-ornament">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l9 10-9 10-9-10z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal-dark mb-4">
              Reservas
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-dark/70">
              Asegura tu lugar para una experiencia culinaria inolvidable.
            </p>
          </div>

          <form className={`bg-surface-white p-6 md:p-8 rounded-xl shadow-xl shadow-charcoal-dark/5 border border-light-divider/50 fade-in-up ${reservationsSection.isInView ? 'in-view' : ''}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <div>
                <label className="block font-body text-xs font-semibold text-charcoal-dark mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-light-divider font-body text-sm text-charcoal-dark bg-cream-base/30 focus:outline-none focus:border-warm-accent focus:ring-2 focus:ring-warm-accent/20 transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-charcoal-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-light-divider font-body text-sm text-charcoal-dark bg-cream-base/30 focus:outline-none focus:border-warm-accent focus:ring-2 focus:ring-warm-accent/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-charcoal-dark mb-2">
                  Fecha
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 rounded-lg border border-light-divider font-body text-sm text-charcoal-dark bg-cream-base/30 focus:outline-none focus:border-warm-accent focus:ring-2 focus:ring-warm-accent/20 transition-all"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-charcoal-dark mb-2">
                  Hora
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-light-divider font-body text-sm text-charcoal-dark bg-cream-base/30 focus:outline-none focus:border-warm-accent focus:ring-2 focus:ring-warm-accent/20 transition-all">
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-charcoal-dark mb-2">
                  Número de Personas
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-light-divider font-body text-sm text-charcoal-dark bg-cream-base/30 focus:outline-none focus:border-warm-accent focus:ring-2 focus:ring-warm-accent/20 transition-all">
                  <option>1 persona</option>
                  <option>2 personas</option>
                  <option>3 personas</option>
                  <option>4 personas</option>
                  <option>5+ personas</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-xs font-semibold text-charcoal-dark mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-light-divider font-body text-sm text-charcoal-dark bg-cream-base/30 focus:outline-none focus:border-warm-accent focus:ring-2 focus:ring-warm-accent/20 transition-all"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-body text-xs font-semibold text-charcoal-dark mb-2">
                Solicitudes Especiales
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg border border-light-divider font-body text-sm text-charcoal-dark bg-cream-base/30 focus:outline-none focus:border-warm-accent focus:ring-2 focus:ring-warm-accent/20 transition-all h-24 md:h-32 resize-none"
                placeholder="Alergias, celebraciones, preferencias..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-primary w-full bg-warm-accent text-charcoal-dark font-body text-sm py-4 animate-pulse-subtle"
            >
              Reservar Ahora
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" ref={contactSection.ref} className="py-12 md:py-20 px-4 md:px-6 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-base mb-8 md:mb-12 text-center">
            Encuentra Nuestro Restaurante
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Google Maps */}
            <div className={`relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-cream-base/10 animate-slide-in-left ${contactSection.isInView ? 'in-view' : ''}`}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.82953599755!2d-3.8492!3d40.1223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDA3JzIwLjMiTiAzwrA1MCc1Ny4xIlc!5e0!3m2!1ses!2ses!4v1700000000000"
                className="grayscale-[30%]"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className={`flex flex-col justify-center space-y-8 animate-rotate-in ${contactSection.isInView ? 'in-view' : ''}`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-warm-accent/15 flex items-center justify-center text-warm-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl text-cream-base mb-2">Dirección</h3>
                  <p className="font-body text-sm md:text-base text-cream-base/70 mb-3">
                    C. Coso, 50<br />
                    45200 Illescas, Toledo, España
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=C.%20Coso%2C%2050%2C%2045200%20Illescas%2C%20Toledo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary bg-warm-accent text-charcoal-dark font-body text-xs font-medium px-5 py-2.5"
                  >
                    Cómo Llegar
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-warm-accent/15 flex items-center justify-center text-warm-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl text-cream-base mb-2">Teléfono</h3>
                  <p className="font-body text-sm md:text-base text-cream-base/70">
                    <a href="tel:+34675341357" className="hover:text-warm-accent transition-colors">
                      +34 675 34 13 57
                    </a>
                    <br />
                    <span className="text-cream-base/50 text-xs">Reserva obligatoria · Terraza · Chimenea</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-warm-accent/15 flex items-center justify-center text-warm-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg md:text-xl text-cream-base mb-2">Formas de Pago</h3>
                  <p className="font-body text-sm md:text-base text-cream-base/70">
                    Efectivo<br />
                    Mastercard, Visa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 bg-cream-base">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center justify-center md:justify-start">
              <div className="relative w-16 h-16 md:w-24 md:h-24 hover:scale-110 transition-transform duration-500 ease-out">
                <Image
                  src="/SinColorDeFondo.png"
                  alt="EL CORTIJO"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="font-body text-sm text-charcoal-dark/60 hover:text-warm-accent transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="font-body text-sm text-charcoal-dark/60 hover:text-warm-accent transition-colors duration-300">
                Facebook
              </a>
              <a href="#" className="font-body text-sm text-charcoal-dark/60 hover:text-warm-accent transition-colors duration-300">
                Google Maps
              </a>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-charcoal-dark/10 text-center">
            <div className="decorative-line mb-4"></div>
            <p className="font-body text-xs text-charcoal-dark/50">
              &copy; 2026 EL CORTIJO. Todos los derechos reservados. Cocina Tradicional Manchega en Illescas, Toledo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
