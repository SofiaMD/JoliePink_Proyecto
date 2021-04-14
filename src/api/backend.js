import axios from "axios";

import getEnvVars from "../../enviroment";

const { urlData } = getEnvVars();

const instance = axios.create({
    dataUrl:urlData
});

export default instance;