import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles((theme) => ({
  root: {
    '& ul': {
      display: 'flex',
      '& li': {
        padding: 10,
      },
    },
  },
}));
