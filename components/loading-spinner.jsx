"use client"

import { useEffect } from "react"
import Image from "next/image"

export default function LoadingSpinner() {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      <div className="relative w-40 h-40 mb-4">
        <Image src="/logo.png" alt="FALCLIN Logo" fill className="object-contain animate-pulse" />
      </div>
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-t-accent border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-xl font-medium text-primary animate-pulse">SWIFT. SECURE. SEAMLESS.</p>
      </div>
    </div>
  )
}
