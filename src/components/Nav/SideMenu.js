import { Grow, Divider, Drawer } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import React,{useState,useEffect} from 'react';
import color from '../../utils/color';
import {getImages as getImage} from '../../utils/ImageApi';

const useStyle = makeStyles((theme)=>({
    drawer:{
        width:"400px"
    },
    menu:{
        display:"flex",
        justifyContent:"space-around",
        marginTop:theme.spacing(2),

    },optionContainer:{
        display:"flex",
        flexWrap:'wrap',
        justifyContent:"space-around",
        marginTop:theme.spacing(2),


    },
    box:{
        width:"45%",
        height:"90px",
        background:"red",
        borderRadius:"9px"
    }
}))
export default function SideMenu({openSideMenue,setSideMenue,setBgImg}) {
    const[openOptionColor,setOpenOptionColor]= useState(false);
    const[openOptionImage,setOpenOptionImage]= useState(false);
    const [imageList,setImageList]= useState([]);

    const getListOfImages=async()=>{
        const list= await getImage()
        setImageList(list);
        console.log(list)
    }

    useEffect(() => {
        getListOfImages();
    }, [])
    const classes = useStyle();
    const images=(
        <Grow in={openOptionImage}>
        <div className={classes.optionContainer}>
        {console.log(imageList)}
         {imageList.map((image,index)=>(
             <div className={classes.box}
               style={{
                backgroundImage:`url("${image.thumb}")`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                 backgroundColor:color,
                 marginTop:"5px"
             }}
             onClick={()=>setBgImg(image.url)}
               key={index}
             >
               <Divider/>

             </div>
             
         ))}
        </div>
        </Grow>

    );
    const colorImg = (
        <Grow in={openOptionColor}>
                   <div className={classes.optionContainer}>

                    {color.map((color,index)=>(
                        <div className={classes.box}
                          style={{
                            backgroundColor:color,
                            marginTop:"5px"
                        }}
                          key={index}
                          onClick={()=>setBgImg(color)}

                        >
                          <Divider/>

                        </div>
                        
                    ))}
                   </div>
                   </Grow>
    );
    return (
        <React.Fragment>
            <Drawer open={openSideMenue}  anchor="right"
            onClose={()=>setSideMenue(false)}>
               <div className={classes.drawer}>
                   <div className={classes.menu}>
                       <div className={classes.box}  style={{
                           backgroundImage:'url("https://www.gardeningknowhow.com/wp-content/uploads/2020/12/lonely-japanese-cherry-400x300.jpg")',
                           backgroundRepeat:"no-repeat",
                           backgroundSize:"cover",
                           objectFit:"cover"
                       }}
                       onClick={()=>{
                           setOpenOptionImage(true);
                           setOpenOptionColor(false);
                    }}
                       >

                       </div>
                       <div  className={classes.box}
                       style={{
                           backgroundImage:'url("https://vivaldi.com/wp-content/uploads/colors-1024x656.png")',
                           backgroundRepeat:"no-repeat",
                           backgroundSize:"cover",
                          
                       }}
                       onClick={()=>{
                            setOpenOptionColor(true);
                           setOpenOptionImage(false); 
                        }}
                       >

                       </div>

                   </div>
                        {openOptionColor?colorImg:images}
               </div>
            </Drawer>
        </React.Fragment>
    )
}
