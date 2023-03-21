import axios from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from '../constants/httpStatusCode.enum'

// class Http {
//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'https://api-ecom.duthanhduoc.com/',
//       timeout: 10000,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     this.instance.interceptors.response.use(
//       function (response) {
//         return response
//       },
//       function (error) {
//         if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
//           const data = error.response?.data
//           const message = data.message || error.message
//           toast.error(message)
//         }
//         return Promise.reject(error)
//       }
//     )
//   }
// }

// const http = new Http().instance

const instance = axios.create({
  baseURL: 'https://api-ecom.duthanhduoc.com/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
      const data = error.response?.data
      const message = data.message || error.message
      toast.error(message)
    }
    return Promise.reject(error)
  }
)

const http = instance

export default http
