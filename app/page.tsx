'use client'
import { useRef, useEffect } from 'react'
import Brief from '@/components/brief'
import Results from '@/components/results'
import QuoteDetails from '@/components/quote-details'
import CostsList from '@/components/costs-list'
import Terms from '@/components/terms'
import Cta from '@/components/cta'

export default function Home() {

  const costs = [
    {
      title: 'Competitive Analysis',
      description: 'The client is looking to review the information.',
      price: 7800,
    },
    {
      title: 'UX Research Reports',
      description: 'The client is looking to review the information.',
      price: 2560,
    },
    {
      title: 'Sitemap and Information Architecture',
      description: 'The client is looking to review the information.',
      price: 1420,
    },
    {
      title: 'UX Wireframes and User Flows',
      description: 'The client is looking to review the information.',
      price: 3978,
    },
    {
      title: 'Visual Design',
      description: 'The client is looking to review the information.',
      price: 4476,
    },
    {
      title: 'Interactive Prototypes + Assets Exports',
      description: 'The client is looking to review the information.',
      price: 4326,
    },
  ]

  // Scroll to content section when Explore Demo button is clicked
  useEffect(() => {
    const handleScrollToContent = (e: Event) => {
      e.preventDefault();
      const contentSection = document.getElementById('content-section');
      if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const exploreButton = document.querySelector('.explore-demo-btn');
    if (exploreButton) {
      exploreButton.addEventListener('click', handleScrollToContent);
    }

    return () => {
      if (exploreButton) {
        exploreButton.removeEventListener('click', handleScrollToContent);
      }
    };
  }, []);

  return (
    <>
      {/* Main view - full screen title and code only */}
      <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
        <div className="w-full lg:w-1/2 h-screen">
          {/* Intentionally empty to let quote-title component handle this area */}
        </div>
        
        <div className="w-full lg:w-1/2 h-screen">
          <div className="lg:fixed top-0 right-0 w-full lg:w-1/2 h-screen overflow-auto z-20 lg:block bg-white">
            <div 
              ref={(el) => {
                if (el && typeof window !== 'undefined') {
                  const codeDisplayElement = document.createElement('div');
                  codeDisplayElement.id = 'code-display';
                  codeDisplayElement.className = 'w-full overflow-auto bg-white';
                  el.appendChild(codeDisplayElement);
                  
                  // Make this element accessible to the quote-title component
                  (window as any).codeDisplayElement = codeDisplayElement;
                }
              }}
              className="w-full"
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}
