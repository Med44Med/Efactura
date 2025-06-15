import React from 'react'
import Header from '../components/dashboard/header';
import Overview from '../components/dashboard/overview';
import Recent from '../components/dashboard/recent';

const Dashboard = () => {
  return (
    <>
      <Header />
      <Overview />
      <Recent />
    </>
  )
}

export default Dashboard