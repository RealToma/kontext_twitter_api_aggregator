import { useEffect , useCallback} from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { BsPeople } from "react-icons/bs";
import { FaEthereum, FaChess, FaBitcoin } from "react-icons/fa";
import axios from "axios";
import { dataTwitterCommunity } from "../Data/ChainList";

const Sidebar = ({ setFlagTwitterCommunity, setDataClusterMembers }) => {
  const getClusterMembers = useCallback(async (name) => {
    let url = `https://api.borg.id/influence/clusters/${name}/influencers/`;
    let authorization = "Bearer 85bfb91b-bc5b-4908-ba06-5c83f37d96d5";
    let paramsClusterMember = {
      sort_by: "attention_score",
      sort_direction: "asc",
      page: 10,
    };
    let responseClusterMembers = await axios.get(url, {
      headers: { Authorization: authorization },
      params: paramsClusterMember,
    });

    console.log(
      "resClusterMember:",
      responseClusterMembers.data.influencers.slice(0, 10)
    );
    setDataClusterMembers(responseClusterMembers.data.influencers.slice(0, 10));
  }, [setDataClusterMembers]);

  useEffect(() => {
    getClusterMembers(dataTwitterCommunity[0].name);
  }, [getClusterMembers]);

  return (
    <StyledComponent>
      <LinkEach
        onClick={() => {
          setFlagTwitterCommunity(0);
          getClusterMembers(dataTwitterCommunity[0].name);
        }}
      >
        <IconLink>
          <FaEthereum />
        </IconLink>
        <TextLink>Ethereum Twitter</TextLink>
      </LinkEach>
      <LinkEach
        onClick={() => {
          setFlagTwitterCommunity(1);
          getClusterMembers(dataTwitterCommunity[1].name);
        }}
      >
        <IconLink>
          <BsPeople />
        </IconLink>
        <TextLink>Crypto Twitter</TextLink>
      </LinkEach>
      <LinkEach
        onClick={() => {
          setFlagTwitterCommunity(2);
          getClusterMembers(dataTwitterCommunity[2].name);
        }}
      >
        <IconLink>
          <FaBitcoin />
        </IconLink>
        <TextLink>Bitcion Twitter</TextLink>
      </LinkEach>
      <LinkEach
        onClick={() => {
          setFlagTwitterCommunity(3);
          getClusterMembers(dataTwitterCommunity[3].name);
        }}
      >
        <IconLink>
          <BsPeople />
        </IconLink>
        <TextLink>Tesla Twitter</TextLink>
      </LinkEach>
      <LinkEach
        onClick={() => {
          setFlagTwitterCommunity(4);
          getClusterMembers(dataTwitterCommunity[4].name);
        }}
      >
        <IconLink>
          <FaChess />
        </IconLink>
        <TextLink>Chess Twitter</TextLink>
      </LinkEach>
      <LinkEach
        onClick={() => {
          setFlagTwitterCommunity(5);
          getClusterMembers(dataTwitterCommunity[5].name);
        }}
      >
        <IconLink>
          <BsPeople />
        </IconLink>
        <TextLink>Space Twitter</TextLink>
      </LinkEach>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 350px;
  flex-direction: column;
  margin-left: 50px;
  margin-top: 150px;
  z-index: 3;
`;

const LinkEach = styled(Box)`
  display: flex;
  align-items: center;
  color: #5c6081;
  margin: 20px 0px;
  opacity: 0.96;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: white;
  }
`;

const TextLink = styled(Box)`
  margin-left: 15px;
  font-family: "Livvic";
  font-style: normal;
  font-weight: 900;
  font-size: 1.3rem;
  line-height: 200%;
  /* identical to box height, or 24px */

  letter-spacing: 0.1em;
  font-feature-settings: "pnum" on, "lnum" on;
`;

const IconLink = styled(Box)`
  font-size: 1.7rem;
`;

export default Sidebar;
