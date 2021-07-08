import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { Grid } from '@material-ui/core';
import '../components/lateralBar.css'


const useStyles = makeStyles({
    root: {
      width: 500,

    },
  });

const LateralBar = () => {
    const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      <Grid className='lateral'>
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction className="bottonNavigation"  label="kitchen" value="kitchen" icon={<AccessTimeIcon />} />
        <BottomNavigationAction className="bottonNavigation" label="orders" value="orders" icon={<FastfoodIcon />} />
      </BottomNavigation>
      </Grid>
        
    );
  }


export default LateralBar
