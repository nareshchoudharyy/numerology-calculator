"use client"
import { useState } from "react"
import Image from "next/image"
import { Work_Sans } from "next/font/google"
import { FaPlus, FaMinus } from "react-icons/fa6";

const workSans = Work_Sans({
    weight: ["400", "600", "700"],
    subsets: ["latin"]
})

const questions = [
    {
        id: 1,
        question: 'How accurate is numerology?',
        answer: ' Numerology offers insights based on ancient principles and patterns. While it can provide valuable guidance, it should be considered as one of many tools for self-discovery and decision-making.',
    },
    {
        id: 2,
        question: 'Can numerology improve my career?',
        answer: 'Numerology can offer guidance on career paths that align with your strengths and personality traits. It can help you make informed decisions about your professional life.',
    },
    {
        id: 3,
        question: 'How do I use the numerology calculator?',
        answer: 'Enter your birth date and full name, click to calculate, review the results, and use the insights to make informed decisions.',
    },
    {
        id: 4,
        question: 'Can numerology help with relationships?',
        answer: 'Yes, numerology can assess compatibility and provide insights into relationship dynamics. It can help you understand your partner better and improve your relationship.',
    },
    {
        id: 5,
        question: ' How does the numerology calculator work?',
        answer: "Enter your birth date and full name, and our calculator will give you personalized insights. It tells you your Life Path Number, favorite color, lucky number, zodiac compatibility, health tips, relationship advice, career suggestions, and matches you with a famous personality. Discover more about yourself and your future! "
    },
    {
        id: 6,
        question: 'What are the benefits of using the numerology calculator?',
        answer: ' It helps you understand your personality, get advice on decisions, gain personal insights, find your lucky number, check compatibility, get career suggestions, and find inspiration from famous people.',
    }
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const [answerHeights, setAnswerHeights] = useState(
        Array(questions.length).fill(0)
    )
    const toggleQuestion = idx => {
        setActiveIndex(activeIndex === idx ? null : idx)
        const newAnswerHeights = Array(questions.length).fill(0)
        if (activeIndex !== idx)
            newAnswerHeights[idx] = document.getElementById(
                `answer-${idx}`
            )?.scrollHeight
        setAnswerHeights(newAnswerHeights)
    }
    return (
        <div
            className={`${workSans.className} container rounded-xl bg-faqWhite p-6 text-faqDarkPurple`}
        >
            {/* Title */}
            <div className="flex items-center gap-6">
                <h1 className="text-3xl font-bold">FAQs</h1>
            </div>
            {/* Questions */}
            <div className="flex flex-col divide-y">
                {questions.map(({ question, answer }, idx) => (
                    <div key={idx} className="py-6">
                        <div
                            className="flex items-center justify-between hover:cursor-pointer"
                            onClick={() => toggleQuestion(idx)}
                        >
                            <h2 className="text-md lg:text-lg font-bold leading-6 text-faqDarkPurple hover:text-faqPurple">
                                {question}
                            </h2>
                            {activeIndex === idx ? <FaMinus /> : <FaPlus />}
                        </div>
                        {/* Answer */}
                        <div
                            id={`answer-${idx}`}
                            className="overflow-hidden transition-all duration-300"
                            style={{ maxHeight: `${answerHeights[idx] || 0}px` }}
                        >
                            <p className="pt-6 text-faqGrayishPurple">{answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Faq;