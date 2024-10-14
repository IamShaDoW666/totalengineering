import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-foreground text-foreground mt-16 px-8 py-4 bottom-0"> 
     <div className="container mx-auto px-6 py-12"> 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.webp" alt="Company Logo" width={40} height={40} className='rounded-full' />
              <span className="text-xl font-bold text-primary">TotalEngineering LLC</span>
            </Link>
            <p className="text-lg text-foreground/75">
              We are dedicated to providing innovative solutions for your everyday needs. Our mission is to enhance lives through technology and exceptional service.
            </p>
          </div>
          <div className="md:ml-32">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">Our Story</Link></li>
              <li><Link href="/team" className="hover:text-gray-900 transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-gray-900 transition-colors">Careers</Link></li>
              <li><Link href="/press" className="hover:text-gray-900 transition-colors">Press Releases</Link></li>
            </ul>
          </div>
          <div className="md:ml-32">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact</h3>
            <ul className="space-y-2">
              <li>No.4/68H Sri Kanika Garden</li>
              <li>Senthampalayam</li>
              <li>MGC Palayam</li>
              <li>Coimbatore-641107</li>
            </ul>
          </div>
          <div className="md:ml-32">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">&copy; 2023 Company Name. All rights reserved.</p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm">
                <li><Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-gray-900 transition-colors">Cookie Policy</Link></li>
              </ul>
            </nav>
          </div>
        </div></div>
      {/* </div> */}
    </footer>
  )
}