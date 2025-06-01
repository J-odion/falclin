"use client"

import { useEffect, useRef } from "react"
import { Truck, Ship, Shield, Package, Warehouse, Thermometer, Briefcase, Building, Printer } from "lucide-react"

export default function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add("animate-slide-up")

          cardsRef.current.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add("animate-fade-in")
            }, 100 * index)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const services = [
    {
      title: "Logistics & Supply Chain",
      description: "End-to-end logistics solutions and supply chain management systems",
      icon: <Truck className="h-8 w-8 text-accent" />,
    },
    {
      title: "Vessel Management",
      description: "Commercial & operational management, port operations, chartering, and compliance",
      icon: <Ship className="h-8 w-8 text-accent" />,
    },
    {
      title: "Security Services",
      description: "Escort services, risk management, facility security, and consultancy",
      icon: <Shield className="h-8 w-8 text-accent" />,
    },
    {
      title: "Freight & Customs",
      description: "Air, sea, and road freight, import & customs clearance through licensed brokers",
      icon: <Package className="h-8 w-8 text-accent" />,
    },
    {
      title: "Warehousing",
      description: "Storage solutions, inventory management, and distribution services",
      icon: <Warehouse className="h-8 w-8 text-accent" />,
    },
    {
      title: "Cold Chain Logistics",
      description: "Specialized transport for vaccines, perishables, and pharmaceuticals",
      icon: <Thermometer className="h-8 w-8 text-accent" />,
    },
    {
      title: "Infrastructure & Construction",
      description: "Real estate, construction & engineering services across civil and electrical domains",
      icon: <Building className="h-8 w-8 text-accent" />,
    },
    {
      title: "Events Management",
      description: "Event planning & coordination, venue setup, logistics, and branding",
      icon: <Briefcase className="h-8 w-8 text-accent" />,
    },
    {
      title: "Branding & Printing",
      description: "Corporate branding, digital & offset printing for promotional materials",
      icon: <Printer className="h-8 w-8 text-accent" />,
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FALCLIN provides comprehensive logistics and supply chain solutions across West Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)} className="service-card opacity-0">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
