import createDataContext from "./createDataContext";
import { firebase } from "../firebase";

const personalReducer = (state, action) =>{

    switch (action.type) {
        case "errorMessage":
            return {... state, errorMessage: action.payload}
        case "createPersonalInformation":
            return {... state, personalsInformation: [...personalsInformation, action.payload]};
        case "getPersonalInformation":
            return {...state, personalsInformation: action.payload};
        case "setCurrentInformation":
            return { ...state, currentInformation: action.payload }; 
        default:
            return state;
    }
};


const personalInformationRef = firebase.firestore().collection("personalsInformation");


const createPersonalInformation = (dispatch) =>(direccion,telefono,codigoPostal,usuario) =>{

    const data = {
        direccion,
        telefono,
        codigoPostal,
        userId: usuario
    };

    personalInformationRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "errorMessage", payload: "Informacion agregada!" });
      console.log(_doc);
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

const getPersonalInformation = (dispatch) => (userId) => {
    personalInformationRef
        .where("userId", "==", userId)
        .orderBy("codigoPostal", "desc")
        .onSnapshot(
          (querySnapshot) => {
            const personalsInformation = [];
    
            querySnapshot.forEach((doc) => {
              const personalInformation = doc.data();
              personalInformation.id = doc.id;
              personalsInformation.push(personalInformation);
            });
    
            dispatch({ type: "getPersonalInformation", payload: personalsInformation });
            dispatch({ type: "errorMessage", payload: "Guardaste informacion!" });
          },
          (error) => {
            dispatch({ type: "errorMessage", payload: error.message });
          }
        );
    };


// Limpiar el mensaje del contexto
const clearMessage = (dispatch) => () => {
    dispatch({ type: "errorMessage", payload: "" });
};

const setCurrentInformation = (dispatch) => ( personalInformation) => {
    dispatch({ type: "setCurrentInformation", payload: personalInformation });
  };

export const {Provider,Context} = createDataContext(
    personalReducer,
    {
        createPersonalInformation,
        clearMessage,
        getPersonalInformation,
        setCurrentInformation
    },
    {
        personalsInformation : [],
        errorMessage: "",
        currentInformation: {direccion: "", telefono: "", codigoPostal:""},
    }
);