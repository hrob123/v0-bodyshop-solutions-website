"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Users, Target, TrendingUp, Award, BookOpen, MessageSquare } from "lucide-react"

export default function EstimatorMentorshipPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="border-b border-white/10">
          <div className="container flex h-24 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <img src="/logo-bodyshop.svg" alt="Bodyshop Solutions" className="h-16 sm:h-18 md:h-24 w-auto" />
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" className="text-white hover:bg-white/10">
                  Home
                </Button>
              </Link>
              <Link href="/enquiry">
                <Button variant="secondary" className="hidden md:flex">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/images/estimator-work.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container py-12 md:py-16 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl mb-6">Estimator Mentorship Program</h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl">
              Elevate your team's expertise with personalised one-on-one guidance and training designed to improve
              estimation accuracy, efficiency, and profitability through our comprehensive mentorship program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/enquiry">
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                  Start Your Program
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
                onClick={() => {
                  const benefitsSection = document.getElementById("benefits")
                  if (benefitsSection) {
                    benefitsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Our Mentorship Program?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mentorship program is designed to bridge the gap between theoretical knowledge and practical
                application. We provide personalised guidance that addresses your specific challenges and goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Individual Assessment</h3>
                    <p className="text-gray-600">
                      Comprehensive evaluation of current skills and identification of improvement areas
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Customised Learning Path</h3>
                    <p className="text-gray-600">
                      Tailored mentorship programs designed around individual strengths and weaknesses
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-600">Continuous guidance and program adjustment for optimal results</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/estimator-work.jpg"
                alt="Estimator mentorship session"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive mentorship program delivers measurable improvements in estimation accuracy and
              efficiency
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* First row - 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>Improved Accuracy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Establish one streamlined workflow with a strong focus on preparation upfront, reducing disruptions
                    and keeping vehicles moving smoothly through the repair process.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle>Increased Efficiency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Gain advanced training in system usage to capture every billable item and minimise missed revenue,
                    resulting in cleaner estimates and fewer invoicing adjustments.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle>Systems Syncing Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Learn how to leverage the tools you already use to produce more accurate, profitable estimates,
                    including detailed Audanet critical fields optimisation.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Second row - 2 cards centered */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-red-600" />
                  </div>
                  <CardTitle>Industry Knowledge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Build practical expertise across real-world repair methods, assessor negotiations, and the industry
                    Code of Conduct to stay aligned with best practice and compliance.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle>Communication Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Enhance your ability to communicate effectively with customers, insurers, and team members
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures consistent progress and measurable results
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <CardTitle>Initial Assessment</CardTitle>
                <CardDescription>Comprehensive evaluation of current skills and knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Skills assessment questionnaire</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Practical estimation review</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Goal setting and planning</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Customised learning path creation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <CardTitle>Active Mentoring</CardTitle>
                <CardDescription>Regular one-on-one sessions with experienced mentors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekly mentoring sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-world case studies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Hands-on practice sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Progress tracking and feedback</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <CardTitle>Ongoing Support</CardTitle>
                <CardDescription>Continued guidance and professional development support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Monthly check-in sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Optional Spot Audit/Checks</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Industry updates and insights</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Learning Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical training to master every aspect of modern collision repair estimation
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Technical Skills Mastery</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Develop expertise across all critical areas of collision repair estimation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">Precision damage assessment and estimation</span>
              </div>
              <div className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">Manufacturer-aligned repair estimations</span>
              </div>
              <div className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">Warrantable and compliant repair methods</span>
              </div>
              <div className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">Advanced PartsCheck system proficiency</span>
              </div>
              <div className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">Advanced Audanet platform expertise</span>
              </div>
              <div className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">Estimating across all major quote systems</span>
              </div>
              <div className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">Software integration and syncing efficiency</span>
              </div>
              <div className="flex items-start bg-gray-50 p-6 rounded-lg border border-gray-200">
                <Check className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-800">Structured and transparent estimation process</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Elevate Your Estimation Skills?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our comprehensive mentorship program and transform your estimation expertise with personalised guidance
            from industry professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/enquiry">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Program Today
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src="/logo-bodyshop.svg" alt="Bodyshop Solutions" className="h-10 w-auto mb-4" />
              <p className="text-gray-300 mb-4">
                Making estimating simpler, smarter, and more profitable for collision repair professionals.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/virtual-estimating" className="text-gray-300 hover:text-white">
                    Virtual Estimating
                  </Link>
                </li>
                <li>
                  <Link href="/services/external-quote-reviews" className="text-gray-300 hover:text-white">
                    Quote Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/services/estimator-mentorship" className="text-gray-300 hover:text-white">
                    Mentorship
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-gray-300">+61 409 258 067</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300">jasmine.dewys@bodyshopsolutions.com.au</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-300">Australia Wide</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 Bodyshop Solutions. All rights reserved. | ABN: 26540295359</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
