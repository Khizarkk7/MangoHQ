'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Shield, ShoppingCart, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-2xl font-bold text-orange-600">MangoHQ</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
              Shop
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
              yasir
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
              About
            </Link>
            <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-4 h-4" />
              <span className="ml-2 hidden sm:inline">Cart (0)</span>
            </Button>
            <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">🥭 Seasonal Special - 30% Off</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Premium Fresh
                <span className="text-orange-600"> Mangoes</span>
                <br />
                Delivered to Your Door
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Experience the sweetest, juiciest mangoes handpicked from our premium orchards. Farm-fresh quality
                guaranteed with every order.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8">
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 border-orange-600 text-orange-600 hover:bg-orange-50"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Quality Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Fresh mangoes"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">From 2,500+ happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Mango Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated mango packages, perfect for families and mango lovers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 5kg Package */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-green-100 text-green-800">Popular</Badge>
              </div>
              <CardHeader className="p-0">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="5kg Mango Package"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Premium 5kg Package</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Perfect for small families. Contains 15-20 premium mangoes, carefully selected for ripeness and
                  sweetness.
                </CardDescription>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-orange-600">$49.99</span>
                    <span className="text-lg text-gray-400 line-through">$69.99</span>
                  </div>
                  <Badge variant="secondary">Save 30%</Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>Premium Quality</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Truck className="w-4 h-4" />
                    <span>Free Delivery</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>

            {/* 10kg Package */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-orange-200">
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-orange-100 text-orange-800">Best Value</Badge>
              </div>
              <CardHeader className="p-0">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="10kg Mango Package"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Family 10kg Package</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Ideal for large families or mango enthusiasts. Contains 30-35 premium mangoes with guaranteed
                  freshness.
                </CardDescription>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-orange-600">$89.99</span>
                    <span className="text-lg text-gray-400 line-through">$129.99</span>
                  </div>
                  <Badge variant="secondary">Save 30%</Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>Premium Quality</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Truck className="w-4 h-4" />
                    <span>Free Delivery</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>

            {/* Custom Package */}
            <Card className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="p-0">
                <Image
                  src="/placeholder.svg?height=250&width=400"
                  alt="Custom Mango Package"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">Custom Package</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  Create your own package with different varieties and quantities. Perfect for special occasions.
                </CardDescription>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-orange-600">From $29.99</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>Your Choice</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Truck className="w-4 h-4" />
                    <span>Free Delivery</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                  Customize Package
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The mangoes from MangoHQ are absolutely incredible! Sweet, juicy, and perfectly ripe. My family can't
                  get enough of them. The 10kg package lasts us about two weeks."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Johnson"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Sumaira Kazi</p>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I've been ordering from MangoHQ for over a year now. The quality is consistently excellent, and the
                  delivery is always on time. Highly recommend the 5kg package for small families!"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Michael Chen"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Muhammad Saad</p>
                    <p className="text-sm text-gray-600">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "As a restaurant owner, I need consistent quality mangoes for my desserts. MangoHQ delivers every
                  time. Their custom packages are perfect for my business needs."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Chef Maria Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">Ali</p>
                    <p className="text-sm text-gray-600">Restaurant Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              Read More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">M</span>
                </div>
                <span className="text-2xl font-bold text-orange-400">MangoHQ</span>
              </div>
              <p className="text-gray-400">Premium fresh mangoes delivered to your door. Quality guaranteed.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Shop</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    5kg Package
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    10kg Package
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Custom Package
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Gift Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Our Farm
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Sustainability
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MangoHQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
