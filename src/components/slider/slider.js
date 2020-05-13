import React,{useState} from "react";
import Bg1 from "../backgrounds/dobro-pozhalovat-v-klass-prevoshodstva-2-sezon-5.jpg";
import Bg2 from "../backgrounds/Episode_012-07.jpg";
import Bg3 from "../backgrounds/photo_2020-05-11_22-19-27.jpg";
export const Slider = () =>{
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
        <>
        <div ><img  className="slider" src={state.slide} alt="slide"/></div>
        
        <input type="range" className="bottomRange" onChange={NextItem} min={1988} max={2026} value={state.currentBgIndex} defaultValue={2016} step={1} />            
               <div className="input_values">
                   <span >1998  2009  2016</span>
               </div>
        
        </>
    );
}