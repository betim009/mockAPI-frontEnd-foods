import { Outlet } from "react-router-dom";
import Footer from "../footer";
import HeaderAuth from "../header-auth";

export default function LayoutAuth() {
  return (
    <>
      <HeaderAuth />
      <Outlet />
      <Footer />
    </>
  );
}
