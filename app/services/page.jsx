"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Heart, Wrench, GraduationCap, CheckCircle,Truck, Ship, Package, Warehouse, Thermometer, Shield, Globe, Clock } from "lucide-react"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function LogisticsServices() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const contentRef = useRef(null)
  const imageRef = useRef(null)

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
      title: "Export, Import & Customs Clearance",
      description: "End-to-end supply chain solutions with advanced tracking and forecasting systems",
      icon: <Globe className="h-8 w-8 text-accent" />,
      features: ["SCM software integration", "Real-time tracking", "Customs clearance", "Documentation handling", "Demand forecasting", "Inventory optimization"],
    },
    {
      title: "Transportation Management",
      description: "Air, sea, and road freight services with customs clearance expertise",
      icon: <Truck className="h-8 w-8 text-accent" />,
      features: ["Multi-modal transportation", "Route optimization"],
    },
    {
      title: "Vessel Management",
      description: "Commercial & operational vessel management with port operations expertise",
      icon: <Ship className="h-8 w-8 text-accent" />,
      features: ["Port operations", "Chartering services", "Crew management", "Compliance monitoring"],
    },
    {
      title: "Warehouse and Inventory Management",
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
    {
      title: "Rental Services",
      description: "Air, sea, and road freight services with customs clearance expertise",
      icon: <Truck className="h-8 w-8 text-accent" />,
      features: ["Multi-modal transportation", "Customs clearance", "Documentation handling", "Route optimization"],
    },
    {
      title: "Consultancy & Project Management",
      description: "Air, sea, and road freight services with customs clearance expertise",
      icon: <Truck className="h-8 w-8 text-accent" />,
      features: ["Multi-modal transportation", "Customs clearance", "Documentation handling", "Route optimization"],
    },
    {
      title: "Procurement & E-commerce",
      description: "Air, sea, and road freight services with customs clearance expertise",
      icon: <Truck className="h-8 w-8 text-accent" />,
      features: ["Multi-modal transportation", "Customs clearance", "Documentation handling", "Route optimization"],
    },
    {
      title: "Haulage/Distribution (Long Haul and Last Mile)",
      description: "Air, sea, and road freight services with customs clearance expertise",
      icon: <Truck className="h-8 w-8 text-accent" />,
      features: ["Multi-modal transportation", "Customs clearance", "Documentation handling", "Route optimization"],
    },
  ]
  const services = [
    {
      title: "Equipment Transportation",
      description: "Specialized logistics for sensitive medical equipment",
      icon: <Truck className="h-6 w-6 text-accent" />,
    },
    {
      title: "Installation & Setup",
      description: "Professional installation by certified technicians",
      icon: <Wrench className="h-6 w-6 text-accent" />,
    },
    {
      title: "Training Programs",
      description: "Comprehensive training for medical staff",
      icon: <GraduationCap className="h-6 w-6 text-accent" />,
    },
    {
      title: "Maintenance Support",
      description: "Ongoing technical support and maintenance",
      icon: <Shield className="h-6 w-6 text-accent" />,
    },
  ]

  const linacBenefits = [
    "Targeted cancer treatment with minimal damage to healthy tissue",
    "Advanced imaging systems for precise targeting",
    "Multiple treatment techniques (IMRT, VMAT, SRS)",
    "Built-in safety measures for proper dosage control",
    "Effective treatment for various cancer types",
    "State-of-the-art technology for optimal patient outcomes",
  ]

  return (
    <main className="min-h-screen">
      <Hero first={"Our Services"} second={"We thrive in offering "} />
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

      

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title text-center">Our Medical Equipment Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From transportation to installation and ongoing support, we provide comprehensive medical equipment
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINAC Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={imageRef} className="relative h-[600px] ">
              <Image
                src="/6.jpeg"
                alt="Linear Accelerator (LINAC) Medical Equipment"
                fill
                className="object-cover object-top rounded-lg shadow-xl"
              />
            </div>
            <div ref={contentRef} className="">
              <h2 className="section-title">Linear Accelerators (LINACs)</h2>
              <p className="text-lg mb-6">
                FALCLIN specializes in the logistics, installation, and maintenance of Linear Accelerators (LINACs),
                advanced medical devices used for external beam radiation therapy in cancer treatment.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="font-bold text-primary mb-3 flex items-center">
                  <Heart className="h-5 w-5 mr-2" />
                  How LINACs Work
                </h3>
                <p className="text-gray-600">
                  LINACs generate high-energy X-rays or electron beams that are precisely targeted to destroy cancerous
                  cells while minimizing damage to surrounding healthy tissue. They can be programmed to deliver
                  radiation that conforms to the size, shape, and location of tumors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-primary mb-3">LINAC Benefits</h3>
                <ul className="space-y-2">
                  {linacBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of LINACs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title text-center">Types of LINACs We Support</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Gantry-based LINACs</h3>
              <p className="text-gray-600 mb-4">
                The most common type offering flexibility for various radiation treatment techniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Versatile treatment options</li>
                <li>• Wide range of applications</li>
                <li>• Proven reliability</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Ring-based LINACs</h3>
              <p className="text-gray-600 mb-4">
                Advanced systems capable of delivering comprehensive treatment protocols.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Enhanced precision</li>
                <li>• Multiple treatment modes</li>
                <li>• Advanced imaging integration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Robotic-Arm Mounted LINACs</h3>
              <p className="text-gray-600 mb-4">
                Compact systems for specialized treatments like SBRT/SRS and specific IMRT applications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Compact design</li>
                <li>• Specialized treatments</li>
                <li>• High precision targeting</li>
              </ul>
            </div>
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
