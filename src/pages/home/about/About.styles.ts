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
    padding: `${theme.spacing[4]}px ${theme.spacing[10]}px`,
    display: 'flex',
    overflow: 'hidden',
    '& > div': {
      flex: 1,
      padding: `${theme.spacing[10]}px ${theme.spacing[8]}px`,
      '& h1': {
        fontSize: 3 + 'rem',
        marginBottom: theme.spacing[4] + 'px',
      },
      '& p': {
        marginBottom: theme.spacing[4] + 'px',
      },
    },
  },
}));
