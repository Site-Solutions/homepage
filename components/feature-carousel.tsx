"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Project Dashboard",
    description:
      "Access all your construction projects in one place with quick navigation to daily reports, work orders, files, toolbox talks, and team management.",
    image: "/images/my-projects.png",
  },
  {
    title: "Daily Report Management",
    description:
      "Easily track the status of multiple locations with color-coded completion statuses for better visual management.",
    image: "/images/daily-report-list.png",
  },
  {
    title: "Photo Documentation",
    description:
      "Capture and organize site photos by date, making it easy to document progress and share with stakeholders.",
    image: "/images/files-gallery.png",
  },
  {
    title: "Detailed Reporting",
    description:
      "View and manage comprehensive information for each daily report, including location details, measurements, and permit status.",
    image: "/images/daily-report-detail.png",
  },
  {
    title: "Safety Toolbox Talks",
    description:
      "Assign and track safety talks across various categories including Fire Safety, PPE, and Equipment Operation.",
    image: "/images/toolbox-talk.png",
  },
]

export function FeatureCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = useCallback(() => {
    setCurrent((current) => (current === features.length - 1 ? 0 : current + 1))
  }, [])

  const prev = useCallback(() => {
    setCurrent((current) => (current === 0 ? features.length - 1 : current - 1))
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, next])

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-xl">
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center gap-8 p-6 transition-all duration-500 ease-in-out">
            <div className="w-full md:w-1/2 flex-shrink-0">
              <Card className="overflow-hidden border-none shadow-xl bg-gradient-to-b from-orange-50 to-white p-4">
                <div className="relative aspect-[9/19] w-full max-w-[280px] mx-auto">
                  <Image
                    src={features[current].image || "/placeholder.svg"}
                    alt={features[current].title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Card>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold text-charcoal">{features[current].title}</h3>
              <p className="text-gray-500">{features[current].description}</p>
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2.5 w-2.5 rounded-full transition-colors ${
                      index === current ? "bg-orange-500" : "bg-gray-300"
                    }`}
                    onClick={() => {
                      setCurrent(index)
                      setAutoplay(false)
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10 shadow-md"
        onClick={() => {
          prev()
          setAutoplay(false)
        }}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full z-10 shadow-md"
        onClick={() => {
          next()
          setAutoplay(false)
        }}
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  )
}

