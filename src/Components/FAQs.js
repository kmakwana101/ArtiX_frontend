import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQs = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Header />
      <div className="container mt-4 mb-5" data-aos="fade-up"
        data-aos-duration={1000}>
        <div className="row">
          <div className="text-center">
            <h2>FAQs</h2>
            <div className="shape2" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  1. Wha  t topics does your blog cover in the Home Furnishing category?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Our Home Furnishing category explores a wide range of topics, including interior design tips, furniture recommendations, home decor ideas, and advice on creating a comfortable and stylish living space.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  2. Can I find travel recommendations or guides on your blog?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Absolutely! Our Travel section offers travel guides, destination recommendations, packing tips, and travel stories to inspire and assist you in planning your next adventure.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  3. What kind of technology content can I expect on your blog?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  In our Technology category, we delve into the latest tech trends, gadget reviews, software recommendations, and provide insights on how technology impacts our daily lives.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  4. Do you have content related to architecture and home design?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Yes, we do! Our Architecture category covers architectural styles, home design principles, building tips, and architectural innovations to help you create your dream living space.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  5. How does your blog address topics related to lifestyle?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Our Lifestyle category explores a variety of lifestyle aspects, including wellness, personal development, fitness, fashion, and general life advice to help you live your best life.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  6. Do you provide product recommendations for home furnishing, technology, and lifestyle products?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Yes, we often share product recommendations and reviews in our respective categories. You'll find suggestions for top-quality home furnishing items, the latest gadgets, and lifestyle products to enhance your everyday living.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  7. How frequently is new content published in each category?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>
                    We strive to provide fresh content regularly. New articles are typically published in each category [mention your posting schedule, e.g., "once a week"] to keep you updated on the latest trends, tips, and advice in the respective fields. These FAQs provide a clear overview of what your blog covers in each category and offer information on how users can engage with your content or collaborate with your platform. Feel free to customize and expand upon these questions as needed to suit your blog's unique focus and audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
