'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Lightbulb, LightbulbOff, Video } from "lucide-react"
import { cn } from "@/lib/utils"

interface DeviceCardProps {
  name: string
  iconType: "light" | "camera"
  status: boolean
}

export function DeviceCard({ name, iconType, status }: DeviceCardProps) {
  const [isOn, setIsOn] = useState(status)

  const Icon = isOn 
    ? (iconType === "light" ? Lightbulb : Video)
    : (iconType === "light" ? LightbulbOff : Video)

  return (
    <Card 
      className={cn(
        "relative bg-black/30 backdrop-blur-2xl border border-amber-600/40 rounded-2xl overflow-hidden",
        "shadow-xl transition-all duration-700 group",
        isOn ? "animate-magic-glow border-amber-500/70 shadow-[0_0_35px_12px_rgba(245,158,11,0.4)]" : "",
        "hover:shadow-[0_0_40px_15px_rgba(245,158,11,0.5)] hover:border-amber-500/80 hover:scale-[1.04]"
      )}
    >
      {/* افکت درخشش جادویی داخل کارت وقتی روشن هست */}
      {isOn && (
        <div className="absolute inset-0 bg-gradient-radial from-amber-500/30 via-amber-600/10 to-transparent opacity-90 pointer-events-none animate-pulse-slow" />
      )}

      <CardHeader className="pb-3 relative z-10">
        <CardTitle className="text-amber-200 flex items-center gap-4 text-2xl font-cinzel tracking-wide">
          <Icon 
            className={cn(
              "h-9 w-9 transition-all duration-500",
              isOn ? "text-amber-400 animate-pulse scale-110 drop-shadow-[0_0_15px_rgba(245,158,11,0.8)]" : "text-gray-500"
            )} 
          />
          {name}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10">
        <div className="flex items-center justify-between">
          <span className={cn(
            "text-xl font-medium transition-colors duration-500",
            isOn ? "text-amber-300 drop-shadow-md" : "text-gray-300"
          )}>
            {isOn ? "Illuminated" : "Darkened"}
          </span>
          <Switch 
            checked={isOn}
            onCheckedChange={setIsOn}
            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-600 data-[state=checked]:to-amber-500 data-[state=unchecked]:bg-gray-700"
          />
        </div>
      </CardContent>
    </Card>
  )
}