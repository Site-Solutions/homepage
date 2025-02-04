import { Button } from "./components/button"
import { Card, CardContent } from "./components/card"
import { ClipboardList, FileText, Users2, FolderOpen } from 'lucide-react'
import Image from "next/image"
import Link from 'next/link'

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a className="flex items-center" href="#">
            <Image
              src="https://storage.googleapis.com/ss-logo-files/logos/web/primary/Color.png"
              alt="BuildSimpli Logo"
              width={160}
              height={40}
              className="h-8 w-auto"
              priority
              unoptimized
            />
          </a>
          <nav className="flex gap-8">
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#features">Features</a>
            <a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#get-started">Get Started</a>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                Simplify Your Construction Project Management
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Streamline communication, documentation, and task tracking. Keep your projects on time and on budget with BuildSimpli.
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-[#FF6700] hover:bg-[#FF6700]/90 text-white font-semibold px-8">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="text-gray-700 hover:text-gray-900 font-semibold px-8">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white" id="features">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-[#FF6700]/10">
                      <ClipboardList className="h-6 w-6 text-[#FF6700]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-900">Project Management</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Easily create and organize your construction projects in one place. Assign tasks to team members, ensuring everyone knows their responsibilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-[#FF6700]/10">
                      <FileText className="h-6 w-6 text-[#FF6700]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-900">Daily Reporting</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Keep track of daily activities, work orders, and updates directly from the field. Record project completion status to stay on top of deadlines.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-[#FF6700]/10">
                      <Users2 className="h-6 w-6 text-[#FF6700]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-900">Real-Time Collaboration</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Real-time updates and notifications keep your team informed on project changes. Keep everyone in sync with dedicated communication tools.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-[#FF6700]/10">
                      <FolderOpen className="h-6 w-6 text-[#FF6700]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-900">Document Storage</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Store project documents, blueprints, and photos securely within the app. Access necessary files anytime, from anywhere.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-50" id="get-started">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of construction professionals who are already simplifying their project management with BuildSimpli.
            </p>
            <Button size="lg" className="bg-[#FF6700] hover:bg-[#FF6700]/90 text-white font-semibold px-8">
              Sign Up Now
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">BuildSimpli</h3>
              <p className="text-sm text-gray-400">Simplifying construction project management for teams of all sizes.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li>
                  <Link href="/tos/" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2024 BuildSimpli. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}