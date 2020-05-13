import React,{useState} from "react";

export const Dots = ()=>{
     const [state1,setActive1] = useState(true);
     const [state2,setActive2] = useState(false);
     const [state3,setActive3] = useState(false);

    const trig = () =>{
        setActive1(true)
        setActive2(false)
        setActive3(false)
    }

    const trig2 = () =>{
        setActive1(false)
        setActive2(true)
        setActive3(false)
    }
    const trig3 = () =>{
        setActive1(false)
        setActive2(false)
        setActive3(true)
    }

    return(
    <div className="Pagination">
        <a name={1} href="#anchor1" onClick={trig} className={state1?"dots active":"dots"}> </a>
        <a name={2} href="#anchor2" onClick={trig2} className={state2?"dots active":"dots"}> </a>
        <a name={3} href="#anchor3" onClick={trig3} className={state3?"dots active":"dots"}> </a>
    </div>
        
    
    );
}

//могу и через svg-> circle
    