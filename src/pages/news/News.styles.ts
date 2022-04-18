import { createUseStyles } from 'react-jss';

interface ThemeInterface {
  palette: {
    common: {
      white: string;
    };
    gray: {
      100: string;
      600: string;
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
    padding: `${theme.spacing[10] * 2.5}px ${theme.spacing[8]}px`,
    display: 'flex',
    alignItems: 'center',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  cardContainer: {
    padding: theme.spacing[4] + 'px',
    width: 33.33 + '%',
  },
  card: {
    padding: theme.spacing[4] + 'px',
    borderRadius: 8,
    backgroundColor: theme.palette.gray[100],
    marginBottom: theme.spacing[4] + 'px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
    },
  },
  title: {
    fontSize: 1.4 + 'rem',
    fontWeight: 700,
    lineHeight: 1.2,
    marginBottom: theme.spacing[4] + 'px',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },
  meta: {
    display: 'flex',
    alignItems: 'center',
    '& > div': {
      marginRight: theme.spacing[4] + 'px',
      color: theme.palette.gray[600],
    },
  },
  loading: {
    marginTop: theme.spacing[10] + 'px',
  },
  '@media (max-width: 996px)': {
    cardContainer: {
      width: '100%',
    },
  },
}));
