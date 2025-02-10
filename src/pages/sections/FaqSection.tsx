import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const faqs = [
  { question: "Comment puis-je signaler un support?", answer: "Utilisez l'application Boulangerie Express ou appelez notre service client." },
  { question: "Comment puis-je conclure un contrat avec le service client?", answer: "Connectez-vous à votre compte en ligne et mettez à jour vos informations bancaires." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq">
      <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Häufig gestellte Fragen</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg">
            <button
              className="flex justify-between w-full text-lg font-semibold"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              {openIndex === index ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
            </button>
            {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default FaqSection;
