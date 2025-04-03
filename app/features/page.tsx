import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, BarChart, Calendar, Smartphone, Shield, Cloud } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-charcoal">
                Powerful <span className="text-orange-500">Features</span> for Construction Teams
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Everything you need to manage your construction projects efficiently from start to finish.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="project" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl">
                  <TabsTrigger value="project">Project Management</TabsTrigger>
                  <TabsTrigger value="daily">Daily Reporting</TabsTrigger>
                  <TabsTrigger value="document">Document Storage</TabsTrigger>
                  <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="project" className="space-y-12">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Project Management</h2>
                    <p className="text-gray-500">
                      BuildSimpli's project management features help you create, organize, and track construction
                      projects with ease. Keep everything in one place and ensure nothing falls through the cracks.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Create Projects</span>
                          <p className="text-sm text-gray-500">
                            Set up new projects in minutes with customizable templates.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Task Assignment</span>
                          <p className="text-sm text-gray-500">
                            Assign tasks to team members with clear deadlines and priorities.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Project Timeline</span>
                          <p className="text-sm text-gray-500">
                            Visualize project schedules and track progress against milestones.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Budget Tracking</span>
                          <p className="text-sm text-gray-500">
                            Monitor project costs and compare against budgeted amounts.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Project+Management"
                      alt="Project management interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="daily" className="space-y-12">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Daily Reporting</h2>
                    <p className="text-gray-500">
                      Keep track of daily activities, work orders, and updates directly from the field. Our
                      mobile-friendly reporting tools make it easy to document progress and issues in real-time.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Daily Logs</span>
                          <p className="text-sm text-gray-500">
                            Record daily activities, weather conditions, and site visitors.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Progress Tracking</span>
                          <p className="text-sm text-gray-500">
                            Update task completion status and track overall project progress.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Issue Reporting</span>
                          <p className="text-sm text-gray-500">
                            Document and assign issues that need attention with photo attachments.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Time Tracking</span>
                          <p className="text-sm text-gray-500">
                            Log labor hours by worker, task, or project for accurate billing.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Daily+Reporting"
                      alt="Daily reporting interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="document" className="space-y-12">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Document Storage</h2>
                    <p className="text-gray-500">
                      Store all your project documents, blueprints, and photos in one secure, accessible location. Never
                      lose an important file again.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Centralized Storage</span>
                          <p className="text-sm text-gray-500">
                            Keep all project documents organized in one secure location.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Version Control</span>
                          <p className="text-sm text-gray-500">
                            Track document revisions and always access the latest version.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Photo Management</span>
                          <p className="text-sm text-gray-500">
                            Organize site photos by date, location, or project phase.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Mobile Access</span>
                          <p className="text-sm text-gray-500">
                            View and upload documents from anywhere using your mobile device.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Document+Storage"
                      alt="Document storage interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="collaboration" className="space-y-12">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Real-Time Collaboration</h2>
                    <p className="text-gray-500">
                      Keep your entire team connected and informed with BuildSimpli's collaboration tools. Improve
                      communication and reduce delays.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Team Messaging</span>
                          <p className="text-sm text-gray-500">
                            Communicate with your team through project-specific chat channels.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Notifications</span>
                          <p className="text-sm text-gray-500">
                            Receive alerts about important updates, task assignments, and deadlines.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Comment Threads</span>
                          <p className="text-sm text-gray-500">
                            Discuss specific documents, tasks, or issues with contextual comments.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 text-orange-500">✓</div>
                        <div>
                          <span className="font-medium text-charcoal">Client Portal</span>
                          <p className="text-sm text-gray-500">
                            Share progress updates and documents with clients securely.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Collaboration"
                      alt="Collaboration interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-charcoal">More Powerful Features</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                BuildSimpli is packed with features designed specifically for construction teams.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-charcoal">Scheduling</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Create and manage project schedules, assign resources, and track deadlines to keep your projects on
                    time.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-charcoal">Reporting & Analytics</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Generate detailed reports on project progress, resource utilization, and financial performance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-charcoal">Team Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Manage your team members, track availability, and assign tasks based on skills and workload.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-charcoal">Mobile App</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Access BuildSimpli from anywhere with our native mobile apps for iOS and Android devices.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-charcoal">Security</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Keep your data safe with enterprise-grade security features, including role-based permissions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-charcoal">Cloud-Based</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Access your projects from any device with an internet connection, with automatic backups and
                    updates.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-charcoal">
                  Ready to Experience BuildSimpli?
                </h2>
                <p className="text-gray-500 md:text-xl/relaxed">
                  As a new solution in 2024, we're offering special early adopter pricing and personalized onboarding.
                  Start your free trial today.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-end">
                <Button className="bg-orange-500 hover:bg-orange-600">Start Free Trial</Button>
                <Button variant="outline">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

