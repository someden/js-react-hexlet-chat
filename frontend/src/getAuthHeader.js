import axios from 'axios';

import routes from './routes.js';

const getAuthHeader = async () => {
  const login = await axios.post(routes.loginPath(), { username: 'admin', password: 'admin' });

  return { Authorization: `Bearer ${login.data.token}` };
};

export default getAuthHeader;
