//将axios需要用到的地址都统一封装在api.js里面，避免多次import，并且定义axios为常量const，这样可以方便使用
import axios from 'axios'
let base='';
export const requestLogin = params =>{return axios.post(`${base}/login`,params).then(res => res.data);};

