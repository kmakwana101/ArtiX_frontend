// CategoryPage.js (React component)

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Adminheader';
import BACKEND_URL from '../backend_url';

const CategoryPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/allcategory`);
                setCategories(response.data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []); // Empty dependency array ensures the effect runs only once on component mount
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`${BACKEND_URL}/api/posts`);
                console.log(response);
                setPosts(response.data.data);
            } catch (error) {
                console.error('Error fetching category:', error);
            }
        };

        fetchCategory();
    }, []);

    return (
        <>
            <Header />
            <div className='container font'>

                <div className="container mt-4">
                    <h2 className='mb-3'>All Categories</h2>
                    <Link to="/admin/posts" style={{ textDecoration: "none" }}><p style={{ color: "black" }}>Total Posts: {posts.length} </p></Link>
                </div>

                <table className='mt-4 admintable'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Category Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, i) => (
                            <tr key={i + 1}>
                                <td>{i + 1}</td>

                                <td><Link to={`/AdminPanel/${category.cat_name}`} style={{ textDecoration: "none", color: "black" }}>{category.cat_name}</Link></td>
                                <td className='ms-auto'>
                                    <Link to={`/AdminPanel/${category.cat_name}/`} style={{ textDecoration: "none", color: "black" }}><button>Edit</button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CategoryPage;
