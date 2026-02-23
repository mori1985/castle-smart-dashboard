'use client'

import { useState, useEffect } from 'react'
import { DeviceCard } from "@/components/ui/DeviceCard"
import { ChatBot } from "@/components/ChatBot"

export default function GuestDashboard() {
  const defaultDevices = {
    "main-hall-chandelier": true,
    "throne-room-sconces": false,
    "bedroom-night-lamp": true,
    "kitchen-pendant-lights": false,
    "outdoor-govee-string": false,
    "tower-flood-lights": true,
    "courtyard-motion-lights": true,
    "garden-pathway-lanterns": false,
    "front-gate-camera": true,
    "entrance-doorbell-cam": true,
    "backyard-security-cam": false,
    "great-hall-motion-sensor": true,
  }

  const [devices, setDevices] = useState<Record<string, boolean>>(defaultDevices)

  // بارگذاری از localStorage
  useEffect(() => {
    const saved = localStorage.getItem('castle-devices')
    if (saved) {
      try {
        setDevices(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading devices:', e)
      }
    }
  }, [])

  // ذخیره در localStorage
  useEffect(() => {
    localStorage.setItem('castle-devices', JSON.stringify(devices))
  }, [devices])

  // وقتی کارت دستی تغییر کرد، state مرکزی رو آپدیت کن
  const handleToggle = (deviceId: string, newStatus: boolean) => {
    setDevices(prev => ({
      ...prev,
      [deviceId]: newStatus,
    }))
  }

  const handleChatCommand = (command: string): string => {
  const text = command.toLowerCase().trim()
  console.log("دستور چت:", text)

  if (text.includes('turn on') || text.includes('on') || text.includes('روشن')) {
    if (text.includes('main hall') || text.includes('chandelier') || text.includes('سالن') || text.includes('hall')) {
      setDevices(prev => ({ ...prev, "main-hall-chandelier": true }))
      return "Main Hall Chandelier turned ON 🏰✨"
    }
    if (text.includes('all') || text.includes('everything') || text.includes('همه')) {
      setDevices(prev => {
        const updated = { ...prev }
        Object.keys(updated).forEach(key => {
          // فقط دستگاه‌های غیر دوربین (چراغ‌ها) رو روشن کن
          if (!key.includes('camera') && !key.includes('cam')) {
            updated[key] = true
          }
        })
        return updated
      })
      return "All lights turned ON 🌟"
    }
    return "Which light would you like to turn ON? (e.g., main hall chandelier)"
  }

  if (text.includes('turn off') || text.includes('off') || text.includes('خاموش')) {
    if (text.includes('main hall') || text.includes('chandelier') || text.includes('سالن') || text.includes('hall')) {
      setDevices(prev => ({ ...prev, "main-hall-chandelier": false }))
      return "Main Hall Chandelier turned OFF 🌙"
    }
    if (text.includes('all') || text.includes('everything') || text.includes('همه')) {
      setDevices(prev => {
        const updated = { ...prev }
        Object.keys(updated).forEach(key => {
          // فقط دستگاه‌های غیر دوربین رو خاموش کن
          if (!key.includes('camera') && !key.includes('cam')) {
            updated[key] = false
          }
        })
        return updated
      })
      return "All lights turned OFF 🌑"
    }
    return "Which light would you like to turn OFF?"
  }

  if (text.includes('camera') || text.includes('cam') || text.includes('دوربین')) {
    return "All cameras are active and monitoring 📹"
  }

  return "Sorry, I didn't understand. Try 'turn on main hall chandelier' or 'turn off all lights'"
}

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

        {/* گروه INTERIOR LIGHTS */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-cinzel font-black text-amber-300 mb-8 mt-0 text-center w-full">
            INTERIOR LIGHTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <DeviceCard 
              name="Main Hall Chandelier" 
              iconType="light" 
              status={devices["main-hall-chandelier"]} 
              deviceId="main-hall-chandelier" 
              onToggle={handleToggle}
            />
            <DeviceCard 
              name="Throne Room Sconces" 
              iconType="light" 
              status={devices["throne-room-sconces"]} 
              deviceId="throne-room-sconces" 
              onToggle={handleToggle}
            />
            <DeviceCard 
              name="Bedroom Night Lamp" 
              iconType="light" 
              status={devices["bedroom-night-lamp"]} 
              deviceId="bedroom-night-lamp" 
              onToggle={handleToggle}
            />
            <DeviceCard 
              name="Kitchen Pendant Lights" 
              iconType="light" 
              status={devices["kitchen-pendant-lights"]} 
              deviceId="kitchen-pendant-lights" 
              onToggle={handleToggle}
            />
          </div>
        </div>

        {/* گروه OUTDOOR LIGHTING */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-cinzel font-black text-amber-300 mb-8 mt-0 text-center w-full">
            OUTDOOR LIGHTING
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <DeviceCard 
              name="Outdoor Govee String Lights" 
              iconType="light" 
              status={devices["outdoor-govee-string"]} 
              deviceId="outdoor-govee-string" 
              onToggle={handleToggle}
            />
            <DeviceCard 
              name="Tower Flood Lights" 
              iconType="light" 
              status={devices["tower-flood-lights"]} 
              deviceId="tower-flood-lights" 
              onToggle={handleToggle}
            />
            <DeviceCard 
              name="Courtyard Motion Lights" 
              iconType="light" 
              status={devices["courtyard-motion-lights"]} 
              deviceId="courtyard-motion-lights" 
              onToggle={handleToggle}
            />
            <DeviceCard 
              name="Garden Pathway Lanterns" 
              iconType="light" 
              status={devices["garden-pathway-lanterns"]} 
              deviceId="garden-pathway-lanterns" 
              onToggle={handleToggle}
            />
          </div>
        </div>

        {/* گروه SECURITY & CAMERAS */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-5xl font-cinzel font-black text-amber-300 mb-8 mt-0 text-center w-full">
            SECURITY & CAMERAS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <DeviceCard 
              name="Front Gate Camera" 
              iconType="camera" 
              status={devices["front-gate-camera"]} 
              deviceId="front-gate-camera" 
              onToggle={handleToggle}
            />
            <DeviceCard 
              name="Entrance Doorbell Cam" 
              iconType="camera" 
              status={devices["entrance-doorbell-cam"]} 
              deviceId="entrance-doorbell-cam" 
              onToggle={handleToggle}
            />
            <DeviceCard 
              name="Backyard Security Cam" 
              iconType="camera" 
              status={devices["backyard-security-cam"]} 
              deviceId="backyard-security-cam" 
              onToggle={handleToggle}
            />
            <DeviceCard 
              name="Great Hall Motion Sensor" 
              iconType="camera" 
              status={devices["great-hall-motion-sensor"]} 
              deviceId="great-hall-motion-sensor" 
              onToggle={handleToggle}
            />
          </div>
        </div>
      </div>

      <ChatBot onCommand={handleChatCommand} />
    </div>
  )
}