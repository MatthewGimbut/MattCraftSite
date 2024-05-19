import { Outlet } from "react-router-dom";
import MCNavbar from "./MCNavbar";

export default function Layout() {
    return (
        <>
            <MCNavbar />
            <Outlet />
        </>
    );
}