"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Search, Users, Shield, Target } from 'lucide-react'

export default function HomePage() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

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

            <div className="flex-shrink-0">
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
      <section className="relative bg-gray-900 text-white py-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/images/estimator-work.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="container py-12 md:py-16 relative z-10">
          <div className="flex flex-col items-center text-center animate-in fade-in duration-1000">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%287%29-jSHckluaMQtSc8CMmohqRHU8g9NA87.png" alt="Bodyshop Solutions" className="h-32 md:h-40 w-auto mb-8 drop-shadow-lg" />
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl mb-8">
              Master the Estimation Process, Minimise the Waste
            </h1>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={scrollToServices}
            >
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to optimise your collision repair business operations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Virtual Estimating */}
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Virtual Estimating Services</CardTitle>
                <CardDescription>
                  Professional remote estimating services to handle your overflow work whilst maintaining the highest
                  quality standards and quick turnaround times.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24-48 hour turnaround time</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Certified estimators with years of experience</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Seamless integration with your workflow</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Quality assurance and accuracy</span>
                  </div>
                </div>
                <div>
                  <Link href="/services/virtual-estimating">
                    <Button className="w-full bg-[#007aac] hover:bg-[#00628a]">Learn More</Button>
                  </Link>
                  <Link href="/enquiry" className="block mt-4">
                    <Button variant="outline" className="w-full bg-transparent">
                      Enquire Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Estimation Reviews */}
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Estimation Reviews</CardTitle>
                <CardDescription>
                  Targeted software analysis delivers comprehensive estimation reviews, uncovering legitimate claimable
                  items often missed or misunderstood.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Identify missed revenue opportunities</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Comprehensive line-by-line analysis</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Industry compliance verification</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Detailed improvement recommendations</span>
                  </div>
                </div>
                <div>
                  <Link href="/services/estimation-reviews">
                    <Button className="w-full bg-[#007aac] hover:bg-[#00628a]">Learn More</Button>
                  </Link>
                  <Link href="/enquiry" className="block mt-4">
                    <Button variant="outline" className="w-full bg-transparent">
                      Enquire Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Estimator Mentorship */}
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Estimator Mentorship</CardTitle>
                <CardDescription>
                  Elevate your team's expertise with personalised one-on-one guidance and training designed to improve
                  estimation accuracy, efficiency, and profitability.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Individual skills assessment and development</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Weekly one-on-one mentoring sessions</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Customised training plans and goals</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Progress tracking and performance </span>
                  </div>
                </div>
                <div>
                  <Link href="/services/estimator-mentorship">
                    <Button className="w-full bg-[#007aac] hover:bg-[#00628a]">Learn More</Button>
                  </Link>
                  <Link href="/enquiry" className="block mt-4">
                    <Button variant="outline" className="w-full bg-transparent">
                      Enquire Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive training programs to elevate your team's expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Foundations Course */}
            <Card className="h-full flex flex-col relative">
              <div className="absolute top-4 right-4">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  COMING SOON
                </span>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Foundations Course</CardTitle>
                <CardDescription>
                  Essential skills and knowledge for new estimators entering the collision repair industry
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Industry fundamentals and best practices</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Estimation software training</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Damage assessment techniques</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Professional certification preparation</span>
                  </div>
                </div>
                <Link href="/enquiry">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Enquire Now</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Advanced Process Estimation */}
            <Card className="h-full flex flex-col relative">
              <div className="absolute top-4 right-4">
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  COMING SOON
                </span>
              </div>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Advanced Process Estimation</CardTitle>
                <CardDescription>
                  Advanced techniques and strategies for experienced estimators looking to enhance their expertise
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complex damage analysis methods</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Revenue optimisation strategies</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Advanced technology integration</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Leadership and mentoring skills</span>
                  </div>
                </div>
                <Link href="/enquiry">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Enquire Now</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of collision repair shops that have improved their profitability with our expert services
          </p>
          <Link href="/enquiry">
            <Button size="lg" className="bg-white text-[#007aac] hover:bg-gray-100">
              Enquire Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img src="/logo-bodyshop.svg" alt="Bodyshop Solutions" className="h-10 w-auto mb-4" />
              <p className="text-gray-300 mb-4">
                Making estimating simpler, smarter, and more profitable for collision repair professionals.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <button onClick={scrollToServices} className="text-gray-300 hover:text-white">
                    Services
                  </button>
                </li>
                <li>
                  <Link href="/enquiry" className="text-gray-300 hover:text-white">
                    Contact
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
