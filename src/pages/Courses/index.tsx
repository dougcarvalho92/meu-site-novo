import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import PageContainer from "../../components/PageContainer";
import useDebounce from "../../hooks/useDebounce";
import api from "../../services/api";

import {
    LoadMore
} from "./styles";

interface CourseProps {
    id: string;
    company: string;
    name: string;
    startsAt: string;
    endsAt: string;
    type: string;
    certificate: string;
}

const Course: React.FC = () => {
    const [courses, setCourses] = useState<CourseProps[]>([]);
    const [searchInput, setSearchInput] = useState("");
    const filteredInput = useDebounce(searchInput, 1000);
    const [loading, setLoading] = useState(true);
    const [selectedPage, setSelectedPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);

    useEffect(() => {
        setLoading(true);
        async function FilterCourses() {
            await api.get(`/courses/?search=${filteredInput}`)
                .then((result) => {
                    setPagesCount(result.data.pages)
                    setCourses(result.data.docs);
                    setLoading(false);
                });
        }
        FilterCourses();

    }, [filteredInput])


    async function handleLoadMore() {
        setLoading(true);
        if (selectedPage <= pagesCount) {
            setSelectedPage(selectedPage + 1);
            const newPage = await api.get(`/courses/?search=${filteredInput}&page=${selectedPage + 1}`).then(result => result.data.docs);
            setCourses([...courses, ...newPage]);
            setLoading(false);
            window.scrollTo(0,document.body.scrollHeight);
        }

    }
    return (
        <PageContainer loading={loading}>
            {!loading && <input type="text" placeholder="Procurar Curso" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />}

            <CardList data={courses} type="course" />

            {selectedPage < pagesCount && <LoadMore onClick={handleLoadMore}>Carregar mais</LoadMore>}



        </PageContainer>
    );
};

export default Course;
