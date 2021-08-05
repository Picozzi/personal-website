import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/components/button.min.css";
import "semantic-ui-css/components/icon.min.css";
import { motion } from "framer-motion";
import "../../App.css";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ButtonDiv = styled(motion.div)`
  padding-top: 1.2em;

  @media (min-width: 1575px) {
    padding-top: 1.5em;
  }
`;

const ButtonList = (props) => {
  const IsButtonSmall = useMediaQuery({ query: "(min-width: 1575px)" });
  const IsButtonTiny = useMediaQuery({ query: "(min-width: 650px)" });

  var computerRender;
  var codeRender;

  if (IsButtonSmall) {
    computerRender = <Icon name="linkedin" size="large" />;
    codeRender = <Icon name="github" size="large" />;
  } else if (IsButtonTiny) {
    computerRender = <Icon name="linkedin" />;
    codeRender = <Icon name="github" />;
  } else {
    computerRender = <Icon name="linkedin" size="tiny" />;
    codeRender = <Icon name="github" size="tiny" />;
  }

  return (
    <ButtonDiv>
      <a href={props.code} target="_blank" rel="noopener noreferrer">
        <Button animated="vertical">
          <Button.Content visible>{computerRender}</Button.Content>
          <Button.Content hidden>Web App</Button.Content>
        </Button>
      </a>
      <a href={props.app} target="_blank" rel="noopener noreferrer">
        <Button animated="vertical">
          <Button.Content visible>{codeRender}</Button.Content>
          <Button.Content hidden>Code</Button.Content>
        </Button>
      </a>
    </ButtonDiv>
  );
};

export default ButtonList;
