"use client"

import { useEffect, useRef } from "react"
import { Truck, Ship, Package, Warehouse, Thermometer, Shield, Globe, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function LogisticsServices() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.forEach((card, index) => {
            setTimeout(() => {
              card?.classList.add("animate-fade-in")
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

  const logisticsServices = [
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain solutions with advanced tracking and forecasting systems",
      icon: <Globe className="h-8 w-8 text-accent" />,
      features: ["SCM software integration", "Real-time tracking", "Demand forecasting", "Inventory optimization"],
    },
    {
      title: "Freight Forwarding",
      description: "Air, sea, and road freight services with customs clearance expertise",
      icon: <Truck className="h-8 w-8 text-accent" />,
      features: ["Multi-modal transportation", "Customs clearance", "Documentation handling", "Route optimization"],
    },
    {
      title: "Vessel Management",
      description: "Commercial & operational vessel management with port operations expertise",
      icon: <Ship className="h-8 w-8 text-accent" />,
      features: ["Port operations", "Chartering services", "Crew management", "Compliance monitoring"],
    },
    {
      title: "Warehousing Solutions",
      description: "Modern warehousing facilities with inventory management systems",
      icon: <Warehouse className="h-8 w-8 text-accent" />,
      features: ["Climate-controlled storage", "Inventory management", "Pick & pack services", "Distribution"],
    },
    {
      title: "Cold Chain Logistics",
      description: "Specialized temperature-controlled logistics for sensitive cargo",
      icon: <Thermometer className="h-8 w-8 text-accent" />,
      features: ["Temperature monitoring", "Pharmaceutical transport", "Vaccine distribution", "Perishables handling"],
    },
    {
      title: "Security & Risk Management",
      description: "Comprehensive security services and risk assessment for logistics operations",
      icon: <Shield className="h-8 w-8 text-accent" />,
      features: ["Escort services", "Facility security", "Risk assessment", "Emergency response"],
    },
    {
      title: "Dangerous Goods Handling",
      description: "Certified handling and transport of hazardous materials",
      icon: <Package className="h-8 w-8 text-accent" />,
      features: ["IMO/IATA compliance", "Certified packaging", "Safety documentation", "Specialized transport"],
    },
    {
      title: "Last-Mile Delivery",
      description: "Efficient last-mile delivery solutions for urban and rural areas",
      icon: <Clock className="h-8 w-8 text-accent" />,
      features: ["Urban delivery", "Rural access", "Real-time tracking", "Flexible scheduling"],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Logistics Services</h1>
            <p className="text-xl">Comprehensive logistics solutions across West Africa</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title text-center">Our Logistics Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From supply chain management to last-mile delivery, we provide end-to-end logistics solutions that keep
              your business moving forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logisticsServices.map((service, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Optimize Your Logistics?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our logistics experts to discuss how we can streamline your supply chain and reduce costs.
          </p>
          <a
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-md transition-all inline-block"
          >
            Get a Quote
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
