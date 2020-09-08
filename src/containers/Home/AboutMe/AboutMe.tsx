import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './useStyles';

const AboutMe: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h6" className={classes.header}>
        A LITTLE <span className={classes.headerAccent}>ABOUT</span> ME
      </Typography>
    </div>
  );
};

export default AboutMe;
