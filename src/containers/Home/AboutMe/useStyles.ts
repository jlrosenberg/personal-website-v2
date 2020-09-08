import { makeStyles } from '@material-ui/core/styles';
import theme from 'common/theme';
import { white } from 'common/colors';
import { H1_BACKGROUND_URL } from 'common/static';

const useStyles = makeStyles({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: 300,
    width: '100%',
  },
  header: {
    textAlign: `center`,
    color: white,
    paddingTop: theme.spacing(3),
    height: theme.spacing(6),
    background: `url(${H1_BACKGROUND_URL}) no-repeat center bottom`,
  },
  headerAccent: {
    color: theme.palette.secondary.main,
  },
});

export default useStyles;
