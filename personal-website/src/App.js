import React, { Component } from "react";
import Homescreen from "./components/Homescreen/Homescreen";
import Experiences from "./components/Experience/Experiences";
import Projects from "./components/Project/Projects";
import styled from "styled-components";
import Certifications from "./components/Certificate/Certifications";
import ScrollProgress from "./components/Progress/ScrollProgress";
import WorkExperienceList from "./components/Experience/WorkExperienceList";
import VolunteerExperienceList from "./components/Experience/VolunteerExperienceList";

const AppHolder = styled.div`
  background: #f5f5f5;
  font-family: Montserrat;
`;

export default class App extends Component {
  render() {
    return (
      <AppHolder>
        <ScrollProgress />
        <Homescreen />
        <Experiences
          title="Work Experience"
          experience_list={WorkExperienceList.jobs}
          id="work_experience"
        />
        <Experiences
          title="Design Teams & Volunteer Experience"
          experience_list={VolunteerExperienceList.jobs}
          id="volunteer_experience"
        />
        <Projects />
        <Certifications />
      </AppHolder>
    );
  }
}
