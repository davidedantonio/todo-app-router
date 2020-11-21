import axios from 'axios'

const defaultClient = axios.create({
  baseURL: 'http://localhost:3000'
})

export { defaultClient }
