import './index.scss'
import SpidermanLogo from '../../assets/images/spiderman.png'
import LogoSubtitle from '../../assets/images/hector_logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter,
  faTiktok,
  faInstagram,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
        <img src={SpidermanLogo} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink 
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <a
            className="linkedin-link"
            href="https://www.linkedin.com/in/hectorpadilla6201/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon 1x"
              onClick={() => setShowNav(false)}
            />
          </a>
          <a
            className="github-link"
            href="https://github.com/hpadilla6201"
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon 1x"
              onClick={() => setShowNav(false)}
            />
          </a>
          <a
            className="youtube-link"
            href="https://www.youtube.com/channel/UCAGdHybeowF4EXjrdk5AhTg"
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon 1x"
              onClick={() => setShowNav(false)}
            />
          </a>
          <a
            className="twitter-link"
            href="https://twitter.com/HectorHoncho"
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon 1x"
              onClick={() => setShowNav(false)}
            />
          </a>
          <a
            className="tiktok-link"
            href="https://www.tiktok.com/@hectorhoncho?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon
              icon={faTiktok}
              color="#4d4d4e"
              className="anchor-icon 1x"
              onClick={() => setShowNav(false)}
            />
          </a>
          <a
            className="instagram-link"
            href="https://www.instagram.com/hectorhoncho/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon 1x"
              onClick={() => setShowNav(false)}
            />
          </a>
          <a
            className="paypal-link"
            href="https://paypal.me/hpadilla6201?country.x=US&locale.x=en_US"
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon
              icon={faPaypal}
              color="#4d4d4e"
              className="anchor-icon 1x"
              onClick={() => setShowNav(false)}
            />
          </a>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffff"
          size="3x"
          className='close-icon' />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/hectorpadilla6201/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hpadilla6201"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCAGdHybeowF4EXjrdk5AhTg"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/HectorHoncho" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@hectorhoncho?is_from_webapp=1&sender_device=pc" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTiktok}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hectorhoncho/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a href="https://paypal.me/hpadilla6201?country.x=US&locale.x=en_US" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faPaypal}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#00000"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar