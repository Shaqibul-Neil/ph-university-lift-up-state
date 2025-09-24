import "./App.css";
import Navbar from "./components/Navbar";
import IssuesManagement from "./components/IssuesManagement";
import Footer from "./components/Footer";
import { Suspense } from "react";

const fetchIssues = async () => {
  try {
    const response = await fetch("/data.json");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar />
      <Suspense fallback={"loading"}>
        <IssuesManagement fetchPromise={fetchPromise} />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
