import axios from "axios";

export const UserAPI = {
    async getUsers(){
        return axios.get('./users.json')
    }
}