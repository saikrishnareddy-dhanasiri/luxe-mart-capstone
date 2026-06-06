import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{question}</span>
        <span className="text-xl font-light">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-500 text-xs leading-relaxed font-light tracking-wide animate-in slide-in-from-top-2">
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "Shipping Policy", answer: "We offer complimentary express shipping on all orders over $100. Delivery typically takes 3-5 business days." },
    { question: "Returns & Exchanges", answer: "Items can be returned within 30 days of delivery in their original condition." },
    { question: "Authenticity Guarantee", answer: "Every item in LuxeMart is sourced directly from certified partners to ensure 100% authenticity." }
  ];

  return (
    <div className="pt-48 pb-20 px-10 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-xl font-bold uppercase tracking-[0.4em] mb-16 text-center">Frequently Asked Questions</h1>
      <div className="space-y-2">
        {faqs.map((faq, i) => <FAQItem key={i} {...faq} />)}
      </div>
    </div>
  );
};

export default FAQ;
