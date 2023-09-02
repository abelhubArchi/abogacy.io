import axios from 'axios';

axios.defaults.baseURL = "http://192.168.0.17:3000/";
var IA;
let chatMessages;

export const makeRequest = async (method, url, data) => {
    const config = {
      baseURL: "http://192.168.0.17:3000/",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'aHjo0ePrUrQkoGe8rmE75i30pmH3',
      },
    };
  
    const response = await axios[method](url, data, config);
  
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.statusText);
    }
  };
  

