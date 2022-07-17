import React from "react";
import Typical from "react-typical";
import styled from "styled-components";
import { motion } from "framer-motion";
import ButtonBar from "../Buttons/ButtonBar";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import "../../App.css";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1575px) {
    height: 96vh;
  }
`;

const ScrollDiv = styled(motion.div)`
  padding-bottom: 1em;
  cursor: pointer;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  width: 100%;
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-space-around;
  align-items: flex-start;
  padding-left: 40px;

  @media (min-width: 1575px) {
    padding-left: 3.5em;
  }

  h1 {
    margin-bottom: 1vw;
    font-size: 5vw;
    color: #464646;
    font-family: Gotham;

    @media (min-width: 1575px) {
      margin-bottom: 0.5rem;
      font-size: 5rem;
    }
  }

  h2 {
    margin-bottom: 1vw;
    font-family: Montserrat;
    color: #464646;
    font-size: 3vw;

    @media (min-width: 1575px) {
      margin-bottom: 0.5rem;
      font-size: 3rem;
    }
  }

  h3 {
    color: #464646;
    font-family: Montserrat;
    font-weight: 500;
    font-size: 1.2vw;

    @media (min-width: 1575px) {
      font-size: 1.17em;
    }
  }

  span {
    color: #1b9aaa;
  }

  a {
    text-decoration: none;
    font-weight: 700;
  }
`;

const Image = styled(motion.img)`
  position: absolute;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;

  @media (min-width: 1575px) {
    margin-right: 3.5em;
  }
  position: relative;

  ${Image}:nth-child(1) {
    width: 40vw;
    height: auto;
    top: 0px;
    right: 0px;

    @media (min-width: 1575px) {
      max-width: 700px;
      top: 0px;
      right: 0px;
    }
  }

  ${Image}:nth-child(2) {
    width: 35vw;
    top: 28vw;
    right: 1vw;
    @media (min-width: 1575px) {
      max-width: 500px;
      top: 420px;
      right: 100px;
    }
  }
`;

const Homescreen = () => {
  const isScrollerLarge = useMediaQuery({ query: "(min-width: 1575px)" });

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typical
              loop={Infinity}
              steps={[
                "Hello",
                2000,
                "Bonjour",
                2000,
                "Hola",
                2000,
                "Ni Hao",
                2000,
                "Ciao",
                2000,
                "Konnichiwa",
                2000,
                "Guten Tag",
                2000,
                "Shalom",
                2000,
              ]}
            />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span>I'm Matthew T. Picozzi</span>
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            I am an aspiring PM studying mechatronics engineering at the
            University of Waterloo.
            <br />
            <br />I have previously worked at{" "}
            <a href="https://allstream.com/">
              <span>Allstream</span>
            </a>
            ,{" "}
            <a href="https://raven.ai/">
              <span>Raven</span>
            </a>
            ,{" "}
            <a href="https://www.johnhancock.com/index.html">
              <span>John Hancock Financial</span>
            </a>
            ,{" "}
            <a href="https://www.autodesk.ca/en">
              <span>Autodesk</span>
            </a>{" "}
            and{" "}
            <a href="https://www.wish.com">
              <span>Wish</span>
            </a>
            .
            <br />
            <br />I am currently interning at{" "}
            <a href="https://robinhood.com/us/en/">
              <span>Robinhood</span>
            </a>{" "}
            during Summer 2022!
          </motion.h3>
          <ButtonBar />
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/homescreen/top.png"
            }
            transition={{ duration: 1 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={
              "https://picozziwebsite.s3.ca-central-1.amazonaws.com/images/homescreen/side.png"
            }
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>

      {isScrollerLarge ? (
        <Link
          activeClass="active"
          to="work_experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <ScrollDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </ScrollDiv>
        </Link>
      ) : null}
    </Section>
  );
};

export default Homescreen;
