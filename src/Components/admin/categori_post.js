import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from "./Adminheader"

const SingleCategory = () => {
  
  const [posts, setPosts] = useState([]);
  let pathname = window.location.pathname;

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const apiUrl = `https://sparkling-cow-polo-shirt.cyclic.app/api${pathname}`;
        // console.log(apiUrl, "++++++pathname");
        const response = await axios.get(apiUrl);
        // console.log(response.data.data[0].posts, "response");
        setPosts(response.data.data[0].posts);
        // let category_name = response.data.data
        // setCategory(category_name)
        // console.log(category_name);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, [pathname]);

  const handleDelete = async (postId) => {
    try {
      // Step 1: Delete the post
      await axios.delete(`https://sparkling-cow-polo-shirt.cyclic.app/api/posts/${postId}`);
      // console.log(object);
      // Step 2: Fetch the updated data
      const apiUrl = `https://sparkling-cow-polo-shirt.cyclic.app/api${pathname}`;
      const response = await axios.get(apiUrl);
      let data = await response.data.data[0].posts;
      setPosts(data);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  return (
    <>
      <Header/>
      <div className="container mt-4 font">
        <h3>All Posts </h3>
        <p>Total Posts: {posts.length}</p>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Created at</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post,i) => (
                <tr key={post._id} className={post._id}>
                    <td>{i+1}</td>
                  <td>
                    {post.post_img1 && (
                      <img
                        src={`../../image/${post.post_img1}`}
                        alt={post.title}
                        style={{ height: '50px', objectFit: 'cover' }}
                      />
                    )}
                  </td>
                  <td>{post.main_heading}</td>
                  <td>{new Date(post.createdAt).toLocaleString()}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(post._id)}
                      style={{width : "40%"}}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm ms-2"
                      style={{width : "40%"}}
                    >
                      <Link to={`/admin/posts/update/${post._id}`} style={{textDecoration:"none",color : "white"}}>Edit</Link>
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

export default SingleCategory;
