"use client"

import { useState } from "react"
import { Play, Clock, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

export function MainContent() {
  const [hoveredTrack, setHoveredTrack] = useState<number | null>(null)

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-b from-emerald-900/40 to-black p-6">
      <div className="flex items-end gap-6 mb-8">
        <div className="w-56 h-56 bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-xl flex items-center justify-center">
          <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-black text-5xl font-bold">Z</span>
          </div>
        </div>
        <div>
          <div className="text-sm font-medium uppercase">Playlist</div>
          <h1 className="text-7xl font-bold mt-3 mb-6">Zody Mix</h1>
          <div className="text-sm text-neutral-300">
            <span>Created by Zody</span> • <span>50 songs, about 3 hr 20 min</span>
          </div>
        </div>
      </div>

      <div className="bg-black/30 rounded-lg p-4 mt-8">
        <div className="flex items-center gap-4 mb-6">
          <button className="bg-emerald-500 text-black rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform">
            <Play size={24} className="ml-1" />
          </button>
          <button className="text-neutral-400 hover:text-white">
            <MoreHorizontal size={24} />
          </button>
        </div>

        <table className="w-full text-left text-sm">
          <thead className="border-b border-neutral-800 text-neutral-400">
            <tr>
              <th className="pb-2 w-10">#</th>
              <th className="pb-2">Title</th>
              <th className="pb-2">Album</th>
              <th className="pb-2">Date Added</th>
              <th className="pb-2 text-right">
                <Clock size={16} />
              </th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track, index) => (
              <tr
                key={track.id}
                className={cn("hover:bg-white/10 group", hoveredTrack === track.id ? "bg-white/10" : "")}
                onMouseEnter={() => setHoveredTrack(track.id)}
                onMouseLeave={() => setHoveredTrack(null)}
              >
                <td className="py-3 px-2">
                  {hoveredTrack === track.id ? (
                    <Play size={14} className="text-white" />
                  ) : (
                    <span className="text-neutral-400">{index + 1}</span>
                  )}
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-neutral-800 rounded">
                      <img
                        src={track.albumCover || "/placeholder.svg"}
                        alt={track.album}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">{track.title}</div>
                      <div className="text-neutral-400">{track.artist}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-neutral-400">{track.album}</td>
                <td className="py-3 text-neutral-400">{track.dateAdded}</td>
                <td className="py-3 text-neutral-400 text-right">{track.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const tracks = [
  {
    id: 1,
    title: "Midnight City",
    artist: "M83",
    album: "Hurry Up, We're Dreaming",
    dateAdded: "2 days ago",
    duration: "4:03",
    albumCover: "/images/album-midnight-city.jpg",
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    dateAdded: "5 days ago",
    duration: "3:20",
    albumCover: "/images/album-blinding-lights.jpg",
  },
  {
    id: 3,
    title: "Don't Start Now",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
    dateAdded: "1 week ago",
    duration: "3:03",
    albumCover: "/images/album-future-nostalgia.jpg",
  },
  {
    id: 4,
    title: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep, Where Do We Go?",
    dateAdded: "2 weeks ago",
    duration: "3:14",
    albumCover: "/images/album-when-we-all-fall-asleep.jpg",
  },
  {
    id: 5,
    title: "Levitating",
    artist: "Dua Lipa ft. DaBaby",
    album: "Future Nostalgia",
    dateAdded: "3 weeks ago",
    duration: "3:23",
    albumCover: "/images/album-future-nostalgia.jpg",
  },
  {
    id: 6,
    title: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
    dateAdded: "1 month ago",
    duration: "3:35",
    albumCover: "/images/album-after-hours.jpg",
  },
  {
    id: 7,
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    album: "F*CK LOVE 3: OVER YOU",
    dateAdded: "1 month ago",
    duration: "2:21",
    albumCover: "/images/album-stay.jpg",
  },
]
