// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { requestUser,requestdelete } from '../thunk/request';
// export default function User() {

//     const dispatch = useDispatch();
//     const user = useSelector(state => state.getusers.user);
//     console.log("ggggg",user);

//     useEffect(() => {
//     dispatch(requestUser())
//     }, [])

//     const handleclick =(Id)=>{
//         requestdelete(Id)
//     }
 
//     return (
//         <div>
//             <h1>users</h1>
//             {user.map((i)=>(
//                 <>
//                 <li>{i.id}</li>
//                <li>{i.name}</li> 
//                <li>{i.phone}</li>
//                <li>{i.username}</li>

//                <button onClick={handleclick=()=>(i.id)}>delete</button>
//                </>
//             ))}
//         </div>
//     )
// }
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { requestdelete, requestUser } from '../thunk/request'


export default function User() {
    const user = useSelector(state => state.getusers.user)
    const {filters}=useSelector(state=>state.paginations.filters)

    console.log(user);
    const dispatch = useDispatch()
     
    useEffect(() => {
        dispatch(requestUser())
    }, [])

    const handleDelete = (Id) =>{
        dispatch(requestdelete(Id))
    }
    
    
    return (
        <div>
          <h1>users</h1>
         {user.map((i)=>(
             <>
            <li>{i.id}</li>
           <li>{i.name}</li>
             <li>{i.email}</li>
             <li>{i.phone}</li>
             <button onClick={()=>handleDelete(i.id)}>delete</button>
           <Link to={`/Ediuser/${i.id}/:id`}>Edit</Link>
         </>
         ))}

      <button disabled={filters.page === 1} >Prev</button>
      <button disabled={filters.page === filters.pages} >Next</button>
        </div>
    )
}
