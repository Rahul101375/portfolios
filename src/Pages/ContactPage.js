import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../image/phone.jpg'
import email from '../image/email.png'
import location from '../image/map.jpg'
import Title from '../Components/Title'

function ContactPage(){
    return(
        <div>
            <div className="title">
                <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
        <div className="ContactPage">
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28631.30975263742!2d81.21504333500366!3d26.23199288921436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ba13f713d0d21%3A0xc47c52551ff22ae4!2sPNT%20Colony%2C%20Raebareli%2C%20Uttar%20Pradesh%20229001!5e0!3m2!1sen!2sin!4v1621696575632!5m2!1sen!2sin" 
            width="600" height="450" style={{border:'0'}} allowFullScreen="" frameBorder="0" aria-hidden="false" tabIndex="0">

            </iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={`+91 9772992410`} text2={`+91 7081656122`} title={'Phone'}/>
                <ContactItem icon={email} text1={`+91 9772992410`} text2={`+91 7081656122`} title={'Email'}/>
                <ContactItem icon={location} text1={`+91 9772992410`} text2={`+91 7081656122`} title={'Location'}/>
            </div>
        </div>
        </div>
    )
}

export default ContactPage;