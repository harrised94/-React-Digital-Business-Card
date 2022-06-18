import React from 'react'
import Facebook from './images/Facebook.svg'
import Github from './images/GitHub.svg'
import Instagram from './images/Instagram.svg'
import Twitter from './images/Twitter.svg'

function Footer() {
  return (
    <div className="footer">
        <img src={Twitter} />
        <img src={Facebook} />
        <img src={Instagram} />
        <img src={Github} />
    </div>
  )
}

export default Footer