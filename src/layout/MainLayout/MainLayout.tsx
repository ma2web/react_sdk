import { ReactChild } from 'react';
import Navbar from './navbar/Navbar';
import { useStyles } from './MainLayout.styles';

interface AuxProps {
  children: ReactChild;
  footer?: boolean;
}

const MainLayout = ({ footer, children }: AuxProps) => {
  const classes = useStyles();
  console.log(footer);

  return (
    <div className={classes.root}>
      <Navbar />
      <div>{children}</div>
      {footer && (
        <footer className={classes.footer}>
          <div className={classes.footerContent}>
            <div className={classes.footerText}>
              made with{' '}
              <span role="img" aria-label="heart">
                ❤️
              </span>{' '}
              by
              <a href="https://www.tribeplatform.io"> Tribe</a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default MainLayout;
