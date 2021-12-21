import React from 'react'
import { adduser } from '../actions'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { requestadd } from '../thunk/request'
import { useHistory } from 'react-router'


export default function Login() {
    
    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.users.userInfo)
    console.log("hhhhhh",user);
    const{name,email,phone} = user;

   const handleChange =(event)=>{
    dispatch(adduser({...user,[event.target.name]:event.target.value}));
   }
   
   const handleSubmit = (event)=>{
       event.preventDefault();
       dispatch(requestadd(user))
       history.push('/User')

       
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
