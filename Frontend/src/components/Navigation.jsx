import { Link } from "react-router";

function Navigation() {
  return (
    <nav className="z-10 bg-gradient-to-r from-green-700 via-green-800 to-green-900 flex items-center justify-between px-8 text-white py-4">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-2xl font-bold italic font-serif">
          SecondChance
        </Link>
        <Link to="/home" className="text-base hover:text-yellow-300 transition-all">
          Home
        </Link>
        <Link to="/dashboard" className="text-base hover:text-yellow-300 transition-all">
          Dashboard
        </Link>
        <Link to="/dashboard" className="text-base hover:text-yellow-300 transition-all">
          Post Add
        </Link>
      </div>

      <div className="flex items-center space-x-8">
        <Link to="/sign-in" className="text-base hover:text-yellow-300 transition-all">
          Sign-in
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
