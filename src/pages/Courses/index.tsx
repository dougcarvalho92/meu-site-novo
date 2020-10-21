import React, { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import PageContainer from "../../components/PageContainer";
import api from "../../services/api";

import {
    Details,
    DetailContent,
    Detail,
    DateTime,
} from "./styles";

interface CourseProps {
    startsAt: string;
    id: string;
    createdAt: string;
    company: string;
    name: string;
    finishAt: string;
    type: string;
    certificate: string;
}

const Course: React.FC = () => {
    const [experiences, setCourses] = useState<CourseProps[]>();

    useEffect(() => {
        try {
            api.get("/courses").then((result) => {
                setCourses(result.data.docs);
            });
        } catch (error) {
            console.log(error);
        }

    }, []);



    if (!experiences) {
        return (
            <PageContainer>
                <Loading />
            </PageContainer>
        );
    }
    return (
        <PageContainer>
            <main>
                <Details>
                    {experiences.map((experience) => {
                        return (
                            <Detail key={experience.id}>
                                <DateTime>
                                    {experience.finishAt}
                                </DateTime>
                                <DetailContent>
                                    <h1>{experience.name}</h1>
                                    <h2>{experience.company}</h2>
                                </DetailContent>
                            </Detail>
                        );
                    })}
                </Details>
            </main>
        </PageContainer>
    );
};

export default Course;
