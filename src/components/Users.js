import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { requestUser,requestdelete } from '../thunk/request';
export default function Users() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.getusers.user);
    console.log("ggggg",user);

    useEffect(() => {
    dispatch(requestUser())
    }, [])

    const handleclick =(Id)=>{
        requestdelete(Id)
    }
 
    return (
        <div>
            <h1>users</h1>
            {user.map((i)=>(
                <>
                <li>{i.id}</li>
               <li>{i.name}</li> 
               <li>{i.phone}</li>
               <li>{i.username}</li>

               <button onClick={handleclick=()=>(i.id)}>delete</button>
               </>
            ))}
        </div>
    )
}
