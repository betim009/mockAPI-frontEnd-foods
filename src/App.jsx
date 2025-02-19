import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
