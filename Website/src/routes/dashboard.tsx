import React from "react";
import Header from "../components/dashboard/header";
import Overview from "../components/dashboard/overview";
import Recent from "../components/dashboard/recent";
import useAuth from "../Zustand/auth";

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <>
      <Header />
      {user && <Overview />}
      <Recent />
    </>
  );
};

export default Dashboard;
