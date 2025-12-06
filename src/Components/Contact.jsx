import React from 'react';
import ContactCard from './ContactCard';
import { FaArrowRight, FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import '../styles/Contact.css';
const Contact = () => {
const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value;
  const phone = form.phone.value;
  const email = form.email.value;
  const subject = form.subject.value;
  const message = form.message.value;

  const telegramMessage = `
New Contact Form Submission:
Name: ${name}
Phone: ${phone}
Email: ${email}
Subject: ${subject}
Message: ${message}
  `;

  const token = "8383506609:AAFk6tHBuJ8Ya7VaMtS4Q6B-yFPtPi4QPNE";
  const chatId = "1261656777"; // هنا حطي Chat ID بتاعك

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(telegramMessage)}`;

  try {
    await fetch(url);
    alert("تم إرسال رسالتك! 📩"); // رسالة نجاح
    form.reset();
  } catch (error) {
    alert("حدث خطأ، حاول مرة أخرى!");
    console.error(error);
  }
};


  const Cards = [
    { id: 1, title: 'Address', para: 'Egypt', children: <FaLocationDot /> },
    { id: 2, title: 'E-mail', para: 'amlk10375@gmail.com', children: <MdEmail /> },
    { id: 3, title: 'Call Me', para: '+20 (01105474782)', children: <FaPhone /> },
  ];

  return (
    <div className="container contact-section">

      {/* Section Header */}
      <div className="section-head mb--50">
        <div className="section-sub-title center-title">
          <span className="subtitle">Contact Us</span>
        </div>
      </div>

      {/* 3 Cards */}
      <div className="container pr" style={{ marginTop: '3rem' }}>
        <div className="row">
          {Cards.map((c) => (
            <ContactCard key={c.id} title={c.title} para={c.para} children={c.children} />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container pr" style={{ marginTop: '5rem' }}>
        <div className="contact-get-in-touch-wrap">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-center al">

              {/* Left side text */}
              <div className="col-lg-5">
                <div className="section-head text-align-left sticky">
                  <div className="section-sub-title">
                    <span className="subtitle">GET IN TOUCH</span>
                  </div>
                  <h2 className="title">Elevate your brand with Me</h2>
                  <p className="description">
                    ished fact that a reader will be distrol acted bioiiy desig ished fact that a reader will acted ished fact that a reader will be distrol acted
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="contact-form">
                    <form 
                      className="tmp-dynamic-form"
                      onSubmit={handleSubmit}
                    >
                      <div className="contact-form-wrapper row al">

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="name" placeholder="Your Name" type="text" required />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="phone" placeholder="Phone Number" type="text" required />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="email" placeholder="Your Email" type="email" required />
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="form-group">
                            <input className="input-field" name="subject" placeholder="Subject" type="text" required />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea className="input-field" name="message" placeholder="Your Message" required></textarea>
                          </div>
                        </div>

                        <div className="col-lg-12" style={{ marginTop: '3rem' }}>
                          <div className="tmp-button-here">
                            <button className="tmp-btn hover-icon-reverse radius-round w-100" type="submit">
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Send Now</span>
                                <span className="btn-icon"><FaArrowRight className='icon'/></span>
                                <span className="btn-icon"><FaArrowRight className='icon'/></span>
                              </span>
                            </button>
                          </div>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact;
