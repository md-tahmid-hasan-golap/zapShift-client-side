import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Optional: install lucide-react or use SVG

const FrequentlyQuestion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
    },
    {
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, our posture corrector is designed with adjustable straps to accommodate various body shapes and sizes, making it suitable for most adults and teenagers.",
    },
    {
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Absolutely. By pulling your shoulders back and straightening your upper back, it reduces strain on muscles and helps train your muscle memory for better long-term posture.",
    },
    {
      question: "Does it have smart features like vibration alerts?",
      answer:
        "This specific model focuses on physical alignment. However, we do offer a Pro version that includes biofeedback vibration sensors.",
    },
    {
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can sign up for our newsletter or click the 'Notify Me' button on the product page to receive an email alert the moment we restock.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-[224px]">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F2D2D] mb-4">
          Frequently Asked Question (FAQ)
        </h2>
        <div className="max-w-2xl mx-auto border border-red-200 p-2">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>
      </div>

      {/* Accordion Container */}
      <div className="max-w-4xl mx-auto space-y-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border rounded-xl overflow-hidden transition-all duration-300 ${
              openIndex === index
                ? "bg-[#F0F9F9] border-[#B2D8D8]"
                : "bg-white border-gray-200"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-semibold text-[#0F2D2D] text-sm md:text-base">
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="text-[#156161] w-5 h-5" />
              ) : (
                <ChevronDown className="text-gray-400 w-5 h-5" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 pt-0 text-gray-500 text-sm md:text-base border-t border-teal-100/50">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyQuestion;
