import { BASE_URL, TIMEOUT } from './config'
import axios from 'axios'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout:TIMEOUT
})

export default instance