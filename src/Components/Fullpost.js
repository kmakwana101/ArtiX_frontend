import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Header from './Header';
import Footer from './Footer';

const Fullpost = () => {
    const location = useLocation();
    const postId = new URLSearchParams(location.search).get('id');
    const [post, setpost] = useState()
    const [PopulerPost, setPopulerPost] = useState([])
    const [RecentPost, setRecentPost] = useState([])

    useEffect(() => {
        console.log('Post ID:', postId);
        const fetchData = async () => {
            try {
                const response = await axios.post(`/api/fullpost?id=${postId}`);
                setpost(response.data.data)
                console.log(post + "--------------");
                console.log('Post Data:', response.data.data);

                // poler posts
                let allpost = await axios.get("/api/posts")
                let data = allpost.data.data
                const one = Math.floor(Math.random() * data.length);
                const two = Math.floor(Math.random() * data.length);
                const three = Math.floor(Math.random() * data.length);
                const four = Math.floor(Math.random() * data.length);
                // console.log(data[one]);
                let posts = []
                posts.push(data[one])
                posts.push(data[two])
                posts.push(data[three])
                posts.push(data[four])
                setPopulerPost(posts)
                // populer post end

                // recent posts
                let recentpost = []
                for (let i = data.length - 1; i >= data.length - 4; i--) {
                    recentpost.push(data[i])
                }
                setRecentPost(recentpost)
            } catch (error) {
                console.error('Error fetching post data:', error);
            }
        };

        fetchData();

    }, [postId]);

    function call5() {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    }
    return (
        <>
            <Header />
            <section className="font">
                <div className="container">
                    <div className="row">
                        <div className="hhgy">
                            <Link to={`/category?category=${post && post.cat_name}&id=${post && post.categori}`} onClick={call5}>
                                <button className="shape" style={{ marginTop: 90 }}>
                                    {post && post.cat_name}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "-30px" }}>
                        <h1 className="text-center">
                            {post && post.main_heading}
                        </h1>
                    </div>
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
                                    ></rect>
                                    <rect
                                        data-name="Rectangle 199"
                                        width="0.999"
                                        height="19.965"
                                        transform="translate(697.448 587.668) rotate(-21.05)"
                                        stroke="#000"
                                        strokeWidth={1}
                                    ></rect>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="row mt-4">
                        {post && (
                            <div className="col-12 ">
                                {/* Use post.post_img1 directly in the src attribute */}
                                <img
                                    className="mt-4 img1"
                                    src={`/image/${post.post_img1}`}
                                    alt=""
                                />
                                {post.description_1 && (
                                    <p className='mt-4'>
                                        {/* Use ReactHtmlParser to render HTML content safely */}
                                        <b>{ReactHtmlParser(post.description_1)}</b>
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-12 col-lg-8">
                            {post && (
                                <img className="mt-4 img1" src={`/image/${post.post_img2}`} alt="" />
                            )}
                            {post && (
                                <p className='mt-4'>
                                    {/* Use ReactHtmlParser to render HTML content safely */}
                                    {ReactHtmlParser(post.description_2)}
                                </p>
                            )}
                            {post && (
                                <img className="mt-4 img1" src={`/image/${post.post_img3}`} alt="" />
                            )}
                            {post && (
                                <p className='mt-4'>
                                    {/* Use ReactHtmlParser to render HTML content safely */}
                                    {ReactHtmlParser(post.description_3)}
                                </p>
                            )}
                            {post && <img
                                className="mt-4 img1"
                                src={`/image/${post.post_img4}`}
                                alt=""
                            />}
                            {post && <img
                                className="mt-4 img1"
                                src={`/image/${post.post_img5}`}
                                alt=""
                            />}

                            {post && (
                                <p className='mt-4'>
                                    {/* Use ReactHtmlParser to render HTML content safely */}
                                    {ReactHtmlParser(post.description_4)}
                                </p>
                            )}

                            {post && <img
                                className="mt-4 img1"
                                src={`/image/${post.post_img6}`}
                                alt=""
                            />}
                        </div>

                        <div className="col-12 col-sm-8 col-md-8 mt-4 mt-lg-0 col-lg-4">
                            <div style={{ position: "sticky", top: 80 }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="try1">
                                                <ins>
                                                    <h3 className="mt-4 mt-md-1" style={{ fontSize: 30 }}>
                                                        Recent Posts
                                                    </h3>
                                                </ins>

                                                {RecentPost.map((post) => {
                                                    return (<div className="row mt-4">
                                                        <div className="col-5">
                                                            <Link to={`/${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                                                                <img
                                                                    style={{ width: "100%" }}
                                                                    src={`/image/${post.post_img1}`}
                                                                    alt=""
                                                                />
                                                            </Link>
                                                        </div>
                                                        <div className="col-7">
                                                            <Link to={`/${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                                                                <h4>
                                                                    {post.main_heading.slice(0, 30)}...
                                                                </h4>
                                                            </Link>
                                                        </div>
                                                    </div>)
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                        <h2 className="text-center mt-2">Now Trending</h2>
                    </div>
                    <div className="row">
                        {PopulerPost && PopulerPost.map((post) => {
                            return <div className="col-12 col-sm-12 col-md-6 col-lg-3 order-lg-3 order-md-3 order-3">
                                <div className="post1 ">
                                    <Link to={`/${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                                        <img className="img1 vnvv" src={`/image/${post.post_img1}`} alt={post.post_img1} />
                                    </Link>
                                    <div className="hhgy">
                                    <Link to={`/category?category=${ post && post.cat_name}&id=${post && post.categori}`} onClick={call5}>
                                            <button className="shape">
                                                {post.cat_name}
                                            </button>
                                        </Link>
                                    </div>
                                    <Link to={`/${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                                        <h4>
                                            {post.main_heading.slice(0, 45)}...
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
                    <div className="row p-5 ">
                        <div className="col-12 col-md-8">
                            <h2>Get 30 Days Free trial</h2>
                            <p>
                                Praesent imperdiet, tellus et euismod euismod, risus lorem euismod
                                erat, at finibus neque odio quis metus. Donec vulputate arcu quam.
                            </p>
                        </div>
                        <div className="center col-12 col-md-4">
                            <Link to={`/contact`} onClick={call5}>
                                <button className="btnn mt-2">CONCTACT - US</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Fullpost