'use client'

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/castle-bg.jpg')", // عکس قلعه تیره داخل public بذار
      }}
    >
      {/* Overlay حرفه‌ای قلعه‌ای */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85 backdrop-blur-[3px]"></div>

      <div className="relative z-10 text-center max-w-5xl px-8 py-16">
        <h1 
          className="text-6xl md:text-8xl lg:text-9xl font-cinzel font-black text-amber-300 mb-8 drop-shadow-[0_8px_32px_rgba(245,158,11,0.6)] tracking-wider animate-fade-in-down"
        >
          CastleMind AI
        </h1>
        <p className="text-2xl md:text-4xl text-amber-100/90 mb-16 font-light max-w-4xl mx-auto drop-shadow-lg">
          Intelligent Control for Your Enchanted Stay
        </p>
        <button 
          onClick={() => window.location.href = '/dashboard/guest'}
          className="group relative px-16 py-8 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 rounded-3xl text-white text-3xl md:text-4xl font-cinzel font-bold shadow-2xl transform transition-all duration-500 hover:scale-110 hover:shadow-glow-amber border border-amber-400/40 overflow-hidden"
        >
          <span className="relative z-10">Enter as Guest</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-400/30 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </button>
      </div>
    </div>
  )
}