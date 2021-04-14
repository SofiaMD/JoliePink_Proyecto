import createDateContext from "./createDataContext";
import {firebase} from "../firebase";


const purchaseReducer = (state, action) =>{
    switch(action.type){
        case "errorMessage":
            return {...state, errorMessage: action.payload};
        case "createPurchase":
            // return { ...state, purchases: [...purchases,   action.payload] };
            return { ...state, purchases:  action.payload };
        case "getPurchases":
            return { ...state, purchases: action.payload};
        case "setCurrentPurchase":
            return {...state,currentPurchase: action.payload};
        default:
            return state;
    };
}




const purchaseRef = firebase.firestore().collection("purchases");


const createPurchase = (dispatch) =>(id,nombre,precio,cantidad,talla,color,img,total,usuario) =>{

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

    purchaseRef
    .add(data)
    .then((_doc) =>{

        dispatch({ type: "createPurchase", payload: "Informacion agregada!"});
      console.log(_doc);
    })
    .catch((error) => {
        dispatch({ type: "errorMessage", payload: error.message });
      });
};


const getPurchases = (dispatch) => (userId) => {
    purchaseRef 
        .where("userId", "==", userId)
        .orderBy("id", "desc")
        .onSnapshot(
          (querySnapshot) => {
            const purchases = [];
    
            querySnapshot.forEach((doc) => {
              const purchase = doc.data();
              purchase.id = doc.id;
              purchases.push(purchase);
            });
    
            dispatch({ type: "getPurchases", payload: purchases });
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

  const setCurrentPurchase = (dispatch) => (purchase) => {
    dispatch({ type: "setCurrentPurchase", payload: purchase });
  };
  

export const { Provider,Context} = createDateContext(

  purchaseReducer,
    {
        createPurchase,
        clearMessage,
        setCurrentPurchase,
        getPurchases

    },
    {
        purchases : [],
        errorMessage: "",
        currentPurchase: {id: "",nombre: "", precio: "",cantidad:"" , talla:"", color:"",img: "",total: ""},
        // verificacion: false
    }
)