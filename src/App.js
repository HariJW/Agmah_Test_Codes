import logo from "./logo.svg";
import "./App.css";
import { Grid } from "./components/Grid";
import MosaictTest from "./components/MosaictTest";
import ExampleApp from "./components/ExampleApp";
import RGLTest from "./components/RGLTest";
import RGLTest2 from "./components/RGLTest2";
function App() {
  return (
    <div
      style={{
        boxSizing: "border-box",
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="App"
    >
      {/* <Grid/> */}
      {/* <MosaictTest/> */}
      {/* <ExampleApp/> */}
      <RGLTest />
      {/* <RGLTest2 /> */}
    </div>
  );
}

export default App;
