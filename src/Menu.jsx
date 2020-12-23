import React from "react";
import web from "../src/images/img.png";
import {NavLink} from "react-router-dom";
import Common from "./Common";

const Menu= ()=>{
	return(
   <>
    <Common
       name='Grow your Business with' 
        imgsrc={web} 
        visit="/service" 
        btname="Get Started"
     />
    </> 
	);
};
export default Menu;