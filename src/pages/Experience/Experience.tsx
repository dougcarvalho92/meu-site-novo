import React, { useEffect, useState } from "react";

import Sidebar from "../../components/Sidebar";
import api from "../../services/api";

// import { Container } from './styles';
import {
  Details,
  ExperienceContainer,
  DetailContent,
  Detail,
  Loading,
  DateTime,
} from "./styles";

interface ExperienceProps {
  startsAt: string;
  id: string;
  company: string;
  name: string;
  endsAt: string;
  type: string;
  certificate: string;
  description: string;
}

const Experience: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceProps[]>();

  useEffect(() => {
    api.get("/experiences").then((result) => {
      setExperiences(result.data.docs);
    });
  }, []);

  const handleFormatDate = (data: string) => {
    const year = new Date(data).getFullYear();
    const month = new Date(data).getMonth() + 1;
    return (
      <div>
        <span>{month < 10 ? `0${month}` : month}</span> / <span> {year}</span>
      </div>
    );
  };

  if (!experiences) {
    return (
      <>
        <Sidebar />
        <ExperienceContainer>
          <Loading>Carregando...</Loading>
        </ExperienceContainer>
      </>
    );
  }
  return (
    <>
      <Sidebar />
      <ExperienceContainer>
        <main>
          <Details>
            {experiences.map((experience) => {
              return (
                <Detail key={experience.id}>
                  <DateTime>
                    {handleFormatDate(experience.startsAt)} /
                    {handleFormatDate(experience.endsAt)}
                  </DateTime>
                  <DetailContent>
                    <h1>{experience.name}</h1>
                    <h2>{experience.company}</h2>
                    <p>{experience.description}</p>
                  </DetailContent>
                </Detail>
              );
            })}
          </Details>
        </main>
      </ExperienceContainer>
    </>
  );
};

export default Experience;
