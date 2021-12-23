  import axios from 'axios';
  import { getuser,Edituser, Editusers } from "../actions";
 

  const client = axios.create ({
      baseURL:  'http://localhost:3008',
  })

  export const requestUser = (prevfilters) => async (dispatch) =>{
const params={
    _limit:prevfilters.limit,
    _page:prevfilters.page,
    _orderBy: `${prevfilters.orderBy}`,
    _order: `${prevfilters.order}`,
}
    try{
        const response = await client.get('/users',{params});
        dispatch(getuser(response.data));
    }catch(err){
        console.log(err);
    }

  }

 export const requestadd = (user) => async (dispatch) =>{
    try{
        const response = await client.post(`/users`,user)
        dispatch(getuser(response.data));
        
    }
    catch(err){
        console.log(err);
    }
}

  export const requestdelete = (Id) => async () =>{

    try{
        const response = await client.delete(`/users/${Id}`);
        window.location.reload()
    }catch(err){
        console.log(err);
    }
    
  }

  export const requestedit = (id,user) => async (dispatch) =>{
    try{
         await client.put(`/users/${id}`,user)
        console.log("ghgdhghdh",user);
    }
    catch(err){
        console.log(err);
    }
}


export const requestEdit = (id) => async (dispatch) =>{
    try{
        const response = await axios.get(`http://localhost:3008/users/${id}`)
        dispatch(Editusers(response.data));
        console.log("thunk",response.data);
    }
    catch(err){
        console.log(err);
    }
}