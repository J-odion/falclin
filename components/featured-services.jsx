"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Truck, Heart, ArrowRight } from "lucide-react"

export default function FeaturedServices() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.forEach((card, index) => {
            setTimeout(() => {
              card?.classList.add("animate-fade-in")
            }, 200 * index)
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
      title: "Logistics Solutions",
      description:
        "Comprehensive supply chain management, freight forwarding, and warehousing services across West Africa.",
      icon: <Truck className="h-12 w-12 text-accent" />,
      link: "/services/logistics",
      features: ["Supply Chain Management", "Freight Forwarding", "Warehousing", "Cold Chain Logistics"],
    },
    {
      title: "Medical Equipment",
      description:
        "Specialized logistics and support for advanced medical equipment including Linear Accelerators (LINACs).",
      icon: <Heart className="h-12 w-12 text-accent" />,
      link: "/services/medical-equipment",
      features: ["LINAC Installation", "Medical Transport", "Technical Support", "Staff Training"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FALCLIN provides specialized logistics solutions across two main service areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-flex items-center text-accent font-medium hover:text-accent/80 transition-colors group"
              >
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
