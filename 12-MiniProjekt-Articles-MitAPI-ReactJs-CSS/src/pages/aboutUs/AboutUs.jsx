import Navbar from "../../components/navbar/Navbar";
import styled from "./about.module.css";
import Firma from "./../../assets/images/firma.jpg";
import { Fragment } from "react";


function AboutUs() {
  return (
    <Fragment>
      <Navbar title="Shadi Blog" />
      <div className={`container ${styled.aboutPage}`}>
        <img src={Firma} alt="firma" />
        <h3>
          Was ist Coding? Ein Leitfaden für Anfänger zur Welt des Programmierens
        </h3>
        <p>
          In der heutigen digitalen Ära ist das Programmieren zu einer
          essentiellen Fähigkeit geworden, die die von uns täglich genutzte
          Technologie antreibt. Von Websites und mobilen Apps bis hin zu
          Software und künstlicher Intelligenz bildet das Codieren das Rückgrat
          moderner Technologie. Aber was genau ist das Coding? In diesem
          umfassenden Leitfaden tauchen wir in die Welt des Programmierens ein,
          erkunden seine Grundlagen, Vorteile und wie es unsere digitale
          Landschaft prägt. Egal, ob Du ein neugieriger Anfänger bist oder daran
          interessiert bist, eine Karriere in der Technologie zu verfolgen,
          dieser Artikel wird das Programmieren entmystifizieren und dir eine
          solide Grundlage bieten, um deine Codierungsreise zu beginnen. Um das
          Konzept des Codings zu erfassen, müssen wir seine grundlegenden
          Bausteine verstehen. Im Kern ist das Programmieren der Prozess, bei
          dem eine Programmiersprache verwendet wird, um Anweisungen zu
          schreiben, die ein Computer verstehen und ausführen kann. Diese
          Anweisungen, auch Code genannt, werden unter Verwendung einer
          Kombination von Buchstaben, Zahlen und Symbolen geschrieben und bilden
          eine logische Abfolge, um bestimmte Aufgaben auszuführen.
        </p>

        <h4>Wo sind wir? Überall in Deutschland</h4>
        <div className={styled.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153168!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b6f1b1a1b1!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611816751234!5m2!1sen!2sau"
            width="1000"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutUs;
