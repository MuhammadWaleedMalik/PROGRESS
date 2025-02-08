import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const General: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-6">General</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Registration</h2>
        
        <div className="space-y-4">
          {/* Grid for PCN and Student Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">PCN</p>
              <p className="font-medium">{user.pcn}</p>
            </div>
            <div>
              <p className="text-gray-600">Student number</p>
              <p className="font-medium">{user.studentNumber}</p>
            </div>
          </div>
          
          {/* Name */}
          <div>
            <p className="text-gray-600">Name</p>
            <p className="font-medium">{user.name}</p>
          </div>
          
          {/* First Name */}
          <div>
            <p className="text-gray-600">First name</p>
            <p className="font-medium">{user.firstName}</p>
          </div>
          
          {/* Registration Status */}
          <div>
            <p className="text-gray-600">Registration status</p>
            <p className="font-medium">{user.registrationStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;