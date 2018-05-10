import axios from 'axios'
import {isString} from "./index"
export default function fetch (URI, payload = {}) {
  process.env.NODE_ENV !== 'production' && console.assert(isString(URI), 'please specify URI')
  return axios.post(URI, payload)
    .then(({data: {success, errorMsg, value}}) => success ? Promise.resolve(value) : Promise.reject(errorMsg))
}
