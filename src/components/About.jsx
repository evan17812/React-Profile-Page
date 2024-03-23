import FsLightbox from 'fslightbox-react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import './CSS/About.css';
import ProjectImages from '../assets/routes/Allimg';

function About() {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>KAT - About</title>
        </Helmet>
      </HelmetProvider>
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={ProjectImages}
        slide={lightboxController.slide}
      />
      <Container fluid className="about-wrapper">
        <div className="about-left animate__animated animate__zoomIn">
          <h3>About</h3>
          <h4>
            ───&nbsp;&nbsp;Page <strong>02</strong>
          </h4>
        </div>
        <div className="about-right animate__animated animate__fadeIn animate__slower py-3">
          <p>
          I am a Full-Stack Developer student, currently studying at a Columbia University bootcamp.
          As a full stack developer student, my journey started with a love for technology and problem-solving. 
          From coding sleek user interfaces to diving into databases and servers, I'm driven by a passion for mastering every layer of web development.
          With each project, I'm fueled by the excitement of learning and the drive to create impactful solutions in the tech world.
          </p>

          <h4>Preview of my work</h4>
          <span>─────</span>
          <div className="preview-wrapper">
            {ProjectImages
              .reduce((rows, src, index) => {
                if (index % 3 === 0) rows.push([]);
                rows[rows.length - 1].push(
                  <div className="col preview-ratio gap-image" key={src}>
                    <img
                      className="shadow"
                      loading="lazy"
                      src={src}
                      alt={`preview ${index + 1}`}
                      onClick={() => openLightboxOnSlide(index + 1)}
                    />
                  </div>
                );
                return rows;
              }, [])
              .map((row, index) => (
                <div className="row my-4" key={index}>
                  {row}
                </div>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default About;