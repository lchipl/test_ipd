import React,{useState} from "react";
import Bg1 from "./backgrounds/1533326959_low-poly-background-generator-min.png";
import Bg2 from "./backgrounds/xEYZKpGe0N4.jpg";
import Bg3 from "./backgrounds/maxresdefault.jpg";

export const BottomPage = () =>{
    const [state,setState] =useState(
        {
            backgrounds:
            [
             Bg1,
             Bg2,
             Bg3,
            ],
            slide:Bg3,
            value:2016
 
    })
    const NextItem = (e) =>{
        if(e.target.value<=2003){setState({slide:Bg1})}
        if(e.target.value<=2012 && e.target.value>=2003){setState({slide:Bg2})}
        if(e.target.value>=2012){setState({slide:Bg3})}
   }
    return(
           <div id={"anchor3"} style={{backgroundImage:`url(${state.slide})`}} className="Page bottomPage">
            
            
                   <input type="range" className="bottomRange" onChange={NextItem} min={1988} max={2026} value={state.currentBgIndex} defaultValue={2016} step={1} />            
               <div className="input_values">
                   <span >1998  2009  2016</span>
               </div>
           </div>
    );
}