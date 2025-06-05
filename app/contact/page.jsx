"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Send } from "lucide-react"
import Hero from "@/components/hero"
import Footer from "@/components/footer"

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const locationsRef = useRef([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          formRef.current?.classList.add("animate-slide-up")
          locationsRef.current.forEach((location, index) => {
            setTimeout(() => {
              location?.classList.add("animate-fade-in")
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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage({
        type: "success",
        text: "Thank you for your message. We'll get back to you soon!",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        setSubmitMessage(null)
      }, 5000)
    }, 1500)
  }

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero first={"Contact Us"} second={"Get in touch with our logistics experts"} />

      {/* Contact Form and Info */}
      <section ref={sectionRef} className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {/* Interactive Communication Animation Section */}
              <div className="container mx-auto px-4 md:px-6">
                <div className="text-center py-6 mb-12">
                  <h2 className="text-3xl font-bold text-primary mb-4">Let’s Connect</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Reach out to us via email or call — we’re always ready to respond.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  {/* Animated Email Interaction */}
                  <div className="flex flex-col items-center space-y-6 animate-slide-up">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full border-4 border-accent animate-ping"></div>
                      <Mail className="w-full h-full text-accent z-10 relative animate-fade-in" />
                    </div>
                   
                  </div>

                  {/* Animated Phone Call */}
                  <div className="flex flex-col items-center space-y-6 animate-slide-up delay-200">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 rounded-full border-4 border-accent animate-ping"></div>
                      <Phone className="w-full h-full text-accent z-10 relative animate-fade-in" />
                    </div>
                    
                  </div>
                </div>

                <div className="mt-16 text-center">
                  <p className="text-gray-600">We're actively responding. Don’t hesitate to contact us.</p>
                </div>
              </div>


            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-accent mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary">Email</h3>
                    <p className="text-gray-600">info@falclin.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-accent mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary">Phone</h3>
                    <p className="text-gray-600">Nigeria: +2340916406043</p>
                    <p className="text-gray-600">Liberia: +231776771777</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-primary mb-3">Business Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Emergency services only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Locations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              FALCLIN operates in two strategic locations across West Africa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                ref={(el) => (locationsRef.current[index] = el)}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
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

      <Footer />
    </main>
  )
}
