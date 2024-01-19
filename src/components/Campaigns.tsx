import { useParams } from "react-router-dom";

import { accountData } from "../data";
import RenderData from "./RenderData";
import TableComponent from "./TableComponent";
import BackButton from "./BackButton";

const CampaignsResults = () => {
  const { profileId } = useParams();

  const selectedProfile = accountData.find((account) =>
    account.profiles.some(
      (profile: any) => profile.profileId === Number(profileId)
    )
  );

  return (
    <>
      {selectedProfile &&
        selectedProfile.profiles.map(
          (profile: any) =>
            profile.profileId === Number(profileId) &&
            profile.campaigns.map(({ campaignId, clicks, cost, date }) => (
              <RenderData
                key={campaignId}
                id={campaignId}
                entity1={clicks}
                entity2={cost}
                date={date}
              />
            ))
        )}
    </>
  );
};

const Campaigns = () => {
  return (
    <>
      <BackButton />
      <h2 className="mb-4">Campaigns</h2>
      <TableComponent
        title1={"Campaign Id"}
        title2={"Clicks"}
        title3={"Cost"}
        title4="Date"
        data={<CampaignsResults />}
      />
    </>
  );
};

export default Campaigns;
