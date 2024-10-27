"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  // const teamMembers = [
  //   { name: "Jane Doe", role: "CEO", image: "https://fastly.picsum.photos/id/38/500/500.jpg?hmac=P2ck2JJoFY6U4RS1VwfQve2kzwgG-1D_6PwXf-oi5jo" },
  //   { name: "John Smith", role: "CTO", image: "https://fastly.picsum.photos/id/650/500/500.jpg?hmac=2_B-FRq64ubwHauceT-OqNzNdwiWoU1DbaAgwS8peD4" },
  //   { name: "Alice Johnson", role: "Lead Engineer", image: "https://fastly.picsum.photos/id/469/500/500.jpg?hmac=BHkrKLd_URIkqjZ1czEQW8VU6jk4NBixFMVPNud2LPg" },
  // ]

  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Hero Section */}
      <motion.section className="text-center mb-16 mt-16" {...fadeIn}>
        <motion.h1
          className="text-4xl text-primary font-bold mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Total Engineering Coimbatore
        </motion.h1>
        <p className="text-xl text-muted-foreground">Precision Engineering Services in Coimbatore</p>
      </motion.section>

      {/* Company Overview */}
      <motion.section className="grid md:grid-cols-2 gap-8 mb-16" {...fadeIn}>
        <div className="p-8 border-primary border-1 rounded shadow text-muted-foreground">
          <h2 className="text-3xl font-semibold mb-4 text-primary">Our Precision Engineering Solutions</h2>
          <p className="mb-4 text-lg">
          
            CNC Machining: Utilizing state-of-the-art CNC machines, we produce intricate parts with unparalleled accuracy. Our machining services cater to both small and large-scale production needs.
           
            Laser Cutting: Our advanced laser cutting technology allows us to achieve precise cuts and complex shapes in various materials, ensuring clean edges and minimal waste.
          
            Timely Delivery: Our streamlined processes enable us to deliver projects on time, every time, without compromising on quality.
          
          
          </p>
         
          <h2 className="text-3xl font-semibold mb-4 text-primary mt-8">Engineering Turning</h2>
          <p className="mb-4 text-lg">
          Our state-of-the-art turning services utilize advanced CNC machinery to produce precise components with tight tolerances. Whether you require intricate designs or high-volume production, our skilled technicians ensure accuracy and efficiency in every project. We work with a variety of materials, including stainless steel, aluminum, and other metals, to achieve the best results for your application.
          </p>
        </div>
        
        <motion.div className="border-1  mx-auto justify-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          
        >
          <Image
            src="/1-3.jpg"
            alt="Total Engineering Office"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.section>

      {/* Team Members */}
      {/* <motion.section className="mb-16" {...fadeIn}>
        <h2 className="text-3xl text-primary font-semibold mb-8 text-center">Our Leadership</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{scale: 1.05}}
            >
              <Card>
                <CardHeader>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section> */}

      {/* Call to Action */}
      <motion.section
        className="text-center bg-muted p-8 rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl text-primary font-semibold mb-4">Ready to innovate with us?</h2>
        <p className="mb-6 text-muted-foreground">
          Join us in shaping the future of technology. Let&apos;s work together to bring your ideas to life.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </motion.div>
      </motion.section>
    </div>
  )
}