import React from 'react';

// import { Container } from './styles';
import {
    Details,
    DetailContent,
    Detail,
    DateTime,
} from "./styles";

interface Item {
    id: string;
    company: string;
    name: string;
    startsAt: string;
    endsAt: string;
    type?: string;
    certificate?: string;
    description?: string;
}

interface CardProps {
    type: string;
    data: Array<Item>
}

const handleFormatDate = (data: string) => {
    const year = new Date(data).getFullYear();
    const month = new Date(data).getMonth() + 1;
    return (
        <div>
            <span>{month < 10 ? `0${month}` : month}</span> / <span> {year}</span>
        </div>
    );
};
const handleCheckType = (type: string, item: Item) => {
    switch (type) {
        case "course": {
            return <div><span>{item.startsAt}</span> <span>{item.endsAt}</span></div>
        }
        default: {
            return <div>{handleFormatDate(item.endsAt)} {handleFormatDate(item.startsAt)}</div>
        }
    }
}

const CardList: React.FC<CardProps> = ({ type, data }) => {
    return <Details>
        {data.map((item, index) => {
            return (
                <Detail key={index}>
                    <DateTime>
                        {handleCheckType(type, item)}
                    </DateTime>
                    <DetailContent>
                        <h1>{item.name}</h1>
                        <h2>{item.company}</h2>
                        <p>{item.description}</p>
                    </DetailContent>
                </Detail>
            );
        })}</Details>
}

export default CardList;