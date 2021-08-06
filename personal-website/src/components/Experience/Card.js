import React, { useState } from "react";
import "semantic-ui-css/components/label.min.css";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import InitialCardContent from "./InitalCardContent";
import ExpandedCardContent from "./ExpandedCardContent";
import { useMediaQuery } from "react-responsive";
import "../../App.css";

const Base = styled(motion.div)`
  z-index: 2;
  position: relative;
  display: flex;
  height: 100%;
`;

const Cards = styled(motion.div)`
  font-family: Montserrat;
  padding-bottom: 5vh;

  @media (min-width: 1575px) {
    padding-bottom: 75px;
  }
`;

const Card = (props) => {
  const [isExpanded, setIsExpanded] = useState();

  const IsSmall = useMediaQuery({ query: "(min-width: 1000px)" });

  const cardVariants = IsSmall
    ? {
        inactive: {
          height: "35vh",
          width: "60vw",
          transition: {
            duration: 0.5,
            delay: 0.4,
          },
        },
        active: {
          height: "50vh",
          width: "70vw",
          transition: {
            duration: 0.5,
            delay: 0.6,
          },
        },
      }
    : {
        inactive: {
          height: "33vw",
          width: "60vw",
          transition: {
            duration: 0.5,
            delay: 0.4,
          },
        },
        active: {
          height: "40vw",
          width: "70vw",
          transition: {
            duration: 0.5,
            delay: 0.6,
          },
        },
      };

  return (
    <Cards>
      <motion.div
        className={`card ${isExpanded ? "expanded" : "initial"}`}
        variants={cardVariants}
        animate={isExpanded ? "active" : "inactive"}
        inital="inactive"
      >
        <Base>
          <AnimatePresence initial={false} exitBeforeEnter>
            {!isExpanded ? (
              <InitialCardContent
                data={props.job}
                onClick={setIsExpanded}
                key="initalContent"
              />
            ) : (
              <ExpandedCardContent
                data={props.job}
                onClick={setIsExpanded}
                ket="expandedContent"
              />
            )}
          </AnimatePresence>
        </Base>
      </motion.div>
    </Cards>
  );
};

export default Card;
