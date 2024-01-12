import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import 'aos/dist/aos.css';
import AOS from "aos"

const Privacy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header faq="FAQs" terms="Term & Conditions" privacy="Privacy & Policy" />
      <section data-aos="fade-up"
        data-aos-duration={1000}>
        <div className="container py-5" style={{ overflow: "hidden" }}>
          <div className="row">
            <div className="text-center">
              <h2>Privacy Policy </h2>
              <div className="shape2" />
            </div>
          </div>
          <div className="row mt-4">
            <div>
              <h4>1. Information We Collect:</h4>
              <p style={{ listStyleType: "circle", marginLeft: 30 }}>
                - We may collect your name, email address, and other optional
                information you provide when you subscribe to our newsletter or leave
                comments on our posts.
              </p>
            </div>
            <div>
              <h4 className="mt-3">2. How We Use Your Information:</h4>
              <p style={{ listStyleType: "circle", marginLeft: 30 }}>
                - We use your data to send you blog updates, respond to comments, and
                improve our content.
              </p>
            </div>
            <h4 className="mt-3">3. Cookies and Analytics:</h4>
            <p style={{ listStyleType: "circle", textIndent: 30 }}>
              - We use cookies to enhance your experience on our site. We also use
              Google Analytics to track anonymous usage data.
            </p>
            <div>
              <h4 className="mt-3">4. Third-Party Links:</h4>
              <p style={{ marginLeft: 30 }}>
                - Our blog may contain links to other websites. We are not responsible
                for their privacy practices.
              </p>
            </div>
            <div>
              <h4 className="mt-3">5. Data Security:</h4>
              <p style={{ marginLeft: 30 }}>
                - We implement security measures to protect your information but
                cannot guarantee its absolute security.
              </p>
            </div>
            <div>
              <h4 className="mt-3">6. Updates to This Policy:</h4>
              <p style={{ marginLeft: 30 }}>
                - We may update this Privacy Policy. Please review it periodically.
              </p>
            </div>
            <div>
              <h4 className="mt-3">7. Your Choices:</h4>
              <p style={{ marginLeft: 30 }}>
                - You can opt-out of our newsletter at any time and manage cookie
                preferences in your browser.
              </p>
            </div>
            <div>
              <h4 className="mt-3">8. Contact Us:</h4>
              <p style={{ marginLeft: 30 }}>
                - If you have any questions or concerns, you can contact us at +1 123
                123 123.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Privacy