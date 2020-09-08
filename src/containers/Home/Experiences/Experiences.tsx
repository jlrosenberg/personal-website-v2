import React from 'react';
import useStyles from './useStyles';
import { Typography } from '@material-ui/core';

const Experiences: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5">A Little About Me</Typography>
    </div>
  );
};

export default Experiences;
