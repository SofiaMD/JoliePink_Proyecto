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
        case "updateCart":
          return {
            ...state,
            shoppingsCart: state.shoppingsCart.map((shoppingCart) =>{
              if(shoppingCart.id === action.payload.shoppingCart.id){
                return {
                  ...shoppingCart,
                  talla: action.payload.shoppingCart.talla,
                  color:  action.payload.shoppingCart.color,
                  cantidad :  action.payload.shoppingCart.cantidad,
                  total : action.payload.shoppingCart.total
                };
              }
              return shoppingCart;
            })
          }; 
        case "deleteCart":
          return {...state, 
            shoppingsCart:state.shoppingsCart.map((shoppingCart) =>{
              if(shoppingCart.id === action.payload.shoppingCart.id){
                return {
                  ...shoppingCart,
                };
              }
              return shoppingCart
            })
          };
        default:
            return state;
    }
};


const shoppingCartRef = firebase.firestore().collection("shoppingsCart");


const createShoppingCart = (dispatch) => (id,nombre,precio,cantidad,talla,color,img,total,usuario) =>{

    const data = {
        id,
        nombre,
        precio,
        cantidad,
        talla,
        color,
        img,
        total,
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

// Establece del articulo actual seleccionada
const setCurrentCart = (dispatch) => (shoppingCart) => {
  dispatch({ type: "setCurrentCart", payload: shoppingCart });
};


const updateCart = (dispatch) => (id, talla, color, cantidad,total) => {
  shoppingCartRef
    .doc(id)
    .update({ talla, color, cantidad,total })
    .then(() => {
      dispatch({
        type: "updateCart",
        payload: { shoppingCart: { id, talla, color, cantidad, total } },
      });
      dispatch({ type: "errorMessage", payload: "Carrito actualizado " });
    })
    .catch((error) => {
      dispatch({ type: "errorMessage", payload: error.message });
    });
};

const deleteCart = (dispatch) =>(id) =>{

  shoppingCartRef
  .doc(id)
  .delete()
  .then(()=>{
    dispatch({ type: "deleteCart", payload: { shoppingCart: {id}}});
    dispatch({ type: "errorMessage", payload: "Articulo Eliminado" });
    console.log("Document successfully deleted!");
  })
  .catch((error) => {
    dispatch({ type: "errorMessage", payload: error.message });
    console.error("Error removing document: ", error);
  });
}

export const {Provider,Context} = createDateContext(
     shoppingReducer,
     {
        createShoppingCart,
        getShoppingCart,
        setCurrentCart,
        clearMessage,
        updateCart,
        deleteCart
     },
     {
         shoppingsCart : [],
         errorMessage: "",
         currentCart: { id: "",nombre: "", precio: "",cantidad:"" , talla:"", color:"",img: "", total: ""},
     }

);