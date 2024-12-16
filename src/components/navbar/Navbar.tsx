import React from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import content from "../../data/content.json";
import Container from "../ui/Container";
import NavLink from "./NavLink";
import Button from "../ui/Button";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Navbar = () => {
  const { logo, links, buttons } = content.navbar;
  const scrollPosition = useScrollPosition();
  const isScrolled = scrollPosition > 0;
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <Container>
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-blue-700" : "text-blue-600"
              }`}
            >
              {logo}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {!isAuthPage && (
              <>
                <NavLink to="/hire" isScrolled={isScrolled}>
                  Quiero contratar
                </NavLink>
                <NavLink to="#" external isScrolled={isScrolled}>
                  Quiero trabajar
                </NavLink>
              </>
            )}
            <Link to="/login">
              <Button
                variant="secondary"
                className={isScrolled ? "shadow-sm" : ""}
              >
                Ingresa
              </Button>
            </Link>
            <Link to="/register">
              <Button
                variant="primary"
                className={isScrolled ? "shadow-sm" : ""}
              >
                Registrate
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
