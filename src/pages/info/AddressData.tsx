import React from 'react';

const AddressData: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Address data</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="mb-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p>If the following data are incorrect, please contact your institution Fontys University of Applied Sciences.</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">Address</h2>
            <div className="space-y-2">
              <p>'s Gravesandestraat 22</p>
              <p>5612 JN EINDHOVEN</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Telephone number</h2>
            <p className="text-gray-600">No telephone number available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressData;