import {types} from '../types/types';
import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import Swal from 'sweetalert2';

export const registroEmailPasswordNombre = (email,password, name) => {
    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: name})

           dispatch(registerSincrono(user.email,user.uid,user.displayName))
            console.log(user);
        })
        .catch(e =>{
            console.log(e);
            Swal.fire( 'Error', e.message, 'Error');
        })
    }
}

export const registerSincrono = (email,password,name) => {

    return{
       type: types.register,
       payload: {
           email,
           password,
           name
       }
    }
}

