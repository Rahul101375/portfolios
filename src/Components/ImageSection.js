import React from 'react'
import about from '../image/Avatar.jpg'
 
function ImageSection(){
    return(
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>

            <div className="about-info">
                <h4>I am <span>Rahul Gupta</span></h4>

                <p className="about-text">
                    Descirbe Yourself
                </p>

                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>:Rahul Gupta</p>
                        <p>:22</p>
                        <p>:Indian</p>
                        <p>:Hindi,English,French(A1)</p>
                        <p>:Sadar Bazar Bhag-1</p>
                        <p>:India</p>
                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    );
}

export default ImageSection;