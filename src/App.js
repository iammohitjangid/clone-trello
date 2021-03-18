import React,{useState}from 'react';
import Wrapper from "./components/Wrapper";
import Navigation from "./components/Nav/Navigation";
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
  root:{
  }
}))
export default function App() {
  const [backgroundImage,setBackgroundImage] = useState("green"); 
  const classes = useStyle();
  return (
    <div className={classes.root}
    style={{
      background:backgroundImage,
      backgroundImage:`url("${backgroundImage}")`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
       
   }}>
      <Navigation setBgImg ={setBackgroundImage} />
      <Wrapper/>
    </div>
  )
}
