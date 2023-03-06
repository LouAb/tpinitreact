import axios from 'axios';


const url = "http://localhost:3001/person"

export default class PersonCRUD {
    get() {
        return axios.get(url); 
    }
    getId(id) {
        return axios.get(`${url}/${id}`); 
    }

    delete(id) {
        return axios.delete(`${url}/${id}`); 
    }

    put(id,data) {
        return axios.put(`${url}/${id}`,data); 
    }

    post(data) {
        return axios.post(`${url}`,data); 
    }

}