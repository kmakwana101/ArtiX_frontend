import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const Search = () => {
    const [query, setquery] = useState('')
    function call5() {
        document.body.scrollIntoView({
          behavior: "smooth"
        });
      }
    const [searchResults, setSearchResults] = useState([]);
  
    useEffect(() => {
      // Extract the search query from the URL
      const params = new URLSearchParams(window.location.search);
      const searchQuery = params.get('search');
        setquery(searchQuery)
      // Fetch search results based on the query
      const fetchData = async () => {
        try {
          const response = await axios.get(`/api/search?search=${searchQuery}`);
          console.log(response.data.data);
          setSearchResults(response.data.data);
          
        } catch (error) {
          console.error('Error fetching search results:', error.message);
        }
      };
      // Call the fetchData function
      fetchData();
    }, []);
    useEffect(() => {
     console.log(searchResults);
    }, [])
    
    return (
        <>

        <Header/>
        <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center mt-5">
                                Searching For "{query}"
                            </h1>
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
                    {/* {"{"}% for x in finaldata %{"}"} */}
                    {searchResults && searchResults.map((post) => {
                        return (
                            <div className="container">
                                <div className="row">
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
                                                                style={{ height: "100%" }}
                                                            />
                                                        </Link>
                                                        <div className="hhgy d-lg-none">
                                                        <Link to={`/${post && post.cat_name}?id=${post && post.categori}`} onClick={call5}>
                                                                <button className="shape">
                                                                    {post.cat_name}
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-12">
                                                    <div className="context">
                                                        <div className="hhgy1 d-none d-lg-block mt-4">
                                                        <Link to={`/${post && post.cat_name}?id=${post && post.categori}`} onClick={call5}>
                                                                <button className="shape">
                                                                    {post.cat_name}
                                                                </button>
                                                            </Link>
                                                        </div>
                                                        <Link to={`/${post.cat_name}/${post.slug}?id=${post._id}`} onClick={call5}>
                                                            <h3>
                                                               {post.main_heading}
                                                            </h3>
                                                        </Link>
                                                        <Link to={`/${post && post.cat_name}?id=${post && post.categori}`} onClick={call5}>
                                                            <p className='d-flex'>
                                                            {ReactHtmlParser(post.description_1.slice(0, 60))}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='mt-5'></div>
        <Footer />
        </>
    )
}

export default Search