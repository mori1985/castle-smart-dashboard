'use client'

import { DeviceCard } from "@/components/ui/DeviceCard"

export default function GuestDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-stone-950 to-black text-white p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-cinzel font-bold text-amber-300 mb-4 text-center drop-shadow-2xl">
          Welcome to Your Castle
        </h1>
        <p className="text-xl md:text-2xl text-amber-100/80 mb-16 text-center max-w-3xl mx-auto">
          Control lights, cameras, and enchanted devices with a tap
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DeviceCard name="Main Hall Chandelier" iconType="light" status={true} />
          <DeviceCard name="Outdoor Govee String Lights" iconType="light" status={false} />
          <DeviceCard name="Front Gate Camera" iconType="camera" status={true} />
          <DeviceCard name="Tower Flood Lights" iconType="light" status={true} />
          <DeviceCard name="Throne Room Sconces" iconType="light" status={false} />
          <DeviceCard name="Courtyard Motion Lights" iconType="power" status={true} />
        </div>
      </div>
    </div>
  )
}