import React from 'react'

function ContactItem({icon,text1,text2,title}){
    return(
        <div className="ContactItem">
            <div className="contact">
                <img src={icon} alt="" style={{width:"70px",height:"70px"}}/>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    )
}
export default ContactItem