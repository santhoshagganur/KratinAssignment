import {GiHeartPlus} from 'react-icons/gi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {IoLogoFacebook, IoLogoLinkedin} from 'react-icons/io'

import './index.css'

const Footer = () => (
  <div className="footer-section">
    <div className="footer-top-section">
      <GiHeartPlus className="health-care-icon" />
      <div>
        <h1 className="footer-app-name"> Swastha </h1>
        <p className="footer-app-description">
          Enabling innovation in healthcare
        </p>
        <p className="footer-about-company">
          Swastha is a healthcare-focused company enabling transformative
          changes with wide spectrum of solutions across care continuum for care
          consumer and care team.
        </p>
      </div>
    </div>
    <div>
      <h1 className="footer-app-connect"> Connect us on </h1>
      <div>
        <IoLogoFacebook className="connect-logo" />
        <AiFillTwitterCircle className="connect-logo" />
        <IoLogoLinkedin className="connect-logo" />
      </div>
    </div>
  </div>
)

export default Footer
