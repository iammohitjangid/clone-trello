import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid/Grid";
import Typography from '@material-ui/core/Typography';
import SignUp from "../FrontPage/AuthPages/SignUp";
import LogIn from "../FrontPage/AuthPages/LogIn";

const IMG_PATH2="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png";

const useStyle = makeStyles((theme)=>({
    container:{
        height:"100vh",
        background: "linear-gradient(0deg, #fff, #eae6ff 100%)"
    },
    grid:{
        display:"flex",
    },
    contentImg:{
        display:"flex",
        justifyContent:"flex-end",
        alignContent:"flex-end"
    },
    img2:{

        width:"60%",
    },
    heroh1:{
        color:"#091E41",
        fontFamily:"Charlie Display",
        fontSize:"2.75rem"
    },
    herop:{
     fontFamily: "Charlie Text',sans-serif",
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#091e42",
    }
    
  
})) 

export default function Hero() {
    const classes = useStyle(); 
    return (
        <Container maxWidth="xl" className={classes.container}>
             <Grid container spacing={0}  
             direction="row"
             justify="center"
             alignItems="center" >  
                <Grid item xs={6} className={classes.grid} > 
                <Box my={10} className={classes.content}  >
                     <Typography variant="h1" className={classes.heroh1}>
                     Trello helps teams move work forward.
                     </Typography>
                     <Typography variant="p" className={classes.herop}>
                     Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique—accomplish it all with Trello.                     </Typography>
                </Box>
                </Grid>
                <Grid item xs={6}> 
                <Box my={10} className={classes.contentImg} >
                    <img src={IMG_PATH2} className={classes.img2}/>
                </Box>
                </Grid>
            </Grid>
          
        
        </Container>
        
    )
}
