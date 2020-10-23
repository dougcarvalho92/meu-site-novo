import React, { useEffect, useState } from 'react';
import CardList from '../../components/CardList';
import PageContainer from '../../components/PageContainer';
import api from '../../services/api';


interface EducationProps {
  startsAt: string;
  id: string;
  company: string;
  name: string;
  endsAt: string;
}

const Education: React.FC = () => {
  const [educations, setEducations] = useState<EducationProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function LoadEducations() {
      await api.get("/educations").then((result) => {
        setEducations(result.data.docs);
      });
      setLoading(false);
    }
    LoadEducations();

  }, []);



  return (
    <PageContainer loading={loading}>

      <CardList data={educations} type="educations"/>

    </PageContainer>

  );
}

export default Education;