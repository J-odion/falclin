"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Heart, Shield, Truck, Wrench, GraduationCap, CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MedicalEquipment() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current?.classList.add("animate-slide-in-right")
          imageRef.current?.classList.add("animate-slide-in-left")
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
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Equipment Solutions</h1>
            <p className="text-xl">Advanced medical equipment logistics and support services</p>
          </div>
        </div>
      </section>

      {/* LINAC Section */}
      <section ref={sectionRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div ref={imageRef} className="relative h-[400px] ">
              <Image
                src="/linac-equipment.jpg"
                alt="Linear Accelerator (LINAC) Medical Equipment"
                fill
                className="object-cover rounded-lg shadow-xl"
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
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Need Medical Equipment Support?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our medical equipment specialists to discuss your LINAC or other medical equipment needs.
          </p>
          <a
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-8 rounded-md transition-all inline-block"
          >
            Contact Our Specialists
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
