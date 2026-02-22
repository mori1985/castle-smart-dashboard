'use client'

import { DeviceCard } from "@/components/ui/DeviceCard"

export default function GuestDashboard() {
  return (
    <div 
      className="min-h-screen bg-cover bg-fixed bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/castle-texture.jpg')", // همون عکس صفحه اصلی
      }}
    >
      {/* Overlay تیره و یکنواخت برای خوانایی کارت‌ها و متن */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/85 backdrop-blur-[2px]"></div>

      {/* محتوای اصلی - z-index بالاتر از overlay */}
      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">
        {/* عنوان اصلی صفحه */}
        <h1 className="text-5xl md:text-7xl font-cinzel font-extrabold text-amber-300 mb-6 text-center drop-shadow-[0_8px_40px_rgba(245,158,11,0.7)] animate-fade-in-down tracking-wider">
          Welcome to Your Castle
        </h1>
        <p className="text-xl md:text-2xl text-amber-100/90 mb-16 text-center max-w-4xl mx-auto drop-shadow-md">
          Control lights, cameras, and enchanted devices with a tap
        </p>

        {/* گروه ۱: Interior Lights */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-cinzel font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 mb-8 text-center">
             INTERIOR LIGHTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <DeviceCard name="Main Hall Chandelier" iconType="light" status={true} />
            <DeviceCard name="Throne Room Sconces" iconType="light" status={false} />
            <DeviceCard name="Bedroom Night Lamp" iconType="light" status={true} />
            <DeviceCard name="Kitchen Pendant Lights" iconType="light" status={false} />
          </div>
        </div>

        {/* گروه ۲: Outdoor Lighting */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-cinzel font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 mb-8 text-center">
            OUTDOOR LIGHTING
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <DeviceCard name="Outdoor Govee String Lights" iconType="light" status={false} />
            <DeviceCard name="Tower Flood Lights" iconType="light" status={true} />
            <DeviceCard name="Courtyard Motion Lights" iconType="light" status={true} />
            <DeviceCard name="Garden Pathway Lanterns" iconType="light" status={false} />
          </div>
        </div>

        {/* گروه ۳: Security & Cameras */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-cinzel font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 mb-8 text-center">
             SECURITY & CAMERAS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <DeviceCard name="Front Gate Camera" iconType="camera" status={true} />
            <DeviceCard name="Entrance Doorbell Cam" iconType="camera" status={true} />
            <DeviceCard name="Backyard Security Cam" iconType="camera" status={false} />
            <DeviceCard name="Great Hall Motion Sensor" iconType="camera" status={true} />
          </div>
        </div>
      </div>
    </div>
  )
}