"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/hero"
import Gallery from "@/components/gallery"
import LoadingSpinner from "@/components/loading-spinner"
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
      <Hero first={"Premier Logistics & Supply Chain Solutions"} second={"Connecting West Africa with swift, secure, and seamless logistics services"}/>
      <FeaturedServices />
      <Gallery />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
