import React from 'react'
import {Link} from 'react-router-dom'
import {FaInstagram} from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io5'
import {AiOutlineTwitter,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
 

function HomePage(){
    return(
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am  
                    <span>Rahul Gupta</span>
                </h1>

                <p className="h-sub-text">Describe Itself Here</p>

                <div className="icons">
                    <Link to="#" className="icon-holder">
                        <FaInstagram className="icon in"/>
                    </Link>

                    <Link to="#" className="icon-holder">
                        <IoLogoYoutube className="icon yt"/>
                    </Link>

                    <Link to="#" className="icon-holder">
                        <AiFillGithub className="icon gt"/>
                    </Link>

                    <Link to="#" className="icon-holder">
                        <AiOutlineTwitter className="icon tw"/>
                    </Link>

                    <Link to="#" className="icon-holder">
                        <AiFillLinkedin className="icon li"/>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage