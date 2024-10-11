"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const faqs = [
  {
    question: "What is shadcn/ui?",
    answer: "shadcn/ui is a collection of re-usable components built using Radix UI and Tailwind CSS. It's not a component library, but a set of components you can copy and paste into your apps.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, shadcn/ui is completely free and open-source. You can use it in your personal and commercial projects without any restrictions.",
  },
  {
    question: "Can I use it with Next.js?",
    answer: "shadcn/ui works great with Next.js and other React-based frameworks. It's designed to be flexible and easy to integrate into various project setups.",
  },
  {
    question: "How do I customize the components?",
    answer: "You can customize shadcn/ui components by modifying the Tailwind CSS classes or editing the component code directly. The components are designed to be easily customizable to fit your project's needs.",
  },
  {
    question: "Is shadcn/ui responsive?",
    answer: "Yes, the components in shadcn/ui are built with responsiveness in mind. However, you may need to adjust some styles or layouts to fit your specific design requirements across different screen sizes.",
  },
]

export default function Faq() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(value)
        ? prevOpenItems.filter((item) => item !== value)
        : [...prevOpenItems, value]
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-background">
      <h2 className="text-3xl text-primary font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger
              onClick={() => toggleItem(`item-${index}`)}
              className="flex justify-between items-center text-foreground w-full py-4 text-left text-lg font-medium"
            >
              {faq.question}
            </AccordionTrigger>
            <AnimatePresence initial={false}>
              {openItems.includes(`item-${index}`) && (
                <AccordionContent forceMount>
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="pt-4 pb-2 text-gray-600">{faq.answer}</p>
                  </motion.div>
                </AccordionContent>
              )}
            </AnimatePresence>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}