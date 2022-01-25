import axios from 'axios'
const url="http://localhost:8081/Light/rest"


const append=async(obj)=>{
    const ack = axios.post(`${url}/new`,obj)
    return ack

}
export {append}