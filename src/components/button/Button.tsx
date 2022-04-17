import React from 'react';
import { useStyles } from './Button.styles';

export type ButtonProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
};

const Button = ({
  children,
  color,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  const classes = useStyles({ color });
  return (
    <button
      className={classes.root}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
