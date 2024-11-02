import axios from "../utils/axios-customize";

export const callLogin = (user_name, pass_word) => {
    return axios.post("/login", { user_name, pass_word });
};
