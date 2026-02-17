'use client';  // ← این خط رو اول فایل بذار (قبل از importها)

import type { Metadata } from "next"  // اگر layout جدا باشه، این لازم نیست
// بقیه importها...

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: "url('/castle-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/65"></div>
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1 className="text-6xl md:text-7xl font-bold text-amber-300 mb-6 drop-shadow-lg">
          CastleMind AI
        </h1>
        <p className="text-2xl md:text-3xl text-gray-200 mb-12">
          Intelligent Control for Enchanted Stays
        </p>
        <button 
          onClick={() => window.location.href = '/dashboard/guest'}  // یا alert('Welcome!') برای تست
          className="px-10 py-6 bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 rounded-2xl text-white text-2xl font-semibold shadow-2xl transform hover:scale-105 transition-all"
        >
          Enter as Guest
        </button>
      </div>
    </div>
  )
}