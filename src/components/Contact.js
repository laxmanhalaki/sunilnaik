import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="contact" id="contact">

<h1 className="heading"> <span>contact</span> us </h1>

<div className="row">

    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15533.729066852437!2d77.54625773154834!3d13.26090575139451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1dfdd9e3d28a5%3A0x421de1d2167d4de1!2sBashettihalli%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1658382334072!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} /> 

    <form action="">
        <h3>get in touch</h3>
        <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name" />
        </div>
        <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" />
        </div>
        <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="number" />
        </div>
        <input type="submit" value="contact now" className="btn" />
    </form>

</div>

</section>
    </div>
  )
}

export default Contact