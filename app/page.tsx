'use client'

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-fixed flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/castle-texture.jpg')",
      }}
    >
      {/* Overlay قلعه‌ای حرفه‌ای */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85 backdrop-blur-[3px]"></div>

      <div className="relative z-10 text-center max-w-5xl px-8 py-20">
        <h1 
          className="text-7xl md:text-9xl font-cinzel font-extrabold text-amber-300 mb-8 tracking-wider drop-shadow-[0_10px_40px_rgba(245,158,11,0.7)] animate-fade-in-down"
        >
          CastleMind AI
        </h1>
        <p className="text-3xl md:text-5xl text-amber-100/90 mb-16 font-light max-w-4xl mx-auto drop-shadow-lg">
          Enchant Your Stay with Intelligent Control
        </p>
        <button 
          onClick={() => window.location.href = '/dashboard/guest'}
          className="group relative px-16 py-8 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 rounded-3xl text-white text-4xl font-cinzel font-bold shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-[0_0_40px_15px_rgba(245,158,11,0.5)] border border-amber-400/40 overflow-hidden"
        >
          <span className="relative z-10">Enter as Guest</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-300/30 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </button>
      </div>
    </div>
  )
}