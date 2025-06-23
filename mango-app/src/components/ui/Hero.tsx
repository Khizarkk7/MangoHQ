// "use client"

// import type React from "react";

// import Image from "next/image";
// import { useEffect, useState } from "react";
// import mangoImg from '../../images/mango.jpg';

// export default function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     setIsVisible(true)
//   }, [])

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const rect = e.currentTarget.getBoundingClientRect()
//     setMousePosition({
//       x: (e.clientX - rect.left) / rect.width,
//       y: (e.clientY - rect.top) / rect.height,
//     })
//   }

//   // Custom SVG Icons
//   const TruckIcon = () => (
//     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={1.5}
//         d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
//       />
//     </svg>
//   )

//   const ReturnIcon = () => (
//     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={1.5}
//         d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
//       />
//     </svg>
//   )

//   const ShieldIcon = () => (
//     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={1.5}
//         d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//       />
//     </svg>
//   )

//   const MessageIcon = () => (
//     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={1.5}
//         d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//       />
//     </svg>
//   )

//   const features = [
//     {
//       icon: TruckIcon,
//       title: "Free Shipping",
//       description: "Free shipping for orders from $200",
//     },
//     {
//       icon: ReturnIcon,
//       title: "Easy returns",
//       description: "Refund within 14 days",
//     },
//     {
//       icon: ShieldIcon,
//       title: "Secure payment",
//       description: "Payment information is safe",
//     },
//     {
//       icon: MessageIcon,
//       title: "Customer care",
//       description: "Outstanding premium support",
//     },
//   ]

//   return (
//     <div className="min-h-screen border-2 border-black bg-gradient-to-br from-amber-50 to-orange-100">
//       {/* Main Hero Section */}
//       <div className="relative overflow-hidden border-2 h-[80vh]" onMouseMove={handleMouseMove}>
//         {/* Background with parallax effect */}
//         <div
//           className="absolute inset-0 transition-transform duration-300 ease-out"
//         //   style={{
//         //     transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 1}px)`,
//         //   }}
//         >
//           <Image
//             src={mangoImg}
//             alt="mango img"
//             fill
//             className="object-cover"
//             priority
//             sizes="100vw"
//           />
//         </div>

//         {/* Overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/20" />

//         {/* Content */}
//         <div className="relative z-10 container flex md:right-32 md:bottom-20 items-start border-2 border-amber-300 mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex min-h-screen border-2  border-amber-300 items-center">
//             <div className="max-w-2xl  border-2 border-amber-300">
//               {/* Subtitle */}
//               <div
//                 className={`transform transition-all duration-1000 delay-300 ${
//                   isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//                 }`}
//               >
//                 <p className="text-sm sm:text-base text-white/90 font-light tracking-wider uppercase mb-4 sm:mb-6">
//                   Reflecting Grace and Glamour
//                 </p>
//               </div>

//               {/* Main Heading */}
//               <div
//                 className={`transform transition-all duration-1000 delay-500 ${
//                   isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//                 }`}
//               >
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-8 sm:mb-12">
//                   <span className="block">Ethereal Elegance:</span>
//                   <span className="block">Embracing the Magic</span>
//                   <span className="block">of Fine</span>
//                 </h1>
//               </div>

//               {/* CTA Button */}
//               <div
//                 className={`transform transition-all duration-1000 delay-700 ${
//                   isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//                 }`}
//               >
//                 <button className="group relative bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3 text-base font-light tracking-wider uppercase cursor-pointer">
//                   <span className="relative">
//                     Shop Now
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
//                   </span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 border-2 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
//           </div>
//         </div>
//       </div>

//       {/* Features Section */}
//       <div className="bg-white border-2 border-blue-700 py-12 sm:py-16 lg:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
//             {features.map((feature, index) => {
//               const IconComponent = feature.icon
//               return (
//                 <div
//                   key={feature.title}
//                   className={`text-center group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
//                     isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
//                   }`}
//                   style={{ transitionDelay: `${1000 + index * 200}ms` }}
//                 >
//                   <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 group-hover:from-amber-200 group-hover:to-orange-200 transition-all duration-300">
//                     <div className="text-amber-700 group-hover:text-amber-800 transition-colors duration-300">
//                       <IconComponent />
//                     </div>
//                   </div>
//                   <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
//                     {feature.title}
//                   </h3>
//                   <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import mangoImg from '../../images/mango.jpg';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  // Custom SVG Icons
  const TruckIcon = () => (
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM21 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
      />
    </svg>
  )

  const ReturnIcon = () => (
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
      />
    </svg>
  )

  const ShieldIcon = () => (
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  )

  const MessageIcon = () => (
    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  )

  const features = [
    {
      icon: TruckIcon,
      title: "Free Shipping",
      description: "Free shipping for orders from $200",
    },
    {
      icon: ReturnIcon,
      title: "Easy returns",
      description: "Refund within 14 days",
    },
    {
      icon: ShieldIcon,
      title: "Secure payment",
      description: "Payment information is safe",
    },
    {
      icon: MessageIcon,
      title: "Customer care",
      description: "Outstanding premium support",
    },
  ]

  return (
    <div className="min-h-[80vh] border-2">
      {/* Main Hero Section */}
      <div className="relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh]" onMouseMove={handleMouseMove}>
        {/* Background with parallax effect */}
        <div
          className="absolute inset-0 transition-transform duration-300 ease-out"
          // Uncomment below if you want parallax effect active
          // style={{
          //   transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          // }}
        >
          <Image
            src={mangoImg}
            alt="mango img"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex items-center md:items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]">
          <div className="max-w-2xl w-full">
            {/* Subtitle */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <p className="text-xs sm:text-sm md:text-base text-white/90 font-light tracking-wider uppercase mb-3 sm:mb-4">
                Reflecting Grace and Glamour
              </p>
            </div>

            {/* Main Heading */}
            <div
              className={`transform transition-all duration-1000 delay-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight mb-6 sm:mb-8 md:mb-10">
                <span className="block text-white font-serif">Ethereal Elegance:</span>
                <span className="block text-white font-serif">Embracing the Magic of Fine</span>
                {/* <span className="block">of Fine</span> */}
              </h1>
            </div>

            {/* CTA Button */}
            <div
              className={`transform transition-all duration-1000 delay-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <button className="group relative bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-light tracking-wider uppercase cursor-pointer">
                <Link href="/shop" className="relative">
                  Shop Now
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                </Link>
              </button>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

