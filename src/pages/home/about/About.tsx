import { useStyles } from './About.styles';
import Mobiles from 'assets/ui/mobiles.png';
import { ScrollTrigger, Tween } from 'react-gsap';
import Button from 'components/button/Button';

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ScrollTrigger start="-400px center" end="-50px center" scrub={1}>
        <Tween from={{ x: -200, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
          <div>
            <img src={Mobiles} alt="mobiles" />
          </div>
        </Tween>
      </ScrollTrigger>
      <div>
        <ScrollTrigger start="-400px center" end="-50px center" scrub={1}>
          <Tween from={{ x: 100, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
            <h1>Who we are?</h1>
          </Tween>
        </ScrollTrigger>
        <ScrollTrigger start="-400px center" end="-50px center" scrub={1}>
          <Tween from={{ x: 100, opacity: 0 }} to={{ x: 0, opacity: 1 }}>
            <div>
              <p>
                We are a team of passionate developers, designers, and
                strategists who are passionate about building great products.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                eius labore architecto quaerat nisi aut debitis suscipit odio
                omnis ratione delectus, deserunt iusto assumenda inventore
                tenetur aperiam voluptas molestiae. Consequuntur!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                eius labore architecto quaerat nisi aut debitis suscipit odio
                omnis ratione delectus, deserunt iusto assumenda inventore
                tenetur aperiam voluptas molestiae. Consequuntur!
              </p>
              <Button color="primary">READ MORE</Button>
            </div>
          </Tween>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default About;
