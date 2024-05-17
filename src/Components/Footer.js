import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BACKEND_URL from './backend_url';

const Footer = () => {
  const [category, setcategory] = useState()
  const [Gmail, setGmail] = useState('')

  useEffect(() => {
    let getdata = async () => {
      try {
        let allcategory = await axios.get(`${BACKEND_URL}/api/allcategory`);
        setcategory(allcategory.data.data);
        // console.log(category);
      } catch (error) {
        console.log(error.message);
      }
    };
    getdata();
  }, []);
  function call5() {
    document.body.scrollIntoView({
      behavior: "smooth"
    });
  }
  let gmailvalue = async(e)=>{
    setGmail(e.target.value)
    // console.log(Gmail);
  }
  let gamailsend = async(e)=>{
    e.preventDefault()
    let data = {
      gmail : Gmail
    }
    setGmail('')
    await axios.post(`${BACKEND_URL}/api/gmail` ,data)
    console.log(Gmail + "Sent Email");
  }
  return (
    <>
    <footer className="py70 ert font">
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
        <div className="logo">
          <pre className="mainlogo">
            <i className="fa-brands fa-artstation" />
            <span style={{ marginLeft: 5 }}>ArtiX</span>
          </pre>
        </div>
        <p>
        Address :  Vishal Nagar Society
          <br />Hirabaugh,  Surat.
        </p>
        <p className="mt-8">Phone : +91 6355318232</p>
        <p className="mt-8">Gmail :  kmakwana1255@gmail.com</p>
        <div className="icon3 mt-24">
          <Link onClick={call5} to="https://twitter.com/">
            <i className="fa-brands fa-twitter" />
          </Link>
          <Link onClick={call5} to="https://www.facebook.com/">
            {" "}
            <i className="fa-brands fa-facebook" />
          </Link>
          <Link onClick={call5} to="https://www.instagram.com/">
            <i className="fa-brands fa-instagram" />
          </Link>
          <Link onClick={call5} to="https://www.linkedin.com/">
            <i className="fa-brands fa-linkedin-in" />
          </Link>
          <Link onClick={call5} to="https://youtube.com/">
            <i className="fa-brands fa-youtube" />
          </Link>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-2 mb-4">
        <ul className="foot">
          <li>
            <h6>CATEGORIES</h6>
          </li>
          {category && category.map((category) => (
              <li key={category._id}>
                <Link onClick={call5} to={`/category?category=${category.cat_name}&id=${category._id}`}>
                  {category.cat_name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-2 mb-4">
        <ul className="foot">
          <li>
            <h6>CUSTOMER SERVICE</h6>
          </li>
          <li>
            <Link onClick={call5} to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link onClick={call5} to="/terms">Term &amp; Conditions</Link>
          </li>
          <li>
            <Link onClick={call5} to="/faqs">FAQs</Link>
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
        <div>
          <h6>SIGN UP</h6>
        </div>
        <div className="mt-24">
          <form onSubmit={gamailsend}>
            <input
              type="email"
              name="email"
              className="inn me-2"
              placeholder="Enter Your Email"
              value={Gmail}
              onChange={gmailvalue}
            />
            <button className="btnn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer