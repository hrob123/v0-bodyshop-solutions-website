"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Users, Target, TrendingUp, BookOpen, Award, Brain } from "lucide-react"

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
                <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
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
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/paint-booth.jpg" alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        </div>

        <div className="container py-8 relative z-10">
          <div className="flex flex-col items-center text-center animate-in fade-in duration-1000">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">Estimator Mentorship Programme</h1>
            <p className="max-w-2xl text-xl text-blue-100 mb-8">
              Elevate your team's expertise with personalised one-on-one guidance and training designed to improve
              estimation accuracy, efficiency, and profitability.
            </p>
            <Link href="/enquiry">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programme Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Mentorship Programme?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personalised development that transforms estimators into industry experts
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Personalised Development</CardTitle>
                <CardDescription>
                  Tailored mentorship programmes designed around individual strengths, weaknesses, and career goals.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Individual skills assessment</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Customised learning plans</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Goal-oriented progression</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Expert Guidance</CardTitle>
                <CardDescription>
                  Learn from industry veterans with decades of experience in collision repair estimation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Industry-certified mentors</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Real-world experience sharing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Best practice methodologies</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Measurable Results</CardTitle>
                <CardDescription>
                  Track progress with clear metrics and see tangible improvements in accuracy and efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Performance tracking</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Regular progress reviews</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Continuous improvement</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programme Structure */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Programme Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mentorship designed for sustainable skill development
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of current skills and identification of development areas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">
                Development of personalised learning plan with clear objectives and milestones
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mentoring</h3>
              <p className="text-gray-600">Regular one-on-one sessions with expert guidance and practical training</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Evaluation</h3>
              <p className="text-gray-600">Ongoing progress tracking and programme adjustment for optimal results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Learning Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive skill development across all aspects of professional estimation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Technical Skills</CardTitle>
                <CardDescription>
                  Master the technical aspects of damage assessment and repair methodology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Damage analysis techniques</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Repair methodology understanding</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Parts identification and sourcing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Labour time calculations</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Software Proficiency</CardTitle>
                <CardDescription>Become expert in estimation software and digital tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Advanced software features</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Efficiency shortcuts and tips</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Database management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Integration with other systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Customer Relations</CardTitle>
                <CardDescription>Develop skills in customer communication and relationship management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Effective communication techniques</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Handling difficult situations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Professional presentation skills</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Building trust and credibility</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Business Acumen</CardTitle>
                <CardDescription>Understand the business side of collision repair and profitability</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Profit margin optimisation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Cost control strategies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Market analysis and pricing</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Performance metrics and KPIs</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-lg">Industry Standards</CardTitle>
                <CardDescription>Stay current with industry regulations, standards, and best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Manufacturer procedures</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Insurance requirements</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Safety regulations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Environmental compliance</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">Professional Development</CardTitle>
                <CardDescription>Build leadership skills and advance your career in the industry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Leadership and mentoring</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Team management skills</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Career planning and growth</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Industry networking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#007aac]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Invest in Your Team's Future</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transform your estimators into industry experts with our comprehensive mentorship programme
          </p>
          <Link href="/enquiry">
            <Button size="lg" className="bg-white text-[#007aac] hover:bg-gray-100">
              Start Your Programme
            </Button>
          </Link>
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
