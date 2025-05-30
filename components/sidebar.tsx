"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Library, Plus, Search, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-60 flex-shrink-0 h-full flex flex-col gap-2 p-2">
      <div className="flex flex-col gap-2 bg-neutral-900 rounded-lg p-4">
        <Link href="/" className="flex items-center gap-3 text-xl font-bold mb-6">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-black font-bold">Z</span>
          </div>
          Zody
        </Link>
        <Link
          href="/"
          className={cn(
            "flex items-center gap-4 text-sm font-medium p-3 rounded-md transition-colors",
            pathname === "/" ? "text-white bg-neutral-800" : "text-neutral-400 hover:text-white",
          )}
        >
          <Home size={20} />
          Home
        </Link>
        <Link
          href="/search"
          className={cn(
            "flex items-center gap-4 text-sm font-medium p-3 rounded-md transition-colors",
            pathname === "/search" ? "text-white bg-neutral-800" : "text-neutral-400 hover:text-white",
          )}
        >
          <Search size={20} />
          Search
        </Link>
      </div>
      <div className="flex-1 bg-neutral-900 rounded-lg p-4 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <button className="flex items-center gap-1 text-neutral-400 hover:text-white text-sm font-medium">
            <Library size={20} />
            Your Library
          </button>
          <button className="text-neutral-400 hover:text-white rounded-full p-1">
            <Plus size={18} />
          </button>
        </div>
        <div className="space-y-1 overflow-y-auto flex-1">
          <button className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 transition-colors">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-700 to-pink-500 rounded-md flex items-center justify-center">
              <Heart size={16} className="text-white" />
            </div>
            <div className="text-left">
              <div className="text-sm font-medium">Liked Songs</div>
              <div className="text-xs text-neutral-400">Playlist • 123 songs</div>
            </div>
          </button>
          {playlists.map((playlist) => (
            <button
              key={playlist.id}
              className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-neutral-800 transition-colors"
            >
              <div className="w-12 h-12 bg-neutral-800 rounded-md overflow-hidden">
                <img
                  src={playlist.cover || "/placeholder.svg"}
                  alt={playlist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-sm font-medium">{playlist.name}</div>
                <div className="text-xs text-neutral-400">{playlist.description}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

const playlists = [
  {
    id: 1,
    name: "Chill Vibes",
    description: "Playlist • Zody",
    cover: "/images/playlist-chill-vibes.jpg",
  },
  {
    id: 2,
    name: "Workout Mix",
    description: "Playlist • Zody",
    cover: "/images/playlist-workout.jpg",
  },
  {
    id: 3,
    name: "Focus Flow",
    description: "Playlist • Zody",
    cover: "/images/playlist-focus.jpg",
  },
  {
    id: 4,
    name: "Throwback Hits",
    description: "Playlist • Zody",
    cover: "/images/playlist-throwback.jpg",
  },
]
