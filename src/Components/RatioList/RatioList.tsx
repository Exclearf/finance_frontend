import React from "react";
import { testCompany } from "../Table/testData";
import { RatioListStyled } from "./RatioListStyled";

type Props = {};

const data = testCompany.results;
type Company = typeof data;

const config = [
  {
    title: data.name,
    subTitle: data.ticker,
    render: (company: Company) => company.cik,
  },
];

const RatioList = (props: Props) => {
  return (
    <>
      {config.map((row) => {
        return (
          <RatioListStyled>
            <div className="header">
              <div className="title">{row.title}</div>
              <div className="subTitle">{row.subTitle && row.subTitle}</div>
            </div>
            <div className="content">{row.render(data)}</div>
          </RatioListStyled>
        );
      })}
    </>
  );
};

export default RatioList;
