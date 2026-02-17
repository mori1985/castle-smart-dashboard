'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

interface DeviceCardProps {
  name: string
  icon: string
  status: boolean
}

export function DeviceCard({ name, icon, status }: DeviceCardProps) {
  const [isOn, setIsOn] = useState(status)

  return (
    <Card className="bg-gray-900/70 border-amber-800/50 backdrop-blur-sm hover:scale-105 transition-transform">
      <CardHeader className="pb-2">
        <CardTitle className="text-amber-300 flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium">{isOn ? "On" : "Off"}</span>
          <Switch 
            checked={isOn}
            onCheckedChange={setIsOn}
          />
        </div>
      </CardContent>
    </Card>
  )
}