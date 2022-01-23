import { typesCompras } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs,query,where,doc,deleteDoc} from "@firebase/firestore";


export const AgregarCompraAsync =(data)=>{
    console.log(data)
    return async(dispatch)=>{
        addDoc(collection(db,"compras"),data)
        .then(resp => {
            dispatch(AgregarCompraSync(data));
        })
        .catch(error => {
            console.log(error);
        })   
    }
}


export const AgregarCompraSync =(data)=>{
    return{
        type: typesCompras.agregarCompra,
        payload: data
    }
}

export const ListarCompraAsync = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "compras"));
        const compras = [];
        querySnapshot.forEach((doc) => {
            compras.push({
                ...doc.data()
            })
        });
        dispatch(ListarCompraSync(compras));
    }
}

export const ListarCompraSync = (data) =>{
    return{
        type: typesCompras.listar,
        payload: data

    }
}