import { Link } from "react-router";
function Navigation() {

  return (
    <nav className="z-10 bg-black flex  items-center justify-between px-8 text-white py-4">
      <div className="flex items-center space-x-8">
        <a href="/" className="text-2xl font-bold italic font-serif ">
        SecondChance
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
