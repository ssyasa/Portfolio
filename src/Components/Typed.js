import React from 'react';
import Typewriter from 'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            'Innovative Software Developer',
            'Professional Data Analyst',
            'Creative Web Developer',
            'AI & Machine Learning Enthusiast',
            'Full-Stack Development Expert',
          ],
          autoStart: true,
          loop: true,
          delay: 60, // Speed up the typing slightly for better engagement
          deleteSpeed: 30, // Makes the deletion smoother
          pauseFor: 2000, // Adds a pause after each string for better impact
        }}
      />
    </div>
  );
}

export default Typed;
