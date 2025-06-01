"use client"

import { useEffect, useRef } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Locations() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const locationsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current.classList.add("animate-slide-up")

          locationsRef.current.forEach((location, index) => {
            setTimeout(() => {
              location.classList.add("animate-fade-in")
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

  const locations = [
    {
      country: "Nigeria",
      address: "Kampala Street, Wuse 2, Abuja, Nigeria",
      phone: "+2340916406043",
      email: "info@falclin.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1354778742247!2d7.4817!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba5428e43ed%3A0x82181c5810b11a3a!2sKampala%20St%2C%20Wuse%20904101%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1653901234567!5m2!1sen!2sng",
    },
    {
      country: "Liberia",
      address: "Smythe Road Sinkor, Monrovia, Liberia",
      phone: "+231776771777",
      email: "info@falclin.com",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9676773573384!2d-10.8!3d6.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043a5df997f3151%3A0x5e23f9c9c0a93615!2sMonrovia%2C%20Liberia!5e0!3m2!1sen!2sus!4v1653901234567!5m2!1sen!2sus",
    },
  ]

  return (
    <section id="locations" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Locations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FALCLIN operates in two strategic locations across West Africa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              ref={(el) => (locationsRef.current[index] = el)}
              className="bg-white rounded-lg shadow-lg overflow-hidden opacity-0"
            >
              <div className="h-64 w-full">
                <iframe
                  src={location.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${location.country} office`}
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-4">{location.country} Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                    <p>{location.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-accent mr-3" />
                    <p>{location.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-accent mr-3" />
                    <p>{location.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
