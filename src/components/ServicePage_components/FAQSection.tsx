import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a wide range of digital marketing services including website design and development, social media management, SEO optimization, content creation, and paid advertising campaigns.',
  },
  {
    question: 'How long does it take to see results from digital marketing?',
    answer: 'The timeline for results can vary depending on the specific strategies and your industry. Generally, you can start seeing improvements in 3-6 months, with more significant results in 6-12 months.',
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Yes, we work with businesses of all sizes. Our strategies are tailored to meet the unique needs and budgets of each client, whether you re a small local business or a large corporation.',
  },
];

const FAQSection: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;