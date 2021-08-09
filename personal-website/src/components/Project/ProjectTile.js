import React from "react";
import "../../App.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import ButtonList from "../Buttons/ButtonList";
import { useMediaQuery } from "react-responsive";

const Tile = styled(motion.div)`
  position: relative;
  height: 60vw;
  width: 25vw;

  @media (min-width: 1000px) {
    height: 75vh;
    width: 25vw;
  }

  &:before {
    content: "";
    overflow: hidden;
    background: #1b9aaa;
    border-radius: 15px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 0;
    transform: translate(8px, 8px);
    transition: transform 0.4s ease;
    box-shadow: 0 25px 25px rgba(0, 0, 0, 0.1);
  }

  &:hover::before {
    transform: translate(14px, 14px);
  }
`;

const Base = styled(motion.div)`
  z-index: 2;
  position: relative;
  display: flex;
  height: 100%;
`;

const TileInformation = styled(motion.div)`
  background-color: white;
  height: 100%;
  width: 100%;
  border-radius: 15px;
  padding: 0em 0.5em 0em 0.5em;
  display: flex;
  //justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: Montserrat;

  @media (min-width: 1000px) {
    padding: 0em 2em 0em 2em;
  }

  h3 {
    font-size: 2vw;
    color: #1b9aaa;
    font-weight: 700;
    padding-bottom: 7px;
    padding-top: 0;

    @media (min-width: 1575px) {
      font-size: 2em;
    }
  }

  h2 {
    font-size: 1.1vw;
    color: #464646;
    font-weight: 50;
    padding-top: 1vh;

    @media (min-width: 1575px) {
      font-size: 1em;
    }
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 40%;
    border-radius: 15px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

const LabelDiv = styled.div`
  width: 100%;
  padding-top: 0.3em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LinkDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ProjectTile = (props) => {
  const IsTooSmall = useMediaQuery({ query: "(min-width: 600px)" });

  return (
    <Tile whileHover={{ scale: 1.05 }}>
      <Base>
        <TileInformation>
          <h3>{props.project.projectTitle}</h3>
          <img src={props.project.projectImage} />
          <h2>{props.project.projectDescription}</h2>

          <LabelDiv>
            {props.project.projectLabels.map((label, key) => (
              <div key={key} className="ui label">
                {label}
              </div>
            ))}
          </LabelDiv>
          {IsTooSmall ? (
            <ButtonList
              code={props.project.projectSource}
              app={props.project.projectApp}
            />
          ) : (
            <LinkDiv>
              <a
                href={props.project.projectSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Code</h2>
              </a>
              <a
                href={props.project.prokectApp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Application</h2>
              </a>
            </LinkDiv>
          )}
        </TileInformation>
      </Base>
    </Tile>
  );
};

export default ProjectTile;
