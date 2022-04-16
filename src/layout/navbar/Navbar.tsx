import { Link } from 'react-router-dom';
import { useStyles } from './Navbat.styles';

const Navbar = () => {
  const classes = useStyles();

  return (
    <nav className={classes.root}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
