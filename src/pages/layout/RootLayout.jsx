import { useBooleanHook } from "../../hooks/useBooleanHook";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const { value: sideBarOpen, toggle: toggleSideBar } = useBooleanHook(false);
  return (
    <>
      <Nav isSideBarOpen={sideBarOpen} onToggleSideBar={toggleSideBar} />
      {sideBarOpen && <SideBar open={sideBarOpen} />}
      <Outlet />
    </>
  );
}
