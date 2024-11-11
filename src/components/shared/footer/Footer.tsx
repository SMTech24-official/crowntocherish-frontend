'use client'

import {  useState } from "react"
import { Facebook, Twitter, Instagram, Linkedin, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "../logo/Logo"
import Link from "next/link"

export default function Footer() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "How It Works", href: "./#how-it-works" },
        { label: "Services", href: "/services" },
        { label: "Disclaimer", href: "/disclaimer" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "FAQ", href: "./#faq" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title)
  }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }


  return (
    <footer className="text-white bg-black">
      {/* Yellow curved accent at the top */}
      <div className="h-1 overflow-hidden">
        <div className="w-full h-full " />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="mt-4 text-white ">
              Providing exceptional services and solutions to meet your needs. Your satisfaction is our priority.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-text_title  transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3
                className="text-lg font-semibold mb-4 flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => toggleSection(section.title)}
              >
                {section.title}
                <ChevronUp
                  className={cn(
                    "h-5 w-5 transition-transform md:hidden",
                    activeSection === section.title ? "rotate-180" : ""
                  )}
                />
              </h3>
              <ul
                className={cn(
                  "space-y-2 transition-all duration-300 ease-in-out overflow-hidden",
                  activeSection === section.title ? "max-h-48" : "max-h-0 md:max-h-48"
                )}
              >
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-text_title  transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#BE185D]/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-[#DB2777] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#BE185D] transition-colors duration-200 flex items-center gap-2"
            aria-label="Scroll to top"
          >
            Back to Top
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}