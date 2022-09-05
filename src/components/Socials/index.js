import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
// import ProfilePic from '../../assets/images/ProfilePicture.jpeg'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import {
    faLinkedin,
    faGithub,
    faYoutube,
    faTwitter,
    faTiktok,
    faInstagram,
    faPaypal,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Socials = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container socials-page">
        <div className="text-zone">
            {/* <img src={ProfilePic} alt="Logo" /> */}
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['M', 'y', ' ', 'S', 'o', 'c', 'i', 'a', 'l', 's']}
                    idx={15}
                    />
                </h1>
        </div>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/hectorpadilla6201/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#000000"
              className="anchor-icon fa-3x"
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
              color="#000000"
              className="anchor-icon fa-3x"
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
              color="#000000"
              className="anchor-icon fa-3x"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/HectorHoncho" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              color="#000000"
              className="anchor-icon fa-3x"
            />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@hectorhoncho?is_from_webapp=1&sender_device=pc" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faTiktok}
              color="#000000"
              className="anchor-icon fa-3x"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/hectorhoncho/" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              color="#000000"
              className="anchor-icon fa-3x"
            />
          </a>
        </li>
        <li>
          <a href="https://paypal.me/hpadilla6201?country.x=US&locale.x=en_US" rel="noreferrer" target="_blank">
            <FontAwesomeIcon
              icon={faPaypal}
              color="#000000"
              className="anchor-icon fa-3x"
            />
          </a>
        </li>
      </ul>
       
       
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Socials