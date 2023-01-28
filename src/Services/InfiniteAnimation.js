import InfiniteStyle from '../Styles/AnimationStyle.css'
import React from 'react'

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['FORMS', 'BLOGS', 'FRIENDS', 'POSTS', 'BLOGGIOS', 'LIKES', 'FORMS', 'PORTFOLIO', 'PERCEPTIONS', 'BLOGGIOS', 'BLOGS', 'FOLLOWERS', 'POSTS', 'FRIENDS', 'BLOGGIOS', 'FORMS', 'BLOGS', 'FRIENDS', 'POSTS', 'BLOGGIOS', 'MEDIA', 'LIKES', 'FOLLOWERS', 'BLOGGIOS', ];
const DURATION = 15000;
const ROWS = 2;
const TAGS_PER_ROW = 10;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort( () => .5 - Math.random() );

const InfiniteLoopSlider = ({children, duration, reverse = false}) => {
  return (
    <div className='loop-slider' style={{
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
      }}>
      <div className='inner'>
        {children}
        {children}
      </div>
    </div>
  );
};

const Tag = ({ text }) => (
  <div className='tag'><span>#</span> {text}</div>
);

const InfiniteAnimation = () => (
  
    <div className='tag-list'>
      {[...new Array(ROWS)].map((_, i) => (
        <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
          {shuffle(TAGS).slice(0, TAGS_PER_ROW).map(tag => (
            <Tag text={tag} key={tag}/>
          ))}
        </InfiniteLoopSlider>
      ))}
      <div className='fade'/>
    </div>
  
);

export default InfiniteAnimation;
