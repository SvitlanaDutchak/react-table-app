import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
import { useTheme } from "../provider";
import { accountData } from "../data";
import TableComponent from "./TableComponent";
import RenderData from "./RenderData";

const Accounts = () => {
  const { theme, colors } = useTheme();
  const navigate = useNavigate();
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  function handleClick(accountId: any) {
    navigate(`/profiles/${accountId}`);
    return 1;
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAccountData = accountData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderData = currentAccountData.map(
    ({ accountId, email, authToken, creationDate }) => (
      <RenderData
        key={accountId}
        id={accountId}
        entity1={email}
        entity2={authToken}
        date={creationDate}
        onClick={() => handleClick(accountId)}
      />
    )
  );

  const pageItems = [];
  for (
    let number = 1;
    number <= Math.ceil(accountData.length / itemsPerPage);
    number++
  ) {
    pageItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div style={{
      background: colors[theme].backgroundColor,
      color: colors[theme].textColor,
    }}>
      <h2 className="mb-4">Accounts</h2>
      <TableComponent
        title1={"Account Id"}
        title2={"Email"}
        title3={"Token"}
        title4={"Date"}
        data={renderData}
      />
      <Pagination>{pageItems}</Pagination>
      <></>
    </div>
  );
};

export default Accounts;
