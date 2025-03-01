import { useMemo } from 'react'
import Link from 'next/link'
import { formatValue } from '@/components/utils/utils'

interface Cost {
  title: string
  description: string
  price: number
}

export default function CostsList({ costs }: { costs: Cost[] }) {

  const totalCost: number = useMemo<number>(() => {
    return costs.reduce((acc: number, cost: Cost) => acc + cost.price, 0)
  }, [costs])

  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-5 animate-enter">How We Built It</h2>
      <div className="overflow-x-auto animate-enter-delay-100">
        <table className="table-auto w-full text-sm">
          <thead className="sr-only">
            <tr>
              <th>Description</th>
              <th scope="col">Cost</th>
            </tr>
          </thead>
          <tbody>
            {costs.map((cost, index) => (
              <tr key={index} className="group odd:bg-linear-to-tr from-slate-100 to-slate-50 dark:from-slate-800/80 dark:to-slate-900">
                <th scope="row" className="relative text-left font-normal px-4 py-5 first:rounded-l-lg last:rounded-r-lg">
                  <div className="font-semibold mb-0.5">
                    <Link className="before:absolute before:inset-0 before:z-20 before:rounded-lg"  href="/details">{cost.title}</Link>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400">{cost.description}</p>
                </th>
                <td className="relative font-semibold text-right px-4 py-5 first:rounded-l-lg last:rounded-r-lg w-[1%] after:content-['Details_->'] after:absolute after:inset-0 after:pr-4 after:flex after:items-center after:justify-end after:pointer-events-none after:bg-linear-to-l after:from-white group-odd:after:from-slate-50 dark:after:from-slate-950 dark:group-odd:after:from-slate-900 after:to-50% after:rounded-lg after:text-blue-500 after:font-medium after:tracking-normal after:whitespace-nowrap after:opacity-0 group-hover:after:opacity-100 after:transition">
                  <Link className="group-hover:opacity-0 transition-opacity before:absolute before:inset-0 before:z-20 before:rounded-lg" href="/details" tabIndex={-1}>{formatValue(cost.price)}</Link>
                </td>                  
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" className="text-left font-normal px-4 py-5">
                <p className="text-slate-500 italic">TOT in USD dollar</p>
              </th>
              <td className="font-semibold text-right text-emerald-500 text-base underline px-4 py-5 w-[1%]">{formatValue(totalCost)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
