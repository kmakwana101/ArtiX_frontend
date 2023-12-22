import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from './Header';
import Footer from './Footer';

const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  const removetext= ()=>{
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("textarea").value=""
    document.getElementById("subject").value=""
  }

  return (
    <>

    <Header faq="FAQs" terms="Term & Conditions" privacy="Privacy & Policy"/>
          <main id="contact">
    <section
      className="ndk py60 font"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2>Contact US</h2>
            <div className="shape2" />
          </div>
        </div>
        <div className="row mmt-5">
          <div
            className="col-12 col-md-7"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            <div className="row bbnn">
              <div className="col-12 col-md-6 mt-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-12 col-md-6 mt-4">
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-12 mt-4">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-12 mt-4">
                <textarea
                  name="aasdf"
                  id="textarea"
                  cols={30}
                  rows={6}
                  placeholder="Your Message"
                  style={{ width: "100%" }}
                  defaultValue={""}
                />
              </div>
              <div className="col-12 mt-4">
                <button className="btnn" onClick={removetext}>
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-md-5 mt-4"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d119003.1250405812!2d72.86335200000002!3d21.23788879999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692708155006!5m2!1sen!2sin"
            style={{ border: 0, width: "100%", height: 300 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer/>
    </>
  )
}

export default Contact