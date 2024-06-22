import React from "react";
import { testCompany } from "../Table/testData";

type Props = {};

const data = testCompany.results;
type Company = typeof data;

const config = [
  {
    label: data.name,
    subTitle: data.ticker,
    render: (company: Company) => company.description,
  },
];

const RatioList = (props: Props) => {
  const renderedRows = config.map((row) => {
    return (
      <div className="somth">
        <div className="header">
          <ul>
            <li>{row.label}</li>
            <li>{row.subTitle && row.subTitle}</li>
          </ul>
        </div>
        <div className="content">{row.render(data)}</div>
      </div>
    );
  });
  return <div>{renderedRows}</div>;
};

export default RatioList;
