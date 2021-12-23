import { EDIT_USER } from "../actions";
const initialState = {
    userInfo:{
        name:'',
        email:'',
        phone:'',
    }
}

export const editusers = (state=initialState,action) =>{
     switch (action.type) {
         case EDIT_USER:
             
          return {
              ...state,
              userInfo:action.payload
          }
     
         default:
        return state;
     }  
}


