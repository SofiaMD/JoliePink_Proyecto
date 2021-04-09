import createDateContext from "./createDataContext";
import {firebase} from "../firebase";


const shoppingReducer = (state, action) => {
    switch (action.type){
        case "errorMessage":
            return {...state, errorMessage: action.payload};
        case "createShoppingCart":
            return { ...state, shoppingsCart: [...shoppingsCart, action.payload]};
        case "getShoppingCart":
            return {... state, shoppingsCart: action.payload};
        case "setCurrentCart":
            return { ...state, currentCart: action.payload };  
        default:
            return state;
    }
};


const shoppingCartRef = firebase.firestore().collection("shoppingsCart");


const createShoppingCart = (dispatch) => (id,nombre,precio,cantidad,talla,color,img,usuario) =>{

    const data = {
        id,
        nombre,
        precio,
        cantidad,
        talla,
        color,
        img,
        userId: usuario,
    };

    shoppingCartRef
    .add(data)
    .then((_doc) => {
      dispatch({ type: "errorMessage", payload: "Informacion agregada!" });
      console.log(_doc);
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });

};

const getShoppingCart = (dispatch) => (userId) => {
  shoppingCartRef
      .where("userId", "==", userId)
      .orderBy("id", "desc")
      .onSnapshot(
        (querySnapshot) => {
          const shoppingsCart = [];
  
          querySnapshot.forEach((doc) => {
            const shoppingCart = doc.data();
            shoppingCart.id = doc.id;
            shoppingsCart.push(shoppingCart);
          });
  
          dispatch({ type: "getShoppingCart", payload: shoppingsCart });
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

// Establece la nota actual seleccionada
const setCurrentCart = (dispatch) => ( shoppingCart) => {
  dispatch({ type: "setCurrentCart", payload: shoppingCart });
};
  

export const {Provider,Context} = createDateContext(
     shoppingReducer,
     {
        createShoppingCart,
        getShoppingCart,
        setCurrentCart,
        clearMessage,
     },
     {
         shoppingsCart : [],
         errorMessage: "",
         currentCart: { id: "",nombre: "", precio: "",cantidad:"" , talla:"", color:"",img: "" },
     }

);