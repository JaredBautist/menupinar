"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Instagram,
  Facebook,
  Globe,
  Pizza,
  ChefHat,
  CupSoda,
  Star,
  Home,
  Menu,
  ChevronUp
} from "lucide-react"

// Data
const pizzas = [
  { name: "GENOVESA", ing: "pollo · champiñón", p: [34, 44, 57, 64, 64, 96], img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop" },
  { name: "SICILIANA", ing: "pollo · jamón", p: [34, 44, 57, 64, 64, 96], img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop" },
  { name: "VELEÑA", ing: "bocadillo y queso", p: [34, 44, 57, 64, 64, 96], img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop" },
  { name: "HAWAIANA", ing: "jamón · piña", p: [36, 45, 59, 66, 66, 102], img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200&h=200&fit=crop" },
  { name: "HAWAIANA ESPECIAL", ing: "jamón · piña · champiñón · tocineta", p: [39, 49, 62, 70, 69, 106], img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=200&h=200&fit=crop" },
  { name: "TROPICAL", ing: "jamón · piña · ciruelas · cereza", p: [38, 48, 61, 69, 67, 103], img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=200&h=200&fit=crop" },
  { name: "BOLOGNA", ing: "carne · jamón · champiñones", p: [38, 48, 61, 69, 67, 103], img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop" },
  { name: "MIEL MOSTAZA", ing: "pollo · tocineta · miel mostaza", p: [38, 48, 61, 69, 67, 103], img: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=200&h=200&fit=crop" },
  { name: "RANCHERA", ing: "pollo · tocineta · salchicha ranchera", p: [38, 48, 61, 69, 67, 103], img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=200&h=200&fit=crop" },
  { name: "NAPOLITANA", ing: "tomate · anchoas · orégano", p: [38, 48, 61, 69, 67, 103], img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&h=200&fit=crop" },
  { name: "CLÁSICA", ing: "jamón · pollo · champiñones · tocineta", p: [38, 48, 61, 69, 67, 103], img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=200&h=200&fit=crop" },
  { name: "MEXICANA", ing: "carne · pimentón · doritos · tomates · cilantro · ají (op)", p: [38, 48, 61, 69, 67, 103], img: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=200&h=200&fit=crop" },
  { name: "VEGETARIANA", ing: "champiñones · cebolla · tomate · pimentón · aceitunas", p: [38, 48, 61, 69, 67, 103], img: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=200&h=200&fit=crop" },
  { name: "MEDITERRÁNEA", ing: "pollo · champiñones · camarones", p: [48, 53, 71, 87, 83, 125], img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop" },
  { name: "ROMANA", ing: "jamón · cabano · pollo · tocineta · pimentón · anchoas", p: [48, 53, 71, 87, 83, 125], img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=200&h=200&fit=crop" },
  { name: "CAMPESINA", ing: "pollo · jamón · tocineta · maíz", p: [48, 53, 71, 87, 83, 125], img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=200&h=200&fit=crop" },
  { name: "SALAMI", ing: "salami", p: [48, 53, 71, 87, 83, 125], img: "https://images.unsplash.com/photo-1571066811602-716837d681de?w=200&h=200&fit=crop" },
  { name: "PEPERONI", ing: "peperoni", p: [48, 53, 71, 87, 83, 125], img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop" },
  { name: "VALENCIANA", ing: "jamón · pollo · maíz · camarón · piña", p: [48, 53, 71, 87, 83, 125], img: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=200&h=200&fit=crop" },
  { name: "DE LA CASA", ing: "jamón · pollo · champiñones · tocineta · camarones · cebolla · pimentón", p: [48, 53, 71, 87, 83, 125], img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop" },
  { name: "CARNES", ing: "jamón · tocineta · peperoni · salami · cabano", p: [48, 53, 71, 87, 83, 125], img: "https://images.unsplash.com/photo-1600028068383-ea11a7a101f3?w=200&h=200&fit=crop" },
  { name: "FRUTOS DEL MAR", ing: "atún · camarón · pulpo · calamar · anchoas", p: [51, 0, 0, 0, 0, 0], img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=200&h=200&fit=crop" },
  { name: "4 QUESOS", ing: "mozzarella · amarillo · paisa · azul", p: [51, 0, 0, 0, 0, 0], img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=200&h=200&fit=crop" },
  { name: "ESPECIAL PREMIUM", ing: "mozzarella · jamón serrano · tomate cherry · aceituna negra · albahaca", p: [51, 0, 0, 0, 0, 0], img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=200&h=200&fit=crop" },
]

const crepes = [
  { name: "CREPE GENOVESA", ing: "pollo · champiñón", price: 32000, img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=200&h=200&fit=crop" },
  { name: "CREPE SICILIANO", ing: "pollo · jamón", price: 32000, img: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0ee8?w=200&h=200&fit=crop" },
  { name: "CREPE HAWAIANO", ing: "jamón · piña · queso", price: 32000, img: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200&h=200&fit=crop" },
  { name: "CREPE VEGETARIANO", ing: "champiñón · apio españa · cebollín · maíz · pimentón", price: 32000, img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop" },
  { name: "CREPE RANCHERO", ing: "jamón · pollo · salchicha ranchera · tocineta", price: 37000, img: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=200&h=200&fit=crop" },
  { name: "CREPE RANCHERO DE LA CASA", ing: "carne molida · champiñón · salchicha · queso", price: 39000, img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=200&h=200&fit=crop" },
  { name: "CREPE MARCO POLO ESPECIAL", ing: "pollo · champiñón · camarón", price: 40000, img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=200&fit=crop" },
  { name: "CREPE MARINERO", ing: "pulpo · calamar · camarón", price: 47000, img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=200&h=200&fit=crop" },
]

const lasagnas = [
  { name: "LASAGNA BOLOGNA", ing: "carne · salsa napolitana", price: 32000, img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=200&h=200&fit=crop" },
  { name: "LASAGNA GENOVESA", ing: "pollo · champiñón", price: 32000, img: "https://images.unsplash.com/photo-1619895092538-128341789043?w=200&h=200&fit=crop" },
  { name: "LASAGNA MIXTA", ing: "pollo · jamón · carne · champiñón", price: 34000, img: "https://images.unsplash.com/photo-1560684352-8497838a2229?w=200&h=200&fit=crop" },
  { name: "LASAGNA ESPECIAL", ing: "jamón · camarón · pollo · champiñón", price: 40000, img: "https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?w=200&h=200&fit=crop" },
]

const pastas = [
  { name: "PASTAS NAPOLITANA O BECHAMEL", ing: "salsa napolitana o con salsa bechamel", price: 32000, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop" },
  { name: "PASTAS AL BURRO", ing: "mantequilla · queso", price: 32000, img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=200&h=200&fit=crop" },
  { name: "PASTAS A LA BOLOGNA", ing: "carne molida con salsa napolitana", price: 38000, img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop" },
  { name: "PASTAS A LA CARBONARA", ing: "tocineta · salsa bechamel", price: 38000, img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=200&h=200&fit=crop" },
  { name: "PASTAS A LA MARINERA", ing: "camarón · calamar · pulpo · mejillón · salsa bechamel de mariscos", price: 46000, img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=200&h=200&fit=crop" },
]

const panzerotti = [
  { name: "POLLO Y CHAMPIÑONES", price: 29000, img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=200&h=200&fit=crop" },
  { name: "POLLO Y JAMÓN", price: 29000, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop" },
  { name: "HAWAIANO", price: 29000, img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=200&h=200&fit=crop" },
  { name: "ESPECIAL", ing: "jamón · pollo · champiñones · cabano y queso", price: 32000, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop" },
  { name: "SUPER ESPECIAL", ing: "jamón · pollo · champiñones · cabano · queso · camarones", price: 36000, img: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?w=200&h=200&fit=crop" },
]

const adicionales = [
  { name: "CAMARÓN", price: 8000 },
  { name: "MAÍZ", price: 6000 },
  { name: "PIÑA", price: 6000 },
  { name: "SALCHICHA", price: 6000 },
  { name: "CHAMPIÑÓN", price: 6000 },
  { name: "QUESO", price: 8000 },
  { name: "PORCIÓN DE PAPAS A LA FRANCESA", price: 6000 },
  { name: "PORCIÓN DE ANCHOAS", price: 10000 },
]

const bebidas = [
  { name: "AGUA", price: 3000 },
  { name: "MR. TEA", price: 4500 },
  { name: "GASEOSA PET 400", price: 4500 },
  { name: "GASEOSA LITRAZO", price: 9000 },
  { name: "SODA", price: 4000 },
  { name: "LIMONADA DE ROSAS", price: 17000 },
  { name: "HATSU", price: 7500 },
  { name: "HIT DE CAJITA", price: 2500 },
]

const cervezas = [
  { name: "AGUILA", price: 6500 },
  { name: "POKER", price: 6500 },
  { name: "CLUB COLOMBIA", price: 7500 },
  { name: "BUDWEISER", price: 7000 },
  { name: "HEINEKEN", price: 7500 },
  { name: "CORONA", price: 10500 },
  { name: "CORONITA", price: 8500 },
  { name: "JP CHENET", price: 17000 },
]

const jugos = [
  { name: "MANGO", price: 9000 },
  { name: "MORA", price: 9000 },
  { name: "GUANABANA", price: 9000 },
  { name: "FRESA", price: 9000 },
  { name: "LULO", price: 9000 },
  { name: "MELÓN", price: 9000 },
  { name: "PAPAYA", price: 9000 },
]

const frappes = [
  { name: "NARANJA", price: 9000 },
  { name: "MARACUYÁ", price: 9000 },
  { name: "MANDARINA", price: 9000 },
  { name: "LIMÓN", price: 9000 },
]

const ceviches = [
  { name: "MANGO BICHE", ing: "mango · zumo de limón · camarón", price: 38000, img: "https://images.unsplash.com/photo-1582482938214-d445a77aabf4?w=400&h=300&fit=crop" },
  { name: "COCTEL CAMARÓN", ing: "salsa rosada o salsa de tomate · cebolla · camarón", price: 38000, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop" },
  { name: "CEVICHE METRO PIZZA", ing: "salmón · camarón en reducción de maracuyá · cebolla · cilantro", price: 44000, img: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?w=400&h=300&fit=crop" },
  { name: "CEVICHE MIXTO", ing: "camarón · calamar · pulpo · langostino", price: 49000, img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop" },
]

const platosAdicionales = [
  { name: "PECHUGA A LA PLANCHA", ing: "pechuga · papas a la francesa · ensalada", price: 38000, img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop" },
  { name: "SALCHIPAPA", ing: "salchicha ranchera · papas a la francesa · vegetales", price: 23000, img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop" },
]

const menuInfantil = [
  { name: "NUGGETS DE POLLO + PAPA A LA FRANCESA + JUGO DE CAJITA + DETALLE", ing: "Combo infantil con nuggets", price: 32000, img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop" },
  { name: "PIZZA EN FORMA DE MICKEY + JUGO DE CAJITA + DETALLE", ing: "Pizza divertida para los peques", price: 37000, img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop" },
]

const cazuelaMariscos = {
  name: "CAZUELA DE MARISCOS",
  ing: "Frutos del mar salteados y bañados en un bisque de mariscos y albahaca, pulpo, calamar, camarón, palmitos de cangrejo, mejillones y almejas, con un toque de brandy, acompañado de arroz, patacón o ensalada.",
  price: 56000,
  img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop"
}

// Tipo genérico para productos
type Product = {
  name: string
  ing?: string
  price?: number
  p?: number[]
  img: string
}

const formatPrice = (price: number) => `$${price.toLocaleString('es-CO')}`

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const scaleOnTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
}

export default function MenuPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [activeSection, setActiveSection] = useState<string>("pizzas")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for nav background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navItems = [
    { id: "pizzas", label: "Pizzas", icon: Pizza },
    { id: "crepes", label: "Crepes", icon: ChefHat },
    { id: "lasagna", label: "Pasta", icon: ChefHat },
    { id: "panzerotti", label: "Panzerotti", icon: Star },
    { id: "bebidas", label: "Bebidas", icon: CupSoda },
    { id: "especiales", label: "Especiales", icon: Star },
  ]

  return (
    <div className="min-h-screen bg-italian-marble font-roboto-condensed pb-24 md:pb-0">
      {/* Italian Watermark Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-italian-stripes" />
        {/* SVG Watermark Layer */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.045 }}
          aria-hidden="true"
        >
          {/* Torre Inclinada de Pisa — top left */}
          <g transform="translate(30, 60) scale(0.9)" fill="#2d6a2d">
            <rect x="20" y="220" width="90" height="10" rx="4"/>
            <rect x="25" y="200" width="80" height="22" rx="3"/>
            <rect x="28" y="180" width="74" height="22" rx="3"/>
            <rect x="31" y="160" width="68" height="22" rx="3"/>
            <rect x="34" y="140" width="62" height="22" rx="3"/>
            <rect x="37" y="120" width="56" height="22" rx="3"/>
            <rect x="40" y="100" width="50" height="22" rx="3"/>
            <rect x="43" y="80"  width="44" height="22" rx="3"/>
            <ellipse cx="65" cy="75" rx="22" ry="10"/>
            <rect x="50" y="55" width="30" height="22" rx="3"/>
            <ellipse cx="65" cy="52" rx="14" ry="7"/>
            <rect x="57" y="35" width="16" height="20" rx="3"/>
            <ellipse cx="65" cy="33" rx="8" ry="5"/>
          </g>

          {/* Pizza entera — top right */}
          <g transform="translate(1050, 40) scale(1.1)" fill="#2d6a2d">
            <circle cx="70" cy="70" r="68" fill="none" stroke="#2d6a2d" strokeWidth="6"/>
            <circle cx="70" cy="70" r="55" fill="none" stroke="#2d6a2d" strokeWidth="3"/>
            <line x1="70" y1="5"  x2="70" y2="135" stroke="#2d6a2d" strokeWidth="3"/>
            <line x1="5"  y1="70" x2="135" y2="70" stroke="#2d6a2d" strokeWidth="3"/>
            <line x1="22" y1="22" x2="118" y2="118" stroke="#2d6a2d" strokeWidth="2"/>
            <line x1="118" y1="22" x2="22" y2="118" stroke="#2d6a2d" strokeWidth="2"/>
            <circle cx="55" cy="50" r="6"/>
            <circle cx="85" cy="55" r="5"/>
            <circle cx="60" cy="85" r="5"/>
            <circle cx="90" cy="80" r="6"/>
            <circle cx="70" cy="65" r="4"/>
          </g>

          {/* Botella de vino — right side upper */}
          <g transform="translate(1130, 220) scale(0.85)" fill="#2d6a2d">
            <rect x="35" y="120" width="30" height="120" rx="10"/>
            <rect x="30" y="210" width="40" height="15" rx="3"/>
            <path d="M42 120 Q50 90 58 120" fill="#2d6a2d"/>
            <rect x="44" y="60" width="12" height="65" rx="5"/>
            <rect x="42" y="50" width="16" height="15" rx="4"/>
            <rect x="46" y="35" width="8" height="20" rx="3"/>
            <ellipse cx="50" cy="155" rx="12" ry="4"/>
          </g>

          {/* Copa de vino — left middle */}
          <g transform="translate(-10, 380) scale(0.95)" fill="#2d6a2d">
            <path d="M40 20 Q20 60 25 100 Q30 130 60 130 Q90 130 95 100 Q100 60 80 20Z" fill="none" stroke="#2d6a2d" strokeWidth="6"/>
            <rect x="56" y="128" width="8" height="60" rx="3"/>
            <rect x="35" y="185" width="50" height="8" rx="4"/>
            <ellipse cx="60" cy="80" rx="20" ry="8" fill="#2d6a2d" fillOpacity="0.3"/>
          </g>

          {/* Rebanada de pizza — center-left */}
          <g transform="translate(160, 480) scale(0.8)" fill="#2d6a2d">
            <path d="M80 10 L10 160 L150 160 Z" fill="none" stroke="#2d6a2d" strokeWidth="6"/>
            <path d="M40 160 Q80 120 120 160" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <circle cx="70" cy="110" r="8"/>
            <circle cx="100" cy="100" r="7"/>
            <circle cx="80" cy="130" r="6"/>
            <circle cx="55" cy="125" r="6"/>
          </g>

          {/* Crepe enrollado — top center */}
          <g transform="translate(480, 30) scale(0.9)" fill="#2d6a2d">
            <ellipse cx="80" cy="40" rx="75" ry="35" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <ellipse cx="80" cy="40" rx="60" ry="25" fill="none" stroke="#2d6a2d" strokeWidth="3"/>
            <ellipse cx="80" cy="40" rx="40" ry="15" fill="none" stroke="#2d6a2d" strokeWidth="2"/>
            <path d="M20 55 Q80 80 140 55" fill="none" stroke="#2d6a2d" strokeWidth="4"/>
            <path d="M30 65 Q80 90 130 65" fill="none" stroke="#2d6a2d" strokeWidth="3"/>
          </g>

          {/* Tenedor y cuchillo — bottom left */}
          <g transform="translate(70, 700) scale(0.9)" fill="#2d6a2d">
            <rect x="30" y="10" width="8" height="140" rx="4"/>
            <rect x="26" y="10" width="4" height="50" rx="2"/>
            <rect x="38" y="10" width="4" height="50" rx="2"/>
            <rect x="22" y="10" width="4" height="50" rx="2"/>
            <rect x="80" y="10" width="6" height="140" rx="3"/>
            <path d="M80 10 Q95 30 86 55" fill="none" stroke="#2d6a2d" strokeWidth="6"/>
          </g>

          {/* Pasta/Espagueti — center */}
          <g transform="translate(520, 600) scale(0.8)" fill="none" stroke="#2d6a2d" strokeWidth="4">
            <path d="M0 50 Q50 10 100 50 Q150 90 200 50"/>
            <path d="M0 70 Q50 30 100 70 Q150 110 200 70"/>
            <path d="M0 90 Q50 50 100 90 Q150 130 200 90"/>
            <circle cx="100" cy="70" r="40" fill="none" strokeWidth="5"/>
          </g>

          {/* Cangrejo/Mariscos — right bottom */}
          <g transform="translate(1080, 580) scale(0.85)" fill="#2d6a2d">
            <ellipse cx="70" cy="70" rx="45" ry="30"/>
            <circle cx="55" cy="52" r="8" fill="#f5f5f0"/>
            <circle cx="85" cy="52" r="8" fill="#f5f5f0"/>
            <circle cx="55" cy="52" r="4"/>
            <circle cx="85" cy="52" r="4"/>
            <path d="M25 70 Q10 50 5 35" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <path d="M25 70 Q8 60 0 75"  fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <path d="M115 70 Q130 50 135 35" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <path d="M115 70 Q132 60 140 75" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <path d="M35 95 Q30 115 20 120" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <path d="M55 100 Q55 120 50 130" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <path d="M85 100 Q85 120 90 130" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <path d="M105 95 Q110 115 120 120" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
          </g>

          {/* Olivo / Hoja italiana — left bottom */}
          <g transform="translate(0, 900) scale(0.9)" fill="#2d6a2d">
            <path d="M60 200 Q20 150 40 80 Q60 20 100 40 Q130 60 110 130 Q95 180 60 200Z"/>
            <path d="M60 200 Q100 150 80 80 Q60 20 20 40 Q-10 60 10 130 Q25 180 60 200Z"/>
            <line x1="60" y1="200" x2="60" y2="40" stroke="#f5f5f0" strokeWidth="4"/>
          </g>

          {/* Chef hat — top far right */}
          <g transform="translate(1150, 500) scale(0.8)" fill="#2d6a2d">
            <rect x="20" y="100" width="100" height="50" rx="5"/>
            <ellipse cx="70" cy="100" rx="50" ry="20"/>
            <path d="M30 100 Q30 40 70 30 Q110 40 110 100" fill="#2d6a2d"/>
            <ellipse cx="70" cy="35" rx="25" ry="12"/>
          </g>

          {/* Segunda pizza rebanada — bottom center-right */}
          <g transform="translate(850, 750) scale(0.75)" fill="#2d6a2d">
            <path d="M80 10 L10 160 L150 160 Z" fill="none" stroke="#2d6a2d" strokeWidth="6"/>
            <path d="M40 160 Q80 120 120 160" fill="none" stroke="#2d6a2d" strokeWidth="5"/>
            <circle cx="65" cy="105" r="7"/>
            <circle cx="95" cy="100" r="6"/>
            <circle cx="75" cy="130" r="5"/>
          </g>

          {/* Coliseo romano — bottom right */}
          <g transform="translate(940, 860) scale(0.7)" fill="#2d6a2d">
            <rect x="0"   y="80"  width="200" height="100" rx="4"/>
            <rect x="10"  y="50"  width="180" height="50"  rx="4"/>
            <rect x="20"  y="20"  width="160" height="40"  rx="4"/>
            <rect x="10"  y="180" width="10"  height="60"/>
            <rect x="30"  y="180" width="10"  height="60"/>
            <rect x="50"  y="180" width="10"  height="60"/>
            <rect x="70"  y="180" width="10"  height="60"/>
            <rect x="90"  y="180" width="10"  height="60"/>
            <rect x="110" y="180" width="10"  height="60"/>
            <rect x="130" y="180" width="10"  height="60"/>
            <rect x="150" y="180" width="10"  height="60"/>
            <rect x="170" y="180" width="10"  height="60"/>
            <rect x="18"  y="90"  width="16"  height="30" rx="8" fill="#f5f5f0"/>
            <rect x="48"  y="90"  width="16"  height="30" rx="8" fill="#f5f5f0"/>
            <rect x="78"  y="90"  width="16"  height="30" rx="8" fill="#f5f5f0"/>
            <rect x="108" y="90"  width="16"  height="30" rx="8" fill="#f5f5f0"/>
            <rect x="138" y="90"  width="16"  height="30" rx="8" fill="#f5f5f0"/>
            <rect x="168" y="90"  width="16"  height="30" rx="8" fill="#f5f5f0"/>
            <rect x="28"  y="58"  width="14"  height="22" rx="7" fill="#f5f5f0"/>
            <rect x="58"  y="58"  width="14"  height="22" rx="7" fill="#f5f5f0"/>
            <rect x="88"  y="58"  width="14"  height="22" rx="7" fill="#f5f5f0"/>
            <rect x="118" y="58"  width="14"  height="22" rx="7" fill="#f5f5f0"/>
            <rect x="148" y="58"  width="14"  height="22" rx="7" fill="#f5f5f0"/>
          </g>

          {/* Estrella de cinco puntas / calidad — center floating */}
          <g transform="translate(580, 300) scale(0.6)" fill="#2d6a2d">
            <polygon points="60,5 74,40 112,40 82,62 95,97 60,75 25,97 38,62 8,40 46,40"/>
          </g>

          {/* Segunda estrella */}
          <g transform="translate(330, 800) scale(0.5)" fill="#2d6a2d">
            <polygon points="60,5 74,40 112,40 82,62 95,97 60,75 25,97 38,62 8,40 46,40"/>
          </g>
        </svg>
      </div>

      {/* Header - Sticky with blur */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-italian shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="https://metropizzacol.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <Image
                  src="/pinar-logo.png"
                  alt="Metro Pizza Logo"
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-[#f5c800] shadow-md"
                />
              </div>
              <div className="hidden sm:block">
                <span className="font-oswald font-bold text-[#228b22] text-lg leading-tight">METRO</span>
                <span className="font-oswald text-[#666] text-xs block -mt-1">PIZZA PREMIUM </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-white/50 rounded-full p-1 shadow-sm">
              {navItems.slice(0, 5).map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-oswald uppercase tracking-wider transition-all ${
                    activeSection === item.id
                      ? "bg-[#228b22] text-white shadow-md"
                      : "text-[#444] hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/80 shadow-sm"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.nav
              className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl p-4 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#228b22] via-white to-[#f5c800]" />
              <div className="grid grid-cols-2 gap-2 pt-2">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      activeSection === item.id
                        ? "bg-[#228b22] text-white shadow-md"
                        : "bg-[#f8f6f1] text-[#444] hover:bg-[#f0ece2]"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-oswald uppercase text-sm">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        className="relative pt-24 pb-8 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-6">
              <div className="text-center md:text-left">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="inline-block px-3 py-1 bg-[#f5c800]/20 text-[#228b22] rounded-full text-xs font-oswald uppercase tracking-wider mb-2 border border-[#f5c800]/30">
                    Pizzas Premium · Desde 2019
                  </span>
                </motion.div>
                <motion.h1
                  className="font-pacifico text-4xl md:text-6xl text-[#228b22] drop-shadow-sm"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Carta Menú
                </motion.h1>
                <motion.p
                  className="text-[#666] mt-3 font-oswald tracking-widest uppercase text-sm flex items-center justify-center md:justify-start gap-2"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="w-8 h-px bg-[#228b22]" />
                  @Metropizza.col
                  <span className="w-8 h-px bg-[#228b22]" />
                </motion.p>
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <Image
                  src="/pinar-logo.png"
                  alt="Metro Pizza Gourmet Logo"
                  width={150}
                  height={150}
                  className="drop-shadow-xl rounded-full border-4 border-white"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 space-y-6 relative z-10">

        {/* PIZZAS SECTION */}
        <motion.section
          id="pizzas"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            transition={{ duration: 0.3 }}
          >
            {/* Pizza watermark inside block */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity:0.04}} aria-hidden="true">
              {/* Torre de Pisa — bottom right */}
              <g transform="translate(75%, 10%) scale(1.2)" fill="#1a5c1a">
                <rect x="20" y="220" width="90" height="10" rx="4"/>
                <rect x="25" y="200" width="80" height="22" rx="3"/>
                <rect x="28" y="180" width="74" height="22" rx="3"/>
                <rect x="31" y="160" width="68" height="22" rx="3"/>
                <rect x="34" y="140" width="62" height="22" rx="3"/>
                <rect x="37" y="120" width="56" height="22" rx="3"/>
                <rect x="40" y="100" width="50" height="22" rx="3"/>
                <rect x="43" y="80"  width="44" height="22" rx="3"/>
                <ellipse cx="65" cy="75" rx="22" ry="10"/>
                <rect x="50" y="55" width="30" height="22" rx="3"/>
                <ellipse cx="65" cy="52" rx="14" ry="7"/>
                <rect x="57" y="35" width="16" height="20" rx="3"/>
                <ellipse cx="65" cy="33" rx="8" ry="5"/>
              </g>
              {/* Pizza entera — top left */}
              <g transform="translate(20, 20) scale(1.3)" fill="#1a5c1a">
                <circle cx="70" cy="70" r="68" fill="none" stroke="#1a5c1a" strokeWidth="5"/>
                <circle cx="70" cy="70" r="52" fill="none" stroke="#1a5c1a" strokeWidth="3"/>
                <line x1="70" y1="5"  x2="70" y2="135" stroke="#1a5c1a" strokeWidth="3"/>
                <line x1="5"  y1="70" x2="135" y2="70" stroke="#1a5c1a" strokeWidth="3"/>
                <line x1="22" y1="22" x2="118" y2="118" stroke="#1a5c1a" strokeWidth="2"/>
                <line x1="118" y1="22" x2="22" y2="118" stroke="#1a5c1a" strokeWidth="2"/>
                <circle cx="55" cy="50" r="6"/>
                <circle cx="88" cy="55" r="5"/>
                <circle cx="60" cy="88" r="5"/>
                <circle cx="90" cy="80" r="6"/>
              </g>
              {/* Rebanada — center */}
              <g transform="translate(45%, 55%) scale(0.9)" fill="#1a5c1a">
                <path d="M80 10 L10 160 L150 160 Z" fill="none" stroke="#1a5c1a" strokeWidth="7"/>
                <path d="M40 160 Q80 125 120 160" fill="none" stroke="#1a5c1a" strokeWidth="5"/>
                <circle cx="68" cy="108" r="8"/>
                <circle cx="98" cy="100" r="7"/>
                <circle cx="78" cy="132" r="6"/>
              </g>
            </svg>
            {/* Section Header */}
            <div className="p-4 md:p-6 flex flex-wrap items-center gap-3 border-b border-[#228b22]/10">
              <motion.span
                className="bg-[#228b22] text-white font-oswald font-bold text-sm tracking-widest uppercase px-5 py-2 rounded-full shadow-md flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Pizza className="w-4 h-4" />
                Pizzas
              </motion.span>
              <span className="bg-[#228b22] text-white font-oswald font-bold text-xs tracking-wider uppercase px-4 py-2 rounded-full shadow-md">
                Borde de Queso
              </span>
            </div>

            {/* Pizza Grid for Mobile / Table for Desktop */}
            <div className="md:hidden">
              {/* Mobile: Cards */}
              <motion.div
                className="p-4 grid gap-3"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {pizzas.map((pizza, idx) => (
                  <motion.div
                    key={pizza.name}
                    variants={fadeInUp}
                    className="bg-[#f8f6f1] rounded-2xl p-4 flex gap-4 cursor-pointer active:scale-95 transition-transform"
                    onClick={() => setSelectedProduct(pizza)}
                    whileTap={scaleOnTap}
                  >
                    <Image
                      src={pizza.img}
                      alt={pizza.name}
                      width={80}
                      height={80}
                      className="rounded-xl object-cover w-20 h-20 border-2 border-white shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-oswald font-bold text-[#228b22] uppercase text-lg truncate">{pizza.name}</h3>
                      <p className="text-xs text-[#666] mt-1 line-clamp-2">{pizza.ing}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="bg-[#228b22] text-white text-xs font-bold px-2 py-1 rounded-full">
                          Desde {formatPrice(pizza.p[0] * 1000)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Desktop: Table */}
            <div className="hidden md:block px-6 pb-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#228b22] text-white">
                    <th className="text-left px-4 py-3 font-oswald font-semibold tracking-wide uppercase rounded-tl-xl">Pizza</th>
                    <th className="px-2 py-3 font-oswald font-semibold text-xs tracking-wide uppercase">Personal</th>
                    <th className="px-2 py-3 font-oswald font-semibold text-xs tracking-wide uppercase">Pequeña</th>
                    <th className="px-2 py-3 font-oswald font-semibold text-xs tracking-wide uppercase">Mediana</th>
                    <th className="px-2 py-3 font-oswald font-semibold text-xs tracking-wide uppercase">Grande</th>
                    <th className="px-2 py-3 font-oswald font-semibold text-xs tracking-wide uppercase border-l-2 border-white/20">½ Metro</th>
                    <th className="px-2 py-3 font-oswald font-semibold text-xs tracking-wide uppercase rounded-tr-xl">1 Metro</th>
                  </tr>
                </thead>
                <tbody>
                  {pizzas.map((pizza, idx) => (
                    <motion.tr
                      key={pizza.name}
                      className={`border-b border-black/5 hover:bg-[#228b22]/5 transition-colors cursor-pointer ${idx % 2 === 0 ? 'bg-white/50' : ''}`}
                      onClick={() => setSelectedProduct(pizza)}
                      whileHover={{ backgroundColor: "rgba(34, 139, 34, 0.08)" }}
                    >
                      <td className="px-4 py-3 font-bold text-[#111] uppercase flex items-center gap-3">
                        <Image src={pizza.img} alt={pizza.name} width={40} height={40} className="rounded-lg object-cover w-10 h-10 border border-[#228b22]/20" />
                        <div>
                          <div className="text-sm">{pizza.name}</div>
                          <div className="text-[10px] text-[#666] font-normal normal-case">{pizza.ing}</div>
                        </div>
                      </td>
                      {pizza.p.map((price, i) => (
                        <td key={i} className={`px-2 py-3 text-center font-bold text-[#111] text-sm ${i === 4 ? 'border-l-2 border-[#228b22]/20' : ''}`}>
                          {price === 0 ? <span className="text-[#999]">—</span> : formatPrice(price * 1000)}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* CREPES, LASAGNA, PASTAS SECTION */}
        <motion.section
          id="crepes"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-[#228b22] to-[#1a6b1a] rounded-3xl shadow-xl overflow-hidden"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(34, 139, 34, 0.3)" }}
          >
            {/* Crepe / Lasagna watermark */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity:0.07}} aria-hidden="true">
              {/* Crepe enrollado — top right */}
              <g transform="translate(68%, 5%) scale(1.1)" fill="white">
                <ellipse cx="80" cy="40" rx="75" ry="35" fill="none" stroke="white" strokeWidth="5"/>
                <ellipse cx="80" cy="40" rx="58" ry="25" fill="none" stroke="white" strokeWidth="3"/>
                <ellipse cx="80" cy="40" rx="38" ry="15" fill="none" stroke="white" strokeWidth="2"/>
                <path d="M20 55 Q80 80 140 55" fill="none" stroke="white" strokeWidth="4"/>
                <path d="M30 65 Q80 90 130 65" fill="none" stroke="white" strokeWidth="3"/>
              </g>
              {/* Pasta — bottom left */}
              <g transform="translate(5%, 60%)" fill="none" stroke="white" strokeWidth="4">
                <path d="M0 50 Q50 10 100 50 Q150 90 200 50"/>
                <path d="M0 70 Q50 30 100 70 Q150 110 200 70"/>
                <path d="M0 90 Q50 50 100 90 Q150 130 200 90"/>
                <circle cx="100" cy="70" r="42" fill="none" strokeWidth="5"/>
              </g>
              {/* Tenedor — center right */}
              <g transform="translate(85%, 30%) scale(0.9)" fill="white">
                <rect x="30" y="10" width="8" height="130" rx="4"/>
                <rect x="26" y="10" width="4" height="48" rx="2"/>
                <rect x="38" y="10" width="4" height="48" rx="2"/>
                <rect x="22" y="10" width="4" height="48" rx="2"/>
                <rect x="60" y="10" width="6" height="130" rx="3"/>
                <path d="M60 10 Q75 30 66 52" fill="none" stroke="white" strokeWidth="6"/>
              </g>
            </svg>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6">
              {/* Crepes */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="bg-white text-[#228b22] font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <ChefHat className="w-4 h-4" />
                  Crepes
                </span>
                <motion.div
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {crepes.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      className="flex items-start gap-3 text-white cursor-pointer bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-all"
                      onClick={() => setSelectedProduct(item)}
                      variants={fadeInUp}
                      whileTap={scaleOnTap}
                    >
                      <Image src={item.img} alt={item.name} width={56} height={56} className="rounded-lg object-cover w-14 h-14 border border-white/20" />
                      <div className="flex-1 min-w-0">
                        <div className="font-oswald font-bold text-sm uppercase truncate">{item.name}</div>
                        <div className="text-xs text-white/60 line-clamp-1">{item.ing}</div>
                        <div className="font-oswald font-bold text-white mt-1">{formatPrice(item.price)}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Lasagna & Pastas */}
              <motion.div
                id="lasagna"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-white text-[#228b22] font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <ChefHat className="w-4 h-4" />
                  Lasagna
                </span>
                <motion.div
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {lasagnas.map((item) => (
                    <motion.div
                      key={item.name}
                      className="flex items-start gap-3 text-white cursor-pointer bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-all"
                      onClick={() => setSelectedProduct(item)}
                      variants={fadeInUp}
                      whileTap={scaleOnTap}
                    >
                      <Image src={item.img} alt={item.name} width={56} height={56} className="rounded-lg object-cover w-14 h-14 border border-white/20" />
                      <div className="flex-1 min-w-0">
                        <div className="font-oswald font-bold text-sm uppercase truncate">{item.name}</div>
                        <div className="text-xs text-white/60 line-clamp-1">{item.ing}</div>
                        <div className="font-oswald font-bold text-white mt-1">{formatPrice(item.price)}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Pastas */}
                <div className="mt-6">
                  <span className="bg-white text-[#228b22] font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                    <ChefHat className="w-4 h-4" />
                    Pastas
                  </span>
                  <motion.div
                    className="space-y-2"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                  >
                    {pastas.map((item) => (
                      <motion.div
                        key={item.name}
                        className="flex items-start gap-3 text-white cursor-pointer bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-all"
                        onClick={() => setSelectedProduct(item)}
                        variants={fadeInUp}
                        whileTap={scaleOnTap}
                      >
                        <Image src={item.img} alt={item.name} width={56} height={56} className="rounded-lg object-cover w-14 h-14 border border-white/20" />
                        <div className="flex-1 min-w-0">
                          <div className="font-oswald font-bold text-sm uppercase truncate">{item.name}</div>
                          <div className="text-xs text-white/60 line-clamp-1">{item.ing}</div>
                          <div className="font-oswald font-bold text-white mt-1">{formatPrice(item.price)}</div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>


            </div>
          </motion.div>
        </motion.section>

        {/* BEBIDAS SECTION */}
        <motion.section
          id="bebidas"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50 p-4 md:p-6"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
          >
            {/* Bebidas watermark */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity:0.045}} aria-hidden="true">
              {/* Botella de vino — right */}
              <g transform="translate(75%, 5%) scale(1.1)" fill="#1a5c1a">
                <rect x="35" y="120" width="30" height="130" rx="12"/>
                <rect x="30" y="215" width="40" height="15" rx="3"/>
                <path d="M42 120 Q50 88 58 120" fill="#1a5c1a"/>
                <rect x="44" y="60" width="12" height="65" rx="5"/>
                <rect x="42" y="50" width="16" height="14" rx="4"/>
                <rect x="46" y="33" width="8" height="22" rx="3"/>
                <ellipse cx="50" cy="158" rx="13" ry="5"/>
              </g>
              {/* Copa de vino — left */}
              <g transform="translate(5%, 10%) scale(1.1)" fill="#1a5c1a">
                <path d="M40 20 Q18 65 24 105 Q30 135 65 135 Q100 135 106 105 Q112 65 90 20Z" fill="none" stroke="#1a5c1a" strokeWidth="6"/>
                <rect x="60" y="133" width="10" height="65" rx="4"/>
                <rect x="38" y="195" width="54" height="9" rx="4"/>
                <ellipse cx="65" cy="82" rx="22" ry="9" fill="#1a5c1a" fillOpacity="0.4"/>
              </g>
              {/* Cerveza/lata — center */}
              <g transform="translate(42%, 15%) scale(0.9)" fill="#1a5c1a">
                <rect x="30" y="40" width="60" height="110" rx="12"/>
                <ellipse cx="60" cy="40" rx="30" ry="10"/>
                <ellipse cx="60" cy="150" rx="30" ry="10"/>
                <rect x="48" y="10" width="24" height="32" rx="6"/>
                <circle cx="60" cy="12" r="6"/>
              </g>
            </svg>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bebidas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-oswald font-bold text-[#228b22] tracking-widest uppercase border-b-2 border-[#228b22] pb-2 mb-4 flex items-center gap-2">
                  <CupSoda className="w-5 h-5" />
                  Bebidas
                </h3>
                <motion.div
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {bebidas.map((item, idx) => (
                    <motion.div
                      key={item.name}
                      className="flex justify-between items-center text-sm font-bold text-[#222] uppercase border-b border-dotted border-black/10 pb-2"
                      variants={fadeInUp}
                    >
                      <span>{item.name}</span>
                      <span className="bg-[#f8f6f1] px-2 py-1 rounded-full text-[#228b22]">{formatPrice(item.price)}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Cervezas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-oswald font-bold text-[#228b22] tracking-widest uppercase border-b-2 border-[#228b22] pb-2 mb-4 flex items-center gap-2">
                  <CupSoda className="w-5 h-5" />
                  Cervezas
                </h3>
                <motion.div
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {cervezas.map((item) => (
                    <motion.div
                      key={item.name}
                      className="flex justify-between items-center text-sm font-bold text-[#222] uppercase border-b border-dotted border-black/10 pb-2"
                      variants={fadeInUp}
                    >
                      <span>{item.name}</span>
                      <span className="bg-[#f8f6f1] px-2 py-1 rounded-full text-[#228b22]">{formatPrice(item.price)}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Logo & Contact */}
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/pinar-logo.png"
                    alt="Metro Pizza Gourmet"
                    width={120}
                    height={120}
                    className="drop-shadow-xl rounded-full border-4 border-[#228b22]"
                  />
                </motion.div>
                <p className="text-sm text-[#888] mt-4 tracking-wider font-oswald">@Metropizza.col</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* PANZEROTTI & ADICIONALES SECTION */}
        <motion.section
          id="panzerotti"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-[#228b22] to-[#1a6b1a] rounded-3xl shadow-xl overflow-hidden p-4 md:p-6"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(34, 139, 34, 0.3)" }}
          >
            {/* Panzerotti/Adicionales watermark */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity:0.07}} aria-hidden="true">
              {/* Estrella de cinco puntas — top left */}
              <g transform="translate(10%, 15%) scale(0.8)" fill="white">
                <polygon points="60,5 74,40 112,40 82,62 95,97 60,75 25,97 38,62 8,40 46,40"/>
              </g>
              {/* Vaso de Frappe/Jugo — bottom right */}
              <g transform="translate(75%, 50%) scale(1.1)" fill="none" stroke="white" strokeWidth="4">
                <path d="M30 140 L20 40 L80 40 L70 140 Z"/>
                <path d="M10 40 Q50 60 90 40"/>
                <line x1="50" y1="140" x2="50" y2="10" strokeWidth="6"/>
                <line x1="50" y1="10" x2="65" y2="0" strokeWidth="6"/>
              </g>
            </svg>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Panzerotti */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="bg-[#f5c800] text-[#111] font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <Star className="w-4 h-4" />
                  Panzerotti
                </span>
                <motion.div
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {panzerotti.map((item) => (
                    <motion.div
                      key={item.name}
                      className="flex items-start gap-3 text-white cursor-pointer bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-all"
                      onClick={() => setSelectedProduct(item)}
                      variants={fadeInUp}
                      whileTap={scaleOnTap}
                    >
                      <Image src={item.img} alt={item.name} width={56} height={56} className="rounded-lg object-cover w-14 h-14 border border-white/20" />
                      <div className="flex-1 min-w-0">
                        <div className="font-oswald font-bold text-sm uppercase truncate">{item.name}</div>
                        {item.ing && <div className="text-xs text-white/60 line-clamp-1">{item.ing}</div>}
                        <div className="font-oswald font-bold text-white mt-1">{formatPrice(item.price)}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Adicionales */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="bg-[#f5c800] text-[#111] font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <Star className="w-4 h-4" />
                  Adicionales
                </span>
                <motion.div
                  className="space-y-2"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {adicionales.map((item) => (
                    <motion.div
                      key={item.name}
                      className="flex justify-between items-center text-white font-bold uppercase text-sm border-b border-white/10 pb-2"
                      variants={fadeInUp}
                    >
                      <span className="truncate mr-2">{item.name}</span>
                      <span className="bg-white/20 px-2 py-1 rounded-full whitespace-nowrap">{formatPrice(item.price)}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Jugos & Frappes */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-[#f5c800] text-[#111] font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <CupSoda className="w-4 h-4" />
                  Jugos Naturales
                </span>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {jugos.map((item) => (
                    <div key={item.name} className="flex justify-between text-white font-bold uppercase text-xs bg-white/10 rounded-lg p-2">
                      <span className="truncate mr-1">{item.name}</span>
                      <span>{formatPrice(item.price)}</span>
                    </div>
                  ))}
                </div>

                <span className="bg-white text-[#228b22] font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <CupSoda className="w-4 h-4" />
                  Frappes
                </span>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {frappes.map((item) => (
                    <div key={item.name} className="flex justify-between text-white font-bold uppercase text-xs bg-white/10 rounded-lg p-2">
                      <span className="truncate mr-1">{item.name}</span>
                      <span>{formatPrice(item.price)}</span>
                    </div>
                  ))}
                </div>

                <motion.div
                  className="border-t border-white/20 pt-4 bg-white/10 rounded-xl p-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-white font-oswald font-bold uppercase text-sm">Jarra de Jugo</div>
                  <div className="font-oswald font-bold text-white text-2xl">{formatPrice(17000)}</div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* ESPECIALES SECTION */}
        <motion.section
          id="especiales"
          className="scroll-mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-[#f5c800] to-[#e6b800] rounded-3xl shadow-xl overflow-hidden p-4 md:p-6"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(245, 200, 0, 0.3)" }}
          >
            {/* Especiales watermark */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity:0.06}} aria-hidden="true">
              {/* Cangrejo/Mariscos — bottom left */}
              <g transform="translate(5%, 60%) scale(1.2)" fill="#1a5c1a">
                <ellipse cx="70" cy="70" rx="45" ry="30"/>
                <circle cx="55" cy="52" r="8" fill="transparent"/>
                <circle cx="85" cy="52" r="8" fill="transparent"/>
                <circle cx="55" cy="52" r="4"/>
                <circle cx="85" cy="52" r="4"/>
                <path d="M25 70 Q10 50 5 35" fill="none" stroke="#1a5c1a" strokeWidth="5"/>
                <path d="M25 70 Q8 60 0 75"  fill="none" stroke="#1a5c1a" strokeWidth="5"/>
                <path d="M115 70 Q130 50 135 35" fill="none" stroke="#1a5c1a" strokeWidth="5"/>
                <path d="M115 70 Q132 60 140 75" fill="none" stroke="#1a5c1a" strokeWidth="5"/>
                <path d="M35 95 Q30 115 20 120" fill="none" stroke="#1a5c1a" strokeWidth="5"/>
                <path d="M55 100 Q55 120 50 130" fill="none" stroke="#1a5c1a" strokeWidth="5"/>
                <path d="M85 100 Q85 120 90 130" fill="none" stroke="#1a5c1a" strokeWidth="5"/>
                <path d="M105 95 Q110 115 120 120" fill="none" stroke="#1a5c1a" strokeWidth="5"/>
              </g>
              {/* Chef Hat — top right */}
              <g transform="translate(75%, 10%) scale(1.1)" fill="#1a5c1a">
                <rect x="20" y="100" width="100" height="50" rx="5"/>
                <ellipse cx="70" cy="100" rx="50" ry="20"/>
                <path d="M30 100 Q30 40 70 30 Q110 40 110 100" fill="#1a5c1a"/>
                <ellipse cx="70" cy="35" rx="25" ry="12"/>
              </g>
            </svg>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cazuela de Mariscos */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="bg-[#228b22] text-white font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <Star className="w-4 h-4" />
                  Cazuela de Mariscos
                </span>
                <motion.div
                  className="bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer hover:bg-white/60 transition-all shadow-md"
                  onClick={() => setSelectedProduct(cazuelaMariscos)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={scaleOnTap}
                >
                  <div className="relative h-40">
                    <Image src={cazuelaMariscos.img} alt={cazuelaMariscos.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="font-oswald font-bold text-white uppercase text-lg">{cazuelaMariscos.name}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-[#444] line-clamp-2 mb-2">{cazuelaMariscos.ing}</div>
                    <div className="font-oswald font-bold text-[#228b22] text-2xl">{formatPrice(cazuelaMariscos.price)}</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Ceviche */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <span className="bg-[#228b22] text-white font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <Star className="w-4 h-4" />
                  Ceviche
                </span>
                <motion.div
                  className="space-y-3"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {ceviches.map((item) => (
                    <motion.div
                      key={item.name}
                      className="bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:bg-white/60 transition-all shadow-sm"
                      onClick={() => setSelectedProduct(item)}
                      variants={fadeInUp}
                      whileTap={scaleOnTap}
                    >
                      <div className="flex gap-3 p-3">
                        <Image src={item.img} alt={item.name} width={80} height={80} className="rounded-lg object-cover w-20 h-20" />
                        <div className="flex-1 min-w-0">
                          <div className="font-oswald font-bold text-[#111] uppercase text-sm truncate">{item.name}</div>
                          <div className="text-xs text-[#555] line-clamp-2">{item.ing}</div>
                          <div className="font-oswald font-bold text-[#228b22] mt-1">{formatPrice(item.price)}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Platos Adicionales & Menu Infantil */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-[#228b22] text-white font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <Star className="w-4 h-4" />
                  Platos Adicionales
                </span>
                <motion.div
                  className="space-y-2 mb-6"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {platosAdicionales.map((item) => (
                    <motion.div
                      key={item.name}
                      className="flex items-center gap-3 bg-white/40 backdrop-blur-sm rounded-xl p-3 cursor-pointer hover:bg-white/60 transition-all shadow-sm"
                      onClick={() => setSelectedProduct(item)}
                      variants={fadeInUp}
                      whileTap={scaleOnTap}
                    >
                      <Image src={item.img} alt={item.name} width={60} height={60} className="w-14 h-14 object-cover rounded-lg" />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-[#111] uppercase text-sm truncate">{item.name}</div>
                        <div className="font-oswald font-bold text-[#228b22]">{formatPrice(item.price)}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <span className="bg-[#228b22] text-white font-oswald font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full inline-flex items-center gap-2 mb-4 shadow-md">
                  <Star className="w-4 h-4" />
                  Menu Infantil
                </span>
                <motion.div
                  className="space-y-3"
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                >
                  {menuInfantil.map((item) => (
                    <motion.div
                      key={item.name}
                      className="bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:bg-white/60 transition-all shadow-sm"
                      onClick={() => setSelectedProduct(item)}
                      variants={fadeInUp}
                      whileTap={scaleOnTap}
                    >
                      <div className="flex gap-3 p-3">
                        <Image src={item.img} alt={item.name} width={80} height={80} className="rounded-lg object-cover w-20 h-20" />
                        <div className="flex-1 min-w-0">
                          <div className="font-oswald font-bold text-[#111] uppercase text-xs line-clamp-2">{item.name}</div>
                          <div className="font-oswald font-bold text-[#228b22] mt-1">{formatPrice(item.price)}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="bg-[#111] rounded-2xl text-center py-6 text-sm tracking-widest uppercase text-white/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-[#228b22] font-bold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Metro Pizza Premium
          </motion.span>
          <span className="mx-2">·</span>
          <span>@Metropizza.col</span>
          <span className="mx-2">·</span>
          <span>Menú Digital</span>
        </motion.footer>
      </main>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        className="fixed bottom-0 left-0 right-0 z-50 glass-italian shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden pb-safe"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: "spring", damping: 20 }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#228b22] via-white to-[#f5c800]" />
        <div className="flex justify-around items-center py-2 px-2">
          {navItems.slice(0, 5).map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-2 rounded-xl transition-all ${
                activeSection === item.id
                  ? "bg-[#228b22] text-white shadow-md"
                  : "text-[#444]"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-oswald uppercase tracking-wider">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={selectedProduct.img}
                    alt={selectedProduct.name}
                    width={400}
                    height={300}
                    className="w-full h-56 object-cover"
                  />
                </motion.div>
                <motion.button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Image
                      src="/pinar-logo.png"
                      alt="Metro Pizza"
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-white shadow-lg"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="p-5">
                <motion.h3
                  className="font-oswald font-bold text-2xl text-[#228b22] uppercase"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedProduct.name}
                </motion.h3>
                {selectedProduct.ing && (
                  <motion.p
                    className="text-[#666] mt-1"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    {selectedProduct.ing}
                  </motion.p>
                )}

                {/* Pizza con tabla de precios */}
                {selectedProduct.p && (
                  <motion.div
                    className="mt-4 grid grid-cols-3 gap-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {['Personal', 'Pequeña', 'Mediana', 'Grande', '½ Metro', '1 Metro'].map((size, i) => (
                      <motion.div
                        key={size}
                        className="bg-[#f8f6f1] rounded-xl p-3 text-center hover:bg-[#228b22]/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-xs text-[#666] uppercase font-oswald">{size}</div>
                        <div className="font-bold text-[#228b22]">{formatPrice(selectedProduct.p![i] * 1000)}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {/* Producto con precio unico */}
                {selectedProduct.price && !selectedProduct.p && (
                  <motion.div
                    className="mt-4 bg-gradient-to-r from-[#228b22] to-[#1a6b1a] rounded-2xl p-5 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-white/80 text-sm font-oswald uppercase tracking-wider">Precio</div>
                    <div className="font-oswald font-bold text-4xl text-white">{formatPrice(selectedProduct.price)}</div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Media Floating Buttons */}
      <motion.div
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-3"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <motion.a
          href="https://www.instagram.com/metropizza.col/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Seguir en Instagram"
        >
          <Instagram className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/MetropizzaGourmet/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-[#1877F2] text-white rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Seguir en Facebook"
        >
          <Facebook className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Floating Logo - Desktop Only */}
      <motion.div
        className="fixed bottom-6 left-6 z-40 hidden md:block"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/pinar-logo.png"
            alt="Metro Pizza"
            width={70}
            height={70}
            className="rounded-full border-4 border-[#f5c800] shadow-xl"
          />
        </motion.div>
      </motion.div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 left-4 md:bottom-6 md:left-24 z-40 w-10 h-10 bg-[#228b22] text-white rounded-full shadow-lg flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
