import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/Header";

export function Layout(){
    return <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}