import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './style.scss';
// import IconInsta from '_public/images/icon-insta.svg'
// import IconFb from '_public/images/icon-fb.svg'

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
              <u>kmohammad918@gmail.com</u>
            </span>
          </div>
        </div>
        <div className='col-sm-6 contact'>
          <div className='socialHandle'>
            <span>
              {/* <IconFb /> */}
            </span>
          </div>
          <div className='socialHandle'>
            <span>
              {/* <IconInsta /> */}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;