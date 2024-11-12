import { useState } from 'react';

const faqs = [

  [
    {
      question: "What is TravelSmart?",
      answer: "TravelSmart is a platform that provides comprehensive travel tips, destination insights, and curated travel deals to help you plan your next adventure."
    },
    {
      question: "How do I sign up?",
      answer: "Click on the 'Sign Up' button at the top of the page, fill out your details, and create an account to start exploring TravelSmart."
    },
    {
      question: "Is TravelSmart free to use?",
      answer: "Yes, signing up and using basic features of TravelSmart is completely free."
    },
    {
      question: "Can I book flights and hotels directly?",
      answer: "Currently, TravelSmart focuses on providing travel tips and insights. Booking services are not yet available."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach out to us using the 'Contact Us' link in the footer, or send us a message through the form provided."
    }
  ],

  [
    {
      question: "How does TravelSmart recommend destinations?",
      answer: "Our recommendations are based on traveler reviews, expert insights, and popular attractions in the destination."
    },
    {
      question: "Can I save my favorite travel spots?",
      answer: "Yes, after signing up, you can save your favorite travel spots and access them in your profile."
    },
    {
      question: "Does TravelSmart offer travel guides?",
      answer: "We offer expert-curated travel guides for a variety of destinations, helping you make the most of your trip."
    },
    {
      question: "Is my personal information safe on TravelSmart?",
      answer: "Absolutely. TravelSmart ensures your personal data is securely encrypted and never shared with third parties without your consent."
    },
    {
      question: "What makes TravelSmart different from other travel platforms?",
      answer: "TravelSmart stands out by offering a tailored experience, combining expert insights, curated deals, and advanced planning tools."
    }
  ]
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="min-h-screen bg-primary-dark py-12 flex flex-col justify-center">
      <h2 className="text-center text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div>
          {faqs[0].map((faq, index) => (
            <div key={index} className="border-b border-primary-light pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-4 text-lg font-semibold text-white focus:outline-none"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <p className="text-white pt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div>
          {faqs[1].map((faq, index) => (
            <div key={index} className="border-b border-primary-light pb-4">
              <button
                onClick={() => toggleFAQ(index + 5)} 
                className="w-full text-left py-4 text-lg font-semibold text-white focus:outline-none"
              >
                {faq.question}
              </button>
              {activeIndex === index + 5 && (
                <p className="text-white pt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
