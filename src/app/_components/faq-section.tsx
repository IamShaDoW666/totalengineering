"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const faqs = [
  {
    question: "What types of metal fabrication services do you offer?",
    answer: "We provide a wide range of metal fabrication services, including cutting, welding, bending, and assembly. Our team is skilled in working with various materials such as steel, aluminum, and stainless steel to meet your specific project requirements.",
  },
  {
    question: "Do you offer custom lathe turning services?",
    answer: "Yes, we specialize in custom lathe turning services. Our state-of-the-art CNC lathes enable us to produce precision components tailored to your specifications, whether for small or large production runs.",
  },
  {
    question: "What industries do you serve?",
    answer: "We cater to various industries, including automotive, aerospace, construction, and manufacturing. Our expertise allows us to adapt our services to meet the unique demands of each sector.",
  },
  {
    question: "How can I request a quote for my project?",
    answer: "To request a quote, simply contact us through our website's inquiry form or give us a call. Please provide details about your project, including materials, dimensions, and quantities, so we can give you an accurate estimate.",
  },
  {
    question: "Do you have quality assurance processes in place?",
    answer: "Absolutely. At Total Engineering, we prioritize quality and have stringent quality assurance processes in place. Our team conducts regular inspections throughout the fabrication and turning processes to ensure that every component meets industry standards and client expectations.",
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
                    <p className="pt-4 pb-2 text-gray-600 text-lg">{faq.answer}</p>
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