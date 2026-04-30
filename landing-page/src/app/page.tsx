"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Entradas");

  const menuCategories = ["Entradas", "Platos Principales", "Postres", "Bebidas"];

  const menuItems = {
    Entradas: [
      { name: "Samosa de Verduras", price: "$8.50", description: "Crujientes empanadas rellenas de patatas y guisantes, servidas con salsa tamarindo." },
      { name: "Pakora de Pollo", price: "$9.50", description: "Trozos de pollo rebozados en especias y fritos hasta quedar dorados." },
      { name: "Alu Tikki", price: "$7.50", description: "Croquetas de patata con especias, servidas con yogur y chutney." },
    ],
    "Platos Principales": [
      { name: "Butter Chicken", price: "$18.50", description: "Tierno pollo en cremosa salsa de tomate y mantequilla, con toques de especias secretas." },
      { name: "Biryani de Cordero", price: "$22.00", description: "Arroz basmati aromático con cordero tierno, especias y frutos secos." },
      { name: "Tandoori Chicken", price: "$16.00", description: "Pollo marinado en yogur y especias, cocinado en horno de tandoor." },
      { name: "Palak Paneer", price: "$14.00", description: "Queso fresco en salsa cremosa de espinacas con especias aromáticas." },
    ],
    Postres: [
      { name: "Gulab Jamun", price: "$6.50", description: "Bolitas de leche fritas bañadas en almíbar de rosa y cardamomo." },
      { name: "Kheer", price: "$7.00", description: "Arroz con leche aromático con frutos secos y azafrán." },
      { name: "Rasmalai", price: "$8.00", description: "Diskettes de queso fresco en crema de leche condensada." },
    ],
    Bebidas: [
      { name: "Lassi de Mango", price: "$5.50", description: "Bebida de yogur fresco con mango natural y cardamomo." },
      { name: "Chai Masala", price: "$4.00", description: "Té negro especiado con leche, jengibre y canela." },
      { name: "Agua de Coco", price: "$3.50", description: "Agua de coco fresco, natural y refrescante." },
    ],
  };

  return (
    <div className="min-h-screen bg-cream-base">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cream-base border-b border-light-divider">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-display text-xl md:text-2xl text-charcoal-dark">
              Amrit Palace
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
                Reservaciones
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
                  Reservaciones
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
      <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-base/80 to-cream-base"></div>
        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light text-charcoal-dark mb-4 md:mb-6 leading-tight">
            Culinary Heritage
          </h1>
          <p className="font-body text-base md:text-lg lg:text-xl text-charcoal-dark mb-6 md:mb-8 max-w-2xl mx-auto">
            Descubre la auténtica cocina india en un ambiente de elegancia atemporal. 
            Sabores tradicionales que cuentan historias de generación en generación.
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
      <section id="menu" className="py-12 md:py-20 px-4 md:px-6">
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
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div key={index} className="bg-surface-white p-4 md:p-6 border border-light-divider hover:border-warm-accent transition-all">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <h3 className="font-display text-lg md:text-xl text-charcoal-dark">{item.name}</h3>
                  <span className="font-body text-warm-accent font-medium text-sm md:text-base">{item.price}</span>
                </div>
                <p className="font-body text-xs md:text-sm text-charcoal-dark">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-6 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-cream-base mb-4 md:mb-6">
                Nuestra Historia
              </h2>
              <p className="font-body text-sm md:text-base text-cream-base/80 mb-4 md:mb-6">
                Desde 1985, Amrit Palace ha sido el hogar de sabores auténticos que cuentan 
                la historia de la cocina india. Nuestros chefs, formados en las mejores 
                escuelas culinarias de la India, traen consigo recetas familiares que 
                han pasado de generación en generación.
              </p>
              <p className="font-body text-sm md:text-base text-cream-base/80 mb-6 md:mb-8">
                Cada ingrediente es seleccionado cuidadosamente, cada especia molida 
                artesanalmente, y cada plato preparado con la dedicación y amor que 
                caracteriza la verdadera cocina india.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8">
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-warm-accent mb-2">38+</div>
                  <div className="font-body text-xs md:text-sm text-cream-base/60">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-warm-accent mb-2">50+</div>
                  <div className="font-body text-xs md:text-sm text-cream-base/60">Platos Únicos</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl md:text-3xl text-warm-accent mb-2">100K+</div>
                  <div className="font-body text-xs md:text-sm text-cream-base/60">Clientes Felices</div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-96 bg-warm-accent/20 flex items-center justify-center">
              <div className="text-center">
                <div className="font-display text-4xl md:text-6xl text-warm-accent mb-4">🍛</div>
                <p className="font-body text-sm md:text-base text-cream-base/60">Imagen del Restaurante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-charcoal-dark mb-4">
              Reservaciones
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
      <section id="contact" className="py-12 md:py-20 px-4 md:px-6 bg-charcoal-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="font-display text-2xl md:text-3xl text-warm-accent mb-4">📍</div>
              <h3 className="font-display text-lg md:text-xl text-cream-base mb-2">Dirección</h3>
              <p className="font-body text-sm md:text-base text-cream-base/80">
                Calle de la Gastronomía, 42<br />
                28001 Madrid, España
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl md:text-3xl text-warm-accent mb-4">📞</div>
              <h3 className="font-display text-lg md:text-xl text-cream-base mb-2">Teléfono</h3>
              <p className="font-body text-sm md:text-base text-cream-base/80">
                +34 912 345 678<br />
                Lun - Dom: 12:00 - 23:00
              </p>
            </div>
            <div className="text-center">
              <div className="font-display text-2xl md:text-3xl text-warm-accent mb-4">✉️</div>
              <h3 className="font-display text-lg md:text-xl text-cream-base mb-2">Email</h3>
              <p className="font-body text-sm md:text-base text-cream-base/80">
                info@amritpalace.es<br />
                reservas@amritpalace.es
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 md:py-12 px-4 md:px-6 border-t border-light-divider">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-display text-lg md:text-xl text-charcoal-dark mb-4 md:mb-0">
              Amrit Palace
            </div>
            <div className="flex space-x-4 md:space-x-6">
              <a href="#" className="font-body text-xs md:text-sm text-charcoal-dark hover:text-warm-accent transition-colors">
                Instagram
              </a>
              <a href="#" className="font-body text-xs md:text-sm text-charcoal-dark hover:text-warm-accent transition-colors">
                Facebook
              </a>
              <a href="#" className="font-body text-xs md:text-sm text-charcoal-dark hover:text-warm-accent transition-colors">
                Twitter
              </a>
            </div>
          </div>
          <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-light-divider text-center">
            <p className="font-body text-xs text-charcoal-dark/60">
              © 2024 Amrit Palace. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
