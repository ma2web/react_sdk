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
    4: number;
    8: number;
    10: number;
  };
}

export const useStyles = createUseStyles((theme: ThemeInterface) => ({
  root: {
    height: 100 + 'vh',
    padding: `${theme.spacing[4]}px ${theme.spacing[8]}px`,
    backgroundColor: theme.palette.gray[100],
    overflow: 'hidden',
  },
  heading: {
    textAlign: 'center',
    fontSize: 2 + 'rem',
    fontWeight: 700,
    lineHeight: 1.1,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: theme.spacing[10] + 'px',
  },
  card: {
    width: 33.33 + '%',
    padding: theme.spacing[4] + 'px',
  },
  cardItem: {
    padding: theme.spacing[4] + 'px',
    borderRadius: 8,
    backgroundColor: theme.palette.gray[200],
  },
  title: {
    fontSize: 1.5 + 'rem',
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: theme.spacing[4] + 'px',
    maxWidth: 40 + '%',
  },
  description: {},
  '@media (max-width: 768px)': {
    card: {
      width: 100 + '%',
    },
  },
}));
