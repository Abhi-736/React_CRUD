import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        console.log('workiing')
        e.preventDefault();

        fetch('https://646cc0fd7b42c06c3b2bf2f1.mockapi.io/CRUD', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                Name: name,
                Email: email
            })
        }).then((res) => res.json())
            .then((data) => { console.log(data); navigate('/read') })
            .catch(error => { console.log(error) })
    }

    return (
        <form onSubmit={(e) => { handleSubmit(e) }}>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" onChange={(e) => { setname(e.target.value) }} value={name} aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" onChange={(e) => { setemail(e.target.value) }} value={email} className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    )
}

export default Create