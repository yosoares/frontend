import axios from 'axios'

const apiLocal = axios.create({
    baseURL: "http://localhost:2069"
})

export default apiLocal;