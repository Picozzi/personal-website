import React, { useState } from "react";
import "../../App.css";
import styled from "styled-components";
import { motion } from "framer-motion";

const Tile = styled(motion.div)`
  height: 15vw;
  width: 15vw;

  position: relative;
`;

const FrontTile = styled(motion.div)`
  background-color: #1b9aaa;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  border: 3px solid #464646;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  padding: 1vw;

  @media (min-width: 1575px) {
    padding: 2em;
  }
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    object-fit: cover;
    width: 100%;
    height: 70%;
    border-radius: 15px;
  }

  h2 {
    color: white;
    font-size: 1.5vw;
    text-align: center;
    padding: 0;

    @media (min-width: 1575px) {
      font-size: 1.5em;
    }
  }
`;

const BackTile = styled(motion.div)`
  background-color: #1b9aaa;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  border: 3px solid #464646;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  padding: 1vw;

  @media (min-width: 1575px) {
    padding: 2em;
  }
  font-family: Montserrat;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
    font-size: 1vw;
    text-align: center;
    padding: 0;

    @media (min-width: 1575px) {
      font-size: 1em;
    }
  }

  span {
    font-weight: 200;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const CertificationTile = (props) => {
  const [rotationFront, setRotationFront] = useState(0);
  const [rotationBack, setRotationBack] = useState(180);

  return (
    <Tile>
      <FrontTile
        animate={{ rotateY: rotationFront }}
        transition={{ duration: 2 }}
        onHoverStart={() => {
          setRotationFront(rotationFront - 180);
          setRotationBack(rotationBack - 180);
          console.log("HI");
        }}
      >
        <img src={props.certificate.certificateImage} />
        <h2>{props.certificate.certificateTitle}</h2>
      </FrontTile>

      <BackTile
        initial={{ opacity: 0 }}
        animate={{ rotateY: rotationBack, opacity: 1 }}
        transition={{ duration: 2 }}
        onHoverEnd={() => {
          setRotationFront(rotationFront + 180);
          setRotationBack(rotationFront + 360);
          console.log("Bye");
        }}
      >
        <h2>
          Issued: <span>{props.certificate.certificateDate}</span>
        </h2>
        <h2>
          Issued By: <span>{props.certificate.certificateOrganization}</span>
        </h2>
        <h2>
          <span>{props.certificate.certificateDescription}</span>
        </h2>
        {props.certificate.certificateLink != null ? (
          <a
            href={props.certificate.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Click Here to View Certificate</h2>
          </a>
        ) : null}
      </BackTile>
    </Tile>
  );
};

export default CertificationTile;
