import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
function Layout() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-grow relative">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;