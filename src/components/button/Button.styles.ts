import { createUseStyles } from 'react-jss';

interface ThemeInterface {
  spacing: {
    1: number;
    3: number;
    8: number;
    10: number;
  };
  palette: {
    primary: {
      500: string;
    };
    secondary: {
      500: string;
    };
    common: {
      black: string;
      white: string;
    };
  };
}

export const useStyles = createUseStyles((theme: ThemeInterface) => ({
  root: (props: any) => ({
    '& button': {
      background:
        props?.color === 'primary'
          ? theme.palette.primary[500]
          : props?.color === 'secondary'
          ? theme.palette.secondary[500]
          : 'transparent',
      padding:
        props?.size === 'small'
          ? `${theme.spacing[1]}px ${theme.spacing[3]}px`
          : `${theme.spacing[3]}px ${theme.spacing[8]}px`,
      borderRadius: 4,
      cursor: 'pointer',
      color: theme.palette.common.white,
      '&:hover': {
        filter: 'saturate(1.5)',
      },
    },
  }),
  logo: {
    marginRight: theme.spacing[10],
  },
  menu: {
    '& ul': {
      display: 'flex',
      '& li': {
        padding: 10,
        '& a': {
          color: '#fff',
        },
        '& a.active': {
          color: theme.palette.primary[500],
        },
      },
    },
  },
  user: {},
}));
