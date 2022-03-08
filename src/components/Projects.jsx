import React from "react";
import styled from "styled-components";
import AvatarImage from "../assets/avatarImage2.jpg";
import AvatarImage2 from "../assets/avatarImage3.jpg";

function Projects() {
  return (
    <YourProjects>
      <Project>
        <Avatar>
          <img src={AvatarImage} />
        </Avatar>
        <Detail>
          <Title>Logo design for Bakery</Title>
          <SubTitle> 1 day remaining</SubTitle>
        </Detail>
      </Project>
      <Project>
        <Avatar>
          <img src={AvatarImage2} />
        </Avatar>
        <Detail>
          <Title>Personal branding project</Title>
          <SubTitle>5 dáy remaining</SubTitle>
        </Detail>
      </Project>
      <AllProjects>See all projects</AllProjects>
    </YourProjects>
  );
}

const YourProjects = styled.div``;
const Project = styled.div``;

const Avatar = styled.div``;

const Detail = styled.div``;

const Title = styled.div``;

const SubTitle = styled.div``;

const AllProjects = styled.div``;



export default Projects;
