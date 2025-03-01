'use client'
import { useEffect, useState } from 'react'

interface Result {
  label: string
  value: number
}

export default function Results() {
  const results: Result[] = [
    { label: 'Traditional Autoregressive', value: 100 },
    { label: 'Traditional Speculative', value: 70 },
    { label: 'Our Approach', value: 30 }
  ]

  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true)
  }, [])

  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-5 animate-enter">Results</h2>
      <div className="space-y-6 animate-enter-delay-100">
        {results.map((result, index) => (
          <div key={index} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-sm text-slate-700 dark:text-slate-300">{result.label}</span>
              <span className="text-sm text-slate-600 dark:text-slate-400">{result.value}ms</span>
            </div>
            <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: animate ? `${result.value}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
