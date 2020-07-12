import { makeStyles } from '@material-ui/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  container: {
    padding: theme.spacing(4),
    paddingTop: theme.spacing(8),
  },

  name: {
    fontWeight: 500,
    [theme.breakpoints.down(`xs`)]: {
      fontSize: `3rem`,
      fontWeight: 700,
      letterSpacing: `1`,
      textAlign: `center`,
    },
  },

  firstName: {
    color: theme.palette.text.primary,
  },

  lastName: {
    color: theme.palette.text.secondary,
  },

  accentLetter1: {
    color: theme.palette.primary.main,
  },

  accentLetter2: {
    color: theme.palette.secondary.main,
  },
});

export default useStyles;
