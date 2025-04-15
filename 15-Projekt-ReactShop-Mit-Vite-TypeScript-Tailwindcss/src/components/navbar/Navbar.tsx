import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";
import { useState } from "react";

function Navbar() {
  const { cartQty, handleLogout } = useShoppingCartContext();
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="h-15 border-b font-bold py-5 shadow flex items-center bg-slate-300 ">
      <Container>
        <div className="flex justify-between items-center">
          <ul className="flex flex-row">
            <li className="ml-4">
              <Link
                to="/"
                className={`font-bold ${activeLink === "home" ? "text-orange-700" : ""}`}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </Link>
            </li>
            <li className="ml-4">
              <Link
                to="/store"
                className={`font-bold ${activeLink === "store" ? "text-orange-700" : ""}`}
                onClick={() => handleLinkClick("store")}
              >
                Alle Modelle
              </Link>
            </li>
          </ul>

          <div className="flex items-center">
            <Link className="relative" to="/cart">
              <button>
                <svg
                  className="w-8 h-8 mr-1;"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                >
                  <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                    <path
                      d="M 72.975 58.994 H 31.855 c -1.539 0 -2.897 -1.005 -3.347 -2.477 L 15.199 13.006 H 3.5 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 14.289 c 1.539 0 2.897 1.005 3.347 2.476 l 13.309 43.512 h 36.204 l 10.585 -25.191 H 45 c -1.933 0 -3.5 -1.567 -3.5 -3.5 s 1.567 -3.5 3.5 -3.5 h 41.5 c 1.172 0 2.267 0.587 2.915 1.563 s 0.766 2.212 0.312 3.293 L 76.201 56.85 C 75.655 58.149 74.384 58.994 72.975 58.994 z"
                      transform=" matrix(1 0 0 1 0 0) "
                      stroke-linecap="round"
                    />
                    <circle
                      cx="28.88"
                      cy="74.33"
                      r="6.16"
                      transform="  matrix(1 0 0 1 0 0) "
                    />
                    <circle
                      cx="74.59"
                      cy="74.33"
                      r="6.16"
                      transform="  matrix(1 0 0 1 0 0) "
                    />
                  </g>
                </svg>
              </button>

              <span className="absolute w-5 h-5 bg-orange-600 flex justify-center items-center rounded-full text-white text-xs top-0 -right-4">
                {cartQty !== 0 ? cartQty : ""}
              </span>
            </Link>
            <Button
              onClick={() => {
                handleLogout();
                handleLinkClick("logout");
              }}
              className={`ml-8 font-bold ${activeLink === "logout" ? "text-orange-700" : ""}`}
            >
              Logout
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
