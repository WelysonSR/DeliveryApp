import axios from 'axios';

const getUser = () => JSON.parse(localStorage.getItem('user'));
const user = getUser();

export const registerAdmAxios = async (data) => {
  const URL = 'http://localhost:3001/user/register-adm';
  const response = await axios.post(URL, data, {
    headers: {
      Authorization: user.token,
    },
  });
  return response;
};

export const getUserAxios = async () => {
  const URL = 'http://localhost:3001/user';
  const response = await axios.get(URL);
  return response;
};

export const getSalesAxios = async () => {
  const URL = 'http://localhost:3001/sales';
  const response = await axios.get(URL);
  return response;
};

export const deleteUserAxios = async (id) => {
  const URL = `http://localhost:3001/user/${id}`;
  const response = await axios.delete(URL, {
    headers: {
      Authorization: user.token,
    },
  });
  return response;
};

export const registerSalesAxios = async (data) => {
  const URL = 'http://localhost:3001/sales/';
  const response = await axios.post(URL, data, {
    headers: {
      Authorization: user.token,
    },
  });
  return response;
};

export const loginAxios = async (data) => {
  const URL = 'http://localhost:3001/user/login';
  const response = await axios.post(URL, data);
  return response;
};

export const productAxios = async () => {
  const URL = 'http://localhost:3001/product';
  const response = await axios.get(URL);
  return response;
};

export const registerAxios = async (data) => {
  const URL = 'http://localhost:3001/user/register';
  const response = await axios.post(URL, data);
  return response;
};

export const salesIdAxios = async (paramsId) => {
  const URL = `http://localhost:3001/sales/${paramsId}`;
  const response = await axios.get(URL);
  return response;
};

export const patchStatusAxios = async (paramsId, status) => {
  const URL = `http://localhost:3001/sales/${paramsId}`;
  const response = await axios.patch(URL, { status }, {
    headers: {
      Authorization: user.token,
    },
  });
  return response;
};
