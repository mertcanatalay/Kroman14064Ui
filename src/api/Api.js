import Axios from 'axios'
import { v4 as uuid } from 'uuid'

const Api = Axios.create({
  baseURL: "http://localhost:5001/",
  //baseURL: process.env.REACT_APP_API_URL,
  // headers: {
  //   'Authorization': `Bearer ${process.env.REACT_APP_API_TOKEN}`5w2Y1ByUPWmwzOqE84omuao
  // }
  // headers: {
  //   //'token': `5w2Y1ByUPWmwzOqE84omuao`
  //   'token': process.env.REACT_APP_API_TOKEN
  // }
});


export default Api;