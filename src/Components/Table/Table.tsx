import React from "react";
import { testData } from "./testData";
import { TableStyled } from "./TableStyled";
type Props = {};

const singleDataEntry = testData.results[0];

type entryType = typeof singleDataEntry;

const configs = [
  {
    label: "Year",
    render: (company: entryType) =>
      `${new Date(company.start_date).toLocaleDateString()}-${new Date(
        company.end_date
      ).toLocaleDateString()}\t  `,
  },
  {
    label: "Cost of Revenue",
    render: (company: entryType) =>
      company.financials.income_statement.revenues.value,
  },
];

const Table = (props: Props) => {
  const renderedRows = testData.results.map((company) => {
    return (
      <tr key={company.cik}>
        {configs.map((val: any) => (
          <td className="smth">{val.render(company)}</td>
        ))}
      </tr>
    );
  });

  const renderedHeader = configs.map((config) => {
    return (
      <th className="snth" key={config.label}>
        {config.label}
      </th>
    );
  });

  return (
    <TableStyled>
      <table>
        <thead>{renderedHeader}</thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </TableStyled>
  );
};

export default Table;
