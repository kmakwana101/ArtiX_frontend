import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState([])
  const [searchkey, setsearchkey] = useState('')
  function call5() {
    document.body.scrollIntoView({
      behavior: "smooth"
    });
  }
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  useEffect(() => {
    let getdata = async () => {
      try {
        let allcategory = await axios.get("https://beautiful-zipper-bee.cyclic.app/api/allcategory");
        setcategory(allcategory.data.data);
        // console.log(category);
      } catch (error) {
        console.log(error.message);
      }
    };
    getdata();
  }, []);
  let search1 = async (e) => {
    setsearchkey(e.target.value)

  }
  let searchsubmit = async (e) => {
   if(searchkey.length > 0){
    navigate(`/search/search?search=${searchkey}`);
   }
  }
  return (
    <>
      <header className="flex a-c position-sticky top-0 font">
        <div className="logo a-c me--auto center">
          <pre className="mainlogo">
            <i className="fa-brands fa-artstation" />
            <span style={{ marginLeft: 5 }}>ArtiX</span>
          </pre>
        </div>
        <nav className="a-c">
          <ul className="menubar">
            <li>
              <Link onClick={call5} to="/">Home</Link>
            </li>
            {category.map((category) => (
              <li key={category._id}>
                <Link onClick={call5} to={`/category?category=${category.cat_name}&id=${category._id}`}>
                  {category.cat_name}
                </Link>
              </li>
            ))}
            <li>
              <Link onClick={call5} to="/contact ">Contact_us</Link>
            </li>
          </ul>
        </nav>
        <div className="icon a-c ms--auto center">
          <form onSubmit={searchsubmit}>
            <div className="searchmain">
              <input
                type="text"
                className="search"
                name="search"
                placeholder="Search..."
                onChange={search1}

              />
              <button className="search-btn" type="submit">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </form>
        </div>
        <div className="bar a-c">
          <span
            style={{ fontSize: 30, cursor: "pointer" }}
            className="center"
            onClick={openNav}
          >
            <i className="fa-solid fa-bars" style={{ fontSize: 25 }} />
          </span>
        </div>

        <div id="myNav" className="overlay " style={{ zIndex: 999 }}>
          <div
            className="d-flex flex s-b p-10"
            style={{ backgroundColor: "black", fontSize: 12 }}
          >
            {" "}
            <Link
              to="/"
              className="d-flex align-items-center"
              style={{ color: "white" }}
            >
              <span>Menu</span>
            </Link>{" "}
            <span className="closebtn" onClick={closeNav}>
              <i
                className="fa-solid fa-arrow-left"
                style={{ fontSize: 20, color: "white" }}
              />
            </span>
          </div>
          <div className="contain mt-3 ms-auto">
            <div className="row">
              <div className="icon a-c ms--auto center d-block">
                <form className='searchform1' onSubmit={searchsubmit}>
                  <div className="searchmain vcv">
                    <input
                      type="text"
                      className="search cccs"
                      name="search"
                      placeholder="Search..."
                      onChange={search1}

                    />
                    <button className="search-btn btbtk" type="submit">
                      <i className="fa-solid fa-magnifying-glass" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="overlay-content">
            <div className="container" style={{ margin: "auto" }}>
              <ul className='mmdd'>
                <Link to="/" onClick={call5}>
                  <li className="accordion11 gg">Home</li>
                </Link>
                {category.map((category) => (
                  <Link key={category._id} onClick={() => {
                    closeNav();
                    call5();
                  }} to={`/category?category=${category.cat_name}&id=${category._id}`}>
                    <li key={category._id} className="accordion11 gg"> {category.cat_name}</li>
                  </Link>
                ))}

                <Link to="/contact" onClick={() => {
                  closeNav();
                  call5();
                }}>
                  <li className="accordion11 gg">Contact_Us</li>
                </Link>
                <Link to="/privacy" onClick={() => {
                  closeNav();
                  call5();
                }}>
                  <li className="accordion11 gg">Privacy Policy</li>
                </Link>
                <Link to="/terms" onClick={() => {
                  closeNav();
                  call5();
                }}>
                  <li className="accordion11 gg">Term &amp; Conditions</li>
                </Link>
                <Link to="/faqs" onClick={() => {
                  closeNav();
                  call5();
                }}>
                  <li className="accordion11 gg">FAQs</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header