import axios from "axios";

import getEnvVars from "../../enviroment";

const { apiUrl, apiKeyAPI, apiHost, useQuery } = getEnvVars();

const instance = axios.create({
    baseURL: apiUrl,
    headers: {
        'x-rapidapi-key': apiKeyAPI, 
        'x-rapidapi-host': apiHost, 
        'useQueryString': useQuery
    }
});

export default instance;