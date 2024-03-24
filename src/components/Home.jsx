import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import colorProfile from "../assets/img/profile.png";
import hoverProfile from "../assets/img/profilehover.png";
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
          <title>Profile Page</title>
        </Helmet>
      </HelmetProvider>
      <Container fluid className="home-wrapper">
        <div className="home-left animate__animated animate__fadeInLeft">
          <h3>
            Hi, welcome to my Portfolio Profile Page
          </h3>
          <h2>
            <span className="name-hover">Evan</span>
            <br />
            <span className="name-hover">Chang</span>
          </h2>
          <NavLink to="/contact" className="btn-download text-center">
            Let&apos;s Connect
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