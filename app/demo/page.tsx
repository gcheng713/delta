'use client'

import Image from 'next/image'
import Link from 'next/link'
import BackButton from '@/components/ui/back-button'
import { useState, useEffect } from 'react'

export default function Demo() {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.className = 'fixed top-0 left-0 w-full h-full -z-10'
    document.body.appendChild(canvas)

    let animationFrameId: number
    let particles: Array<{ x: number; y: number; vx: number; vy: number; life: number }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    class Wave {
      constructor(
        private amplitude: number,
        private frequency: number,
        private phase: number,
        private speed: number,
        private color: string
      ) {}

      draw(ctx: CanvasRenderingContext2D, time: number) {
        ctx.beginPath()
        ctx.strokeStyle = this.color
        ctx.lineWidth = 2

        for (let x = 0; x < ctx.canvas.width; x += 5) {
          const y = this.amplitude * 
            Math.sin((x * this.frequency) / 1000 + this.phase + time * this.speed) + 
            ctx.canvas.height / 2
          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      getY(x: number, time: number) {
        return this.amplitude * 
          Math.sin((x * this.frequency) / 1000 + this.phase + time * this.speed) + 
          canvas.height / 2
      }
    }

    const waves = [
      new Wave(50, 2, 0, 0.001, 'rgba(59, 130, 246, 0.15)'),    // Light blue
      new Wave(40, 3, 2, 0.002, 'rgba(37, 99, 235, 0.12)'),     // Medium blue
      new Wave(30, 4, 4, 0.003, 'rgba(30, 64, 175, 0.1)'),      // Dark blue
      new Wave(25, 5, 1, 0.002, 'rgba(147, 197, 253, 0.08)'),   // Sky blue
      new Wave(35, 2.5, 3, 0.001, 'rgba(96, 165, 250, 0.1)'),   // Royal blue
      new Wave(45, 1.5, 1, 0.002, 'rgba(29, 78, 216, 0.12)'),   // Deeper blue
      new Wave(38, 2.8, 2, 0.003, 'rgba(30, 58, 138, 0.1)'),    // Navy blue
      new Wave(28, 3.5, 0, 0.002, 'rgba(30, 66, 159, 0.08)')    // Royal navy
    ]

    const createParticle = (x: number, y: number) => {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
        life: 1
      })
    }

    const animate = (time: number) => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach(wave => wave.draw(ctx, time))

      // Check for wave intersections and create particles
      for (let x = 0; x < canvas.width; x += 50) {
        const y1 = waves[0].getY(x, time)
        const y2 = waves[1].getY(x, time)
        if (Math.abs(y1 - y2) < 10) {
          createParticle(x, (y1 + y2) / 2)
        }
      }

      // Update and draw particles
      particles = particles.filter(p => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.02
        if (p.life > 0) {
          ctx.beginPath()
          // Randomize particle colors between different shades of blue
          const blueShades = [
            'rgba(59, 130, 246, 0.3)',  // Light blue
            'rgba(37, 99, 235, 0.3)',    // Medium blue
            'rgba(30, 64, 175, 0.3)',    // Dark blue
            'rgba(147, 197, 253, 0.3)',  // Sky blue
            'rgba(96, 165, 250, 0.3)'    // Royal blue
          ]
          ctx.fillStyle = blueShades[Math.floor(Math.random() * blueShades.length)]
          ctx.arc(p.x, p.y, 2 * p.life, 0, Math.PI * 2)
          ctx.fill()
          return true
        }
        return false
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
      canvas.remove()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle the query submission here
    console.log('Query submitted:', query)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="fixed bottom-8 left-8">
        <BackButton />
      </div>
      
      {/* GitHub Button */}
      <div className="fixed top-6 right-6 z-50">
        <Link 
          href="https://github.com/natask/infra_gpu_hack"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </Link>
      </div>

      <article className="w-full max-w-xl text-center">
        <h2 className="text-7xl font-orbiter font-bold bg-gradient-to-b from-blue-500 to-blue-400 bg-clip-text text-transparent mb-8 animate-wave">Ask Anything</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="We'll return the answer faster than the speed of light."
              className="w-full h-40 px-6 py-4 text-lg text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors shadow-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-4 text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-xl transition-colors duration-150 ease-in-out shadow-lg animate-shine bg-[linear-gradient(100deg,var(--color-blue-500),45%,var(--color-blue-400),55%,var(--color-blue-500))] bg-[size:200%_100%] hover:bg-[image:none]"
          >
            Get Answer
          </button>
        </form>
      </article>
    </div>
  )
}