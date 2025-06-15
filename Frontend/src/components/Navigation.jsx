import { Link } from "react-router";

function Navigation() {
  return (
    <nav className="z-10 bg-gradient-to-r from-green-700 via-green-800 to-green-900 flex items-center justify-between px-8 text-white py-4">
      <div className="flex items-center space-x-8">
        <Link to="/" className="text-2xl font-bold italic font-serif">
          SecondChance
        </Link>
        <Link to="/dashbord" className="text-base hover:text-yellow-300 transition-all">
          Dashboard
        </Link>
        <Link to="/postadd" className="text-base hover:text-yellow-300 transition-all">
          Post Add
        </Link>
      </div>

      <div className="flex items-center space-x-8">
        <Link to="/cart" className="hover:text-yellow-300 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-10 h-10"  
            viewBox="0 0 512 512"
          >
            <path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" />
          </svg>
        </Link>
        <Link to="/sign-up" className="text-base hover:text-yellow-300 transition-all">
          Sign-up
        </Link>
        <Link to="/sign-in" className="text-base hover:text-yellow-300 transition-all">
          Sign-in
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
