import Button from 'components/button/Button';
import { createBrowserHistory } from 'history';
import { SplitChars, Tween } from 'react-gsap';
import { useNavigate } from 'react-router-dom';
import Earth from './Earth';
import { useStyles } from './Header.styles';

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <div className={classes.titleContainer}>
        <Tween
          from={{ x: 200, opacity: 0 }}
          to={{ x: 0, opacity: 1, ease: 'power2.out', delay: 1 }}
          stagger={0.1}
        >
          <SplitChars wrapper={<div className={classes.title} />}>
            Tribe News Center
          </SplitChars>
        </Tween>
        <Tween
          from={{ y: 100, opacity: 0 }}
          to={{ y: 0, opacity: 1, ease: 'power2.out', delay: 2 }}
          stagger={0.1}
        >
          <div className={classes.greenText}>
            <p className={classes.description}>
              You can play with the sphere by mouse draging
              <br /> on the earth or stars
            </p>
            <Button color="primary" onClick={(e) => navigate('news')}>
              GO TO NEWS
            </Button>
          </div>
        </Tween>
      </div>
      <Earth />
    </div>
  );
};

export default Header;
