"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Mail, Phone } from "lucide-react"

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="border-b border-white/10">
          <div className="container relative flex h-20 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-3">
                <img src="/logo-bodyshop.svg" alt="Bodyshop Solutions" className="h-10 sm:h-12 md:h-16 w-auto" />
              </Link>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
              <nav className="flex gap-8">
                <Link href="/" className="text-sm font-medium text-white hover:text-blue-100">
                  Home
                </Link>
                <Link href="/#services" className="text-sm font-medium text-white hover:text-blue-100">
                  Services
                </Link>
                <Link href="/#training" className="text-sm font-medium text-white hover:text-blue-100">
                  Training
                </Link>
                <Link href="/enquiry" className="text-sm font-medium text-white hover:text-blue-100">
                  Contact
                </Link>
              </nav>
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

      {/* Confirmation Content */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your enquiry has been successfully submitted. We appreciate your interest in Bodyshop Solutions.
            </p>

            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Acknowledgment</h3>
                    <p className="text-gray-600">You'll receive an email confirmation within the next few minutes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Review & Analysis</h3>
                    <p className="text-gray-600">Our team will review your enquiry and prepare a tailored response.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Personal Response</h3>
                    <p className="text-gray-600">
                      We'll contact you within 24 hours to discuss your requirements in detail.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Phone className="h-5 w-5 mr-2 text-blue-600" />
                    Need Immediate Assistance?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">For urgent matters, feel free to call us directly:</p>
                  <p className="font-semibold text-blue-600">+61 409 258 067</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Mail className="h-5 w-5 mr-2 text-blue-600" />
                    Email Us Directly
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">You can also reach us via email:</p>
                  <p className="font-semibold text-blue-600">jasmine.dewys@bodyshopsolutions.com.au</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Return to Home
                </Button>
              </Link>
              <Link href="/#services">
                <Button size="lg" variant="outline">
                  Learn About Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                  <Link href="/#services" className="text-gray-300 hover:text-white">
                    Services
                  </Link>
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
