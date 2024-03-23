import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import colorProfile from "../assets/img/Kat-Lomidze.jpg";
import hoverProfile from "../assets/img/profilehover.jpg";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "./CSS/Home.css";

function Home() {
  function setAvatarReal() {
    setImage(hoverProfile);
  }

  function setAvatarAnimation() {
    setImage(colorProfile);
  }
  const [image, setImage] = useState(colorProfile);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>KAT - Home</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft">
          <h3>
            Hi there, my name is
          </h3>
          <h2>
            <span className="name-hover">Kat</span>
            <br />
            <span className="name-hover">Lomidze</span>
          </h2>
          <NavLink to="/contact" className="btn-download text-center">
            Let's Connect
          </NavLink>
        </div>
        <div className="home-right animate__animated animate__fadeIn animate__slower">
          <img
            className="home-image"
            src={image}
            onMouseOver={setAvatarReal}
            onMouseOut={setAvatarAnimation}
            alt="Avatar"
          />
        </div>
      </Container>
    </>
  );
}

export default Home;