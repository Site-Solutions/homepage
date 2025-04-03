import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-charcoal">
                Simple, Transparent <span className="text-orange-500">Pricing</span>
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed">
                Choose the plan that's right for your construction business.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <Card className="border-none shadow-md flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-charcoal">Starter</CardTitle>
                  <CardDescription>For small contractors and teams</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-charcoal">$29</span>
                    <span className="text-gray-500">/month per user</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Up to 5 projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Basic project management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Daily reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">5GB document storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Mobile app access</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Start Free Trial</Button>
                </CardFooter>
              </Card>

              {/* Professional Plan */}
              <Card className="border-none shadow-xl flex flex-col relative">
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  MOST POPULAR
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-charcoal">Professional</CardTitle>
                  <CardDescription>For growing construction companies</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-charcoal">$49</span>
                    <span className="text-gray-500">/month per user</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Unlimited projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Advanced project management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Comprehensive reporting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">25GB document storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Team collaboration tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Client portal</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Start Free Trial</Button>
                </CardFooter>
              </Card>

              {/* Enterprise Plan */}
              <Card className="border-none shadow-md flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl text-charcoal">Enterprise</CardTitle>
                  <CardDescription>For larger construction firms</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-charcoal">$89</span>
                    <span className="text-gray-500">/month per user</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Everything in Professional</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Unlimited document storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Advanced analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Custom integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-500">Priority support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Frequently Asked Questions</h2>
              <p className="text-gray-500">Have questions about our pricing? Find answers to common questions below.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-charcoal">Do you offer a free trial?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Yes, we offer a 14-day free trial on all plans. No credit card required to get started.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-charcoal">Can I change plans later?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-charcoal">How does user pricing work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Our pricing is per user, per month. Each team member who needs access to BuildSimpli requires a
                    license.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-charcoal">Do you offer discounts?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We offer discounts for annual billing (save 15%) and for larger teams with more than 10 users.
                    Contact our sales team for details.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-charcoal">What payment methods do you accept?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    We accept all major credit cards, including Visa, Mastercard, and American Express. Enterprise
                    customers can also pay by invoice.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-charcoal">Can I cancel anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Yes, you can cancel your subscription at any time. You'll continue to have access until the end of
                    your current billing period.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-charcoal">Is BuildSimpli a new company?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    Yes, BuildSimpli was founded in 2024. While we're new to the market, our team brings years of
                    construction industry experience to the table. We're focused on providing exceptional service to our
                    early customers and continuously improving our product based on your feedback.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter text-charcoal">Early Adopter Benefits</h2>
              <p className="text-gray-500 md:text-xl/relaxed">
                As a new company launched in 2024, we're offering special benefits to our early customers, including
                extended trials and personalized onboarding.
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row mt-4">
                <Button className="bg-orange-500 hover:bg-orange-600">Contact Sales</Button>
                <Button variant="outline">Schedule Demo</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

