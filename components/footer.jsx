import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-4  p-2 rounded-md inline-block">
              <div className="relative h-12 w-40">
                <Image src="/logo.png" alt="FALCLIN Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="mb-4">
              Premier logistics and project support provider in Liberia and key player in West African logistics
              infrastructure development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/logistics" className="hover:text-accent transition-colors">
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="/services/medical-equipment" className="hover:text-accent transition-colors">
                  Medical Equipment
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Nigeria Office:</p>
                  <p>Kampala Street, Wuse 2, Abuja, Nigeria</p>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Liberia Office:</p>
                  <p>Smythe Road Sinkor, Monrovia, Liberia</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-3" />
                <p>+231776771777 / +2340916406043</p>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-3" />
                <p>info@falclin.com</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p>&copy; {currentYear} FALCLIN INCORPORATED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
