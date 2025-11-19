"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { Trans, useTranslation } from "react-i18next";

const faqs = [
  {
    question: "What is Nicepay?",
    answer:
      "Nicepay is an all-in-one financial management platform designed to simplify payments, automate invoicing, track expenses in real-time, and ensure secure transactions for businesses of all sizes.",
  },
  {
    question: "How does Nicepay work?",
    answer:
      "Nicepay works by providing seamless integration with your payment systems, automating billing, and offering real-time analytics for smarter financial management.",
  },
  {
    question: "Is Nicepay secure?",
    answer:
      "Yes, Nicepay uses advanced encryption and fraud prevention technologies to ensure all transactions are safe and secure.",
  },
  {
    question: "Can Nicepay integrate with other accounting software?",
    answer:
      "Absolutely! Nicepay integrates with popular accounting software, making it easier to manage all your financial data in one place.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useTranslation();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left side text */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 text-secondaryColorLight1 cursor-pointer select-none border-b-[1px] border-secondaryColorLight1 w-fit">
            <HiOutlineBuildingLibrary className="w-6 h-6" />
            <span className="text-sm tracking-widest uppercase">
              {t("tfaq")}
            </span>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <Trans
                i18nKey="faq"
                components={{ highlight: <span className="text-mainColor" /> }}
              />
            </h2>
          </div>

          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Need To Ask Some Questions Or Check Questions
            Have a question?
            <br />
            Browse our answers to the frequently asked questions.
          </p>
        </div>

        {/* Right side FAQ */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl bg-white shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 text-purple-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100 p-4 pt-0"
                    : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
