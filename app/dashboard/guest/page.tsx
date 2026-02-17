'use client';

import { DeviceCard } from "@/components/ui/DeviceCard"   // ایمپورت اضافه شده

export default function GuestDashboard() {
  return (
    <div className="min-h-screen bg-black/80 text-white p-8">
      <h1 className="text-4xl font-bold text-amber-300 mb-8">
        Welcome to Your Castle
      </h1>
      <p className="text-xl mb-12">
        Control lights, cameras, and more with a tap.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DeviceCard name="Main Hall Lights" icon="💡" status={true} />
        <DeviceCard name="Outdoor Govee Lights" icon="🌟" status={false} />
        <DeviceCard name="Front Camera" icon="📹" status={true} />
      </div>
    </div>
  );
}