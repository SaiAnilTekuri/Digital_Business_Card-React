import React from "react"
import profileimg from '../images/profile-img.jpg'


function Info() {
    return (
        <div className="info-div">
            <img src={profileimg} alt="Profile" className="info-profile-img"></img>
            <h2>Sai Anil Tekuri</h2>
            <h3>DevOps Engineer</h3>
            <a href="mailto: saianiltekuri98@gmail.com"><button name="email-button" className="info-email-btn"><i class="fa fa-envelope"></i> Email</button></a>
            <a href="https://www.linkedin.com/in/anil-tekuri/" target="_blank" rel="noreferrer"><button name="linkedin-button" className="info-linkedin-btn"><i class="fa fa-linkedin"></i> LinkedIn</button></a>

        </div>
    )
}

export default Info