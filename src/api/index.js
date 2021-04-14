
// import axios from "axios";

// const instance = axios.create({

//     urlData: "https://gist.githubusercontent.com/LscDiscua/b703369a51fe2deeff31ea0472dccdad/raw/08fff4fcf7aa168ce27ee0efa8772ce95b38f208/JoliePinkCategories"



// });

const fetchJoliePinkCategories = async ()=>{
    const endpoint =  `https://gist.githubusercontent.com/LscDiscua/b703369a51fe2deeff31ea0472dccdad/raw/08fff4fcf7aa168ce27ee0efa8772ce95b38f208/JoliePinkCategories`;

    const response = await fetch(endpoint);

    const data = await response.json();

    return data;


       // useEffect (() => {
     
    //     handlerData();
    
    //   }, []);

    // const handlerData = ()=>{

    //     const getCategories = async () =>{

    //         const newCategorie = await fetchJoliePinkCategories();
             
    //         setCategories(newCategorie);
    
    //         // console.log(setCategories);
    
    //         console.log("hola")
               
    //     };

    //     getCategories();

    // }

    console.log(data);
}

export default fetchJoliePinkCategories;

// export default instance;