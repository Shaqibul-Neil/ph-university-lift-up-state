import "./App.css";
import Navbar from "./components/Navbar";
import BannerCountBoxes from "./components/BannerCountBoxes";
import ToggleButtons from "./components/ToggleButtons";

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
  return (
    <>
      <Navbar />;
      <BannerCountBoxes fetchPromise={fetchPromise} />;
      <ToggleButtons />
    </>
  );
}

export default App;
