import { makeStyles } from '@material-ui/core';
import theme from 'common/theme';

const useStyles = makeStyles({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: 300,
    width: '100%',
  },
});

export default useStyles;
