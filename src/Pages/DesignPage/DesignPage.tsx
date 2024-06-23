import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { DesignPageStyled } from "./DesignPageStyled";

type DesignPageProps = {};

const DesignPage = () => {
  return (
    <DesignPageStyled>
      <h2>The page where designes/aspects are</h2>
      <Table />
      <div className="ratioExample">
        <RatioList />
        <RatioList />
        <RatioList />
      </div>
    </DesignPageStyled>
  );
};

export default DesignPage;
