import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const ResultsOverview: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">List of results of {user.name} ({user.studentNumber})</h1>
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        Last updated on 09/02/2025 18:07:34
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 bg-blue-50 border-l-4 border-blue-500">
          <p>No rights can be obtained from this information.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">COURSE CODE</th>
                <th className="px-4 py-2 text-left">TITLE</th>
                <th className="px-4 py-2 text-left mr-4">SCORE</th>
                <th className="px-4 py-2 text-left">DATE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Operating systems II</td>
                <td className="px-4 py-2 ">&nbsp;&nbsp;&nbsp;&nbsp;I</td>
                <td className="px-4 py-2">09/02/2025</td>
              
               

              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Pentesting</td>
                <td className="px-4 py-2">&nbsp;&nbsp;&nbsp;&nbsp;O</td>
                <td className="px-4 py-2">09/02/2025</td>
                
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Network Security</td>
                <td className="px-4 py-2">&nbsp;&nbsp;&nbsp;&nbsp;S</td>
                <td className="px-4 py-2">09/02/2025</td>
                
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Computer Networks</td>
                <td className="px-4 py-2">&nbsp;&nbsp;&nbsp;&nbsp;S</td>
                <td className="px-4 py-2">09/02/2025</td>
                
              </tr>
              <tr className="border-t">
                <td className="px-4 py-2">29V1C</td>
                <td className="px-4 py-2">Group Project</td>
                <td className="px-4 py-2">&nbsp;&nbsp;&nbsp;&nbsp;U</td>
                <td className="px-4 py-2">09/02/2025</td>
                
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t flex justify-between items-center">
          
        </div>
      </div>
    </div>
  );
};

export default ResultsOverview;