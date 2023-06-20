import { Fragment } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";


export default function RootLayout() {

  return (
    <Fragment>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </Fragment>
  )
}
