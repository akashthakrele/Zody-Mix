"use client"

import { useState } from "react"
import { Heart, Repeat, Shuffle, SkipBack, SkipForward, Play, Pause, Volume2, Maximize2, Mic2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"

export function Player() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(35)
  const duration = 214 // 3:34 in seconds

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="h-20 bg-neutral-900 border-t border-neutral-800 px-4 flex items-center">
      <div className="w-1/4 flex items-center gap-3">
        <div className="w-14 h-14 bg-neutral-800 rounded overflow-hidden">
          <img
            src="/images/album-midnight-city.jpg"
            alt="Midnight City by M83"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-medium">Midnight City</div>
          <div className="text-xs text-neutral-400">M83</div>
        </div>
        <button className="ml-4 text-neutral-400 hover:text-white">
          <Heart size={16} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center gap-2">
        <div className="flex items-center gap-5">
          <button className="text-neutral-400 hover:text-white">
            <Shuffle size={16} />
          </button>
          <button className="text-neutral-400 hover:text-white">
            <SkipBack size={18} />
          </button>
          <button
            className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center hover:scale-105 transition-transform"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
          </button>
          <button className="text-neutral-400 hover:text-white">
            <SkipForward size={18} />
          </button>
          <button className="text-neutral-400 hover:text-white">
            <Repeat size={16} />
          </button>
        </div>
        <div className="w-full flex items-center gap-2 text-xs text-neutral-400">
          <span>{formatTime(currentTime)}</span>
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            className="w-full h-1"
            onValueChange={(value) => setCurrentTime(value[0])}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="w-1/4 flex items-center justify-end gap-3">
        <button className="text-neutral-400 hover:text-white">
          <Mic2 size={16} />
        </button>
        <button className="text-neutral-400 hover:text-white">
          <Volume2 size={16} />
        </button>
        <Slider value={[70]} max={100} step={1} className="w-24 h-1" />
        <button className="text-neutral-400 hover:text-white">
          <Maximize2 size={16} />
        </button>
      </div>
    </div>
  )
}
