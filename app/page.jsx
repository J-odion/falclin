"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import LoadingSpinner from "@/components/loading-spinner"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FeaturedServices from "@/components/featured-services"
import WhyChooseUs from "@/components/why-choose-us"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedServices />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
