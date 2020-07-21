import axios from 'axios'  //引入axios

//创建实例
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';
const service = axios.create({
  baseURL: BASEURL,  // http://192.168.0.106:8080/devApi/  == http://www.web-jshtml.cn/productapi/productapi
  timeout: 15000,   // 超时
  // 网络请求接口，假设 5000
  // 1000 2000，
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default service;