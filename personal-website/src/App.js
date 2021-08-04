import React, {Component} from 'react';
import HomeScreen from './HomeScreen';
import Experiences from './Experiences';
import Projects from './Projects';
import styled from 'styled-components';
import Certifications from './Certifications';
import ScrollProgress from './ScrollProgress'; 
import WorkExperienceList from "./WorkExperienceList";
import VolunteerExperienceList from "./VolunteerExperienceList";

const AppHolder = styled.div`
  background: #f5f5f5;
  font-family: Montserrat;

`;

export default class App extends Component {
  render() 
  {
    return (
      <AppHolder>
      <ScrollProgress/>
      <HomeScreen/>
      <Experiences title="Work Experience" experience_list={WorkExperienceList.jobs} id="work_experience"/>
      <Experiences title="Design Teams & Volunteer Experience" experience_list={VolunteerExperienceList.jobs} id="volunteer_experience"/>
      <Projects/>
      <Certifications/>
      </AppHolder>
    )
}
}

