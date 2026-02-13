"use client";

import React, { useState } from "react";
import { fqaData } from "@/lib/FQAData";
import { ChevronDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function FQA() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(
    null,
  );

  const toggleAccordion = (index: number) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {fqaData.map((item, index) => {
        const isOpen = index === openQuestionIndex;
        return (
          <div
            key={index}
            className={`group border transition-all duration-500 ${
              isOpen
                ? "border-indigo-500/50 bg-indigo-500/5 shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)]"
                : "border-white/10 bg-white/5 hover:border-white/20"
            } rounded-3xl overflow-hidden backdrop-blur-md`}
          >
            <button
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
            >
              <span
                className={`text-lg md:text-xl uppercase italic font-black tracking-tight transition-colors duration-300 pr-8 ${
                  isOpen ? "text-indigo-500" : "text-zinc-200"
                }`}
              >
                {item.question}
              </span>

              <div
                className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "bg-indigo-500 border-indigo-500 rotate-180"
                    : "bg-white/5 border-white/10 group-hover:border-white/30"
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 ${isOpen ? "text-white" : "text-zinc-500"}`}
                />
              </div>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-8">
                <div className="h-px w-full bg-linear-to-r from-indigo-500/50 to-transparent mb-6" />

                <div className="text-zinc-400 text-base md:text-lg leading-relaxed font-medium">
                  <ReactMarkdown
                    components={{
                      a: ({ node, ...props }) => (
                        <Link
                          href={`${props.href}`}
                          {...props}
                          className="text-indigo-500 hover:text-indigo-300 transition-colors font-bold"
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      ),
                      strong: ({ node, ...props }) => (
                        <strong
                          {...props}
                          className="text-zinc-100 font-bold"
                        />
                      ),
                    }}
                  >
                    {item.answer}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
