import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import PageContainer from '../../components/PageContainer';
import api from '../../services/api';
import { DateTime, Detail, Details, DetailContent } from './styles';

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

  const handleFormatDate = (data: string) => {
    const year = new Date(data).getFullYear();
    const month = new Date(data).getMonth() + 1;
    return (
      <div>
        <span>{month < 10 ? `0${month}` : month}</span> / <span> {year}</span>
      </div>
    );
  };

  return (
    <PageContainer loading={loading}>
      <main>
        <Details>
          {educations.map((education) => {
            return (
              <Detail key={education.id}>
                <DateTime>
                  {handleFormatDate(education.startsAt)} /
                    {handleFormatDate(education.endsAt)}
                </DateTime>
                <DetailContent>
                  <h1>{education.name}</h1>
                  <h2>{education.company}</h2>

                </DetailContent>
              </Detail>
            );
          })}
        </Details>
      </main>
    </PageContainer>

  );
}

export default Education;