import axios from 'axios'

const base_url = 'localhost:8080'

export default function request(url, options) {
  url = base_url + url
  if (options.method == 'POST') {
    options.data = JSON.stringify(options.data)
  }
  return axios(url, ...options)
}
