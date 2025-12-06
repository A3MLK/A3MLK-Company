import React from 'react'

const ContactCard = ({children,title,para}) => {
  return (
   <div className="col-lg-4 col-md-6">
    <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
        <div className="contact-icon">{children}</div>
        <h3 className="title">{title}</h3>
        <p className="para">{para}</p>
    </div>
   </div>
  )
}

export default ContactCard