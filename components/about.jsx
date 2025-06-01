"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add("animate-slide-in-left")
          imageRef.current.classList.add("animate-slide-in-right")
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
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="opacity-0">
            <h2 className="section-title">About FALCLIN</h2>
            <p className="text-lg mb-6">
              FALCLIN INCORPORATED is a premier logistics and project support provider in Liberia and a key player in
              West African logistics infrastructure development.
            </p>
            <p className="mb-6">
              Founded by John Bayougar Clinton and Mosoka Papa Fallah, our company delivers comprehensive logistics
              solutions across multiple sectors, including medical equipment, freight forwarding, supply chain
              management, and more.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-primary mb-2">Our Mission</h3>
                <p>
                  To provide swift, secure, and seamless logistics solutions that connect West Africa to the global
                  market.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-bold text-primary mb-2">Our Vision</h3>
                <p>To become the leading logistics provider in West Africa, known for reliability and excellence.</p>
              </div>
            </div>
          </div>
          <div ref={imageRef} className="relative h-[400px] opacity-0">
            <Image
              src="/about-image.jpg"
              alt="FALCLIN Logistics Operations"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
