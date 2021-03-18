import React,{useState}from 'react';
import ToolBar from "../Nav/TopBar";
import SideMenu from './SideMenu';

export default function Navigation({setBgImg}) {
    const[openSideBar,setOpenSideBar] = useState(false);
    return (
        <div>
            <ToolBar setSideMenue={setOpenSideBar} />
            <SideMenu openSideMenue={openSideBar} setSideMenue={setOpenSideBar} setBgImg={setBgImg}/>
        </div>
    )
}
