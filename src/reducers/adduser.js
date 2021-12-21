import { USER } from "../actions";
const initialState = {
    userInfo:{
        name:'',
        email:'',
        phone:'',
    }
}

export const users = (state=initialState,action) =>{
     switch (action.type) {
         case USER:
             
          return {
              ...state,
              userInfo:action.payload
          }
     
         default:
        return state;
     }  
}


