import axios from "axios";

const api = axios.create({
    baseURL: "https://6b08b2476a4ecd58b00695f9.mockapi.io/cosmoshop"
});

export default api;
