import React,{useState} from "react";

export const Dots = ()=>{
     const [state1,setActive1] = useState(1);
     
    const arrDots = [
        {
            name:1,
            href:"#anchor1"
        },
        {
            name:2,
            href:"#anchor2"
        },
        {
            name:3,
            href:"#anchor3"
        },

]
    

  const handlerDot = (e)=>{
      setActive1(e)
  }

    return(
    <div className="Pagination">
        {arrDots.map((e)=>
        <a key={e.name} name={e.name}
           href={e.href} 
           onClick={()=>handlerDot(e.name)} 
           className={state1===e.name?"dots active":"dots"}> 
        </a>)}

        
        {/* <a name={1} href="#anchor1" onClick={()=>handlerDot(e)} className={state1===e?"dots active":"dots"}> </a>
        <a name={2} href="#anchor2" onClick={()=>handlerDot(e)} className={state1===e?"dots active":"dots"}> </a>
        <a name={3} href="#anchor3" onClick={()=>handlerDot(e)} className={state1===e?"dots active":"dots"}> </a> */}
    </div>
        
    
    );
}

//могу и через svg-> circle
    