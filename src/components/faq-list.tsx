import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return <Accordion type="single" collapsible className="border-t border-sand">
    {items.map((item, i) => <AccordionItem key={item.q} value={`faq-${i}`} className="border-b border-sand">
      <AccordionTrigger className="py-5 text-left text-[17px] font-medium hover:no-underline [&>svg]:hidden group">
        {item.q}
        <span className="ml-4 shrink-0 font-display text-2xl leading-none text-primary"><span className="group-data-[state=closed]:inline group-data-[state=open]:hidden">+</span><span className="group-data-[state=open]:inline group-data-[state=closed]:hidden">–</span></span>
      </AccordionTrigger>
      <AccordionContent className="pb-6 text-base leading-[1.75] max-w-[680px]">{item.a}</AccordionContent>
    </AccordionItem>)}
  </Accordion>;
}
