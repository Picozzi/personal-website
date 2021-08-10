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
    computerRender = <Icon name="computer" size="large" />;
    codeRender = <Icon name="code" size="large" />;
  } else if (IsButtonTiny) {
    computerRender = <Icon name="computer" />;
    codeRender = <Icon name="code" />;
  } else {
    computerRender = <Icon name="computer" size="tiny" />;
    codeRender = <Icon name="code" size="tiny" />;
  }

  return (
    <ButtonDiv>
      <a href={props.app} target="_blank" rel="noopener noreferrer">
        <Button animated="vertical">
          <Button.Content visible>{computerRender}</Button.Content>
          <Button.Content hidden>App</Button.Content>
        </Button>
      </a>
      <a href={props.code} target="_blank" rel="noopener noreferrer">
        <Button animated="vertical">
          <Button.Content visible>{codeRender}</Button.Content>
          <Button.Content hidden>Source</Button.Content>
        </Button>
      </a>
    </ButtonDiv>
  );
};

export default ButtonList;
