import React from 'react';       //{useState}
import {TopPage} from "./components/topPage";
import {MiddlePage} from "./components/middlePage";
import {BottomPage} from "./components/bottomPage";
import {Dots} from "./components/pagination/dots";

const  App = () => {


  return (
    <div className="App">
      <Dots />
      <TopPage />
      <MiddlePage  />
      <BottomPage  />
      
    </div>
  );
}

export default App;
