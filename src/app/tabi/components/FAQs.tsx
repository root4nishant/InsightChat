import Heading from "@/components/custom/reusables/Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    question: "Why choose Tabi over other GenAI apps?",
    answer:
      "Tabi is tailored for professionals who work with large data tables. Other GenAI apps are not designed for this, which can make them hard to use and less accurate. Lomi automates bulk processing, refines prompts on the go, and eliminates repetitive tasks to saving time and making your work faster and easier.",
  },
  {
    id: "item-2",
    question: "How does Tabi ensure accuracy in the operations?",
    answer:
      "Tabi processes large data tables in batches for better accuracy, unlike ChatGPT, which handles one input at a time. Its AI is context-aware and learns from feedback to get smarter and improve results over time.",
  },
  {
    id: "item-3",
    question: "What data sources does Tabi support?",
    answer:
      "Simply upload a CSV file from any source, select the header to operate on, and you’re set. Tabi handles the rest, regardless of dataset size.",
  },
  {
    id: "item-4",
    question:
      "Can I preview results before applying a prompt to the entire dataset?",
    answer:
      "Yes! You can run experiments on a sample batch to see how your prompt performs before scaling it to the full dataset.",
  },
  {
    id: "item-5",
    question: "What are pre-built prompts and custom prompts?",
    answer:
      "Pre-built prompts are ready-to-use templates designed for common data operations, such as cleaning, transformation or enrichment. You can also design prompts tailored to your specific data needs, using custom prompts.",
  },
];

export default function FAQ() {
  return (
    <div className="w-full mx-auto py-12 px-4 lg:max-w-[1400px] md:max-w-[900px] lg:px-20">
      <Heading text="Frequently Asked Questions" />

      <Accordion
        type="single"
        collapsible
        className="w-full border p-5 rounded-sm"
      >
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-0 bg-[#F3F3FF] rounded-md px-4 mb-3">
            <AccordionTrigger className="font-primary text-left lg:text-lg text-sm py-4 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="font-secondary lg:text-lg text-sm text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
