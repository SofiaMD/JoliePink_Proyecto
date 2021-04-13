import createDataContext from "./createDataContext";
import {firebase} from "../firebase";

const userReducer = (state, action) =>{

    switch(action.type){
        case "errorMessage":
            return {...state, errorMessage: action.payload};
        case "getUser":
            return {... state, users: action.payload};
        case "setCurrentUser":
            return {... state, currentUser: action.payload};
        default:
            return state;
    }
};


const userRef = firebase.firestore().collection("users");


const getUser = (dispatch) => (userId) =>{
    userRef
    .where("userId", "==", userId)
    .orderBy("nombreCompleto","desc")
    .onSnapshot(
        (querySnapshot) => {
            const users = [];
    
            querySnapshot.forEach((doc) => {
              const user = doc.data();
              user.id = doc.id;
              users.push(user);
            });
    
            dispatch({ type: "getUser", payload: users });
            dispatch({ type: "errorMessage", payload: "Guardaste informacion!" });
          },
          (error) => {
            dispatch({ type: "errorMessage", payload: error.message });
          }
    )
}

const clearMessage = (dispatch) => () => {
    dispatch({ type: "errorMessage", payload: "" });
  };
  
  // Establece la nota actual seleccionada
  const setCurrentUser = (dispatch) => (user) => {
    dispatch({ type: "setCurrentUser", payload: user });
  };
  

export const { Provider,Context} = createDataContext(

    userReducer,{
        getUser,
        setCurrentUser,
        clearMessage,  
    },
    {
        users : [],
        errorMessage: ""
    }
)