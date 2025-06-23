// import { ShoppingCart } from "lucide-react";
// import Link from "next/link";
// import { Button } from "./button";
// export default function Navbar(){
//     return(
//          <header className="border-b bg-white sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
//               <span className="text-white font-bold text-sm">M</span>
//             </div>
//             <span className="text-2xl font-bold text-orange-600">MangoHQ</span>
//           </div>
//           <nav className="hidden md:flex items-center space-x-6">
//             <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
//               Shop
//             </Link>
//             <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
//               About
//             </Link>
//             <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
//               Contact
//             </Link>
//           </nav>
//           <div className="flex items-center space-x-4">
//             <Button variant="ghost" size="sm">
//               <ShoppingCart className="w-4 h-4" />
//               <span className="ml-2 hidden sm:inline">Cart (0)</span>
//             </Button>
//             <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
//               Sign In
//             </Button>
//           </div>
//         </div>
//       </header>
//     );
// }
// components/Navbar.jsx

// "use client"
// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [searchExpanded, setSearchExpanded] = useState(false);
//   const [cartOpen, setCartOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white shadow-md">
//       <div className="max-w-[90%] mx-auto flex items-center justify-between px-6 py-8">
        
//         {/* Logo */}
//         <Link href="/" className="flex items-center space-x-1">
//           <div className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center">
//             <span className="text-white font-bold text-3xl">M</span>
//           </div>
//           <span className="text-2xl font-bold text-orange-600">MangoHQ</span>
//         </Link>

//         {/* Nav Links */}
//         <nav className="hidden md:flex items-center space-x-8">
//           <Link href="/" className="text-gray-700 hover:text-orange-600 transition font-medium text-2xl">
//             Home
//           </Link>
//           <Link href="/aboutus" className="text-gray-700 hover:text-orange-600 transition font-medium text-2xl">
//             About us
//           </Link>
//           <Link href="/contactus" className="text-gray-700 hover:text-orange-600 transition font-medium text-2xl">
//             Contact us
//           </Link>
//         </nav>

//         {/* Icons */}
//         <div className="flex items-center gap-2">
          
//           {/* Search */}
//           <div className="relative flex items-center">
//             <button
//               onClick={() => setSearchExpanded(prev => !prev)}
//               className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-orange-600 transition"
//             >
//               <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="9" cy="9" r="7" />
//                 <line x1="14" y1="14" x2="19" y2="19" />
//               </svg>
//             </button>
//             <input
//               type="text"
//               placeholder="Search..."
//               className={`${
//                 searchExpanded ? 'ml-2 w-48 px-3 py-1 opacity-100' : 'w-0 opacity-0 p-0 m-0'
//               } text-sm rounded border border-gray-300 bg-white text-black transition-all duration-500`}
//             />
//           </div>

//           {/* Wishlist */}
//           <div className="relative">
//             <Link href="/wishlist" className="flex items-center p-2 text-gray-700 hover:text-orange-600 transition">
//               <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M10 17s-6-3.7-6-8.5a4 4 0 0 1 8 0 4 4 0 0 1 8 0c0 4.8-6 8.5-6 8.5z"/>
//               </svg>
//             </Link>
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
//           </div>

//           {/* Cart */}
//           <div className="relative">
//             <button
//               onClick={() => setCartOpen(true)}
//               className="flex p-2 items-center text-gray-700 hover:text-orange-600 transition"
//             >
//               <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M5 6V5a4 4 0 0 1 8 0v1"/>
//                 <rect x="2" y="6" width="14" height="10" rx="2"/>
//               </svg>
//             </button>
//             <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
//           </div>

//           {/* Mobile menu button */}
//           <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden flex flex-col space-y-1">
//             <span className="w-5 h-0.5 bg-gray-700"></span>
//             <span className="w-5 h-0.5 bg-gray-700"></span>
//             <span className="w-5 h-0.5 bg-gray-700"></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white shadow-inner">
//           <nav className="flex flex-col items-center py-2 space-y-2">
//             <Link href="/" className="text-gray-700 hover:text-orange-600 font-medium">Home</Link>
//             <Link href="/aboutus" className="text-gray-700 hover:text-orange-600 font-medium">About us</Link>
//             <Link href="/contactus" className="text-gray-700 hover:text-orange-600 font-medium">Contact us</Link>
//           </nav>
//         </div>
//       )}

//       {/* Cart Sidebar */}
//       <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-500 ${
//         cartOpen ? 'translate-x-0' : 'translate-x-full'
//       }`}>
//         <div className="flex justify-between items-center p-4 border-b">
//           <h2 className="text-lg font-semibold">Your Cart</h2>
//           <button onClick={() => setCartOpen(false)} className="text-gray-600 text-xl">&times;</button>
//         </div>
//         <div className="p-4">
//           <p className="text-gray-500">Your cart is empty.</p>
//         </div>
//       </div>
//     </header>
//   )
// }
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-[90%] mx-auto flex items-center justify-between px-6 py-8 relative">
        {/* Logo (always visible, left) */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow">
            <span className="text-white font-bold text-3xl">M</span>
          </div>
          <span className="text-2xl font-extrabold text-orange-600 tracking-wide">MangoHQ</span>
        </Link>

        {/* Centered Nav Links (desktop only) */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-12">
          <Link
            href="/"
            className="text-gray-700 hover:text-orange-600 transition font-bold text-2xl tracking-wide px-2 py-1 rounded-md hover:bg-orange-50"
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            className="text-gray-700 hover:text-orange-600 transition font-bold text-2xl tracking-wide px-2 py-1 rounded-md hover:bg-orange-50"
          >
            About us
          </Link>
          <Link
            href="/contactus"
            className="text-gray-700 hover:text-orange-600 transition font-bold text-2xl tracking-wide px-2 py-1 rounded-md hover:bg-orange-50"
          >
            Contact us
          </Link>
        </nav>

        {/* Right-side icons (desktop only) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Search */}
          <div className="relative flex items-center">
            <button
              onClick={() => setSearchExpanded((prev) => !prev)}
              className="w-12 h-12 flex items-center justify-center text-gray-700 hover:text-orange-600 transition rounded-full hover:bg-orange-50"
              aria-label="Toggle search"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="13" cy="13" r="9" />
                <line x1="20" y1="20" x2="26" y2="26" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search..."
              className={`${
                searchExpanded ? "ml-2 w-48 px-3 py-2 opacity-100" : "w-0 opacity-0 p-0 m-0"
              } text-base rounded border border-gray-300 bg-white text-black transition-all duration-500 shadow`}
            />
          </div>
          {/* Wishlist */}
          <div className="relative">
            <Link href="/wishlist" className="flex items-center p-2 text-gray-700 hover:text-orange-600 transition rounded-full hover:bg-orange-50">
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 24s-8-5-8-11a6 6 0 0 1 12 0 6 6 0 0 1 12 0c0 6-8 11-8 11z" />
              </svg>
            </Link>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
              0
            </span>
          </div>
          {/* Cart */}
          <div className="relative">
            <button
              onClick={() => setCartOpen(true)}
              className="flex p-2 items-center text-gray-700 hover:text-orange-600 transition rounded-full hover:bg-orange-50"
              aria-label="Open cart"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="8" width="20" height="14" rx="3" />
                <path d="M8 8V7a6 6 0 0 1 12 0v1" />
              </svg>
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
              0
            </span>
          </div>
        </div>

        {/* Hamburger menu (mobile only, right) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden ml-auto flex flex-col space-y-1"
          aria-label="Toggle menu"
        >
          <span className="w-7 h-1 bg-gray-700 rounded"></span>
          <span className="w-7 h-1 bg-gray-700 rounded"></span>
          <span className="w-7 h-1 bg-gray-700 rounded"></span>
        </button>
      </div>

      {/* Mobile menu (all links and icons) */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-inner border-t border-gray-200">
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-orange-600 font-bold text-2xl tracking-wide"
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-orange-600 font-bold text-2xl tracking-wide"
            >
              About us
            </Link>
            <Link
              href="/contactus"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-orange-600 font-bold text-2xl tracking-wide"
            >
              Contact us
            </Link>
            <div className="px-6 m-auto w-[80%]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full text-base rounded border border-gray-300 bg-white text-black px-3 py-2 shadow"
              />
            </div>
            <div className="flex gap-8 pt-2">
              <Link
                href="/wishlist"
                onClick={() => setMobileOpen(false)}
                className="flex items-center text-gray-700 hover:text-orange-600 transition"
                aria-label="Wishlist"
              >
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 28s-9-5.5-9-12.5a7 7 0 0 1 14 0 7 7 0 0 1 14 0c0 7-9 12.5-9 12.5z" />
                </svg>
              </Link>
              <button
                onClick={() => {
                  setCartOpen(true);
                  setMobileOpen(false);
                }}
                className="flex items-center text-gray-700 hover:text-orange-600 transition"
                aria-label="Open cart"
              >
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="10" width="22" height="16" rx="4" />
                  <path d="M9 10V8a7 7 0 0 1 14 0v2" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed  border-2 top-0 right-0 h-[99vh] w-[30rem] bg-white shadow-lg transition-transform duration-500 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-semibold p-2">Your Cart</h2>
          <button onClick={() => setCartOpen(false)} className="text-gray-600 text-4xl" aria-label="Close cart">
            &times;
          </button>
        </div>
        <div className="p-4">
          <p className="text-gray-500">Your cart is empty.</p>
        </div>
      </div>
    </header>
  );
}
