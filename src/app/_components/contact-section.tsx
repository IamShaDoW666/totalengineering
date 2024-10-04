"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 000-0000",
    delay: 0.2,
  },
  {
    icon: Mail,
    title: "Email",
    details: "hello@example.com",
    delay: 0.4,
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Business Ave, Suite 100, City, State 12345",
    delay: 0.6,
  },
]

const inputVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

export default function ContactSection() {
  return (
    <section style={{height: "calc(100vh - 64px)"}} className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-5xl text-center mb-8">Contact Us</h2>
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            We'd love to hear from you. Please fill out this form or use one of our contact methods below.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <motion.div
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  <Input placeholder="Your Name" />
                </motion.div>
                <motion.div
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={1}
                >
                  <Input type="email" placeholder="Your Email" />
                </motion.div>
                <motion.div
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={2}
                >
                  <Textarea placeholder="Your Message" rows={4} />
                </motion.div>
                <motion.div
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  custom={3}
                >
                  <Button type="submit" className="w-full">Send Message</Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: method.delay, duration: 0.5 }}
              >
                <Card>
                  <CardContent className="flex items-center p-6">
                    <method.icon className="h-10 w-10 text-primary mr-4" />
                    <div>
                      <h3 className="font-semibold">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.details}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}