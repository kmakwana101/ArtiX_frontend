import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Adminheader';
import { Editor } from '@tinymce/tinymce-react';

const Update = () => {
  const { id } = useParams();
  (function () {
    if (typeof EventTarget !== 'undefined') {
      let supportsPassive = false;
      try {
        // Test via a getter in the options object to see if the passive property is accessed
        const opts = Object.defineProperty({}, 'passive', {
          get: () => {
            supportsPassive = true;
            return true
          },
        });
        window.addEventListener('testPassive', null, opts);
        window.removeEventListener('testPassive', null, opts);
      } catch (e) {}
      const func = EventTarget.prototype.addEventListener;
      EventTarget.prototype.addEventListener = function (type, fn) {
        this.func = func;
        this.func(type, fn, supportsPassive ? { passive: false } : false);
      };
    }
  })();

  const [formData, setFormData] = useState({
    main_heading: '',
    description_1: '',
    description_2: '',
    description_3: '',
    description_4: '',
    post_img1: null,
    post_img2: null,
    post_img3: null,
    post_img4: null,
    post_img5: null,
    post_img6: null,
  });

useEffect(() => {
  const fetchPostData = async () => {
    try {
      const response = await axios.get(`/admin/posts/update/${id}`, formData);
      const postData = response.data.data;

      // Update the state with the fetched post data
      console.log(postData.description_1)

      setFormData({
        main_heading: postData.main_heading || '',
        description_1: postData.description_1 || '',
        description_2: postData.description_2 || '',
        description_3: postData.description_3 || '',
        description_4: postData.description_4 || '',
        post_img1: postData.post_img1 || '',
        post_img2: postData.post_img2 || '',
        post_img3: postData.post_img3 || '',
        post_img4: postData.post_img4 || '',
        post_img5: postData.post_img5 || '',
        post_img6: postData.post_img6 || '',
      });

      // Log the post image URLs or paths

      console.log('Post data fetched successfully:', postData);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };

  fetchPostData();
}, [id]); // Include formData in the dependency array if it's being used inside the effect





  const handleFileChange = (e, fieldName) => {
    const { files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: files[0], // Assuming you want to handle only the first file. Adjust as needed.
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   console.log("dddddddddddddddddddddddd");
  //   e.preventDefault();

  //   try {
  //     // const apiUrl = '/api/posts/update';
  //     const formDataToSend = new FormData();
  //     Object.entries(formData).forEach(([key, value]) => {
  //       if (value instanceof File) {
  //         formDataToSend.append(key, value);
  //       } else {
  //         formDataToSend.append(key, value || ''); // Handle other form fields
  //       }
  //     });
  //     console.log(formDataToSend + "++++++++++++++++++++++");
  //     // const response = await axios.post(apiUrl, formDataToSend);
  //     // console.log(response.data);
  //   } catch (error) {
  //     console.error('Error creating post:', error);
  //   }

 
  //     categori: '', // Reset categori as well
  //   });
  // };

  const handleEditorChange = (content, name) => {
    setFormData((prevData) => {
      const newData = { ...prevData };
      newData[name] = content;
      return newData;
    });
  };
   const handleSubmit = async (e) => {
    console.log('Form submitted');

    e.preventDefault();

    try {
      const apiUrl = `/admin/posts/update/${id}`;
      console.log('API URL:', apiUrl);

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else {
          formDataToSend.append(key, value || '');
        }
      });

      const response = await axios.post(apiUrl, formDataToSend);
      console.log('Response data:', response.data);

      // Optionally, provide user feedback (e.g., success message or redirect)
      // Example: alert('Post updated successfully');
      // Example: history.push(`/posts/${id}`);
    } catch (error) {
      console.error('Error updating post:', error);
      // Optionally, provide user feedback (e.g., error message)
      // Example: alert('Error updating post');
    }

    // Reset form data
    setFormData({
      main_heading: '',
      description_1: '',
      description_2: '',
      description_3: '',
      description_4: '',
      post_img1: null,
      post_img2: null,
      post_img3: null,
      post_img4: null,
      post_img5: null,
      post_img6: null,
    });
  };
  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="row shadow p-5">
          <h3 className="text-center mb-4">Add New Post</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="post_img1">
                Main img
              </label>
              <input
                type="file"
                id="post_img1"
                className="form-control"
                name="post_img1"
                onChange={(e) => handleFileChange(e, 'post_img1')}
                 
              />
              {formData.post_img1 && typeof formData.post_img1 === 'string' && (
                <div>
                  <p>Current Image:</p>
                  <img
                    src={`../../../image/${formData.post_img1}`}
                    alt="Current Image1"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="main_heading">
                    Main_Heading
                  </label>
                  <input
                    type="text"
                    id="main_heading"
                    className="form-control"
                    name="main_heading"
                    value={formData.main_heading}
                    onChange={(e) => handleChange(e)}
                     
                  />
                  
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="description_1">
                description_1
              </label>
              <Editor
                apiKey="rrynzhgf5jzorkx6fha3nu3f08gez7odctz6xmcmc1bjnde5"
                id="description_1"
                className="form-control"
                name="description_1"
                value={formData.description_1}  // Use 'value' instead of 'initialValue'
                onEditorChange={(content) =>
                  handleEditorChange(content, 'description_1')
                }
                skin="oxygen"
                inlinecompose={true}
                autoFocus={false}
                menubar={true}
                showMenubar={true}
                statusbar={true}
                themes={['default', 'bridge']}
                baseuri={'https://example.com'}
              />
            </div>

            <div className="form-outline mb-4 ">
              <label className="form-label" htmlFor="post_img2">
                Post Image 2
              </label>
              <input
                type="file"
                id="post_img2"
                className="form-control"
                name="post_img2"
                onChange={(e) => handleFileChange(e, 'post_img2')}
                 
              />
              {formData.post_img2 && typeof formData.post_img2 === 'string' && (
                <div>
                  <p>Current Image:</p>
                  <img
                    src={`../../../image/${formData.post_img2}`}
                    alt="Current Image2"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="description_2">
                description_2
              </label>
              <Editor
                 apiKey="rrynzhgf5jzorkx6fha3nu3f08gez7odctz6xmcmc1bjnde5"
                 id="description_2"
                 className="form-control"
                 name="description_2"
                 value={formData.description_2}  // Use 'value' instead of 'initialValue'
                 onEditorChange={(content) =>
                   handleEditorChange(content, 'description_2')
                 }
                 skin="oxygen"
                 inlinecompose={true}
                 autoFocus={false}
                 menubar={true}
                 showMenubar={true}
                 statusbar={true}
                 themes={['default', 'bridge']}
                 baseuri={'https://example.com'}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="post_img3">
                Post Image 3
              </label>
              <input
                type="file"
                id="post_img3"
                className="form-control"
                name="post_img3"
                onChange={(e) => handleFileChange(e, 'post_img3')}
                 
              />
              {formData.post_img3 && typeof formData.post_img3 === 'string' && (
                <div>
                  <p>Current Image:</p>
                  <img
                    src={`../../../image/${formData.post_img3}`}
                    alt="Current Image3"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label" htmlFor="description_3">
                description_3
              </label>
              <Editor
                 apiKey="rrynzhgf5jzorkx6fha3nu3f08gez7odctz6xmcmc1bjnde5"
                 id="description_3"
                 className="form-control"
                 name="description_3"
                 value={formData.description_3}  // Use 'value' instead of 'initialValue'
                 onEditorChange={(content) =>
                   handleEditorChange(content, 'description_3')
                 }
                 skin="oxygen"
                 inlinecompose={true}
                 autoFocus={false}
                 menubar={true}
                 showMenubar={true}
                 statusbar={true}
                 themes={['default', 'bridge']}
                 baseuri={'https://example.com'}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="post_img4">
                Post Image 4
              </label>
              <input
                type="file"
                id="post_img4"
                className="form-control"
                name="post_img4"
                onChange={(e) => handleFileChange(e, 'post_img4')}
                 
              />
              {formData.post_img4 && typeof formData.post_img4 === 'string' && (
                <div>
                  <p>Current Image:</p>
                  <img
                    src={`../../../image/${formData.post_img4}`}
                    alt="Current Image4"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="post_img5">
                Post Image 5
              </label>
              <input
                type="file"
                id="post_img5"
                className="form-control"
                name="post_img5"
                onChange={(e) => handleFileChange(e, 'post_img5')}
                 
              />
              {formData.post_img5 && typeof formData.post_img5 === 'string' && (
                <div>
                  <p>Current Image:</p>
                  <img
                    src={`../../../image/${formData.post_img5}`}
                    alt="Current Image5"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="form-label" htmlFor="description_4">
                description_4
              </label>
              <Editor
                 apiKey="rrynzhgf5jzorkx6fha3nu3f08gez7odctz6xmcmc1bjnde5"
                 id="description_4"
                 className="form-control"
                 name="description_4"
                 value={formData.description_4}  // Use 'value' instead of 'initialValue'
                 onEditorChange={(content) =>
                   handleEditorChange(content, 'description_4')
                 }
                 skin="oxygen"
                 inlinecompose={true}
                 autoFocus={false}
                 menubar={true}
                 showMenubar={true}
                 statusbar={true}
                 themes={['default', 'bridge']}
                 baseuri={'https://example.com'}
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="post_img6">
                Post Image 6
              </label>
              <input
                type="file"
                id="post_img6"
                className="form-control"
                name="post_img6"
                onChange={(e) => handleFileChange(e, 'post_img6')}
                 
              />
              {formData.post_img6 && typeof formData.post_img6 === 'string' && (
                <div>
                  <p>Current Image:</p>
                  <img
                    src={`../../../image/${formData.post_img6}`}
                    alt="Current Image6"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}
            </div>

            {/* ... (other form fields) ... */}
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              style={{ width: '100%' }}
            >
              Add Post
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
