import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = 'http://192.168.1.47/sh_2018/restful.php/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const login = params => { return axios.post('Login/loginAuthentication',qs.stringify(params)).then(res => res.data);}

