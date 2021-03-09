import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

// Importacion de la informacion proveniente de enviroment

import getEnvVars from "../../enviroment";

const {
    apiKey, 
    authDomain, 
    projectId,
    storageBucket, 
    messagingSenderId, 
    appId
} = getEnvVars();


// Valores de la aplicacion
const firebaseConfig ={
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
};

// Verificar si se inicio una app realizada en firebaseConfig
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export { firebase };
