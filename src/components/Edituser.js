import React, { useEffect } from 'react'
import {  Editusers } from '../actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { requestadd, requestEdit,requestedit } from '../thunk/request'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'


export const AllUser= () =>{

    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.editusers.userInfo)
    console.log("hhhhhh",user);
    const{name,email,phone} = user;

   const handleChange =(event)=>{
    dispatch(Editusers({...user,[event.target.name]:event.target.value}));
   }
   
useEffect(() => {

    LoadUsers()
   
}, [])


const LoadUsers= async (e) =>{
    
        const response = await axios.get(`http://localhost:3008/users/${id}`)
        dispatch(Editusers(response.data));
        console.log("thunk",response.data);
    }

    // const loadUser=async(e)=>{
    //     await axios.get(`http://localhost:3004/users/${id}`).then((response)=>{
    //            dispatch(editUser(response.data));
    //            console.log(response.data)
    //       })
    //    }

const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(requestedit(id,user))
      
}
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <input type="text"  name="name" value={name}   onChange={handleChange}/> <br />
            <input type="email" name="email" value={email}  onChange={handleChange} /> <br />
            <input type="text" name="phone" value ={phone} onChange={handleChange}/> <br />
            <button type='submit' onClick={handleSubmit}>submit</button>
            </form>
            <p>hello</p> d de de de 
        </div>
    )
}
