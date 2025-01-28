import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiTest: React.FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api')
      .then((response) => setMessage(response.data.message))
      .catch((error) => console.error('Error fetching API:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">API Test Component</h1>
      <p className="text-gray-700 mt-4">{message || 'Loading...'}</p>
    </div>
  );
};

export default ApiTest;
