import logo from "./logo.svg";
import "./App.css";
import { Grid } from "./components/Grid";
import MosaictTest from "./components/MosaictTest";
import ExampleApp from "./components/ExampleApp";
import RGLTest from "./components/RGLTest";
import RGLTest2 from "./components/RGLTest2";
import RGLDNDTest from "./components/RGLDNDTest";
import Test from "./components/Test";
import Triangle from "./components/Triangle";
import MyGridLayout from "./components/MyGridLayout";
import AddAtDropPosition from "./components/AddAtDropPosition";
import CustomColorPicker from "./components/CustomColorPicker";
function App() {
  return (
    <div className="App">
      {/* <Grid/> */}
      {/* <MosaictTest/> */}
      {/* <ExampleApp/> */}
      {/* <RGLTest /> */}
      <RGLTest2 />
      {/* <Test/> */}
      {/* <RGLDNDTest /> */}
      {/* <Triangle /> */}
      {/* <MyGridLayout /> */}
      {/* <AddAtDropPosition/> */}
      {/* <CustomColorPicker/> */}
    </div>
  );
}

export default App;

// src/App.js
// import React from 'react';
// import DraggableItem from './components/DraggableItem';
// import Canvas from './components/Canvas';
// import './App.css'; // Make sure to import your CSS if you have any

// function App() {
//  return (
//     <div className="App">
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
//         <DraggableItem id="rectangle" type="rectangle">Rectangle</DraggableItem>
//         <DraggableItem id="image" type="image">Image</DraggableItem>
//       </div>
//       <Canvas />
//     </div>
//  );
// }

// export default App;
