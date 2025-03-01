import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './theme-toggle'
import Logo from '@/public/images/logo.jpg'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-xl lg:max-w-[calc(50%+(var(--container-xl)))] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4 lg:fixed">
            {/* Logo */}
          </div>
        </div>
      </div>

      {/* Floating Demo Button */}
      <div className="fixed bottom-12 right-6 z-50">
        <Link 
          href="/demo" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 hover:from-blue-600 hover:via-blue-500 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Try Demo
        </Link>
      </div>
    </header>
  )
}
