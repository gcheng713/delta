import Link from 'next/link'

export default function Cta() {
  return (
    <div className="fixed bottom-0 z-30 w-full lg:w-1/2 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xs">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        <div className="flex py-4 md:py-6 space-x-4">
          {/* <Link className="btn w-full text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900 border-slate-200 hover:border-slate-300 dark:border-slate-800 dark:hover:border-slate-700 shadow-sm shadow-black/5" href="/contact">Contact Me</Link>
          <Link className="btn w-full text-white bg-blue-500 hover:bg-blue-600 shadow-sm shadow-black/5 animate-shine bg-[linear-gradient(100deg,var(--color-blue-500),45%,var(--color-blue-400),55%,var(--color-blue-500))] bg-[size:200%_100%] hover:bg-[image:none]" href="/pay">Pay - $24.560</Link> */}
        </div>
      </div>
    </div>
  )
}
