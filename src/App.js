import React from 'react';
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Nav/Navigation";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
  root:{
    background:"green"
  }
}))
export default function App() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Navigation />
      <Wrapper/>
    </div>
  )
}
