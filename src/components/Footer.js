import React from "react"
import githublogo from '../images/github-logo.png'
import linkedinlogo from '../images/linkedin-logo.jpg'

function Footer() {
    return (
        <div className="footer-div">
            <a href="https://github.com/SaiAnilTekuri" target="_blank" rel="noreferrer"><img src={githublogo} alt="Github Logo" className="footer-github-logo"></img></a> 
            <a href="https://www.linkedin.com/in/anil-tekuri/" target="_blank" rel="noreferrer"><img src={linkedinlogo} alt="linkedin Logo" className="footer-linkedin-logo"></img></a>
        </div>

    )
}

export default Footer