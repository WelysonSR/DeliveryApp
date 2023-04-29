import axios from 'axios';

const URL_BASE = 'http://localhost:3001';

const getUser = () => JSON.parse(localStorage.getItem('user'));
const user = getUser();

export const registerAdmAxios = async (data) => {
  const URL = `${URL_BASE}/user/register-adm`;
  const response = await axios.post(URL, data, {
    headers: {
      Authorization: user.token,
    },
  });
  return response;
};

export const getUserAxios = async () => {
  const URL = `${URL_BASE}/user`;
  const response = await axios.get(URL);
  return response;
};

export const getSalesAxios = async () => {
  const URL = `${URL_BASE}/sales`;
  const response = await axios.get(URL);
  return response;
};

export const deleteUserAxios = async (id) => {
  const URL = `${URL_BASE}/user/${id}`;
  const response = await axios.delete(URL, {
    headers: {
      Authorization: user.token,
    },
  });
  return response;
};

export const registerSalesAxios = async (data) => {
  const URL = `${URL_BASE}/sales/`;
  const response = await axios.post(URL, data, {
    headers: {
      Authorization: user.token,
    },
  });
  return response;
};

export const loginAxios = async (data) => {
  const URL = `${URL_BASE}/user/login`;
  const response = await axios.post(URL, data);
  return response;
};

export const productAxios = async () => {
  const URL = `${URL_BASE}/product`;
  const response = await axios.get(URL);
  return response;
};

export const registerAxios = async (data) => {
  const URL = `${URL_BASE}/user/register`;
  const response = await axios.post(URL, data);
  return response;
};

export const salesIdAxios = async (paramsId) => {
  const URL = `${URL_BASE}/sales/${paramsId}`;
  const response = await axios.get(URL);
  return response;
};

export const patchStatusAxios = async (paramsId, status) => {
  const URL = `${URL_BASE}/sales/${paramsId}`;
  const response = await axios.patch(URL, { status }, {
    headers: {
      Authorization: user.token,
    },
  });
  return response;
};
