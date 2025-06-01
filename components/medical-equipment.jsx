"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function MedicalEquipment() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add("animate-slide-in-right")
          imageRef.current.classList.add("animate-slide-in-left")
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

  return (
    <section id="medical-equipment" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative h-[400px] opacity-0">
            <Image
              src="/linac-equipment.jpg"
              alt="Linear Accelerator (LINAC) Medical Equipment"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
          <div ref={contentRef} className="opacity-0">
            <h2 className="section-title">Medical Equipment Solutions</h2>
            <p className="text-lg mb-6">
              FALCLIN specializes in the logistics, installation, and maintenance of advanced medical equipment,
              including Linear Accelerators (LINACs) for cancer treatment.
            </p>

            <div className="space-y-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-primary mb-2">What are LINACs?</h3>
                <p>
                  Linear accelerators (LINACs) are medical devices used to deliver external beam radiation therapy for
                  cancer treatment. They generate high-energy X-rays or electron beams targeted to destroy cancerous
                  cells while minimizing damage to surrounding healthy tissue.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-primary mb-2">Our LINAC Services</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Logistics and transportation of sensitive medical equipment</li>
                  <li>Installation and setup by certified technicians</li>
                  <li>Maintenance and technical support</li>
                  <li>Training for medical staff</li>
                  <li>Compliance with international safety standards</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-md transition-all inline-block"
              >
                Inquire About Medical Equipment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
