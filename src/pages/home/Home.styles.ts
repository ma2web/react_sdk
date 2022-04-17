import { createUseStyles } from 'react-jss';

interface ThemeInterface {
  palette: {
    common: {
      white: string;
    };
    gray: {
      100: string;
    };
  };
  spacing: {
    4: number;
    8: number;
    10: number;
  };
}

export const useStyles = createUseStyles((theme: ThemeInterface) => ({
  root: {
    height: 100 + 'vh',
    position: 'relative',
  },
  curved: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    overflow: 'hidden',
    '&:before': {
      content: '""',
      borderRadius: 100 + '%',
      position: 'absolute',
      backgroundColor: theme.palette.gray[100],
      right: -200,
      left: -200,
      bottom: -200,
      top: 0,
    },
  },
}));
