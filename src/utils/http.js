import Axios from 'axios'

const http = Axios.create()

http.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://www.baidu.com/' : 'http://localhost:3000/'
http.defaults.timeout = 10000

http.interceptors.response.use(response => {
  return response.data
})

export default http