#pull request

import './App.css';
import React, { useState } from "react";
import MainItem from './components/MainItem';
import SearchBar from './components/SearchBar';

function App() {
  let [serch,setSerch]=useState()
  function serchData(data){
    console.log(data,"form serch")
    setSerch(data)
  }
  return (
   <>
   <SearchBar serch_parent={serchData}/>
   <MainItem passData={serch}/>
   </>
  );
}

export default App;
