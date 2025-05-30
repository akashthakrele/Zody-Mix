import { Sidebar } from "@/components/sidebar"
import { Player } from "@/components/player"
import { MainContent } from "@/components/main-content"

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <Player />
    </div>
  )
}
