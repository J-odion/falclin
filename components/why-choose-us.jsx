"use client"

import { useEffect, useRef } from "react"
import { Shield, Clock, Globe, Users } from "lucide-react"

export default function WhyChooseUs() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cardsRef.current.forEach((card, index) => {
            setTimeout(() => {
              card?.classList.add("animate-slide-up")
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

  const reasons = [
    {
      title: "Proven Reliability",
      description: "Years of experience delivering secure and dependable logistics solutions",
      icon: <Shield className="h-8 w-8 text-accent" />,
    },
    {
      title: "Swift Delivery",
      description: "Fast and efficient services to meet your urgent logistics needs",
      icon: <Clock className="h-8 w-8 text-accent" />,
    },
    {
      title: "Regional Expertise",
      description: "Deep understanding of West African markets and logistics infrastructure",
      icon: <Globe className="h-8 w-8 text-accent" />,
    },
    {
      title: "Expert Team",
      description: "Skilled professionals dedicated to providing exceptional service",
      icon: <Users className="h-8 w-8 text-accent" />,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Why Choose FALCLIN?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine local expertise with international standards to deliver exceptional logistics solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)} className="text-center ">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
