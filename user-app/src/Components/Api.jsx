import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
    const [data, setData] = useState([]);
    const [formdata, setformdata] = useState({});
    const [editId, setEditId] = useState(null); // To track if we're updating

    // Fetch data on component mount
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/users/')
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Handle form input changes
    const handleInput = (e) => {
        const { name, value } = e.target;
        setformdata({ ...formdata, [name]: value });
    };

    // Handle form submission
    const hndlesubmit = (e) => {
        e.preventDefault();

        if (editId) {
            // Update existing item
            const updatedData = {
                name: formdata.name,
                username: formdata.username,
                email: formdata.email,
            };

            fetch(`https://jsonplaceholder.typicode.com/users/${editId}`, {
                method: 'PUT',
                body: JSON.stringify(updatedData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => {
                    if (response.ok) return response.json();
                    throw new Error('Failed to update data');
                })
                .then((updatedItem) => {
                    setData(data.map((item) => (item.id === editId ? updatedItem : item)));
                    setformdata({}); // Clear form
                    setEditId(null); // Reset edit state
                })
                .catch((error) => console.error('Error updating data:', error));
        } else {
            // Add new item
            const newData = {
                name: formdata.name,
                username: formdata.username,
                email: formdata.email,
            };

            fetch('https://jsonplaceholder.typicode.com/users/', {
                method: 'POST',
                body: JSON.stringify(newData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => {
                    if (response.ok) return response.json();
                    throw new Error('Failed to add data');
                })
                .then((newItem) => {
                    setData([...data, newItem]);
                    setformdata({}); // Clear form
                })
                .catch((error) => console.error('Error adding data:', error));
        }
    };

    // Handle delete
    const handleDelete = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (response.ok) {
                    setData(data.filter((item) => item.id !== id)); // Remove item from state
                } else {
                    throw new Error('Failed to delete data');
                }
            })
            .catch((error) => console.error('Error deleting data:', error));
    };

    // Handle edit
    const handleEdit = (item) => {
        setEditId(item.id); // Set the ID of the item being edited
        setformdata({ name: item.name, username: item.username, email: item.email }); // Prefill the form
    };

    return (
        <div className="container">
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-warning"
                                    onClick={() => handleEdit(item)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="container mb-4">
                <h2>{editId ? 'Edit User' : 'Add New User'}</h2>
                <form onSubmit={hndlesubmit}>
                    <input
                    className='form-control mb-4'
                        type="text"
                        name="name"
                        value={formdata.name || ''}
                        onChange={handleInput}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="text"
                        className='form-control mb-4'
                        name="username"
                        value={formdata.username || ''}
                        onChange={handleInput}
                        placeholder="Username"
                        required
                    />
                    <input
                        type="email"
                        className='form-control mb-4'
                        name="email"
                        value={formdata.email || ''}
                        onChange={handleInput}
                        placeholder="Email"
                        required
                    />
                    <button type="submit" className="btn btn-primary">
                        {editId ? 'Update' : 'Add'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Api;
