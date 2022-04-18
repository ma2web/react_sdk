import { createUseStyles } from 'react-jss';

interface ThemeInterface {
  palette: {
    primary: {
      500: string;
      400: string;
    };
    common: {
      black: string;
      white: string;
    };
  };
  spacing: {
    8: number;
    10: number;
  };
}

const unselectable = {
  '-webkit-user-select': 'none' /* Safari */,
  '-moz-user-select': 'none' /* Firefox */,
  '-ms-user-select': 'none' /* IE10+/Edge */,
  'user-select': 'none' /* Standard */,
};

export const useStyles = createUseStyles((theme: ThemeInterface) => ({
  root: {
    minHeight: 100 + 'vh',
  },
  earth: {
    width: '100%',
    height: '100vh',
    background: theme.palette.common.black,
  },
  titleContainer: {
    color: theme.palette.common.white,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 5 + 'rem',
    display: 'inline-block',
    fontWeight: 'bold',
    textAlign: 'center',
    ...unselectable,
  },
  greenText: {
    color: theme.palette.primary[400],
  },
  button: {
    backgroundColor: theme.palette.primary[500],
  },
  description: {
    textAlign: 'center',
    fontSize: 1 + 'rem',
    textShadow: '0 5px 5px rgba(0,0,0,1)',
    color: theme.palette.common.white,
    ...unselectable,
    marginBottom: theme.spacing[8],
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: 3 + 'rem',
    },
  },
}));
