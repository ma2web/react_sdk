import { useStyles } from './Navbar.styles';
import { NavLink } from 'react-router-dom';
import { useLogout } from 'hooks/useLogout';
import { useAuthMember } from '@tribeplatform/react-sdk/hooks';
import Logo from 'assets/images/logo.svg';

const Navbar = () => {
  const classes = useStyles();
  const logout = useLogout();
  const { data: user } = useAuthMember();

  console.log('user', user);

  return (
    <nav className={classes.root}>
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
          {!user && (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className={classes.user}>
        {user && (
          <>
            <span>Hello, {user.name}</span>
            <div
              onClick={() => {
                logout();
              }}
            >
              Logout
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
