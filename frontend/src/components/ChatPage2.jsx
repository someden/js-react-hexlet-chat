import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from '../slices/index';
import getAuthHeader from '../getAuthHeader';

const ChatPage = () => {
  const dispatch = useDispatch();
  const channelsInfo = useSelector((s) => s.channelsInfo);
  console.log('channelsInfo:', channelsInfo);

  useEffect(() => {
    const fetchData = async () => {
      const authHeader = await getAuthHeader();
      dispatch(actions.fetchData(authHeader))
        .unwrap()
        .catch(({ status }) => {
          console.log(status);
        });
    };

    fetchData();
  }, [dispatch]);

  if (channelsInfo.loading) {
    return <h1>Loading...</h1>;
  }

  return <h1>ChatPage 2</h1>;
};

export default ChatPage;
