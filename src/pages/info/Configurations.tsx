import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleEmailNotifications } from '../../store/slices/userSlice';

const Configurations: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Configurations</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Settings</h2>
        
        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Number</p>
            <p>{user.studentNumber}</p>
          </div>
          
          <div>
            <p className="text-gray-600">Email</p>
            <p>{user.email}</p>
          </div>
          
          <div>
            <p className="text-gray-600">Language</p>
            <p>{user.language}</p>
          </div>
          
          <div>
            <p className="text-gray-600">Email notifications for new results</p>
            <div className="mt-2">
              <button
                onClick={() => dispatch(toggleEmailNotifications())}
                className={`px-4 py-2 rounded-lg ${
                  user.emailNotifications
                    ? 'bg-red-400 text-white hover:bg-red-500'
                    : 'bg-blue-400 text-white hover:bg-blue-500'
                }`}
              >
                {user.emailNotifications ? 'Stop email on new results' : 'Enable email notifications'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurations;