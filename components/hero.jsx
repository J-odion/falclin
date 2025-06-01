"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen flex items-center "
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Premier Logistics & Supply Chain Solutions</h1>
          <p className="text-xl text-gray-200 mb-8">
            Connecting West Africa with swift, secure, and seamless logistics services
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2 group"
            >
              Our Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white text-white font-medium py-3 px-6 rounded-md hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
