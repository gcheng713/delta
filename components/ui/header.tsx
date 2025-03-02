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

      {/* Floating Action Buttons */}
      <div className="fixed bottom-12 right-6 z-50 flex gap-4">
        <Link 
          href="https://github.com/natask/infra_gpu_hack" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 hover:from-gray-900 hover:via-gray-800 hover:to-gray-900 text-white shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          View on GitHub
        </Link>
        <Link 
          href="https://p01--open-webui--78wn8zsyzjvg.code.run" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 hover:from-blue-600 hover:via-blue-500 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Try Demo
        </Link>
      </div>
    </header>
  )
}
