import React from 'react';

import chatApi from '../services/chat';

const { useGetDataQuery } = chatApi;

const ChatPage = ({ authHeader }) => {
  const { data, error, isLoading } = useGetDataQuery(authHeader);
  console.log({ data, error, isLoading });

  return <h1>ChatPage 3</h1>;
};

export default ChatPage;
