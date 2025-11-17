"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, FileText, Clock, Users } from 'lucide-react'

export default function VirtualEstimatingPage() {
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
          <img src="/images/estimator-work.jpg" alt="Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
        </div>

        <div className="container py-8 relative z-10">
          <div className="flex flex-col items-center text-center animate-in fade-in duration-1000">
            <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">Virtual Estimating Services</h1>
            <p className="max-w-2xl text-xl text-blue-100 mb-8">
              Professional remote estimating services to handle your overflow work whilst maintaining the highest
              quality standards and quick turnaround times.
            </p>
            <Link href="/enquiry">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Virtual Estimating?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your workflow with professional remote estimating that delivers accuracy, speed, and
              reliability
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Fast Turnaround</CardTitle>
                <CardDescription>
                  24-48 hour delivery on most driveable estimates, helping you maintain customer satisfaction and
                  workflow efficiency.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority handling for urgent jobs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complete quote with parts pricing</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Flexible scheduling options</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Expert Team</CardTitle>
                <CardDescription>
                  Experienced estimators with years of experience across all major vehicle makes and damage types,
                  ensuring professional service delivery.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Industry professionals</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Estimation system experts</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Multi-system syncing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, discreet process to get your estimates completed quickly and accurately
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Onboarding</h3>
              <p className="text-gray-600">
                Secure and simple onboarding process grants us easy access for virtual support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Notify Us</h3>
              <p className="text-gray-600">
                Provide us a list of job numbers with images loaded into your Quote Package
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Estimation</h3>
              <p className="text-gray-600">An experienced estimator will do a complete estimate with parts pricing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">QC & Delivery</h3>
              <p className="text-gray-600">
                We send back to you a quality checked, completed estimate ready to submit or add items as you wish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive virtual estimating services designed to support your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Most Make & Models</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive coverage for most vehicle makes and models, excluding trucks and buses
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Damage Assessment</h3>
                <p className="text-gray-600 text-sm">
                  Thorough damage evaluation with preference for driveable claims unless vehicle is stripped
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Parts Sourcing</h3>
                <p className="text-gray-600 text-sm">
                  Highly experienced PartsCheck usage ensures the right parts for every scenario
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Supplementary Support</h3>
                <p className="text-gray-600 text-sm">
                  Expert identification of money left on the table before job invoicing and pre-invoicing support
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">OEM Repair Methods</h3>
                <p className="text-gray-600 text-sm">
                  Following OEM repair methods in estimation and industry best practices
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Best Practice Systems</h3>
                <p className="text-gray-600 text-sm">
                  Experts in estimation software and external platform integration ensuring best processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Streamline Your Estimating?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our expert team handle your overflow work while you focus on what matters most - running your business
          </p>
          <Link href="/enquiry">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
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
