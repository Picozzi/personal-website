import React, { useState, useEffect, useContext, useMemo } from "react";
import "../../App.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useIntersection } from "react-use";
import ProjectTile from "./ProjectTile";
import ProjectList from "./ProjectList";

const IntersectionContext = React.createContext({ inView: true });

const IntersectionObserver = ({ children, reset = false }) => {
  const [inView, setInView] = useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  });

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    } else if (reset) {
      return setInView(false);
    }
  }, [intersection, reset]);

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>{children}</div>
    </IntersectionContext.Provider>
  );
};

const ScaleBox = ({
  children,
  delayOrder,
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1],
}) => {
  const { inView } = useContext(IntersectionContext);
  const transition = useMemo(
    () => ({
      duration,
      delay: delayOrder / 5,
      ease: easing,
    }),
    [duration, delayOrder, easing]
  );

  const variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transition,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    margin-bottom: 0.5rem;
    font-family: Montserrat;
    color: #464646;
    font-size: 3vw;
    padding-top: 2em;
    padding-bottom: 1em;

    @media (min-width: 1575px) {
      font-size: 3rem;
      padding-top: 0;
    }
  }
`;

const TileRow = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin: 1vw 0em 4vw 0em;
  @media (min-width: 1575px) {
    margin: 2em 0em 6em 0em;
  }
`;

const Projects = () => {
  return (
    <Section>
      <h1>Projects</h1>
      <TileRow>
        {ProjectList.projects.map((item, key) => (
          <IntersectionObserver key={key}>
            <ScaleBox>
              <ProjectTile project={item} />
            </ScaleBox>
          </IntersectionObserver>
        ))}
      </TileRow>
    </Section>
  );
};

export default Projects;
