

const Hero = () => {
  return (
    <div className="w-full bg-gray-300 text-center">
      {/* Hero-Bereich - Direkt unter dem Header */}
      <div className="pt-10 pb-30 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Service clients
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Nous sommes là pour vous – trouvez des réponses à vos questions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
