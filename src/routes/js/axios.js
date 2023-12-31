import axios from 'axios';
var local = 'http://192.168.0.18:3000';
var web = 'https://abogacy.onrender.com/';

axios.defaults.baseURL = web;

var IA;
let chatMessages;

export const makeRequest = async(method, url, data) => {
    const config = {
      baseURL: web,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://abogacyio.netlify.app'
      },
    };
  
    const response = await axios[method](url, data, config);
  
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.statusText);
    }
  };
  

