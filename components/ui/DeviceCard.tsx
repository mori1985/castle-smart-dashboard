'use client'

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Lightbulb, LightbulbOff, Video } from "lucide-react"
import { cn } from "@/lib/utils"

interface DeviceCardProps {
  name: string
  iconType: "light" | "camera"
  initialStatus: boolean
  deviceId: string          // ← این خیلی مهم است (شناسه منحصربه‌فرد)
}

export function DeviceCard({ name, iconType, initialStatus, deviceId }: DeviceCardProps) {
  const [isOn, setIsOn] = useState(initialStatus)

  // بارگذاری وضعیت از localStorage (با چک ایمنی کامل)
useEffect(() => {
  try {
    const saved = localStorage.getItem(`device-${deviceId}`);
    
    // اگر saved وجود داشت و null نبود
    if (saved !== null) {
      // چک کن که رشته معتبر JSON باشه
      if (saved === "undefined" || saved === "null" || saved.trim() === "") {
        // اگر داده خراب بود، وضعیت اولیه رو استفاده کن و پاکش کن
        localStorage.removeItem(`device-${deviceId}`);
      } else {
        const parsed = JSON.parse(saved);
        // فقط boolean قبول کن
        if (typeof parsed === 'boolean') {
          setIsOn(parsed);
        }
      }
    }
  } catch (error) {
    console.error(`Error parsing localStorage for ${deviceId}:`, error);
    // اگر ارور داد، وضعیت اولیه رو نگه دار و کلید رو پاک کن
    localStorage.removeItem(`device-${deviceId}`);
  }
}, [deviceId]);

  // ذخیره وضعیت جدید
  useEffect(() => {
    localStorage.setItem(`device-${deviceId}`, JSON.stringify(isOn))
  }, [isOn, deviceId])

  const Icon = isOn 
    ? (iconType === "light" ? Lightbulb : Video)
    : (iconType === "light" ? LightbulbOff : Video)

  return (
    <Card 
      className={cn(
        "relative bg-black/30 backdrop-blur-2xl border border-amber-600/40 rounded-2xl overflow-hidden",
        "shadow-xl transition-all duration-700 group",
        isOn && "animate-magic-glow border-amber-500/70 shadow-[0_0_35px_12px_rgba(245,158,11,0.4)]",
        "hover:shadow-[0_0_40px_15px_rgba(245,158,11,0.5)] hover:border-amber-500/80 hover:scale-[1.04]"
      )}
    >
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