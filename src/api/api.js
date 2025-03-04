import axios from 'axios';

const API_URL = 'http://192.168.137.57:3000';

export const login = (username, password, guest, loginTime) => {
  return axios.post(`${API_URL}/tdx/Exec`, {
    username,
    password,
    guest,
    loginTime,
  }, {
    timeout: 500000 // 设置超时时间为10秒（10000毫秒）
  });
};

export const getData = (username) => {
  return axios.get(`${API_URL}/tdx/getdata`, {
    params: { username }, // 传递查询参数
    timeout: 500000 // 设置超时时间为20秒（20000毫秒）
  });
};