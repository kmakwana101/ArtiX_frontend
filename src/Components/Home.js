import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const Home = () => {
  function call5() {
    document.body.scrollIntoView({
      behavior: "smooth"
    });
  }
  const [PostFourOne, setPostFourOne] = useState([])
  const [Postthree, setPostthree] = useState([])
  const [PostFourTwo, setPostFourTwo] = useState([])
  const [PopulerPost, setPopulerPost] = useState([])
  useEffect(() => {
    let getdata = async () => {
      try {
        let allpost = await axios.get("https://blog-web-backend-vzqz.onrender.com/api/posts")
        let data = allpost.data.data
        // console.log(data + "--------------");
        let postfourone = [], postthree = [], postfourtwo = [], populerpost = []
        for (let i = 1; i <= 4; i++) {
          postfourone.push(data[i])
        }
        for (let i = 5; i <= 7; i++) {
          postthree.push(data[i])
        }
        for (let i = 8; i <= 11; i++) {
          postfourtwo.push(data[i])
        }
        for (let i = 12; i <= 15; i++) {
          populerpost.push(data[i])
        }
        setPostFourOne(postfourone)
        setPostthree(postthree)
        setPostFourTwo(postfourtwo)
        setPopulerPost(populerpost)
        // console.log(posts);
      } catch (error) {
        console.log(error.message);
      }
    }
    getdata()
  }, [])


  return (
    <>
      <Header />
      <section className="font">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center mt-5">Latest Blogs</h1>
              <div className="decorative-line">
                <div className="decorative-line-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16.395"
                    height="20.284"
                    viewBox="0 0 16.395 20.284"
                  >
                    <g data-name="Group 197" transform="translate(-689.803 -586.663)">
                      <rect
                        data-name="Rectangle 362"
                        width={7}
                        height={13}
                        transform="translate(692.403 591.991) rotate(-21)"
                        fill="#fff"
                      />
                      <rect
                        data-name="Rectangle 198"
                        width="0.999"
                        height="19.965"
                        transform="translate(690.449 587.668) rotate(-21.05)"
                        stroke="#000"
                        strokeWidth={1}
                      />
                      <rect
                        data-name="Rectangle 199"
                        width="0.999"
                        height="19.965"
                        transform="translate(697.448 587.668) rotate(-21.05)"
                        stroke="#000"
                        strokeWidth={1}
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 order-lg-1 order-md-2 order-2">

              {PostFourOne && PostFourOne.map((post) => {
                return <div className="post1">
                  <Link to={`${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                    <img className="img1 vnvv" src={`./image/${post.post_img1}`} alt={post.post_img1}/>
                  </Link>
                  <div className="hhgy">
                  <Link to={`/category?category=${post.cat_name}&id=${post.categori}`} onClick={call5}>
                      <button className="shape">
                        {post.cat_name}
                      </button>
                    </Link>
                  </div>
                  <Link to={`${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                    <h4>
                      {post.main_heading.slice(0, 70)}...
                    </h4>
                  </Link>
                </div>
              })}

            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 order-lg-2 order-md-1 order-1">

              {Postthree && Postthree.map((post) => {
                return <div className="post1">
                  <Link to={`${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                    <img className="img1" src={`./image/${post.post_img1}`} alt={post.post_img1} />
                  </Link>
                  <div className="hhgy">
                  <Link to={`/category?category=${post.cat_name}&id=${post.categori}`} onClick={call5}>
                      <button className="shape">
                        {post.cat_name}
                      </button>
                    </Link>
                  </div>
                  <Link to={`${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                    <h2>
                      {post.main_heading}
                    </h2>
                  </Link>
                </div>
              })}
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 order-lg-3 order-md-3 order-3">
              {PostFourTwo && PostFourTwo.map((post) => {
                return <div className="post1">
                  <Link to={`${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                    <img className="img1 vnvv" src={`./image/${post.post_img1}`} alt={post.post_img1}/>
                  </Link>
                  <div className="hhgy">
                  <Link to={`/category?category=${post.cat_name}&id=${post.categori}`} onClick={call5}>
                      <button className="shape">
                        {post.cat_name}
                      </button>
                    </Link>
                  </div>
                  <Link to={`${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                    <h4>
                    {post.main_heading.slice(0, 70)}...
                    </h4>
                  </Link>
                </div>
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 p-sm-5 mt-5" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="container">
          <div className="row">
            <div className="text-center">
              <i className="fa-regular fa-clone" style={{ fontSize: 40 }} />
            </div>
            <h2 className="text-center mt-2">Populer Posts</h2>
          </div>
          <div className="row">
            {PopulerPost && PopulerPost.map((post) => {
              return <div className="col-12 col-sm-12 col-md-6 col-lg-3 order-lg-3 order-md-3 order-3">
                <div className="post1 ">
                  <Link to={`${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                    <img className="img1 vnvv" src={`./image/${post.post_img1}`} alt={post.post_img1}/>
                  </Link>
                  <div className="hhgy">
                  <Link to={`/category?category=${post.cat_name}&id=${post.categori}`} onClick={call5}>
                      <button className="shape">
                        {post.cat_name}
                      </button>
                    </Link>
                  </div>
                  <Link to={`${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                    <h4>  
                      {post.main_heading.slice(0, 50)}...
                    </h4>
                  </Link>
                </div>
              </div>
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row p-4">
            <div className="col-12 col-md-8">
              <h2>Get 30 Days Free trial</h2>
              <p>
                Praesent imperdiet, tellus et euismod euismod, risus lorem euismod
                erat, at finibus neque odio quis metus. Donec vulputate arcu quam.
              </p>
            </div>
            <div className="center col-12 col-md-4">
              <Link to={`/Contact`} onClick={call5}>
                <button className="btnn mt-2">CONCTACT - US</button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Home;
