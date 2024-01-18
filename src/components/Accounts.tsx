import { useNavigate } from "react-router-dom";

import { accountData } from "../data";
import TableComponent from "./TableComponent";
import RenderData from "./RenderData";

export const Result = () => {
  const navigate = useNavigate();

  function handleClick(accountId) {
    navigate(`/profiles/${accountId}`);
    return 1;
  }

  return (
    <>
      {accountData &&
        accountData.map(({ accountId, email, authToken, creationDate }) => (
          <RenderData
            key={accountId}
            id={accountId}
            entity1={email}
            entity2={authToken}
            date={creationDate}
            onClick={() => handleClick(accountId)}
          />
        ))}
    </>
  );
};

const Accounts = () => {
  return (
    <>
      <h2 className="mb-4">Accounts</h2>
      <TableComponent
        title1={"Account Id"}
        title2={"Email"}
        title3={"Token"}
        title4={"Date"}
        data={<Result />}
      />
    </>
  );
};

export default Accounts;
