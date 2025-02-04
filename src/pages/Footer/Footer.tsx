const Footer = () => {
    return (
      <footer className="fixed bottom-0 left-0 z-9999 w-full bg-gray-900 text-white py-3 px-4 text-center text-sm border-t border-gray-700">
        <span>
          © {new Date().getFullYear()} <a href="https://dein-link.com" className="text-blue-400 hover:underline">Boulangerie Express</a>. Alle Rechte vorbehalten.
        </span>
      </footer>
    );
  };
  
  export default Footer;
    