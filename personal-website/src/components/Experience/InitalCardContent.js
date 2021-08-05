import React from "react";
import "semantic-ui-css/components/label.min.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  thumbnailVariants,
  cardContentVariants,
  contentVariants,
} from "./variants";
import "../../App.css";

const CardBase = styled(motion.div)`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  color: #1b9aaa; //default H1 tag value if json value isn't provided

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ImageContainer = styled(motion.div)`
  @media (min-width: 1000px) {
    margin-right: 3%;
    align-self: center;
  }
`;

const Image = styled(motion.img)`
  max-width: 25vw;
  vertical-align: middle;
  border-radius: 15px;
  height: auto;

  @media (min-width: 1000px) {
    max-width: 30vh;
  }
`;

const InitalCardContent = styled(motion.div)`
  @media (min-width: 1000px) {
    display: block;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 1.2vw;
    color: #464646;
    font-weight: 50;
    @media (min-width: 1175px) {
      font-size: 1em;
    }
  }

  h3 {
    font-size: 1.1vw;
    color: #888888;

    font-weight: 400;

    @media (min-width: 1245px) {
      font-size: 0.9em;
    }
  }

  a {
    text-decoration: none;
    color: #1b9aaa;
    font-weight: 400;
    font-size: 1.1vw;
    cursor: pointer;

    @media (min-width: 1245px) {
      font-size: 0.9em;
    }
  }
`;

const H1 = styled.div`
  font-size: 1.5vw;
  color: ${(props) => props.color};
  font-weight: 700;
  padding-top: 1em;

  @media (min-width: 1245px) {
    font-size: 1.5em;
  }
`;

const H2 = styled.div`
  color: ${(props) => props.color};
  font-size: 1vw;
  font-weight: 50;
  padding-top: 4px;
  padding-bottom: 1em;

  @media (min-width: 1245px) {
    font-size: 1em;
  }
`;

const LabelDiv = styled.div`
  width: 100%;
  line-height: 1.2vw;
  @media (min-width: 1000px) {
    padding-bottom: 1em;
  }
`;

const InitalCard = ({ data, onClick }) => (
  <CardBase
    variants={cardContentVariants}
    exit="inactive"
    animate="active"
    initial="inactive"
  >
    <ImageContainer variants={thumbnailVariants}>
      <Image src={data.jobThumbnail} />
    </ImageContainer>
    <InitalCardContent variants={contentVariants}>
      <H1 color={data.jobColor}>{data.jobTitle}</H1>
      <H2 color={data.jobColor}>{data.jobCompany}</H2>
      <h2>{data.jobDescription}</h2>
      <h3>
        {data.jobDetails}
        <br />
        {data.jobLocation}
      </h3>

      <LabelDiv>
        {data.jobLabels.map((label, key) => (
          <div key={key} className="ui label">
            {label}
          </div>
        ))}
      </LabelDiv>
      {data.jobExpanded ? (
        <a onClick={() => onClick(true)}>Click Here to Learn More</a>
      ) : null}
    </InitalCardContent>
  </CardBase>
);

export default InitalCard;
