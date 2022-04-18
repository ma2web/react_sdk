import { createUseStyles } from 'react-jss';

interface ThemeInterface {
  spacing: {
    4: number;
    8: number;
    10: number;
  };
  palette: {
    common: {
      black: string;
      white: string;
    };
  };
}

export const useStyles = createUseStyles((theme: ThemeInterface) => ({
  root: {
    height: 100 + 'vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '50%',
  },
  text: {
    width: '50%',
    backgroundColor: theme.palette.common.black,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.common.white,
    position: 'relative',
    '& h1': {
      fontSize: 2 + 'rem',
      fontWeight: 'bold',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  },
}));
