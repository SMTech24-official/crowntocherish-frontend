"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { 
  Home, 
  BarChart2, 
  Users, 
  FileText, 
  Settings, 
  Menu,
  X
} from "lucide-react"
import Link from "next/link"

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: BarChart2, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "Customers", href: "/customers" },
  { icon: FileText, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
]

export default function DashBoardNav() {
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const NavContent = () => (
    <nav className="space-y-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-600 transition-all hover:text-gray-900",
            "hover:bg-gray-100/50 dark:text-gray-400 dark:hover:text-gray-50 dark:hover:bg-gray-800/50"
          )}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  )

  return (
    <>
      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="icon"
              className="fixed top-4 left-4 z-50 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <NavContent />
          </SheetContent>
        </Sheet>
      ) : (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div className="flex-1 flex flex-col min-h-0 bg-white/80 backdrop-blur-lg border-r border-gray-200">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-xl font-semibold">Dashboard</h1>
              </div>
              <div className="mt-5 flex-1 px-2">
                <NavContent />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}