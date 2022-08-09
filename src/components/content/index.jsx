import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { dataSet } from './photographyContent.js';
import ProfileImage from '_public/images/mainImage.jpg';
import './style.scss';

class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="content-intro">
          <div className="col-sm-6 introContainer">
            <h6>
              Hi, This is me
            </h6>
            <h1>
              Mohammad Khalid
            </h1>
            <p>
              I’m engineer by profession who is well versed into many things. I am somewhat of an astronomy enthusiast, science explainer, hobby photographer, IT expert/ish, a cat dad, fitness lover, sporty, martial artist, video gamer, a great learner and few more (probably I will fill up these soon).
            </p>
          </div>
          <div className="col-sm-6 profileImageContainer">
            <img src={ProfileImage} className="profileImage" />
          </div>
        </div>
        <div className="content-intro direction-column" id="photographyhobby">
          <div className="margin-top-bottom">
            <h3>
              Photography
            </h3>
          </div>
          <div className="margin-top-bottom">
            <h6>
              I am a great hobby photographer. I love to shoot anything irrespective of the subject. However, capturing the <i><u>landscapes and detailed macro shot</u></i> is my most favorite photography genre.
            </h6>
          </div>
          <ImageList sx={{ width: 500, height: 'auto' }}>
            {dataSet.map((item, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  actionIcon={
                    <IconButton
                      sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                      aria-label={`info about ${item.title}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <div className="content-intro direction-column" id="martialArtsHobby">
          <div>
            <h3>
              Martial Arts
            </h3>
          </div>
          <div>
            I am a great fan of martial arts and I have practiced Wado-Kai Karate officially for around 1 year. But my scope for martial arts doesn’t end at karate only. I have practiced self-defense, Wushu, gymnastics, MMA and free running. There are some good memories that I had earlier.
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Content;


