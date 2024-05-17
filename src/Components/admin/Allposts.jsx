import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./Adminheader"
import BACKEND_URL from '../backend_url';

const Allposts = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/posts`)
        console.log(response);
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, []);

  const handleDelete = async (postId) => {
    try {
      // Step 1: Delete the post
      await axios.delete(`${BACKEND_URL}/api/posts/${postId}`);
      // Step 2: Fetch the updated data
      const response = await axios.get(`${BACKEND_URL}/api/posts`);
      // let data = await response.data.data[0].posts;
      console.log(response.data.data);
      // Step 3: Set the updated data in the state
      setPosts(response.data.data);
      // Step 4: Refresh the page
      // window.location.reload(true);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  return (
    <>
      <Header />
      <div className="container font">
        <h3>All Posts </h3>
        <p>Total Posts: {posts.length}</p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Category</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, i) => (
                <tr key={post._id} className={post._id}>
                  <td>{i + 1}</td>
                  <td>
                    {post.post_img1 && (
                      <img
                        src={`../../image/${post.post_img1}`}
                        alt={post.title}
                        style={{ height: '50px', objectFit: 'cover' }}
                      />
                    )}
                  </td>
                  <td>{post.cat_name}</td>
                  <td>{post.main_heading}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(post._id)}
                      style={{ width: "45%" }}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm ms-2"
                      style={{ width: "45%" }}
                    >
                      <Link to={`/admin/posts/update/${post._id}`} style={{ textDecoration: "none", color: "white" }}>Edit</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Allposts;
