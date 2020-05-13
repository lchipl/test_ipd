import React from "react"
import Next from "./next/_next.svg";

export const TopPage = () =>{
    return(
           <div id={"anchor1"} className="Page topPage">
               
              <a href="#anchor2" ><img src={Next} className="next"  alt="next"/></a> 
               
            </div>
    );
}