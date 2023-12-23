// src/components/YourFormComponent.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './Adminheader';
import { Editor } from '@tinymce/tinymce-react';
const YourFormComponent = () => {

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
    category: '', // Added category to formData
  });

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

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesUrl = 'https://blog-web-backend-vzqz.onrender.com/api/categori/';
        const response = await axios.get(categoriesUrl);
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleFileChange = (e, imageField) => {
    const { files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [imageField]: files[0], // Assuming you want to handle only the first file. Adjust as needed.
    }));
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Now, you can log the updated state
    console.log("Updated FormData:", { ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    console.log('Form submitted');
    const apiUrl = `https://blog-web-backend-vzqz.onrender.com/api/posts/create?id=${formData.category}`;
    const formDataToSend = new FormData();
    console.log('FormData before append:', formDataToSend);

    // Append files with correct keys
    formDataToSend.append('post_img1', formData.post_img1);
    formDataToSend.append('post_img2', formData.post_img2);
    formDataToSend.append('post_img3', formData.post_img3);
    formDataToSend.append('post_img4', formData.post_img4);
    formDataToSend.append('post_img5', formData.post_img5);
    formDataToSend.append('post_img6', formData.post_img6);

    // Append other form fields
    Object.entries(formData).forEach(([key, value]) => {
      if (!(value instanceof File) && key !== 'category') {
        formDataToSend.append(key, value || '');
      }
    });

    console.log('FormData after append:', formDataToSend);

    const response = await axios.post(apiUrl, formDataToSend);
    console.log('Response data:', response.data);

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
      category: '', // Reset categori as well
    });

    console.log('Form reset successful');
  } catch (error) {
    console.error('Error creating post:', error);
  }
  };
  

  const handleEditorChange = (content, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: content,
    }));
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
                onChange={(e) => handleFileChange(e, "post_img1")}
                required
              />
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
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="category">
                Category
              </label>
              <select
  id="category"
  name="category"
  onChange={(e) => handleChange(e)}
  className="form-select"
  value={formData.category}
  required
>
  <option disabled value="">
    Select a category
  </option>
  {categories.map((category) => (
    <option key={category._id} value={category._id}>
      {category.cat_name}
    </option>
  ))}
</select>
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
                value={formData.description_1}
                onEditorChange={(content) => handleEditorChange(content, 'description_1')}
                required
                content={formData.description_1}
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
                onChange={(e) => handleFileChange(e, "post_img2")}
                required
              />
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
              value={formData.description_2}
              onEditorChange={(content) =>
                handleEditorChange(content, 'description_2')
              }
              required
              content={formData.description_2}
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
                onChange={(e) => handleFileChange(e, "post_img3")}
                required
              />
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
              value={formData.description_3}
              onEditorChange={(content) =>
                handleEditorChange(content, 'description_3')
              }
              required
              content={formData.description_3}
             
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
                onChange={(e) => handleFileChange(e, "post_img4")}
                required
              />
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
                onChange={(e) => handleFileChange(e, "post_img5")}
                required
              />
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
              value={formData.description_4}
              onEditorChange={(content) =>
                handleEditorChange(content, 'description_4')
              }
              required
              content={formData.description_4}
              
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
                onChange={(e) => handleFileChange(e, "post_img6")}
                required
              />
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

export default YourFormComponent;
