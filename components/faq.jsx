"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What logistics services does FALCLIN provide?",
      answer:
        "FALCLIN offers comprehensive logistics solutions including supply chain management, freight forwarding, warehousing, cold chain logistics, vessel management, customs clearance, and specialized medical equipment transportation.",
    },
    {
      question: "Do you provide medical equipment installation services?",
      answer:
        "Yes, we specialize in the logistics, installation, and maintenance of advanced medical equipment, particularly Linear Accelerators (LINACs) for cancer treatment. Our certified technicians provide professional installation and ongoing technical support.",
    },
    {
      question: "Which countries do you operate in?",
      answer:
        "FALCLIN operates primarily in Nigeria and Liberia, with offices in Abuja, Nigeria and Monrovia, Liberia. We serve as a key player in West African logistics infrastructure development.",
    },
    {
      question: "What is cold chain logistics and do you provide it?",
      answer:
        "Cold chain logistics involves temperature-controlled transportation and storage for sensitive items like vaccines, pharmaceuticals, and perishables. Yes, FALCLIN provides specialized cold chain services with proper temperature monitoring and compliance.",
    },
    {
      question: "Can you handle dangerous goods transportation?",
      answer:
        "Absolutely. We are certified to handle dangerous goods with proper packaging, documentation, and transportation according to IMO and IATA standards. Our team is trained in safety protocols for hazardous materials.",
    },
    {
      question: "Do you provide customs clearance services?",
      answer:
        "Yes, we offer fast-tracked customs clearance through licensed brokers and digital systems for air, sea, and road freight imports and exports.",
    },
    {
      question: "What makes FALCLIN different from other logistics companies?",
      answer:
        "FALCLIN combines local West African expertise with international standards. We offer specialized services like medical equipment logistics, comprehensive security services, and have deep understanding of regional infrastructure challenges.",
    },
    {
      question: "Do you provide training for medical equipment?",
      answer:
        "Yes, we provide comprehensive training programs for medical staff on the operation and maintenance of medical equipment, particularly for complex systems like Linear Accelerators.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our logistics and medical equipment services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-primary">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-accent transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
