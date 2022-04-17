import { ReactChild } from 'react';
import { useStyles } from './AuthLayout.styles';

interface AuxProps {
  children: ReactChild;
}

const AuthMainLayout = ({ children }: AuxProps) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default AuthMainLayout;
