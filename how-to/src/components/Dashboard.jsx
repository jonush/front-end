import React from 'react';
import GuideList from './content/GuideList';
import NewGuide from './content/NewGuide';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <GuideList/>
      <NewGuide />
    </div>
  )
}

export default Dashboard;