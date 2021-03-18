import { Drawer } from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";
import React from 'react'

const useStyle = makeStyles((theme)=>({
    drawer:{
        width:"400px"
    }
}))
export default function SideMenu({openSideMenue,setSideMenue}) {
    const classes = useStyle();
    return (
        <>
            <Drawer open={openSideMenue}  anchor="right"
            onClose={()=>setSideMenue(false)}>
               <div className={classes.drawer}>
               <h1>
                   side menue btch
               </h1>
               </div>
            </Drawer>
        </>
    )
}
