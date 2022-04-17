import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useStyles } from './Header.styles';

const EarthComponent = React.lazy(() => import('./EarthComponent'));

const Earth = () => {
  const classes = useStyles();
  return (
    <div className={classes.earth}>
      <Canvas>
        <Stars
          radius={300}
          depth={80}
          count={1300}
          factor={15}
          saturation={2}
          fade={true}
        />
        <EarthComponent />
      </Canvas>
    </div>
  );
};

export default Earth;
