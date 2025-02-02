import Card from "../../components/Card/Card";
//import FaqSection from "./FaqSection";

const Hero = () => {
  return (
    <div className="relative bg-blue-50 py-16 px-0 text-center bottom-6 w-full">
      {/* Hero Title & Beschreibung */}
      <h1 className="text-4xl font-bold text-gray-800">Service client</h1>
      <p className="text-lg text-gray-600 mt-2">
        Nous sommes là pour vous – trouvez des réponses à vos questions.
      </p>

      {/* Karten-Bereich (leicht in Hero integriert) */}
      <div className="absolute -bottom-30 mt-6 left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Abstand auf gap-8 erhöht */}
          <Card
            title="FAQ"
            description="Foire aux questions : trouvez-les ici."
            link="/services/faq"
          />
          <Card
            title="Toujours à jour avec l'application."
            description="Gardez votre application à jour."
            link="/services/app-update"
          />
          <Card
            title="Download"
            description="Téléchargez notre application."
            link="/services/download"
          />
          <Card
            title="Kontakt"
            description="Contactez-nous."
            link="/services/contact"
          />
        </div>
        {/* 
        <div id="faqSection" className="p-6">
          <FaqSection />
        </div>
        */}
      </div>
    </div>
  );
};

export default Hero;
