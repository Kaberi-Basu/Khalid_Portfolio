import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './style.scss';
import { fbIcon, instaIcon } from './svgFiles';
class Footer extends React.Component {
  render() {
    return (
      <div className='row footerContent' id="footer">
        <div className='col-sm-6 contact'>
          <div className='contactDetails'>
            <span>
              <CallIcon />
            </span>
            <span>
              <u>8077978030</u>
            </span>
          </div>
          <div className='contactDetails'>
            <span>
              <ContactMailOutlinedIcon />
            </span>
            <span>
              <a href='mailto:kmohammad918@gmail.com' target='_blank'><u>kmohammad918@gmail.com</u></a>
            </span>
          </div>
        </div>
        <div className='col-sm-6 contact'>
          <div className='socialHandle'>
            <span>
              <a href="https://www.facebook.com/orionency" target="_blank"> {fbIcon} </a>
            </span>
            <span>
              <a href="https://www.instagram.com/mr.khalid.0/" target="_blank"> {instaIcon} </a>
            </span>
            <span>
              <a href="https://www.instagram.com/emkay_optiks/" target="_blank"> {instaIcon} </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;