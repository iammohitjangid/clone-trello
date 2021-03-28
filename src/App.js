import React,{useContext}from 'react';
import {StoreContext} from './utils/storeApi';
import {makeStyles} from '@material-ui/core/styles';
import Main from "./components/Main";
import Front from "./components/FrontPage/Front";
import {Switch,Route, Redirect} from 'react-router-dom';
import LogIn  from "./components/FrontPage/AuthPages/LogIn";
import SignUp from './components/FrontPage/AuthPages/SignUp';
const useStyle = makeStyles((theme)=>({
  root:{
  }
}))
export default function App() {
const {userToken} = useContext(StoreContext);
let render =(
  <Switch >
  <Route path="/signup" component={SignUp} />
  <Route path="/login" component={LogIn} />
  <Route path="/" component={Front}/>
  <Redirect to="/"></Redirect>
</Switch>
);
if(userToken!==null){
  render=(
    <Switch>
      <Route path="/dashboard" component={Main}/>
      <Redirect to="/dashboard"></Redirect>
    </Switch>
  );
}
  return (
    <div>
     {render}
    </div>
  
  )
}
