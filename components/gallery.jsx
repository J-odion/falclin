
"use client"

import { useState, useRef, useEffect } from "react"
import { Download } from "lucide-react"

// Sample gallery images - replace with actual wedding photos
const galleryImages = [
    {
        id: 1,
        src: "/1.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 2,
        src: "/2.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 3,
        src: "/3.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 4,
        src: "/4.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 5,
        src: "/5.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 6,
        src: "/6.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 7,
        src: "/7.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 8,
        src: "/8.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 9,
        src: "/9.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 10,
        src: "/10.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 11,
        src: "/11.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 12,
        src: "/12.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 13,
        src: "/13.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 14,
        src: "/14.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 15,
        src: "/15.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },

    {
        id: 16,
        src: "/16.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
    {
        id: 17,
        src: "/17.jpeg",
        alt: `Wedding photo of Jennifer & Karo`,
    },
]


export default function Gallery() {
    const containerRef = useRef(null)
    const [isPaused, setIsPaused] = useState(false)
    const pauseTimeoutRef = useRef(null)

    const handleMouseEnter = () => {
        setIsPaused(true)
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current)
            pauseTimeoutRef.current = null
        }
    }

    const handleMouseLeave = () => {
        pauseTimeoutRef.current = setTimeout(() => {
            setIsPaused(false)
        }, 2000)
    }

    useEffect(() => {
        return () => {
            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current)
            }
        }
    }, [])

    return (
        <section className="min-h-[60vh] w-full bg-navy/5 py-16">
            <div className="flex h-[60vh] flex-col items-center justify-center px-4">
                <h2 className="mb-8 text-4xl font-bold text-navy md:text-5xl">Our Recent Activities</h2>
                <p className="mb-8 text-sm font-thin md:text-xl text-navy">We have documented our fun moments as picture, join in the Celebration</p>

                <div className="w-full overflow-hidden">
                    <div
                        ref={containerRef}
                        className="relative flex w-max gap-4 py-4"
                        style={{
                            animation: isPaused ? "none" : "scroll-left 60s linear infinite",
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* First set of images */}
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            >
                                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />

                                {/* Rotating elements */}

                                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/40 group-hover:opacity-100">
                                    <button className="rounded-full bg-white p-2 text-navy shadow-lg transition-transform hover:scale-110">
                                        <Download size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* Duplicate set for seamless looping */}
                        {galleryImages.map((image) => (
                            <div
                                key={`dup-${image.id}`}
                                className="group relative h-64 w-64 flex-shrink-0 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                            >
                                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="h-full w-full object-cover" />

                                {/* Rotating elements */}
                                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/40 group-hover:opacity-100">
                                    <button className="rounded-full bg-white p-2 text-navy shadow-lg transition-transform hover:scale-110">
                                        <Download size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </section>
    )
}
