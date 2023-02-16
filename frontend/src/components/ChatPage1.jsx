import React, { useEffect } from 'react';
import axios from 'axios';

import routes from '../routes';
import getAuthHeader from '../getAuthHeader';

const ChatPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const authHeader = await getAuthHeader();
      const response = await axios.get(routes.dataPath(), { headers: authHeader });
      console.log('data:', response.data);
    };

    fetchData();
  }, []);

  return <h1>ChatPage 1</h1>;
};

export default ChatPage;
