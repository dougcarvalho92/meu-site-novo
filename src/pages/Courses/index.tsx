import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import PageContainer from "../../components/PageContainer";
import useDebounce from "../../hooks/useDebounce";
import api from "../../services/api";

import {
    CoursesList,
    CourseItem,
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
    const filteredInput = useDebounce(searchInput, 2000);
    const [total, setTotal] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [selectedPage, setSelectedPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(0);

    useEffect(() => {
        setLoading(true);
        FilterCourses();
        setLoading(false);
    }, [filteredInput])

    async function FilterCourses() {
        const filteredCourses = await api.get(`/courses/?${total > 0 ? "&limit=" + total : ""}`)
            .then((result) => {
                setPagesCount(result.data.pages)
                setTotal(result.data.total);
                return result.data.docs
            });
        filteredCourses.filter((course: CourseProps) => course.name.toLocaleLowerCase().includes(searchInput));
        setCourses(filteredCourses);
    }
    async function handleLoadMore() {
        if (selectedPage <= pagesCount) {
            setSelectedPage(selectedPage + 1);
            const newPage = await api.get(`/courses/?page=${selectedPage + 1}`).then(result => result.data.docs);
            setCourses([...courses, ...newPage]);
        }

    }
    return (
        <PageContainer loading={loading}>
            <input type="text" placeholder="Procurar Curso" onChange={(e) => setSearchInput(e.target.value)} value={searchInput} />

            <CardList data={courses} type="course" />

            {selectedPage <= pagesCount && <LoadMore onClick={handleLoadMore}>Carregar mais</LoadMore>}



        </PageContainer>
    );
};

export default Course;
