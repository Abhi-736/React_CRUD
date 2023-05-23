import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Read = () => {
const navigate=useNavigate();

const [arr,setarr]=useState([])

const fetchData=()=>{
    fetch('https://646cc0fd7b42c06c3b2bf2f1.mockapi.io/CRUD').then((res)=>res.json()).then((data=>{setarr(data);}))
}

const handledelete=(id)=>{
    fetch(`https://646cc0fd7b42c06c3b2bf2f1.mockapi.io/CRUD/${id}`,{method:'DELETE'})
    .then((res)=>res.json())
    .then((data)=>{console.log(data);
    fetchData()})
    .catch((error)=>{console.log(error)})
}
const handleEdit=(name,email,id)=>{
    localStorage.setItem('id',id);
localStorage.setItem('name',name);
localStorage.setItem('email',email);
navigate('/update')

}

useEffect(()=>{fetchData()},[])

  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {arr.map((value)=> <tr>
      <th scope="row">{value.id}</th>
      <td>{value.Name}</td>
      <td>{value.Email}</td>
      <td><button className='btn-success' onClick={()=>{handleEdit(value.Name, value.Email,value.id)}}>Edit</button></td>
      <td><button className='btn-danger' onClick={()=>handledelete(value.id)}>delete</button></td>
    </tr>)}
  </tbody>
</table>
  )
}

export default Read