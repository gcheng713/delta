import Accordion from '@/components/ui/accordion'

export default function Terms() {

  const terms = [
    {
      title: 'Natnael Kahssy',
      text: 'Natnael Kahssy is an undergraduate at MIT studying computer science and electrical engineering. His past work was involved at the MIT Bioelectronics Group, creating optogenetic-based neural implants. He\'s an incoming RTL Engineer at Etched.',
      active: false,
    },
    {
      title: 'George Cheng',
      text: 'George Cheng is an AI researcher and undergraduate at MIT, engaged in projects at various labs such as the Koch Institute for Integrative Cancer Research and MIT Sloan School of Management.',
      active: false,
    },
    {
      title: 'Dylan Nguyen',
      text: 'Dylan Nguyen is an undergraduate studying mathematics and computer science at MIT. His past research experience includes work at the Max Planck Florida Institute for Neuroscience and at the MIT Myerson Research Group.',
      active: false,
    },
    {
      title: 'Harshil Avlani',
      text: 'Harshil Avlani is an undegraduate studying physics and computer science at MIT, with past research within the Quanta Group at the Research Laboratory of Electronics at MIT.',
      active: false,
    },
  ]

  return (
    <section className="py-8">
      <h2 className="text-lg font-semibold mb-5 animate-enter">Team</h2>
      <div className="space-y-3 animate-enter-delay-100">
        {terms.map((term, index) => (
          <Accordion key={index} title={term.title} id={`terms-${index}`} active={term.active}>
            {term.text}
          </Accordion>
        ))}
    </div>
  </section>
  )
}
