import { SET_PAGE } from "../actions";
 const initialState = {
     filters:{
         limit:5,
         page:1,
         orderBy: 'name', 
         order: 'asc',
     }
 }

export  const  paginations = (state=initialState,action) => {
console.log("gggggggg",state);
    switch (action.type) {
        case SET_PAGE:
            return{
                ...state,
                filters :{
                    ...state.filters,
                    ...action.payload,
            }
        }
    
        default:
            return state;
    }

 }