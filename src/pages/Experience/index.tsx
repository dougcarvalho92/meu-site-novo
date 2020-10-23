import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import PageContainer from "../../components/PageContainer";
import api from "../../services/api";

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
  const [experiences, setExperiences] = useState<ExperienceProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function LoadExperiences() {
      await api.get("/experiences").then((result) => {
        setExperiences(result.data.docs);
      });
      setLoading(false);
    }
    LoadExperiences();
  }, []);

  return (
    <PageContainer loading={loading}>

        <CardList data={experiences} type="experiences"/>
 
    </PageContainer>
  );
};

export default Experience;
