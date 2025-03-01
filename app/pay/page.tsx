import PayForm from './pay-form'

export const metadata = {
  title: 'Speculative Decoding with dLLMs at Scale',
  description: 'Built for the 2025 Mercor x Cognition x Etched Hackathon',
}

export default function Pay() {
  return (
    <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20">

      <article>
        <h2 className="h2 font-orbiter mb-4">Confirm & Pay</h2>
        <div className="text-slate-500 dark:text-slate-400 space-y-4 mb-8">
          <p>Hire me and start the project by providing your payment details.</p>
        </div>

        <PayForm />

      </article>
    </div>
  )
}
