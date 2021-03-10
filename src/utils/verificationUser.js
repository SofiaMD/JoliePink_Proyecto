import { firebase }  from "../firebase";

const VerificationUser =()=>{

  // const userRef = firebase.firestore().collection("users");
    const user = firebase.auth(user).currentUser;

    firebase.auth().sendSignInLinkToEmail((user) =>{
      if (user) {
        userRef
          .doc(user.uid)
          .get()
          .then((document) => {
            return document.data();
          })
          .catch((error) => {
            console.log(error);
          });
      }

    })

    return{}

}

export default VerificationUser;

