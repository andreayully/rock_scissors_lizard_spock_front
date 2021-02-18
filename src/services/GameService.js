import axios from "axios"

export default class GameService{
    api = {
        url: "http://localhost:8000"
    }

    getElements(){
        return axios.get(`${this.api.url}/game/elements/`)
    }

    createMatch(match){
        return axios.post(`${this.api.url}/game/match/`, match)
    }
    

}