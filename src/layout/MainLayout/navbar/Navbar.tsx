import { useStyles } from './Navbar.styles';
import { NavLink } from 'react-router-dom';
import { useLogout } from 'hooks/useLogout';
import { useAuthMember } from '@tribeplatform/react-sdk/hooks';
import Logo from 'assets/images/logo.svg';
import Button from 'components/button/Button';

const Navbar = () => {
  const classes = useStyles();
  const logout = useLogout();
  const { data: user } = useAuthMember();

  console.log('user', user);

  return (
    <nav className={classes.root}>
      <div className={classes.flex}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={classes.menu}>
          <ul>
            <li>
              <NavLink to="/">Tribe</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.user}>
        {!user && (
          <div className={classes.menu}>
            <ul>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">
                  <Button color="primary" size="small">
                    Sign Up
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        {user && (
          <div className={classes.menu}>
            <ul>
              <li>Hello, {user.name}</li>
              <li
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
