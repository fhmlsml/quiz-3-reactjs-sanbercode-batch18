import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./context";
import logo from "../assets/img/logo.png"

const Navigation = () => {
  const { logins } = useContext(Context);
  const [login, setLogin] = logins;

  const handleLogout = () => {
    setLogin(false);
    sessionStorage.clear()
  };
  return (
    <header className="navbar">
      <img id="logo" className="navbar-brand" alt="logo" src={logo} width="180px" />
      <nav className="navbar-right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          {login ? (
            <>
              <li>
                <Link to="movie">Movie List Editor</Link>
              </li>
              <li>
                <Link to="/login" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
