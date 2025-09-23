import "./App.css";
import Navbar from "./components/Navbar";
import BannerCountBoxes from "./components/BannerCountBoxes";
import ToggleButtons from "./components/ToggleButtons";
import { useState } from "react";

const fetchData = async () => {
  try {
    const response = await fetch("/data.json");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
const fetchPromise = fetchData();

function App() {
  const [toggle, setToggle] = useState("All");
  return (
    <>
      <Navbar />;
      <BannerCountBoxes fetchPromise={fetchPromise} />;
      <ToggleButtons toggle={toggle} setToggle={setToggle} />
    </>
  );
}

export default App;
