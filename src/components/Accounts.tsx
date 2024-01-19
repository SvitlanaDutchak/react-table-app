import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

import { useTheme } from "../provider";
import { accountData } from "../data";
import TableComponent from "./TableComponent";
import RenderData from "./RenderData";
import SearchValue from "./SearchValue";
import SortingButton from "./SortingButton";

const Accounts = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const sortedAccountData = [...accountData].sort((a, b) =>
    a.email.localeCompare(b.email)
  );
  const [sortedData, setSortedData] = useState(sortedAccountData);

  const updateData = (newSortOrder: any) => {
    setSortOrder(newSortOrder);
    const filteredAndSortedData = accountData
      .filter(({ email }) =>
        email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        newSortOrder === "asc"
          ? a.email.localeCompare(b.email)
          : b.email.localeCompare(a.email)
      );
    setSortedData(filteredAndSortedData);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  const filteredAndSortedData = useMemo(() => {
    return accountData
      .filter(({ email }) =>
        email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.email.localeCompare(b.email)
          : b.email.localeCompare(a.email)
      );
  }, [searchTerm, sortOrder, accountData]);

  useEffect(() => {
    setSortedData(filteredAndSortedData);
  }, [filteredAndSortedData]);

  const handleClick = (accountId: any) => {
    navigate(`/profiles/${accountId}`);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAccountData = sortedData.slice(
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
    number <= Math.ceil(sortedData.length / itemsPerPage);
    number++
  ) {
    pageItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
        linkStyle={{
          background: theme === "dark" ? "#f8f9fa" : "#212529",
          color: theme === "dark" ? "#212529" : "#f8f9fa",
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <>
      <h2 className="mb-4">Accounts</h2>
      <SearchValue
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      />
      {renderData.length === 0 ? (
        <h3>No results</h3>
      ) : (
        <TableComponent
          title1={"Account Id"}
          title2={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>Email</p>
              <SortingButton onUpdateData={updateData} />
            </div>
          }
          title3={"Token"}
          title4={"Date"}
          data={renderData}
        />
      )}
      <Pagination>{pageItems}</Pagination>
    </>
  );
};

export default Accounts;
