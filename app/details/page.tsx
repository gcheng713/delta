import Image from 'next/image'
import DetailsImageLight from '@/public/images/details-image-light.png'
import DetailsImageDark from '@/public/images/details-image-dark.png'
import BackButton from '@/components/ui/back-button'

export const metadata = {
    title: 'Speculative Decoding with dLLMs at Scale',
    description: 'Built for the 2025 Mercor x Cognition x Etched Hackathon',
}

export default function Details() {
    return (
      <div className="grow w-full max-w-xl mx-auto px-4 sm:px-6 py-12 lg:pt-24 lg:pb-20">

        <BackButton />

        <article>
          <h2 className="h2 font-orbiter mb-4">Competitive Analysis</h2>
          <div className="text-slate-500 dark:text-slate-400 space-y-4">
            <p>
              The discovery phase is an essential part of my design process where I delve into every aspect of the product <strong className="text-slate-900 dark:text-slate-200 font-medium">to gain a comprehensive understanding</strong>. It involves conducting extensive research and analysis to gather insights that lay the groundwork for the entire design journey.
            </p>
            <p>
              During this phase, I explore various elements such as the competition, market dynamics, and current challenges to inform my design decisions. Here's what the discovery phase typically includes:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center before:mr-3 before:content-['✴︎']">These objectives are derived from user insights, align with the client's goals, and provide solutions to the identified challenges.</li>
              <li className="flex items-center before:mr-3 before:content-['✴︎']">These objectives are derived from user insights, align with the client's goals, and provide solutions to the identified challenges.</li>
            </ul>
            <p>
              First and foremost, I immerse myself in understanding my client's vision and project goals. By closely collaborating with the client, <strong className="text-slate-900 dark:text-slate-200 font-medium">I ensure a clear understanding of their requirements and expectations for the product</strong>. This sets the foundation for the design process 👇
            </p>
            <figure className="my-8!">
              <Image className="dark:hidden" src={DetailsImageLight} width={628} height={253} alt="Post details light" />
              <Image className="hidden dark:block" src={DetailsImageDark} width={628} height={253} alt="Post details dark" />
              <figcaption className="text-center text-xs italic mt-3">The three pillars of a successful competitive analysis phase.</figcaption>
            </figure>
            <p>
              By conducting a thorough discovery phase, I establish a solid foundation for the subsequent stages of the design process. <strong className="text-slate-900 dark:text-slate-200 font-medium">This phase equips me with the necessary knowledge</strong> about the product's context, market landscape, user needs, and design objectives.
            </p>
            <p>
              With this understanding, I can move forward confidently into the ideation, concept development, and prototyping phases, knowing that my designs are rooted in a deep understanding of the product and its users.
            </p>
          </div>
        </article>
      </div>
    )
}
