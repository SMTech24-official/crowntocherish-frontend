import Link from "next/link"
import { Sparkles } from "lucide-react"

export default function AiButton() {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="#aiChat"
        className="relative group"
      >
        <div className="absolute -inset-[1px] bg-gradient-to-r from-teal-400 via-[#DB2777] to-yellow-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
        <button className="relative px-6 py-4 bg-gray-950 rounded-full flex items-center gap-2 leading-none">
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
          <span className="text-white font-medium">MedSense</span>
        </button>
      </Link>
    </div>
  )
}