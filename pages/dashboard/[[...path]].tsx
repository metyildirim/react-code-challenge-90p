import type { NextPage } from "next";
import { Body, DashboardContainer } from "../../components";
import { Navbar } from "../../components";

const Dashboard: NextPage = () => {
  return (
    <DashboardContainer>
      <Navbar />
      <Body />
    </DashboardContainer>
  );
};

export default Dashboard;
