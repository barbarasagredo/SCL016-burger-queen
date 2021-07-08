import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();
  const handle = () => {
    
  }

  return (
    <div className={classes.root}>
      <Button variant="contained" >Desayuno</Button>
      <Button variant="contained">Almuerzo</Button>
      <Button variant="contained">Bebestible</Button>
    </div>
  );
}