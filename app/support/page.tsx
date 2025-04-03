import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, HelpCircle, BookOpen, MessageSquare, Video } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-charcoal">
                How Can We <span className="text-orange-500">Help?</span>
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Find answers, learn how to use BuildSimpli, and get support when you need it.
              </p>
              <div className="w-full max-w-md mt-4">
                <div className="relative">
                  <Input type="text" placeholder="Search for help..." className="pr-10" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-4 w-4 text-gray-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="documentation" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
                  <TabsTrigger value="documentation">Documentation</TabsTrigger>
                  <TabsTrigger value="faq">FAQ</TabsTrigger>
                  <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
                  <TabsTrigger value="contact">Contact Support</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="documentation" className="space-y-8">
                <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-8">
                  <h2 className="text-2xl font-bold tracking-tighter text-charcoal">Documentation</h2>
                  <p className="text-gray-500">Comprehensive guides to help you get the most out of BuildSimpli.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-orange-500" />
                        <CardTitle className="text-lg text-charcoal">Getting Started Guide</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">
                        Learn the basics of BuildSimpli and set up your first project.
                      </p>
                      <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                        Read Guide →
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-orange-500" />
                        <CardTitle className="text-lg text-charcoal">User Manual</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">
                        Detailed documentation covering all features and functionality.
                      </p>
                      <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                        Read Manual →
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-orange-500" />
                        <CardTitle className="text-lg text-charcoal">API Documentation</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">
                        Technical documentation for developers integrating with BuildSimpli.
                      </p>
                      <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                        Read Docs →
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-orange-500" />
                        <CardTitle className="text-lg text-charcoal">Admin Guide</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">
                        Learn how to manage users, permissions, and organization settings.
                      </p>
                      <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                        Read Guide →
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-orange-500" />
                        <CardTitle className="text-lg text-charcoal">Mobile App Guide</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">
                        Instructions for using BuildSimpli on iOS and Android devices.
                      </p>
                      <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                        Read Guide →
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-orange-500" />
                        <CardTitle className="text-lg text-charcoal">Best Practices</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">
                        Tips and recommendations for getting the most out of BuildSimpli.
                      </p>
                      <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                        Read Guide →
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-8">
                <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-8">
                  <h2 className="text-2xl font-bold tracking-tighter text-charcoal">Frequently Asked Questions</h2>
                  <p className="text-gray-500">Quick answers to common questions about BuildSimpli.</p>
                </div>
                <div className="grid gap-6 max-w-3xl mx-auto">
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg text-charcoal">How do I reset my password?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        You can reset your password by clicking on the "Forgot Password" link on the login page. Enter
                        your email address, and we'll send you instructions to create a new password.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg text-charcoal">How do I invite team members?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        To invite team members, go to Settings &gt; Team Members and click the "Invite User" button.
                        Enter their email address and select their role. They'll receive an invitation email with
                        instructions to join.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg text-charcoal">Can I export my data from BuildSimpli?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Yes, you can export your data in various formats including CSV, PDF, and Excel. Go to the
                        project or report you want to export and click the "Export" button in the top right corner.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg text-charcoal">Is my data secure?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Yes, we take security seriously. All data is encrypted both in transit and at rest. We use
                        industry-standard security practices and regular security audits to ensure your information is
                        protected.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardHeader>
                      <CardTitle className="text-lg text-charcoal">How do I cancel my subscription?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        You can cancel your subscription by going to Settings > Billing and clicking "Cancel
                        Subscription." Your account will remain active until the end of your current billing period.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex justify-center mt-8">
                  <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                    View All FAQs →
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="tutorials" className="space-y-8">
                <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-8">
                  <h2 className="text-2xl font-bold tracking-tighter text-charcoal">Video Tutorials</h2>
                  <p className="text-gray-500">Learn how to use BuildSimpli with step-by-step video guides.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    "Getting Started with BuildSimpli",
                    "Creating Your First Project",
                    "Managing Tasks and Assignments",
                    "Daily Reporting Best Practices",
                    "Document Management Tips",
                    "Team Collaboration Features",
                  ].map((title, index) => (
                    <Card key={index} className="border-none shadow-md">
                      <div className="relative aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Video className="h-12 w-12 text-gray-400" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-charcoal mb-2">{title}</h3>
                        <p className="text-sm text-gray-500 mb-3">
                          Learn how to {title.toLowerCase()} in this step-by-step tutorial.
                        </p>
                        <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                          Watch Video →
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Link href="#" className="text-orange-500 hover:underline text-sm font-medium">
                    View All Tutorials →
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-8">
                <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-8">
                  <h2 className="text-2xl font-bold tracking-tighter text-charcoal">Contact Support</h2>
                  <p className="text-gray-500">Can't find what you're looking for? Our support team is here to help.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-orange-100">
                        <MessageSquare className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">Live Chat</h3>
                      <p className="text-gray-500">Chat with our support team in real-time for immediate assistance.</p>
                      <Button className="bg-orange-500 hover:bg-orange-600 mt-2">Start Chat</Button>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-orange-100">
                        <HelpCircle className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">Submit a Ticket</h3>
                      <p className="text-gray-500">
                        Create a support ticket and we'll get back to you within 24 hours.
                      </p>
                      <Button className="bg-orange-500 hover:bg-orange-600 mt-2">Submit Ticket</Button>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-3 rounded-full bg-orange-100">
                        <BookOpen className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-bold text-charcoal">Knowledge Base</h3>
                      <p className="text-gray-500">Browse our extensive knowledge base for self-service support.</p>
                      <Button className="bg-orange-500 hover:bg-orange-600 mt-2">Browse Articles</Button>
                    </CardContent>
                  </Card>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto mt-12">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-charcoal mb-2">Early Adopter Support</h3>
                      <p className="text-gray-500">
                        As a new company founded in 2024, we're providing enhanced support to all our early customers.
                        Your feedback is invaluable to us!
                      </p>
                    </div>
                    <Button className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap">Contact Us</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter text-charcoal">We're Here to Help</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                As a new company, we're committed to providing exceptional support to each of our customers.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 mt-4">Contact Support</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

