import { Routes, Route } from "react-router-dom";

import { DemoPage } from "./Pages/demo/demoPage";
import { AboutPage } from "./Pages/about/aboutPage";
import { Navigation } from "./components/navigation/navigation";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<DemoPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
