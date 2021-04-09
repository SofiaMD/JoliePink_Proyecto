import createDataContext from "./createDataContext";
import {firebase} from "../firebase";

const userContext = (state, action) =>{

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




// const getUser = (dispatch) => (userId) => {
//     userRef
//     .get().then((userId) =>{
//         if (userId.exists) {
//             console.log("Document data:", userId.data());
//         }
//         else{
//             userId.data();
//             console.log("no existe");
//         }

//     }).catch((error) => {
//         console.log("Error getting document:", error);
// });
// }