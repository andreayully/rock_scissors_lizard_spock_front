import axios from "axios"

export default class GameService{
    api = {
        url: "http://localhost:8000"
    }

    getElements(){
        return axios.get(`${this.api.url}/game/elements/`)
    }

    createInitialMatch(users){
        return axios.post(`${this.api.url}/game/initial-match/`, users)
    }
    
    updateMatch(id, match){
        return axios.put(`${this.api.url}/game/match/${id}/`, match)
    }

    getMatch(id){
        return axios.get(`${this.api.url}/game/match/${id}/`)
    }

}