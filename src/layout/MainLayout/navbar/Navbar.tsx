import { useStyles } from './Navbat.styles';
import { Link } from 'react-router-dom';
import { useLogout } from 'hooks/useLogout';
import { useAuthMember } from '@tribeplatform/react-sdk/hooks';

const Navbar = () => {
  const classes = useStyles();
  const logout = useLogout();
  const { data: user } = useAuthMember();

  console.log('user', user);

  return (
    <nav className={classes.root}>
      <ul>
        <li>
          <Link to="/">Tribe</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
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
    </nav>
  );
};

export default Navbar;
