import React from 'react';
import { ScrollTrigger, Tween } from 'react-gsap';
import Cards from './Cards';
import { useStyles } from './Solutions.styles';

const Solutions = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        {/* TODO: ScrollTrigger should be a animate layout and move to layout folder */}
        <ScrollTrigger start="-500px center" end="-350px center" scrub={1}>
          <Tween from={{ y: 200, opacity: 0 }} to={{ y: 0, opacity: 1 }}>
            <h1 className={classes.heading}>
              Solutions for <br />
              thriving brand communities
            </h1>
          </Tween>
        </ScrollTrigger>
      </div>
      <Cards />
    </div>
  );
};

export default Solutions;
