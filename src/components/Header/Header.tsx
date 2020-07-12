import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './useStyles';
import classNames from 'classnames';

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography
        variant="h1"
        className={classNames(classes.name, classes.firstName)}
      >
        J<span className={classes.accentLetter1}>O</span>SH
      </Typography>
      <Typography
        variant="h1"
        className={classNames(classes.name, classes.lastName)}
      >
        R<span className={classes.accentLetter2}>O</span>SENBERG
      </Typography>
    </div>
  );
};

export default Header;
