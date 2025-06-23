 
// import React, {useState} from "react";
// import Typography from '@mui/material/Typography';
import MyCounter from "./Pages/Counter.jsx";
import Contactform from "./Pages/ContactForm.jsx";
import Toggle from "./Pages/Toggle.jsx";
import Todo from "./Pages/TodoList.jsx";
import Model from "./Pages/Model.jsx";
import Dropbox from "./Pages/Dropbox.jsx";
import SearchFilter from "./Pages/SearchFilter.jsx";
import TabbedNavigation from "./Pages/TabbedNavigation.jsx";
import ImageCarousel from "./Pages/ImageCarousel.jsx";

function App (){
  // let x =1;
  // const handleAdd = () =>{
  //   x= x+1;
  //   console.log("x", x);

  // let [num , setnum] = useState(1);

  // let x= 1;

  // const handleAdd = () =>{
  //   setnum(num+1);
  // };
  return (
  <>
  <MyCounter/>
  <Contactform/>
  <Toggle/>
  <Todo/>
  <Model/>
  <Dropbox/>
  <SearchFilter/>
  <TabbedNavigation/>
  <ImageCarousel/>
  </>
  );
};

export default App;
