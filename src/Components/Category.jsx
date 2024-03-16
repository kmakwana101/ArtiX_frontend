import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ReactHtmlParser from 'react-html-parser';
import Loader from './Loader';

const Category = () => {
    const [loading, setLoading] = useState(true);
    const [Cat_name, setCat_name] = useState('');
    const [PageNo, setPageNo] = useState(1);
    const [AllData, setAllData] = useState([]);
    const [AllPostLen, setAllPostLen] = useState(0)
    let location = useLocation();

    useEffect(() => {
        const postId = new URLSearchParams(location.search).get('id');
        const Category = new URLSearchParams(location.search).get('category');

        setCat_name(Category);

        let getdata = async () => {
            // console.log(PageNo + "888888888888888");
            try {
                let allpost = await axios.get(`https://odd-tan-bass-robe.cyclic.app/api/category?category=${Category}&id=${postId}&page=${PageNo}`);
                let nextposts = await axios.get(`https://odd-tan-bass-robe.cyclic.app/api/category?category=${Category}&id=${postId}&page=${PageNo + 1}`);
                setAllPostLen(nextposts.data.data.length)
                if (nextposts.data.data.lengh <= 0) {
                    setAllPostLen(false)
                }
                setAllData(allpost.data.data);
                setLoading(false)
            } catch (error) {
                console.log(error.message);
            }
        };
        getdata();
        if (Category !== Cat_name) {
            setPageNo(1);
        }
    }, [location.search, PageNo, Cat_name]);

    function call5() {
        document.body.scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        <>
            {!loading ? null : (<Loader />)}
            {!loading && <>
                <Header />
                <div className="container font">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center mt-5">{Cat_name}</h1>
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
                    </div>

                    {AllData && AllData.map((post) => (
                        <div className="row" key={post._id}>
                            <div className="col-lg-12 col-md-12 m-auto col-xl-8">
                                <div className="post1">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="img responsiveimg">
                                                <Link to={`/${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                                                    <img
                                                        className="img1"
                                                        src={`/image/${post.post_img1}`}
                                                        alt="Home"
                                                        style={{ height: '100%' }}
                                                    />
                                                </Link>
                                                <div className="hhgy d-lg-none">
                                                    <Link to={`/category?category=${post.cat_name}&id=${post.categori}`} onClick={call5}>
                                                        <button className="shape">{post.cat_name}</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <div className="context">
                                                <div className="hhgy1 d-none d-lg-block mt-4">
                                                    <Link to={`/category?category=${post.cat_name}&id=${post.categori}`} onClick={call5}>
                                                        <button className="shape">{post.cat_name}</button>
                                                    </Link>
                                                </div>
                                                <Link to={`/${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                                                    <h3>{post.main_heading}</h3>
                                                </Link>
                                                <Link to={`/${post && post.cat_name}?id=${post && post.categori}`} onClick={call5}>
                                                    {ReactHtmlParser(post.description_1.slice(0, 60))}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="container">
                    <div className="row">
                        <nav
                            aria-label="Page navigation example"
                            style={{ display: "flex", marginTop: 45, justifyContent: "center" }}
                        >
                            <ul
                                className="pagination"
                                style={{ display: "inline-flex", margin: "auto !important" }}
                            >
                                {PageNo >= 2 && (
                                    <>
                                        <li className="page-item" style={{ outline: "none" }}>
                                            <span
                                                className="page-link"
                                                style={{ color: "black" }}
                                                onClick={() => {
                                                    setPageNo(PageNo - 1);
                                                    call5();
                                                }}
                                            >
                                                Previous
                                            </span>
                                        </li>
                                        <li className="page-item" style={{ outline: "none" }}>
                                            <span
                                                className="page-link"
                                                style={{ color: "black" }}
                                                onClick={() => {
                                                    setPageNo(PageNo - 1);
                                                    call5();
                                                }}
                                            >
                                                {PageNo - 1}
                                            </span>
                                        </li>

                                    </>
                                )}

                                <li className="page-item" style={{ outline: "none" }}>
                                    <span
                                        className="page-link"
                                        style={{ color: "black" }}
                                    >
                                        {PageNo}
                                    </span>
                                </li>
                                {AllPostLen >= 1 && (
                                    <>
                                        <li className="page-item" style={{ outline: "none" }}>
                                            <span
                                                className="page-link"
                                                style={{ color: "black" }}
                                                onClick={() => {
                                                    setPageNo(PageNo + 1);
                                                    call5();
                                                }}
                                            >
                                                {PageNo + 1}
                                            </span>
                                        </li>
                                        <li
                                            className="page-item"
                                            style={{ outline: "none", boxShadow: "none !important" }}
                                            onClick={() => {
                                                setPageNo(PageNo + 1);
                                                call5();
                                            }}
                                        >
                                            <span
                                                className="page-link"
                                                style={{ color: "black" }}

                                            >
                                                Next
                                            </span>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="mb-5" />
                <Footer />
            </>
            }
        </>
    )
};

export default Category;
