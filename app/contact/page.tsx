"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-charcoal">
                Get in <span className="text-orange-500">Touch</span>
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">Have questions about BuildSimpli? We're here to help.</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold tracking-tighter text-charcoal mb-4">Contact Information</h2>
                  <p className="text-gray-500">
                    Reach out to us with any questions about our product, pricing, or to schedule a demo.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-orange-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-charcoal">Phone</h3>
                      <p className="text-gray-500">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-orange-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-charcoal">Email</h3>
                      <p className="text-gray-500">info@buildsimpli.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-charcoal">Office</h3>
                      <p className="text-gray-500">
                        123 Construction Avenue
                        <br />
                        Suite 456
                        <br />
                        Building City, BC 12345
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold tracking-tighter text-charcoal mb-4">Office Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Monday - Friday</span>
                      <span className="text-charcoal">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Saturday - Sunday</span>
                      <span className="text-charcoal">Closed</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-gray-500">
                      <strong>Note:</strong> As a new company founded in 2024, we're committed to providing personalized
                      support to each of our early customers. Don't hesitate to reach out with any questions!
                    </p>
                  </div>
                </div>
              </div>
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-12">
                      <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="h-6 w-6 text-green-600"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">Message Sent!</h3>
                      <p className="text-gray-500 text-center">
                        Thank you for contacting us. We'll get back to you as soon as possible.
                      </p>
                      <Button className="mt-4" variant="outline" onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your company"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={handleChange}
                          className="min-h-[120px]"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-orange-500 hover:bg-orange-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Find Us</h2>
              <p className="text-gray-500">Visit our office to meet the team and see BuildSimpli in action.</p>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

