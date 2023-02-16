import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { baseUrl, api } from '../routes.js';

const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: (authHeader) => ({
        url: api.dataPath(),
        headers: authHeader,
      }),
    }),
  }),
});

export default chatApi;
