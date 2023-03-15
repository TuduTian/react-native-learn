import axios from 'axios';

export default {
  yx: axios.create({
    timeout: 3000,
    baseURL: 'https://api.yx.gxb.cn/api',
  }),
  bk: axios.create({
    timeout: 5000,
    baseURL: 'http://api.bk.gxb.cn/api',
  }),
  gxb: axios.create({
    timeout: 3000,
    baseURL: 'https://gangxinbao.cn/api',
  }),
};
