import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NotFound from "./pages/not-found";
import Layout from "./components/layout";
import Payment from "./pages/payment";
import SignIn from "./pages/sign-in";
import LayoutAuth from "./components/layout-auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<About />} />
        </Route>
        <Route element={<LayoutAuth />}>
          <Route path="sign-in" element={<SignIn />}/>
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
