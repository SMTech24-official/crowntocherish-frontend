'use client'

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "../logo/Logo"
import { usePathname, useRouter } from "next/navigation"
import AiButton from "@/components/aiButton/AiButton"

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const router = useRouter()
    const pathName = usePathname();

    const navLinks = [
        { link: "/", id: 'home', label: 'Home' },
        { link: "/about-us", id: 'about-us', label: 'About Us' },
        { link: "/how-it-works", id: 'how-it-Works', label: 'How It Works' },
        { link: "/services", id: 'services', label: 'Services' },
        { link: "/disclaimer", id: 'disclaimer', label: 'Disclaimer' },
        { link: "/contact-us", id: 'contact-us', label: 'Contact Us' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (navId: string, link: string) => {
        router.push(`${link}`)
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled
                ? "bg-gradient-to-tr from-[#e0afb9] via-[#FECDD3] to-[#FECDD3] shadow-lg py-2"
                : "bg-gradient-to-tr from-[#e0afb9]/90 via-[#FECDD3]/90 to-[#FFE4E6]/90 backdrop-blur-sm py-4"
        )}>
            {/* Yellow curved accent at the top */}
            {/* <div className="absolute top-0 left-0 right-0 h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-[#FEF08A] via-[#FDE047] to-[#FACC15]" />
            </div> */}

            <div className="container ">
                <div className="flex items-center justify-between">
                    {/* Logo Section with curved yellow accent */}
                    <Logo />

                    {/* Desktop Navigation Links */}
                    <div className="">
                        <div className="hidden lg:block">
                            <div className="flex items-center space-x-1">
                                {navLinks.map((link) => {
                                    return (
                                        <button
                                            key={link.id}
                                            onClick={() => handleNavClick(link.id, link.link)}
                                            className={cn(
                                                "px-4 py-2 rounded-md lg:text-base md:text-sm text-base font-medium transition-all duration-200 flex items-center gap-2 relative group overflow-hidden",
                                                pathName === link.link
                                                    ? "bg-button_bg text-white"
                                                    : "text-text_default hover:bg-gradient-to-r hover:from-[#FEF08A]/20 hover:via-[#FDE047]/20 hover:to-[#FACC15]/20"
                                            )}
                                        >
                                            {link.label}
                                            {pathName !== link.link && (
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FEF08A] via-[#FDE047] to-[#FACC15]" />
                                                </div>
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4">
                        <AiButton />
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="relative inline-flex items-center justify-center p-2 rounded-md text-[#BE185D] hover:bg-gradient-to-r hover:from-[#FEF08A]/20 hover:via-[#FDE047]/20 hover:to-[#FACC15]/20 focus:outline-none"
                                aria-expanded={isMobileMenuOpen}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="block h-6 w-6 transition-transform duration-200 hover:rotate-90" aria-hidden="true" />
                                ) : (
                                    <Menu className="block h-6 w-6 transition-transform duration-200 hover:scale-110" aria-hidden="true" />
                                )}
                            </button>
                        </div>

                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
                        isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => {
                            return (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id, link.link)}
                                    className={cn(
                                        "flex items-center gap-3 w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-200 group relative overflow-hidden",
                                        pathName === link.link
                                            ? "bg-[#DB2777] text-white"
                                            : "text-[#BE185D] hover:bg-gradient-to-r hover:from-[#FEF08A]/20 hover:via-[#FDE047]/20 hover:to-[#FACC15]/20"
                                    )}
                                >
                                    {link.label}
                                    {pathName !== link.link && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FEF08A] via-[#FDE047] to-[#FACC15] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    )}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}