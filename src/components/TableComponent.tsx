import React from "react";
import Table from "react-bootstrap/Table";

interface TableComponentProps {
  title1: string;
  title2: string;
  title3: string;
  title4?: string;
}

const TableComponent: React.FC<TableComponentProps> = ({
  title1,
  title2,
  title3,
  title4,
  data,
}) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>{title1}</th>
          <th>{title2}</th>
          <th>{title3}</th>
          {title4 && <th>{title4}</th>}
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </Table>
  );
};

export default TableComponent;
