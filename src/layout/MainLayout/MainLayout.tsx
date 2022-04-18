import { ReactChild } from 'react';
import Navbar from './navbar/Navbar';
import { useStyles } from './MainLayout.styles';

interface AuxProps {
  children: ReactChild;
}

const MainLayout = ({ children }: AuxProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
