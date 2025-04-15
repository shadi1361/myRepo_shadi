import styled from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  //Das ist eine Komponente und gibt eine JSX-Datei zurück.
  return (
    <div className={styled.headerWrapper}>
      <div className="container">
        <div className={styled.header}>
          <h3> {props.title} </h3>
          <ul>
            <li>
              <Link to="/">Neue Artikel</Link>
            </li>
            <li>
              <Link to="/">Liste der Artikel</Link>
            </li>
            <li>
              <Link to="/about"> Über uns</Link>
            </li>
            <li>
              <Link to="/create-article">Erstellung eines Artikels</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
