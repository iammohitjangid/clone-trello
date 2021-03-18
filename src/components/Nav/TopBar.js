import { AppBar, Button, Toolbar } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import React from 'react'

const useStyle = makeStyles((theme) => ({
    AppBar: {
      background:"green"
    },
    title:{
        flexGrow:1
    },
    btn:{
        color:"#fff",
        background:"#000"
    }
  }));

export default function TopBar({setSideMenue}) {
    const classes = useStyle();
    return (
        <div>
            <AppBar position="static" className={classes.AppBar} elevation={0} > 
            <Toolbar>
             <h1 className={classes.title}>Todo</h1>
             <Button className={classes.btn} onClick={()=>{setSideMenue(true)}}>
                 CHANGE BACKGROUND
             </Button>
             </Toolbar>
            </AppBar>
        </div>
    )
}
