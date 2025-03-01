'use client'

import { useState } from 'react'

export default function PayForm() {
  const [card, setCard] = useState<boolean>(true)

    return (
      <div>
        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className="relative flex w-full p-1 bg-slate-100 dark:bg-slate-700/30 rounded-sm">
            <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
              <span className={`absolute inset-0 w-1/2 bg-white dark:bg-slate-800 rounded-sm border border-slate-200 dark:border-slate-700 shadow-xs transition duration-150 ease-in-out ${card ? 'translate-x-0' : 'translate-x-full'}`}></span>
            </span>
            <button
              className={`relative flex-1 text-sm font-medium p-1 duration-150 ease-in-out ${card ? 'dark:text-slate-100' : 'text-slate-500'}`}
              onClick={(e) => { e.preventDefault(); setCard(true); }}
              aria-pressed={card}
            >Pay With Card</button>
            <button
              className={`relative flex-1 text-sm font-medium p-1 duration-150 ease-in-out ${!card ? 'dark:text-slate-100' : 'text-slate-500'}`}
              onClick={(e) => { e.preventDefault(); setCard(false); }}
              aria-pressed={!card}
            >Pay With PayPal</button>
          </div>
        </div>

        {/* Card form */}
        {card &&
          <form>
            <div className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input id="email" className="form-input w-full" type="email" placeholder="hey@themarkcorp.com" required />
              </div>
              {/* Card Number */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="card-nr">Card Number</label>
                <input id="card-nr" className="form-input w-full" type="text" placeholder="1234 1234 1234 1234" required />
              </div>
              {/* Expiry and CVC */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-expiry">Expiry Date</label>
                  <input id="card-expiry" className="form-input w-full" type="text" placeholder="MM/YY" required />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1" htmlFor="card-cvc">CVC</label>
                  <input id="card-cvc" className="form-input w-full" type="text" placeholder="CVC" required />
                </div>
              </div>
              {/* Name on Card */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="card-name">Cardholder Name</label>
                <input id="card-name" className="form-input w-full" type="text" placeholder="Mark Traversy" required />
              </div>
              {/* Country */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="country">Country</label>
                <select id="country" className="form-select w-full" required>
                  <option>Germany</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>
              {/* VAT Number */}
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="vat-nr">VAT Number <span className="text-xs font-normal text-slate-500 dark:text-slate-400">(optional)</span></label>
                <input id="vat-nr" className="form-input w-full" type="text" />
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="btn w-full text-white bg-blue-500 hover:bg-blue-600 shadow-sm shadow-black/5 animate-shine bg-[linear-gradient(100deg,var(--color-blue-500),45%,var(--color-blue-400),55%,var(--color-blue-500))] bg-[size:200%_100%] hover:bg-[image:none]">Pay - $24.560</button>
            </div>
          </form>
        }

        {/* PayPal form */}
        {!card &&
          <div>
            <button type="submit" className="btn w-full text-white bg-blue-500 hover:bg-blue-600 shadow-sm shadow-black/5 animate-shine bg-[linear-gradient(100deg,var(--color-blue-500),45%,var(--color-blue-400),55%,var(--color-blue-500))] bg-[size:200%_100%] hover:bg-[image:none]">Pay With PayPal - $24.560</button>
          </div>
        }

      </div>
    )
}
