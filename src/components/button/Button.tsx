import React from 'react';
import { useStyles } from './Button.styles';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  size?: 'small' | 'large';
};

const Button = ({
  children,
  color,
  onClick,
  disabled,
  size,
  ...props
}: ButtonProps) => {
  const classes = useStyles({ color, size });
  return (
    <div className={classes.root}>
      <button onClick={onClick} disabled={disabled} {...props}>
        {children}
      </button>
    </div>
  );
};

export default Button;
