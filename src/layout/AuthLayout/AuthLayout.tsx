import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Navbar from 'layout/MainLayout/navbar/Navbar';
import { ReactChild } from 'react';
import { useStyles } from './AuthLayout.styles';

interface AuxProps {
  children: ReactChild;
  page?: string;
}

const AuthMainLayout = ({ children, page }: AuxProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.text}>
        <Canvas>
          <Stars
            radius={300}
            depth={80}
            count={1300}
            factor={15}
            saturation={2}
            fade={true}
          />
        </Canvas>
        {page === 'signup' ? (
          <h1>Join to our community</h1>
        ) : (
          <h1>Login to the system</h1>
        )}
      </div>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default AuthMainLayout;
