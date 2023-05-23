import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [id, setid] = useState('');
    const [newName, setnewName] = useState('');
    const [newEmail, setnewEmail] = useState('');


   
    useEffect(()=>{
        setid(localStorage.getItem('id'))
    setnewName(localStorage.getItem('name'))
    setnewEmail(localStorage.getItem('email'));
    console.log('work');
    },[])
    
    console.log('work');

    const navigate= useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`https://646cc0fd7b42c06c3b2bf2f1.mockapi.io/CRUD/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                Name: newName,
                Email: newEmail
            })
        }).then((res) => res.json()).then((data) => { console.log(data); navigate('/read')  });
    }
    return (
        <form onSubmit={(e)=>{ handleUpdate(e)}}>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" onChange={(e) => { setnewName(e.target.value) }} value={newName} aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" onChange={(e) => { setnewEmail(e.target.value) }} value={newEmail} class="form-control" />
            </div>

            <button type="submit" class="btn btn-primary" >Update</button>
        </form>
    )
}

export default Update