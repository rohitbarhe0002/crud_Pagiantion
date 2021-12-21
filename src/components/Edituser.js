import React, { useEffect } from 'react'
import { adduser } from '../actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { requestadd, requestEdit,requestedit } from '../thunk/request'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'


export default function Edituser() {

    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.users.userInfo)
    console.log("hhhhhh",user);
    const{name,email,phone} = user;

   const handleChange =(event)=>{
    dispatch(adduser({...user,[event.target.name]:event.target.value}));
   }
   
useEffect(() => {
  axios.get(`http://localhost:3008/users/${id}`)
}, [])

const handleSubmit = (event)=>{
    event.preventDefault();
    dispatch(requestedit(user,id))
    

    
}
    return (
        <div>
           <form onSubmit={handleSubmit}>
            <input type="text"  name="name" value={name}   onChange={handleChange}/> <br />
            <input type="email" name="email" value={email}  onChange={handleChange} /> <br />
            <input type="text" name="phone" value ={phone} onChange={handleChange}/> <br />
            <button type='submit' onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}
