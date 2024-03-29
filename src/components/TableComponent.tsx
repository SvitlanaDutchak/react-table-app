import React from "react";
import { useTheme } from "../provider";
import Table from "react-bootstrap/Table";

interface TableComponentProps {
  title1: string;
  title2: React.ReactNode | string ;
  title3: string;
  title4?: string;
  data: React.ReactNode | any[];
}

const TableComponent: React.FC<TableComponentProps> = ({
  title1,
  title2,
  title3,
  title4,
  data,
}) => {
  const { theme } = useTheme();

  return (
    <Table
      striped
      bordered
      hover
      responsive
      variant={theme === "dark" ? "dark" : "light"}
    >
      <thead>
        <tr>
          <th>{title1}</th>
          <th>{title2} </th>
          <th>{title3}</th>
          {title4 && <th>{title4}</th>}
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </Table>
  );
};

export default TableComponent;
