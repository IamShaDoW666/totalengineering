
'use client';

import { FloatingWhatsApp } from 'react-floating-whatsapp'
import Image from 'next/image'
export default function Whatsapp() {

  return (
     
  <FloatingWhatsApp phoneNumber="+919514399331" 
  accountName ="Welcome Total engineeirng" 
  avatar='/logo.jpg'
  chatMessage="Hello.How can i help you" />
   
  )
}