import React from "react";

// import { Container } from './styles';
import {
  Details,
  DetailContent,
  Detail,
  DateTime,
  DetailFooter,
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
  data: Array<Item>;
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

const CardList: React.FC<CardProps> = ({ data }) => {
  return (
    <Details>
      {data.map((item, index) => {
        return (
          <Detail
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            key={index}
          >
            <DateTime>
              <div>
                {handleFormatDate(item.endsAt)}{" "}
                {handleFormatDate(item.startsAt)}
              </div>
            </DateTime>
            <DetailContent>
              <h1>{item.name}</h1>
              <h2>{item.company}</h2>
              <p>{item.description}</p>
            </DetailContent>
            {item.certificate && (
              <DetailFooter href={item.certificate} target="_blank">
                Certificado
              </DetailFooter>
            )}
          </Detail>
        );
      })}
    </Details>
  );
};

export default CardList;
