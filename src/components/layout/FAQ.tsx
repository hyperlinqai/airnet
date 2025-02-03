'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What internet speeds can I expect from Airnet360?',
      answer: 'We offer high-speed internet plans ranging from 100 Mbps to 1 Gbps. Our fiber-optic network ensures consistent speeds with 99.9% uptime guarantee. Actual speeds may vary based on your location and plan.'
    },
    {
      question: 'Is there a setup or installation fee?',
      answer: 'Installation is FREE with all our annual plans. For monthly plans, a nominal installation fee may apply. Our professional technicians ensure proper setup and optimization of your connection.'
    },
    {
      question: 'How long does the installation process take?',
      answer: 'Typically, installation is completed within 24-48 hours of plan activation. Our technicians work efficiently to get you connected as quickly as possible while ensuring quality setup.'
    },
    {
      question: 'Do you provide Wi-Fi router with the connection?',
      answer: 'Yes, we provide a high-performance dual-band Wi-Fi router with all our plans. The router is optimized for maximum coverage and supports multiple device connections.'
    },
    {
      question: 'What are the available payment methods?',
      answer: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and digital wallets. You can also set up auto-pay for hassle-free monthly payments.'
    },
    {
      question: 'How can I contact customer support?',
      answer: 'Our 24/7 customer support is available through multiple channels: phone, WhatsApp, email, and live chat. We also have a dedicated app for instant support and service management.'
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.08),transparent)]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find quick answers to common questions about our internet services
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Contact Support
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
