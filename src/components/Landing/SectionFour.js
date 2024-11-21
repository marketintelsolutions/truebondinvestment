import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const SectionFour = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What types of insurance do you offer?",
            answer: "We offer a comprehensive range of insurance products including life insurance, health insurance, property insurance, auto insurance, and business insurance. Each category has multiple plans tailored to different needs and budgets."
        },
        {
            question: "How do I choose the right policy?",
            answer: "Choosing the right policy involves assessing your specific needs, budget, and long-term goals. Our insurance experts can help you evaluate your requirements and recommend suitable options. We consider factors like your lifestyle, financial obligations, and risk tolerance to find the best match."
        },
        {
            question: "What happens if I miss a premium payment?",
            answer: "Most policies have a grace period after the due date during which you can make the payment without losing coverage. The length of this period varies by policy type. If payment isn't made within the grace period, your coverage may lapse. We recommend setting up automatic payments to avoid any interruptions."
        },
        {
            question: "How does the claims process work?",
            answer: "Our claims process is designed to be straightforward and efficient. First, notify us of the claim through our website, phone, or email. Our claims team will guide you through the required documentation. Once submitted, we'll assess your claim and process it as quickly as possible, keeping you informed at each step."
        },
        {
            question: "Can I adjust my coverage as my needs change?",
            answer: "Yes, you can adjust your coverage as your circumstances change. We recommend reviewing your policies annually or when major life events occur. Contact your insurance advisor to discuss modifications to your coverage. Changes may affect your premiums, and some adjustments might require underwriting approval."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-[#222222] text-white pt-20">
            <div className="w-full max-w-[1000px] mx-auto px-4">
                <h2 className="text-3xl mb-4 font-light tracking-[4px]">FREQUENTLY ASKED QUESTIONS</h2>
                <p className="text-base font-light mb-10">Find answers to common questions about our insurance products and services.</p>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200"
                        >
                            <button
                                className="w-full flex justify-between items-center py-5 px-4 hover:bg-primaryOrange transition-colors"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-left text-lg font-light">{item.question}</span>
                                <IoIosArrowDown
                                    className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                    size={20}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index
                                    ? 'max-h-[300px] opacity-100'
                                    : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="px-4 pb-5 text-base font-light leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionFour;