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
import { pagination } from '../actions';
import Login from './Login';
import { requestdelete, requestUser } from '../thunk/request'
import Pagination from 'react-bootstrap/Pagination'


export default function User() {
    const user = useSelector((state )=> state.getusers.user)
    const filters =useSelector((state)=>state.paginations.filters)

    console.log(filters);
    const dispatch = useDispatch()
     
    const handleChangeFilter = (event) => {
      const { value, name } = event.target;
      dispatch(pagination({ [name]: value }));
    };
  
    const handlePageChange = (acc) => {
      dispatch(pagination({ page: acc + filters.page }));
    };
    useEffect(() => {
        dispatch(requestUser(filters))
    }, [filters.page,filters.limit,filters.orderBy, filters.order])

    const handleDelete = (Id) =>{

        dispatch(requestdelete(Id));   
    }

    const handleComplete = (event, todoId) => {
      dispatch(({ todoId, completed: event.target.checked }));
    }
    const handleEdit = (id) =>{
      <Login Id={id}/>
   
    }
    
    return (
        <div>
          

        <select name="orderBy" value={filters.orderBy} onChange={handleChangeFilter}>
        <option value={"id"}>id</option>
        <option value={"name"}>name</option>
        <option value={"phone"}>phone</option>
      </select>


      <select name="order" value={filters.order} onChange={handleChangeFilter}>
        <option value={"asc"}>Ascending</option>
        <option value={"desc"}>Descending</option>
      </select>
     
          <h1>users</h1>
         {user.map((i)=>(
             <>
            <li>{i.id}</li>
           <li>{i.name}</li>
             <li>{i.email}</li>
             <li>{i.phone}</li>

            <button onClick={()=>handleDelete(i.id)}>delete</button>
            {/* <button onClick={()=>handleEdit(i.id)}>edit</button> */}
            <label>
                  complete
                  <input
                    type="checkbox"
                    checked={i.completed}
                    onClick={(event) =>handleComplete(event, i.id)}
                  />
                </label>
           <Link to={`/AllUser/${i.id}`}>Edit</Link>
    
         </>
         ))}

     <select name="limit" value={filters.limit} onChange={handleChangeFilter}>
        <option value={1}>1</option> 
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={1}>1</option>

      </select> 
      <button disabled={filters.page === 1} onClick={() => handlePageChange(-1)}>Prev</button>
      <button disabled={filters.page === filters.pages} onClick={() => handlePageChange(1)}>Next</button>

        </div>
    )
}
