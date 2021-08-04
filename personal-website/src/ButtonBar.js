import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/components/button.min.css'
import 'semantic-ui-css/components/icon.min.css'
import {motion} from 'framer-motion';
import './App.css';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

const ButtonBar = () => {

  const ButtonDiv = styled(motion.div)`
  padding-top: 0.5em;

  @media (min-width: 650px) {
    padding-top: 1.5em;
}

@media (min-width: 1575px) {
  padding-top: 2em;
}


  `;

const IsButtonSmall =  useMediaQuery({ query: '(min-width: 1575px)' });
const IsButtonTiny =  useMediaQuery({ query: '(min-width: 650px)' });

var linkedInRender;
var gitHubRender;
var emailRender;

if(IsButtonSmall)
{
  linkedInRender = <Icon name='linkedin' size="large"/>
  gitHubRender = <Icon name='github' size="large"/>
  emailRender = <Icon name='mail' size="large"/>
}
else if (IsButtonTiny)
{
  linkedInRender = <Icon name='linkedin'/>
  gitHubRender = <Icon name='github'/>
  emailRender = <Icon name='mail'/>
}
else
{
  linkedInRender = <Icon name='linkedin' size="tiny"/>
  gitHubRender = <Icon name='github' size="tiny"/>
  emailRender = <Icon name='mail' size="tiny"/>
}


  return(
  <ButtonDiv
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}>
    <a href="https://github.com/Picozzi" target="_blank" rel="noopener noreferrer">
    <Button animated='vertical'>
        <Button.Content visible>
        {gitHubRender}
        </Button.Content>
        <Button.Content hidden>GitHub</Button.Content>
    </Button>
    </a>
    <a href="https://ca.linkedin.com/in/matthewpicozzi"target="_blank" rel="noopener noreferrer">
    <Button animated='vertical'>
        <Button.Content visible>
        {linkedInRender}
        </Button.Content>
        <Button.Content hidden>LinkedIn</Button.Content>
    </Button>
    </a>
    <a href="mailto: matthew.picozzi@gmail.com">
    <Button animated='vertical'>
      <Button.Content visible>
      {emailRender}
      </Button.Content>
      <Button.Content hidden>E-Mail</Button.Content>
    </Button>
    </a>
    </ButtonDiv>
        );
};

export default ButtonBar;
