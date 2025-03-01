export const metadata = {
  title: 'Speculative Decoding with dLLMs at Scale',
  description: 'Built for the 2025 Mercor x Cognition x Etched Hackathon',
}

export default function Contact() {
    return (
      <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20">

        <article>
          <h2 className="h2 font-orbiter mb-4">Contact Me</h2>
          <div className="text-slate-500 dark:text-slate-400 space-y-4 mb-8">
            <p>Shoot me a message if you have any questions or concerns regarding the quote I provided.</p>
          </div>
          <form>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input id="email" className="form-input w-full" type="email" placeholder="hey@themarkcorp.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="client">Client</label>
                <input id="client" className="form-input w-full disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-500 dark:disabled:text-slate-400 disabled:cursor-not-allowed disabled:shadow-none" type="text" placeholder="Client name" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="subject">Subject</label>
                <select id="subject" className="form-select w-full" required>
                  <option>There is an error with the quote</option>
                  <option>I have a problem with payments</option>
                  <option>I want to modify the payment date</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="message">Messsage</label>
                <textarea id="message" rows={4} className="form-textarea w-full" placeholder="Please provide a thorough and precise description, including any relevant details." required></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="btn w-full text-white bg-blue-500 hover:bg-blue-600 shadow-sm shadow-black/5">Send</button>
            </div>
          </form>
        </article>
      </div>
    )
}
