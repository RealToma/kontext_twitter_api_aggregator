import styled from "styled-components";
import { Box } from "@mui/material";
import { TbRefresh } from "react-icons/tb";
import { dataTwitterCommunity } from "../Data/ChainList";

const Content = ({ flagTwitterCommunity, dataClusterMembers }) => {
  return (
    <StyledComponent>
      <SectionHead>
        <TextHeadTitle>
          <Box display={"flex"}>
            {dataTwitterCommunity[flagTwitterCommunity].name}
            {"\u00a0"}
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <IconTether>
              <img
                src={dataTwitterCommunity[flagTwitterCommunity].icon}
                width={"100%"}
                alt="iconTether"
              />
            </IconTether>
            <Box display={"flex"}>
              {"\u00a0"}Twitter{"\u00a0"}
            </Box>
          </Box>
        </TextHeadTitle>
        <ButtonRefresh>
          <IconRefresh>
            <TbRefresh />
          </IconRefresh>
          <TextRefresh>Refresh</TextRefresh>
        </ButtonRefresh>
      </SectionHead>
      <SectionHeadDescription>
        You can see top 10 tweets of{" "}
        {dataTwitterCommunity[flagTwitterCommunity].name} twitter in this
        community.
      </SectionHeadDescription>
      <SectionListClusterMembers>
        {dataClusterMembers?.map((each, index) => {
          return (
            <RowClusterMember key={index}>
              <TextTitleClusterMember>
                #{index + 1} {each.social_account.social_account.name}
              </TextTitleClusterMember>
              <TextDescriptionClusterMember>
                {each.social_account.social_account.description}
              </TextDescriptionClusterMember>
              <TextInformationClusterMember>
                <ImageProfile>
                  <img
                    src={each.social_account.social_account.profile_image_url}
                    width={"100%"}
                    alt=""
                  />
                  {"\u00a0"}
                  {"\u00a0"}
                </ImageProfile>
                <Box display={"flex"}>
                  {" "}
                  Name: {each.social_account.social_account.name} {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  Attention Score: {each.attention_score}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  Rank: {each.rank}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  Personal Rank: {each.personal_rank}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  Followers:{" "}
                  {each.social_account.social_account.followers_count}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  Following:{each.social_account.social_account.following_count}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  Tweets:{each.social_account.social_account.tweets_count}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  {"\u00a0"}
                  Created At: {each.created_at}
                </Box>
              </TextInformationClusterMember>
            </RowClusterMember>
          );
        })}
      </SectionListClusterMembers>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 1200px;
  flex-direction: column;
  margin-top: 55px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    width: 900px;
  }
  @media (max-width: 1400px) {
    width: 750px;
  }
`;

const SectionHead = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const SectionHeadDescription = styled(Box)`
  display: flex;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 148%;
  /* or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #5c6081;

  opacity: 0.8;
  margin-top: 16px;
`;

const TextHeadTitle = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 34px;
  line-height: 140%;
  /* identical to box height, or 48px */

  letter-spacing: 0.02em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d6ddee;
`;

const IconTether = styled(Box)`
  display: flex;
  width: 40px;
`;

const ButtonRefresh = styled(Box)`
  display: flex;
  width: 115px;
  height: 40px;
  background: #22263d;
  border-radius: 12px;
  align-items: center;
  padding: 0px 16px 0px 12px;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  &:hover {
    > div:nth-child(1) {
      transition: 0.5s;
      transform: rotate(360deg);
    }
  }
`;

const IconRefresh = styled(Box)`
  display: flex;
  font-size: 1.5rem;
  color: #5c6081;
  opacity: 0.88;
`;

const TextRefresh = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.08em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #f2f5ff;
`;

const SectionListClusterMembers = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`;

const RowClusterMember = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0px;
  border-bottom: 1px dashed #63688f;
`;

const TextTitleClusterMember = styled(Box)`
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 24px */

  letter-spacing: 0.02em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d6ddee;

  opacity: 0.48;
`;

const TextDescriptionClusterMember = styled(Box)`
  margin-top: 5px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #63688f;
`;

const TextInformationClusterMember = styled(Box)`
  display: flex;
  margin-top: 10px;
  align-items: center;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #d6ddee;
`;

const ImageProfile = styled(Box)`
  display: flex;
  width: 24px;
  height: 24px;
`;

export default Content;
