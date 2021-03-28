import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const IMG_PATH="https://brandeps.com/logo-download/T/Trello-logo-vector-01.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  AppBar:{
      backgroundColor:"#F8F9F9",
      padding:theme.spacing(1)
  },
  
  Btn: {
    paddingRight:theme.spacing(2.5),
    paddingLeft:theme.spacing(2.5),
    color:"black",
    marginRight:theme.spacing(2),
    fontSize:theme.spacing(1.5),
  
},
  title: {
    flexGrow: 1,
    color :"black",
 
  },
  logo:{
    maxWidth: 70,
    marginRight: '10px'  }

}));
export default function Front() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <AppBar className={classes.AppBar} position="fixed" 
        title = {<img src={IMG_PATH} alt="Logo" />}
        elevation={0}
        >
          <Toolbar>
            
          <Toolbar className={classes.title}>
                 <img src={IMG_PATH} alt="logo" className={classes.logo} />
            </Toolbar>
            
            <Button  variant="contained" color="inherit" className={classes.Btn}>Log in</Button>
            <Button variant="contained"  style={{backgroundColor:"#57A641"}}  className={classes.Btn}><b style={{color:"white"}}>Sign Up</b></Button>
          </Toolbar>
        </AppBar>
      </div>
        
    );
}