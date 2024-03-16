import React, { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import 'aos/dist/aos.css';
import AOS from "aos"

const Terms = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
    <Header/>
      <div className="container font py-5" style={{ overflow: "hidden" }} data-aos="fade-up"
        data-aos-duration={1000}>
        <div className="row">
          <div className="text-center">
            <h2>Terms &amp; Conditions</h2>
            <div className="shape2" />
          </div>
        </div>
        <div className="row mt-4">
          <div>
            <h4>1. Introduction:</h4>
            <p style={{ listStyleType: "circle", marginLeft: 30 }}>
              - Begin with an introductory section explaining the purpose and scope of
              the terms and conditions.
            </p>
          </div>
          <div>
            <h4 className="mt-3">2. Acceptance of Terms:</h4>
            <p style={{ listStyleType: "circle", marginLeft: 30 }}>
              - Clearly state that by using your website or service, users agree to
              abide by the terms and conditions.
            </p>
          </div>
          <ul style={{ listStyleType: "none" }} className="mt-3">
            <li>
              <h4>3. User Responsibilities:</h4>
              <ul style={{ marginLeft: 30 }}>
                <li style={{ listStyleType: "none" }}>
                  - Outline the responsibilities of users, including:
                  <ul style={{ marginLeft: 60 }} className="mt-2">
                    <li style={{ listStyleType: "circle" }}>
                      Compliance with applicable laws.
                    </li>
                    <li style={{ listStyleType: "circle" }}>
                      Respectful and responsible use of the website.
                    </li>
                    <li style={{ listStyleType: "circle" }}>
                      Prohibited activities, such as spamming, hacking, or harassment.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h4 className="mt-3">4. User Rights and Responsibilities:</h4>
          <p style={{ listStyleType: "circle", textIndent: 30 }}>
            - Outline the rights and responsibilities of users, including prohibited
            actions.
          </p>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <h4>5. Content Guidelines:</h4>
              <ul style={{ marginLeft: 30 }}>
                <li style={{ listStyleType: "none" }}>
                  - Define rules for user-generated content, including:
                  <ul style={{ marginLeft: 60 }} className="mt-2">
                    <li style={{ listStyleType: "circle" }}>
                      Content submission guidelines.
                    </li>
                    <li style={{ listStyleType: "circle" }}>
                      Copyright and intellectual property rights.
                    </li>
                    <li style={{ listStyleType: "circle" }}>
                      Prohibitions on hate speech, discriminatory content, or illegal
                      material.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <h4 className="mt-3">6. Dispute Resolution:</h4>
            <p style={{ marginLeft: 30 }}>
              - Detail how disputes between users or between users and your blog
              website will be resolved. This may include arbitration or mediation.
            </p>
          </div>
          <div>
            <h4 className="mt-3">7. Changes to Terms:</h4>
            <p style={{ marginLeft: 30 }}>
              - State your right to update the terms and conditions and how you will
              notify users of changes.
            </p>
          </div>
          <div>
            <h4 className="mt-3">8. Contact Information:</h4>
            <p style={{ marginLeft: 30 }}>
              - Provide contact details for users to reach out for questions or
              concerns.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Terms