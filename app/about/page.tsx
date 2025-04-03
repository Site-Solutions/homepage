import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, TrendingUp, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-charcoal">
                About <span className="text-orange-500">BuildSimpli</span>
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                We're on a mission to simplify construction project management for teams of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Our Story</h2>
                <p className="text-gray-500">
                  BuildSimpli was founded in 2024 by a team of construction professionals who were frustrated with the
                  complexity of existing project management tools. We saw firsthand how inefficient processes were
                  costing construction companies time and money.
                </p>
                <p className="text-gray-500">
                  Our founders combined their experience in construction with modern software development to create a
                  tool that actually works the way construction teams do - simple, practical, and field-ready.
                </p>
                <p className="text-gray-500">
                  As a new company, we're focused on building the best possible solution for construction teams of all
                  sizes, with a commitment to simplicity, usability, and customer satisfaction.
                </p>
              </div>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Our+Team"
                  alt="BuildSimpli team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Our Values</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                The principles that guide everything we do at BuildSimpli.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-orange-100">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">Customer First</h3>
                  <p className="text-gray-500">
                    We build for our users, not for ourselves. Every feature is designed with real construction teams in
                    mind.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-orange-100">
                    <Award className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">Quality</h3>
                  <p className="text-gray-500">
                    We're committed to excellence in everything we do, from our code to our customer support.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-orange-100">
                    <TrendingUp className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">Innovation</h3>
                  <p className="text-gray-500">
                    We're constantly improving and evolving our platform to meet the changing needs of the construction
                    industry.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="p-3 rounded-full bg-orange-100">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-charcoal">Simplicity</h3>
                  <p className="text-gray-500">
                    We believe that the best tools are the ones that get out of your way and let you focus on your work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Meet Our Team</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                The people behind BuildSimpli who are passionate about improving construction project management.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Michael Johnson",
                  role: "Founder & CEO",
                  bio: "Former construction project manager with 15 years of experience in commercial building.",
                },
                {
                  name: "Sarah Chen",
                  role: "CTO",
                  bio: "Software engineer with a background in developing tools for the construction industry.",
                },
                {
                  name: "David Rodriguez",
                  role: "Head of Product",
                  bio: "Combines construction expertise with product design to create intuitive user experiences.",
                },
                {
                  name: "Emily Williams",
                  role: "Customer Success Manager",
                  bio: "Dedicated to ensuring our customers get the most out of BuildSimpli.",
                },
                {
                  name: "James Wilson",
                  role: "Lead Developer",
                  bio: "Passionate about creating reliable, high-performance software for construction teams.",
                },
                {
                  name: "Lisa Thompson",
                  role: "Marketing Director",
                  bio: "Specializes in connecting construction professionals with the tools they need.",
                },
              ].map((member, index) => (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="relative h-32 w-32 rounded-full overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=128&width=128&text=${member.name.charAt(0)}`}
                        alt={member.name}
                        fill
                        className="object-cover bg-gray-200"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-charcoal">{member.name}</h3>
                      <p className="text-orange-500 font-medium">{member.role}</p>
                    </div>
                    <p className="text-gray-500">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Join Our Team</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                We're a new company with big ambitions. Join us in our mission to improve the construction industry.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 mt-4">View Open Positions</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

