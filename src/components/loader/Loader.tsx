import Spinner from 'assets/ui/spinner.svg';
import { useStyles } from './Loader.styles';

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img src={Spinner} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;
