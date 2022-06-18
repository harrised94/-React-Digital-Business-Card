import React from 'react'
import Linkedin from './images/linkedin.svg'
import Mail from './images/Mail.svg'

function Info() {
  return (
    <div className="info">
        <img src="https://picsum.photos/317" />
        <h1>Ed Harris</h1>
        <h4>Frontend Developer</h4>
        <a href="#">edharris.website</a>

        <div className="buttons">
            <a href="mailto:#">
                <img src={Mail} />
                <span>Email</span>
            </a>
            <a href="mailto:#">
            <img src={Linkedin} />
            <span>LinkedIn</span>
            </a>
        </div>
    </div>
  )
}

export default Info