import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import './Dashboard.css';



const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div >
      <h1 className="text-[20px] hello font-semibold mb-6">WELCOME {user.firstName.toUpperCase()}</h1>
      
      <div id='dashboard-box1'>
        <h2 className="  mb-4">Fontys Information and Communication Technology:</h2>
        <p className="">Welcome at FH ICT website for study results and enrolments</p>
      </div>

    
      
    </div>
  );
};

export default Dashboard;