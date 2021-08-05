import React from "react";
import "semantic-ui-css/components/label.min.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  expandedVariants,
  contentBlockVariants,
  mainImageVariants,
} from "./variants";
import { ReactPhotoCollage } from "react-photo-collage";
import "../../App.css";
import { Icon } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

const H1 = styled.div`
  font-size: 2vw;
  color: ${(props) => props.color};
  font-weight: 700;
  padding-bottom: 1em;
  padding-top: 1em;

  @media (min-width: 1575px) {
    padding-bottom: 1em;
    padding-top: 1em;
    font-size: 1.5em;
  }
`;

const CardBase = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: white;
  border-radius: 15px;
  width: 100%;
  height: 100%;
  color: #1b9aaa; //default H1 tag value if json value isn't provided
  padding-left: 1em;

  @media (min-width: 1575px) {
    padding-left: 0;
  }
`;

const CollageSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  height: 100%;
`;
const ExpandedCardContent = styled(motion.div)`
  h3 {
    font-size: 1.4vw;
    color: #1b9aaa;
    font-weight: 50;

    @media (min-width: 1575px) {
      font-size: 1.5em;
    }
  }

  h2 {
    font-size: 1vw;
    color: #464646;
    font-weight: 50;
    padding-top: 2px;

    @media (min-width: 426px) {
      padding-top: 0;
    }

    @media (min-width: 1575px) {
      font-size: 1em;
    }
  }

  a {
    text-decoration: none;
    color: #888888;
    cursor: pointer;
  }
`;

const Close = styled(motion.div)`
  margin-top: 1vw;
  margin-right: 1vw;
  color: ${(props) => props.color};

  @media (min-width: 426px) {
    margin-top: 1em;
    margin-right: 1em;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
  &:hover {
    color: #1b9aaa;
  }
`;

const AnimatedContentBlock = ({ children }) => (
  <motion.div variants={contentBlockVariants}>{children}</motion.div>
);

const ExpandedCard = ({ data, onClick }) => {
  const IsSmall = useMediaQuery({ query: "(min-width: 1000px)" });
  const IsPhoneSmall = useMediaQuery({ query: "(min-width: 426px)" });

  const setting = data.jobSetting;

  return (
    <CardBase
      variants={expandedVariants}
      animate="active"
      initial="inactive"
      exit="exit"
    >
      {IsSmall ? (
        <CollageSection>
          <motion.div className="collage" variants={mainImageVariants}>
            <ReactPhotoCollage {...setting} />
          </motion.div>
        </CollageSection>
      ) : null}

      <ExpandedCardContent color={data.jobColor}>
        <AnimatedContentBlock>
          <H1 color={data.jobColor}>{data.jobTitle}</H1>
        </AnimatedContentBlock>

        <AnimatedContentBlock>
          <h3>Summary</h3>
          {IsPhoneSmall ? (
            <ul>
              {data.jobPoints.map((point, key) => (
                <li>
                  <h2 key={key}>{point}</h2>
                </li>
              ))}
            </ul>
          ) : (
            data.jobPoints.map((point, key) => <h2 key={key}>{point}</h2>)
          )}
        </AnimatedContentBlock>

        <AnimatedContentBlock>
          {data.jobNews != null ? <h3>In The News</h3> : null}
          {data.jobNews != null
            ? data.jobNews.map((point, key) => (
                <h2 key={key}>
                  <a href={point[0]} target="_blank" rel="noopener noreferrer">
                    {point[1]}
                  </a>
                </h2>
              ))
            : null}
        </AnimatedContentBlock>
      </ExpandedCardContent>

      <AnimatedContentBlock>
        <Close color={data.jobColor}>
          <a onClick={() => onClick(false)}>
            {IsPhoneSmall ? (
              <Icon name="close" size="large" />
            ) : (
              <Icon name="close" size="tiny" />
            )}
          </a>
        </Close>
      </AnimatedContentBlock>
    </CardBase>
  );
};

export default ExpandedCard;
