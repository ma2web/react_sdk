import { ScrollTrigger, Tween } from 'react-gsap';
import { useStyles } from './Carousel.styles';

const Carousel = () => {
  const classes = useStyles();
  const card = (
    <div className={classes.card}>
      <div className={classes.flexCenter}>
        <div className={classes.logo}>logo</div>
        <div className={classes.name}>
          <h3>Title goes here. Title goes here.Title goes here.</h3>
        </div>
      </div>
      <div className={classes.description}>
        <p>
          Short description lorem ipsum Amet minim mollit non deserunt ullamco
          est sit aliqu dolor. Short description lorem ipsum Amet minim mollit
          non deserunt ullamco est sit aliqu dolor. Short description lorem
          ipsum Amet minim mollit non deserunt ullamco est sit aliqu dolor
        </p>
      </div>
    </div>
  );
  return (
    <div className={classes.root}>
      <ScrollTrigger start='-350px center' end='550px center' scrub={0.5}>
        <Tween from={{ x: 800 }} to={{ x: -800 }}>
          <div className={classes.cards}>
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <>{card}</>
              ))}
          </div>
        </Tween>
      </ScrollTrigger>
      <ScrollTrigger start='-350px center' end='550px center' scrub={0.5}>
        <Tween from={{ x: -800 }} to={{ x: 800 }}>
          <div className={classes.cards}>
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <>{card}</>
              ))}
          </div>
        </Tween>
      </ScrollTrigger>
      <div className={classes.hope}>I hope you like it!</div>
    </div>
  );
};

export default Carousel;
