'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Lightbulb, LightbulbOff, Video, Zap } from "lucide-react"

interface DeviceCardProps {
  name: string
  iconType: "light" | "camera" | "power" // برای انتخاب آیکون درست
  status: boolean
}

export function DeviceCard({ name, iconType, status }: DeviceCardProps) {
  const [isOn, setIsOn] = useState(status)

  const Icon = isOn 
    ? (iconType === "light" ? Lightbulb : iconType === "camera" ? Video : Zap)
    : (iconType === "light" ? LightbulbOff : iconType === "camera" ? Video : Zap)

  return (
    <Card 
      className={`
        relative bg-black/40 backdrop-blur-2xl border border-amber-600/30 
        shadow-xl hover:shadow-glow-amber hover:border-amber-500/60 
        transition-all duration-500 hover:scale-[1.04] group overflow-hidden
      `}
    >
      {/* افکت نور ملایم هنگام روشن بودن */}
      {isOn && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-80 pointer-events-none" />
      )}

      <CardHeader className="pb-3 relative z-10">
        <CardTitle className="text-amber-200 flex items-center gap-4 text-2xl font-cinzel">
          <Icon 
            className={`h-8 w-8 ${isOn ? 'text-amber-400 animate-pulse' : 'text-gray-500'}`} 
          />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xl font-medium text-gray-100">
            {isOn ? "Active" : "Inactive"}
          </span>
          <Switch 
            checked={isOn}
            onCheckedChange={setIsOn}
            className="data-[state=checked]:bg-amber-600 data-[state=unchecked]:bg-gray-700"
          />
        </div>
      </CardContent>
    </Card>
  )
}