'use client'

import React, { useEffect } from 'react';
import BackButton from '@/components/ui/back-button'

export default function About() {
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
          ctx.fillStyle = `rgba(147, 197, 253, ${p.life})`
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
          ctx.fill()
          return true
        }
        return false
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      window.removeEventListener('resize', resize)
      document.body.removeChild(canvas)
    }
  }, [])

  return (
    <div className="grow w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 lg:py-12 overflow-y-auto">
      <BackButton />
      <div className="text-center mb-8">
        <h1 className="h1 font-orbiter text-6xl md:text-7xl leading-tight bg-gradient-to-b from-blue-500 to-blue-400 bg-clip-text text-transparent mb-3">
          Inspiration
        </h1>
        <p className="text-slate-400 text-lg">Where we got our idea from</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        <a href="https://arxiv.org/pdf/2410.11305v1" target="_blank" rel="noopener noreferrer" className="group block w-full p-6 text-left rounded-2xl bg-transparent backdrop-blur shadow-lg hover:shadow-xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-[1.02]">
          <h3 className="font-orbiter text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-colors duration-300 mb-2">QSPEC, Zhao et al.</h3>
          <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">Speculative Decoding with Complementary Quantization Schemes</p>
        </a>

        <a href="https://arxiv.org/pdf/2408.05636" target="_blank" rel="noopener noreferrer" className="group block w-full p-6 text-left rounded-2xl bg-transparent backdrop-blur shadow-lg hover:shadow-xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-[1.02]">
          <h3 className="font-orbiter text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-colors duration-300 mb-2">Speculative Diffusion Decoding, Christopher et al.</h3>
          <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">Accelerating Language Generation through Diffusion</p>
        </a>

        <a href="https://arxiv.org/pdf/2502.03387" target="_blank" rel="noopener noreferrer" className="group block w-full p-6 text-left rounded-2xl bg-transparent backdrop-blur shadow-lg hover:shadow-xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-[1.02]">
          <h3 className="font-orbiter text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-colors duration-300 mb-2">LIMO, Ye et al.</h3>
          <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">Less is More for Reasoning</p>
        </a>

        <a href="https://arxiv.org/pdf/2502.09992" target="_blank" rel="noopener noreferrer" className="group block w-full p-6 text-left rounded-2xl bg-transparent backdrop-blur shadow-lg hover:shadow-xl border-2 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-[1.02]">
          <h3 className="font-orbiter text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 group-hover:from-blue-300 group-hover:to-blue-500 transition-colors duration-300 mb-2">DLLMs, Nie et al.</h3>
          <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">Large Language Diffusion Models</p>
        </a>
      </div>
    </div>
  );
}