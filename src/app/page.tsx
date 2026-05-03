"use client";

import { useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Primeros");

  const menuSection = useInView();
  const aboutSection = useInView();
  const reservationsSection = useInView();
  const contactSection = useInView();

  const menuCategories = ["Primeros", "Segundos", "Postres"];

  const menuItems = {
    Primeros: [
      { name: "Alcachofas Salteadas con Jamón", price: "13,90€", description: "Alcachofas tiernas salteadas al momento con jamón ibérico en su punto.", image: "/Alcachofas-con-jamon.avif" },
      { name: "Ensalada de Tomate, Mezclum, Caballa y Cebolla Morada", price: "10,90€", description: "Fresca ensalada con productos de temporada y caballa marinada.", image: "/EnsaladaDeTomateI.avif" },
      { name: "Berenjenas Rellenas Gratinadas", price: "11,90€", description: "Berenjenas rellenas de carne y gratinadas en el horno con queso fundido.", image: "/Berenjenas.webp" },
      { name: "Pimientos de Piquillo Rellenos", price: "14,90€", description: "Delicados pimientos de piquillo rellenos de queso fresco y jamón ibérico.", image: "/plato1.webp" },
      { name: "Entrecot a la Parrilla", price: "18,90€", description: "Corte premium de carne jugoso y tierno, cocinado a la parrilla con sal marina.", image: "/plato2.webp" },
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
      { name: "Natillas Caseras", price: "4,50€", description: "Natillas cremosas preparadas de manera tradicional.", image: "/Natillas.jfif" },
      { name: "Puding de Limón", price: "4,50€", description: "Puding casero con un toque fresco de limón.", image: "/pudin_de_limon.webp" },
      { name: "Fruta del Día", price: "3,50€", description: "Selección de frutas frescas de temporada.", image: "/Las_frutas_del_dia.webp" },
    ],
  };

  return (
    <div className="min-h-screen bg-cream-base">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream-base border-b border-light-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-display text-xl md:text-2xl text-charcoal-dark">
              La Abadía De Calatrava
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
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

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/HeroAbadia.webp"
          alt="La Abadía De Calatrava"
          fill
          className="absolute inset-0 object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-cream-base mb-4 md:mb-6 leading-tight">
            Cocina Manchega
          </h1>
          <p className="font-body text-base md:text-lg lg:text-xl text-cream-base mb-6 md:mb-8 max-w-2xl mx-auto">
            Descubre la auténtica gastronomía de La Mancha en un ambiente envolvente como una abadía.
            Sabores tradicionales manchegos que te harán sentir en casa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-warm-accent text-charcoal-dark font-body text-sm font-medium px-6 md:px-8 py-3 md:py-4 hover:bg-charcoal-dark hover:text-cream-base transition-colors"
            >
              Ver Menú
            </a>
            <a
              href="#reservations"
              className="border border-warm-accent text-warm-accent font-body text-sm font-medium px-6 md:px-8 py-3 md:py-4 hover:bg-warm-accent hover:text-cream-base transition-colors"
            >
              Reservar Mesa
            </a>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" ref={menuSection.ref} className={`py-12 md:py-20 px-4 md:px-6 fade-in-up ${menuSection.isInView ? 'in-view' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-dark mb-4">
              Nuestro Menú
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-dark max-w-2xl mx-auto">
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
                className={`font-body text-xs font-medium px-4 md:px-6 py-2 md:py-3 transition-colors ${
                  activeCategory === category
                    ? "bg-warm-accent text-charcoal-dark"
                    : "bg-cream-base text-charcoal-dark hover:bg-warm-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {menuItems[activeCategory as keyof typeof menuItems].map((item: any, index: number) => (
              <div key={index} className="bg-surface-white border border-light-divider hover:border-warm-accent transition-all overflow-hidden">
                <div className="relative h-48 bg-gray-200">
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
                    <span className="font-body text-warm-accent font-medium text-sm md:text-base whitespace-nowrap ml-2">{item.price}</span>
                  </div>
                  <p className="font-body text-xs md:text-sm text-charcoal-dark">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutSection.ref} className={`py-12 md:py-20 px-4 md:px-6 bg-charcoal-dark fade-in-up ${aboutSection.isInView ? 'in-view' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream-base mb-4 md:mb-6">
                Nuestra Historia
              </h2>
              <p className="font-body text-sm md:text-base text-cream-base/80 mb-4 md:mb-6">
                La Abadía De Calatrava nace con la misión de ofrecer la más auténtica gastronomía manchega
                en un ambiente acogedor que te transporta a las tradiciones culinarias de La Mancha.
                Nuestro equipo de chefs apasionados prepara cada plato con ingredientes frescos y seleccionados,
                respetando las recetas que han sido transmitidas a través de las generaciones.
              </p>
              <p className="font-body text-sm md:text-base text-cream-base/80 mb-6 md:mb-8">
                Desde nuestro famoso menú del día a 19,90€ hasta nuestros segundos de carne y pescado a
                la plancha, cada preparación refleja el compromiso con la excelencia. Nuestro servicio
                atento y cordial complementa una experiencia culinaria que tus clientes recordarán con cariño.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-warm-accent mb-2">+500</div>
                  <div className="font-body text-xs md:text-sm text-cream-base/60">Comensales Semanales</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-warm-accent mb-2">15+</div>
                  <div className="font-body text-xs md:text-sm text-cream-base/60">Platos Únicos</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-warm-accent mb-2">⭐⭐⭐⭐⭐</div>
                  <div className="font-body text-xs md:text-sm text-cream-base/60">Recomendado</div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-96">
              <Image
                src="/plato2.avif"
                alt="Plato típico de La Abadía De Calatrava"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" ref={reservationsSection.ref} className={`py-12 md:py-20 px-4 md:px-6 fade-in-up ${reservationsSection.isInView ? 'in-view' : ''}`}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-dark mb-4">
              Reservas
            </h2>
            <p className="font-body text-sm md:text-base text-charcoal-dark">
              Asegura tu lugar para una experiencia culinaria inolvidable.
            </p>
          </div>

          <form className="bg-surface-white p-6 md:p-8 border border-light-divider">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
              <div>
                <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">
                  Nombre
                </label>
                <input 
                  type="text" 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark focus:outline-none focus:border-warm-accent"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark focus:outline-none focus:border-warm-accent"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">
                  Fecha
                </label>
                <input 
                  type="date" 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark focus:outline-none focus:border-warm-accent"
                />
              </div>
              <div>
                <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">
                  Hora
                </label>
                <select className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark focus:outline-none focus:border-warm-accent">
                  <option>12:00 PM</option>
                  <option>1:00 PM</option>
                  <option>2:00 PM</option>
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">
                  Número de Personas
                </label>
                <select className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark focus:outline-none focus:border-warm-accent">
                  <option>1 persona</option>
                  <option>2 personas</option>
                  <option>3 personas</option>
                  <option>4 personas</option>
                  <option>5+ personas</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">
                  Teléfono
                </label>
                <input 
                  type="tel" 
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark focus:outline-none focus:border-warm-accent"
                  placeholder="+34 600 000 000"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-body text-xs font-medium text-charcoal-dark mb-2">
                Solicitudes Especiales
              </label>
              <textarea 
                className="w-full px-3 md:px-4 py-2 md:py-3 border border-light-divider font-body text-sm text-charcoal-dark focus:outline-none focus:border-warm-accent h-24 md:h-32"
                placeholder="Alergias, celebraciones, preferencias..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-warm-accent text-charcoal-dark font-body text-sm font-medium py-3 md:py-4 hover:bg-charcoal-dark hover:text-cream-base transition-colors"
            >
              Reservar Ahora
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactSection.ref} className={`py-12 md:py-20 px-4 md:px-6 bg-charcoal-dark fade-in-up ${contactSection.isInView ? 'in-view' : ''}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream-base mb-8 md:mb-12 text-center">
            Encuentra Nuestro Restaurante
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12">
            {/* Google Maps */}
            <div className="relative h-96 rounded-lg overflow-hidden border border-warm-accent/30">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8381263149006!2d-3.9330!3d39.6353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229f5e5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sC.%20de%20Calatrava%2C%2039%2C%2013003%20Ciudad%20Real!5e0!3m2!1ses!2ses!4v1714732800000"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="font-display text-2xl md:text-3xl text-warm-accent mr-4 flex-shrink-0">📍</div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-cream-base mb-2">Dirección</h3>
                    <p className="font-body text-sm md:text-base text-cream-base/80 mb-3">
                      C. de Calatrava, 39<br />
                      13003 Ciudad Real, España
                    </p>
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=C.%20de%20Calatrava%2C%2039%2C%2013003%20Ciudad%20Real%2C%20Espa%C3%B1a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-warm-accent text-charcoal-dark font-body text-sm font-medium px-6 py-2 hover:bg-charcoal-dark hover:text-cream-base transition-colors min-h-[44px]"
                    >
                      Cómo Llegar
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="font-display text-2xl md:text-3xl text-warm-accent mr-4 flex-shrink-0">📞</div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-cream-base mb-2">Teléfono</h3>
                    <p className="font-body text-sm md:text-base text-cream-base/80 mb-3">
                      <a href="tel:+34683544244" className="hover:text-warm-accent transition-colors">
                        +34 683 54 42 44
                      </a>
                      <br />
                      Abierto hasta las 22:59
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="font-display text-2xl md:text-3xl text-warm-accent mr-4 flex-shrink-0">💳</div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-cream-base mb-2">Formas de Pago</h3>
                    <p className="font-body text-sm md:text-base text-cream-base/80">
                      American Express<br />
                      Mastercard, Visa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-light-divider">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-display text-lg md:text-xl text-charcoal-dark mb-4 md:mb-0">
              La Abadía De Calatrava
            </div>
            <div className="flex space-x-4 md:space-x-6">
              <a href="#" className="font-body text-xs md:text-sm text-charcoal-dark hover:text-warm-accent transition-colors">
                Instagram
              </a>
              <a href="#" className="font-body text-xs md:text-sm text-charcoal-dark hover:text-warm-accent transition-colors">
                Facebook
              </a>
              <a href="#" className="font-body text-xs md:text-sm text-charcoal-dark hover:text-warm-accent transition-colors">
                Google Maps
              </a>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-light-divider text-center">
            <p className="font-body text-xs text-charcoal-dark/60">
              © 2026 La Abadía De Calatrava. Todos los derechos reservados. Cocina Manchega Tradicional en Ciudad Real.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
