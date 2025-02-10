import Card from "../../components/cards/Card";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-gray-300 text-center">
        {/* Hero-Bereich - Direkt unter dem Header */}
        <div className="pt-10 pb-40 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Service clients
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Nous sommes là pour vous – trouvez des réponses à vos questions.
          </p>
        </div>
      </div>
      {/* Karten-Bereich (leicht in Hero integriert) */}
      <div className="w-full max-w-7xl mx-auto px-6 -m-16"> {/* Verschiebung der Karten nach unten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
      </div>
    </>
  );
};

export default Hero;
