'use client'

import { DeviceCard } from "@/components/ui/DeviceCard"

export default function GuestDashboard() {
  return (
    <div 
      className="min-h-screen bg-cover bg-fixed bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/castle-texture.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-[3px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-12">
        <h1 className="text-5xl md:text-7xl font-cinzel font-extrabold text-amber-300 mb-6 text-center drop-shadow-[0_10px_50px_rgba(245,158,11,0.8)] animate-fade-in-down tracking-wider">
          Welcome to Your Castle
        </h1>
        <p className="text-xl md:text-2xl text-amber-100/90 mb-16 text-center max-w-4xl mx-auto drop-shadow-lg">
          Control lights, cameras, and enchanted devices with a tap
        </p>

        {/* گروه ۱ */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-cinzel font-black text-amber-300 mb-8 mt-0 text-center w-full">
            INTERIOR LIGHTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <DeviceCard name="Main Hall Chandelier" iconType="light" initialStatus={true} deviceId="main-hall-chandelier" />
            <DeviceCard name="Throne Room Sconces" iconType="light" initialStatus={false} deviceId="throne-room-sconces" />
            <DeviceCard name="Bedroom Night Lamp" iconType="light" initialStatus={true} deviceId="bedroom-night-lamp" />
            <DeviceCard name="Kitchen Pendant Lights" iconType="light" initialStatus={false} deviceId="kitchen-pendant-lights" />
          </div>
        </div>

        {/* گروه ۲ */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-cinzel font-black text-amber-300 mb-8 mt-0 text-center w-full">
            OUTDOOR LIGHTING
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <DeviceCard name="Outdoor Govee String Lights" iconType="light" initialStatus={false} deviceId="outdoor-govee-string" />
            <DeviceCard name="Tower Flood Lights" iconType="light" initialStatus={true} deviceId="tower-flood-lights" />
            <DeviceCard name="Courtyard Motion Lights" iconType="light" initialStatus={true} deviceId="courtyard-motion-lights" />
            <DeviceCard name="Garden Pathway Lanterns" iconType="light" initialStatus={false} deviceId="garden-pathway-lanterns" />
          </div>
        </div>

        {/* گروه ۳ */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-cinzel font-black text-amber-300 mb-8 mt-0 text-center w-full">
            SECURITY & CAMERAS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <DeviceCard name="Front Gate Camera" iconType="camera" initialStatus={true} deviceId="front-gate-camera" />
            <DeviceCard name="Entrance Doorbell Cam" iconType="camera" initialStatus={true} deviceId="entrance-doorbell-cam" />
            <DeviceCard name="Backyard Security Cam" iconType="camera" initialStatus={false} deviceId="backyard-security-cam" />
            <DeviceCard name="Great Hall Motion Sensor" iconType="camera" initialStatus={true} deviceId="great-hall-motion-sensor" />
          </div>
        </div>
      </div>
    </div>
  )
}