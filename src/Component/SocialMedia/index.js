import React from 'react';
import './style.css';

const SocialMedia =()=>{
    return(
        <div className="footer">
        <div className="footer-container" >
        <div className="left-col" >
        <h2  className="logo" >Smart Development</h2>
        <div className="social-media"  >
        <a href="https://www.facebook.com/oussama.errahem" target="_blanked" > <i className="fab fa-facebook-f" ></i> </a>
        <a href=""> <i className="fab fa-twitter" ></i> </a>
        <a href="https://www.instagram.com/oussamaerrahem/" target="_blanked" > <i className="fab fa-instagram" ></i> </a>
        <a href="https://www.youtube.com/channel/UChx6m9zuL903teGk2QY2Jvg?view_as=subscriber" target="_blanked" > <i className="fab fa-youtube" ></i> </a>
        <a href="https://www.linkedin.com/in/errahem-oussama-37b46911a/" target="_blanked" > <i className="fab fa-linkedin" ></i> </a>
        </div>
        <p className="rights-text" >© 2020 Created By Smart Development All Right Reserved. </p>


        </div> 
        <div className="right-col" >
            <h1>Our Newsletter</h1>
            <div className="border" ></div>
            <p>Enter your Email to get our news and updates.</p>
            <form action="" className="newsletter-form" >
            <input type="text" className="txtb" placeholder="Enter Your Email" />
            <input type="submit" className="bnt" value="submit"/>

            </form>
        </div>
        </div>
        </div>
       


    )
}
export default SocialMedia;