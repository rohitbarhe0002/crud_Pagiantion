import { SET_PAGE } from "../actions";
 const initialState = {
     filters:{
         limit:10,
         page:1,
     }
 }

export  const  paginations = (state=initialState,action) => {

    switch (action.type) {
        case SET_PAGE:
            return{
                ...state,
                filters : action.payload,
            }
    
        default:
            return state;
    }

 }