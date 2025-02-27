import Card from "../../components/cards/Card";
import Hero from "../sections/Hero";
import { FaArrowRight } from "react-icons/fa";
//import bolangerie_app_mockup from "@/assets/images/bolangerie_app_mockup.png";
import bolangerie_mockup_plain from "@/assets/images/boulangerie_857x485_plain.jpg";
import bolangerie_express_mockup from "@/assets/images/boulangerie_express_mockup.png";


const Customerservice = () => {
  return (
    <div className="pb-20 transition-all duration-300">
      <Hero />

      {/* Karten-Bereich (leicht in Hero integriert) */}
      <div className="w-full max-w-7xl mx-auto px-16 md:px-16 pb-16 -m-18"> {/* Verschiebung der Karten nach unten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 gap-8">
          <Card
            title="FAQ"
            description="Foire aux questions : trouvez-les ici."
            link="#faq"
          />
          <Card
            title="Toujours à jour avec l'application."
            description="Gardez votre application à jour."
            link="#app"
          />
          <Card
            title="Download"
            description="Téléchargez notre application."
            link="#downloads"
          />
          <Card
            title="Kontakt"
            description="Contactez-nous."
            link="#contact"
          />
        </div>
      </div>

      {/* Inhalte für die Zielbereiche */}
      <div id="faq" className="pt-20 pb-10 px-6 md:px-16 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">FAQ</h2>
        <p>Hier finden Sie Antworten auf häufig gestellte Fragen.</p>
      </div>

      <div id="app" className="pt-20 pb-10 px-0 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-16">
          {/* Erster Abschnitt: "Mein Boulangerie-ExpressApp" */}
          <div>
            <h2 className="text-3xl md:text-2xl font-bold text-gray-900">
              „Mein Boulangerie-ExpressApp“
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Mit unserer App „Mein Boulangerie-ExpressApp“ haben Sie alle wichtigen Funktionen rund um Ihr Zuhause immer griffbereit – ganz bequem auf Ihrem Smartphone.
              <br />
              <br />
              Avec notre application „Mein Boulangerie-ExpressApp“, vous avez toutes les fonctionnalités importantes liées à votre domicile à portée de main – directement sur votre smartphone.
            </p>

            <ul className="mt-4 text-gray-700 text-lg list-disc pl-5">
              <li>Mietvertrag & Nebenkosten einsehen / Voir votre contrat de location et les charges</li>
              <li>Reparaturen & Anliegen direkt melden / Signaler des réparations et des demandes directement</li>
              <li>Immer auf dem neuesten Stand bleiben / Restez toujours informé</li>
            </ul>

            {/* Mehr zur App Button */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="/mein-boulangerie-express-app"
                className="bg-[#eb8e2f] text-white px-6 py-3 flex items-center gap-2 rounded-lg hover:bg-[#cf822d] transition"
              >
                En savoir plus sur l'app
                <FaArrowRight className="w-4 h-6" />
              </a>
            </div>
          </div>

          {/* Bild-Bereich */}
          <div className="flex justify-center">
            <img
              src={bolangerie_mockup_plain}
              alt="Boulangerie-Express App Mockup"
              className="w-full max-w-xl h-auto md:h-[400px] rounded-2xl shadow-lg"
            />
          </div>
        </div>


        {/* Zweiter Abschnitt: "Mein Boulangerie-ExpressApp" */}
        <div className="mt-20 bg-[#eb8e2f] py-16 px-0 w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start relative">

            {/* Bild-Bereich (1/3 des Bildes verdecken) */}
            <div className="md:w-1/2 flex justify-center relative z-10">
              <img
                src={bolangerie_express_mockup}
                alt="App Showcase"
                className="w-3/4 md:w-full max-w-xs md:max-w-sm object-contain rounded-lg shadow-lg h-auto md:h-full"
              />
            </div>

            {/* Text-Bereich (überlappt das Bild) */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white -mt-1/4 md:-mt-1/3 relative z-20">
              <h2 className="text-3xl md:text-4xl font-bold">
                „Mein Boulangerie-ExpressApp“
              </h2>
              <p className="mt-4 text-lg">
                Mit der „Mein Boulangerie-Express“ App erledigen Sie vieles schnell und einfach direkt auf Ihrem Smartphone oder Tablet.
                Melden Sie Schäden, rufen Sie Ihre Vertragsdaten ab oder erhalten Sie wichtige Infos zu Ihrer Wohnung.
              </p>

              <ul className="mt-4 text-lg list-disc pl-5">
                <li>Einfache Bestellungen für Bäckerei-Produkte</li>
                <li>Live-Status von Bestellungen & Lieferung</li>
                <li>Exklusive Rabatte für registrierte Nutzer</li>
              </ul>

              {/* Buttons unten */}
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com/de/app/mein-vonovia/id1489372549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fff] text-[#000] font-bold px-6 py-3 flex items-center gap-2 rounded-lg hover:bg-[#fff] hover:text-[#cf822d] transition"
                >
                  <span>App Store</span>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=de.vonovia.customerapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#fff] text-[#000] font-bold px-6 py-3 flex items-center gap-2 rounded-lg hover:bg-[#fff] hover:text-[#cf822d] transition"
                >
                  <span>Google Play</span>
                </a>
              </div>
            </div>

          </div>
        </div>


      </div>

      <div id="downloads" className="pt-20 pb-10 px-6 md:px-16 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Download</h2>
        <p>Laden Sie unsere Anwendung für verschiedene Plattformen herunter.</p>
      </div>

      <div id="contact" className="pt-20 pb-10 px-6 md:px-16 bg-white">
        <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
        <p>Kontaktieren Sie uns für weitere Informationen.</p>
      </div>

    </div>
  );
};

export default Customerservice;