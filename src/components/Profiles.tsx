import React from "react";
import { accountData } from "../data";
import RenderData from "./RenderData";
import TableComponent from "./TableComponent";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "./BackButton";

const Result = () => {
  const { accountId } = useParams();
  const navigate = useNavigate();

  const selectedAccount = accountData.find(
    (account) => account.accountId === Number(accountId)
  );

  function handleClick(profileId) {
    navigate(`/profiles/${accountId}/campaigns/${profileId}`);
  }

  return (
    <>
      {selectedAccount &&
        selectedAccount.profiles &&
        selectedAccount.profiles.map(({ profileId, country, marketplace }) => (
          <RenderData
            key={profileId}
            id={profileId}
            entity1={country}
            entity2={marketplace}
            onClick={() => handleClick(profileId)}
          />
        ))}
    </>
  );
};

const Profiles = () => {
  return (
    <>
      <BackButton />
      <h2 className="mb-4">Profiles</h2>
      <TableComponent
        title1={"Profile Id"}
        title2={"Country"}
        title3={"Market place"}
        data={<Result />}
      />
    </>
  );
};

export default Profiles;
