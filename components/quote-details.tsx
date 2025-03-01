interface QuoteDetailsProps {
  projectLength: string
  startDate: string
  endDate: string
}

export default function QuoteDetails({
  projectLength,
  startDate,
  endDate,
}: QuoteDetailsProps) {
  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-5 animate-enter">Demos</h2>
      <ul className="grid gap-4 min-[480px]:grid-cols-3 text-sm animate-enter-delay-100">
        <li className="px-5 py-4 rounded-lg bg-linear-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
          <div className="text-slate-200 font-medium">General Inference</div>
          <div className="text-slate-400">{}</div>
        </li>
        <li className="px-5 py-4 rounded-lg bg-linear-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
          <div className="text-slate-200 font-medium">Coding</div>
          <time className="text-slate-400">{}</time>
        </li>
        <li className="px-5 py-4 rounded-lg bg-linear-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
          <div className="text-slate-200 font-medium">One Shot Website Generation</div>
          <time className="text-slate-400">{}</time>
        </li>
      </ul>
    </section>
  )
}
