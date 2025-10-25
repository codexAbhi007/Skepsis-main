"use client";

import React, { useState } from "react";
import { FAQItem } from "../FAQItem";

const faqData = [
  {
    question: "What is Skepsis?",
    answer:
      "Skepsis is the technical committee of the Computer Science and Engineering (CSE) department at Sister Nivedita University. It aims to foster innovation, knowledge sharing, and technical skill development among students."
  },
  {
    question: "What events does Skepsis organize?",
    answer:
      "Skepsis organizes workshops, hackathons, coding competitions, seminars, and technical talks. These events provide opportunities for students to enhance practical skills and collaborate."
  },
  {
    question: "How can I become a member of Skepsis?",
    answer:
      "To become a member, participate in our activities and express interest. Membership selection is based on enthusiasm, contributions, and participation."
  },
  {
    question: "Who can join Skepsis?",
    answer:
      "Skepsis is open to all students in the Computer Science and Engineering department at Sister Nivedita University who are passionate about technology and innovation."
  },
  {
    question: "When was Skepsis founded?",
    answer:
      "Skepsis was founded in 2020 with the goal of encouraging technical excellence and providing a platform for students to explore emerging technologies."
  },
  {
    question: "How do I stay updated on events?",
    answer:
      "Follow our official channels, join the community, and subscribe to announcements. We post event details, schedules, and sign-up links in advance."
  }
];

export function FAQSection() {
  // Single-open accordion. Set to null to allow none open initially.
  const [openId, setOpenId] = useState<number | null>(0);

  function handleToggle(id: number) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, midPoint);
  const rightColumn = faqData.slice(midPoint);

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-3">
          Answers to the most common questions about Skepsis — events, membership and participation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {leftColumn.map((faq, i) => (
            <FAQItem
              key={`left-${i}`}
              id={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        <div className="space-y-4">
          {rightColumn.map((faq, j) => {
            const idx = j + midPoint;
            return (
              <FAQItem
                key={`right-${j}`}
                id={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === idx}
                onToggle={() => handleToggle(idx)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;