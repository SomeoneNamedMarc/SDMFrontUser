import React from 'react';
import Lottie from 'react-lottie';
import successfulAnimation from './AniList/Successful.json';
import '../styles/index.css';

const animationMapping = {
    Successful: successfulAnimation,
  };
  
  const Animations = ({ animationName }) => {
    console.log('Animation Prop:', animationName);
    const animationData = animationMapping[animationName];
  
    if (!animationData) return null;
    
    return (
        <div className='popup-animation'>
        <Lottie
            options={{
            loop: false,
            autoplay: true,
            animationData: animationData,
            rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
            }}
            height={125}
            width={125}
        />
        </div>
    );
  };

export default Animations;
