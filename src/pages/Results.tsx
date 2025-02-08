import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Results: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Results for {user.name}</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg text-blue-500 hover:underline cursor-pointer">
              Fontys University of Applied Sciences (4 results, no new)
            </h2>
          </div>
          
          <div>
            <p className="text-blue-500 hover:underline cursor-pointer pl-4">
              Programme 29VPI20: Propaedeutic Phase (Programme requirements are not met yet, 0 / 60 ECTS)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;