import axios from "axios"


export default class UserService{
    api = {
        url: "http://localhost:8000"
    }

    getUsersList(){
        return axios.get(`${this.api.url}/users/`)
    }

    createUSer(user){
        return axios.post(`${this.api.url}/users/`, user)
    }
}