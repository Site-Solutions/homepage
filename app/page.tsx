import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, FileText, MessageSquare, Clock } from "lucide-react"
import { FeatureCarousel } from "@/components/feature-carousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="BuildSimpli Logo" width={180} height={50} />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Features
            </Link>
            <Link href="#why-choose" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Why Choose Us
            </Link>
            <Link href="#getting-started" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Getting Started
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log In
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-charcoal">
                  Simplify Your <span className="text-orange-500">Construction</span> Project Management
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  BuildSimpli streamlines communication, documentation, and task tracking, helping you keep projects on
                  time and on budget.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-orange-500 hover:bg-orange-600">Start Free Trial</Button>
                  <Button variant="outline">Schedule Demo</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[400px]">
                  <Image
                    src="/images/my-projects.png"
                    alt="BuildSimpli mobile app"
                    width={400}
                    height={800}
                    className="rounded-lg shadow-xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-orange-100 rounded-full p-4 shadow-lg">
                    <Image src="/images/logo.png" alt="BuildSimpli Logo" width={60} height={20} className="h-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App Screenshots Carousel */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-charcoal">
                  Powerful Mobile Features
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take BuildSimpli with you to the job site with our feature-rich mobile app
                </p>
              </div>
            </div>

            <FeatureCarousel />
          </div>
        </section>

        {/* Why Choose Section */}
        <section id="why-choose" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-charcoal">
                  Why Choose BuildSimpli?
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Crafted for construction managers, site supervisors, and field workers who need a reliable,
                  easy-to-use tool.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-charcoal">Easy to Use</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Perfect for small to medium-sized construction companies looking to improve workflow efficiency
                    without complexity.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-charcoal">Field-Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Designed specifically for construction teams with features that work on-site and in the office.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-charcoal">Time-Saving</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Reduce administrative overhead and focus on what matters - completing your projects successfully.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-charcoal">
                  Key Features
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage construction projects efficiently.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <ClipboardList className="h-6 w-6 text-orange-500" />
                    <CardTitle className="text-charcoal">Project Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500 list-disc pl-5">
                    <li>Easily create and organize your construction projects in one place</li>
                    <li>Assign tasks to team members, ensuring everyone knows their responsibilities</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-orange-500" />
                    <CardTitle className="text-charcoal">Daily Reporting</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500 list-disc pl-5">
                    <li>Keep track of daily activities, work orders, and updates directly from the field</li>
                    <li>Record project completion status to stay on top of deadlines</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-orange-500" />
                    <CardTitle className="text-charcoal">Document and File Storage</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500 list-disc pl-5">
                    <li>Store project documents, blueprints, and photos securely within the app</li>
                    <li>Access necessary files anytime, from anywhere</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-orange-500" />
                    <CardTitle className="text-charcoal">Real-Time Collaboration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-500 list-disc pl-5">
                    <li>Real-time updates and notifications keep your team informed on project changes</li>
                    <li>Keep everyone in sync with dedicated communication tools designed for construction</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Getting Started Section */}
        <section id="getting-started" className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-charcoal">
                  Getting Started
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start simplifying your construction project management in just a few steps.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 mt-12">
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  1
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-charcoal">Download BuildSimpli</h3>
                  <p className="text-gray-500">
                    Available on{" "}
                    <Link href="#" className="text-orange-500 hover:underline">
                      Apple App Store
                    </Link>{" "}
                    and{" "}
                    <Link href="#" className="text-orange-500 hover:underline">
                      Google Play Store
                    </Link>
                    .
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  2
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-charcoal">Sign Up & Set Up Your Organization</h3>
                  <p className="text-gray-500">Create an account and set up your company profile.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  3
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-charcoal">Invite Your Team</h3>
                  <p className="text-gray-500">Add supervisors, field workers, and anyone involved in the project.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  4
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-charcoal">Start Managing Projects</h3>
                  <p className="text-gray-500">Create your first project, assign tasks, and upload documents.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Button className="bg-orange-500 hover:bg-orange-600">Get Started Now</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 md:py-24 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-charcoal">
                  Ready to Simplify Your Construction Projects?
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  Be among the first to experience how BuildSimpli can save time and improve efficiency for your
                  construction business.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-end">
                <Button className="bg-orange-500 hover:bg-orange-600">Start Free Trial</Button>
                <Button variant="outline">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="space-y-4">
              <Image src="/images/logo.png" alt="BuildSimpli Logo" width={150} height={40} />
              <p className="text-sm text-gray-500 max-w-xs">
                The ultimate tool for simplifying construction project management.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-charcoal">Product</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-charcoal">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-charcoal">Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                      Privacy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-500">© 2025 BuildSimpli. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-orange-500">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

