import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return <Accordion type="single" collapsible className="border-t border-sand">
    {items.map((item, i) => <AccordionItem key={item.q} value={`faq-${i}`} className="border-b border-sand">
      <AccordionTrigger className="py-6 text-left text-[18px] font-medium hover:no-underline">{item.q}</AccordionTrigger>
      <AccordionContent className="pb-6 text-base leading-[1.75] max-w-[680px]">{item.a}</AccordionContent>
    </AccordionItem>)}
  </Accordion>;
}
