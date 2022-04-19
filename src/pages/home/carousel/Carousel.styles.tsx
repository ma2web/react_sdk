import { createUseStyles } from 'react-jss';

interface ThemeInterface {
  palette: {
    primary: {
      500: string;
    };
    common: {
      black: string;
      white: string;
    };
    gray: {
      100: string;
      200: string;
    };
  };
  spacing: {
    2: number;
    3: number;
    4: number;
    6: number;
    8: number;
    10: number;
  };
}

export const useStyles = createUseStyles((theme: ThemeInterface) => ({
  root: {
    minHeight: '70vh',
    overflow: 'hidden',
    position: 'relative',
  },
  cards: {
    width: 25 * 400 + 'px',
    display: 'flex',
    left: -(8 * 400) + 'px',
    position: 'relative',
  },
  card: {
    width: 500,
    border: '2px solid #1E1E4A',
    padding: theme.spacing[6],
    borderRadius: 16,
    background: '#0A0A33',
    margin: theme.spacing[3],
  },
  flexCenter: {
    display: 'flex',
    marginBottom: theme.spacing[4],
    alignItems: 'center',
  },
  logo: {
    minWidth: 64,
    height: 64,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing[4],
    borderRadius: 8,
    border: '1px solid #fff',
    color: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 30 + 'px',
    color: '#fff',
    maxWidth: 568,
    '& h3': {
      margin: 0,
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 1,
      '-webkit-box-orient': 'vertical',
    },
  },
  description: {
    color: '#8096BF',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  hope: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: theme.spacing[6],
    background: '#1E1E4A',
    width: '100%',
    textAlign: 'center',
    color: theme.palette.common.white,
    fontSize: 1.5 + 'rem',
  },
  '@media (max-width: 800px)': {},
}));
