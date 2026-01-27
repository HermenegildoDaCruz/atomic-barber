import { useBooleanHook } from "../../hooks/useBooleanHook";
import Nav from "../../components/Nav";
import SideBar from "../../components/SideBar";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const { value: sideBarOpen, toggle: toggleSideBar } = useBooleanHook(false);
  return (
    <>
    <Provider store={store}>
      <Nav isSideBarOpen={sideBarOpen} onToggleSideBar={toggleSideBar} />
      {sideBarOpen && <SideBar open={sideBarOpen} />}
      <Outlet />
    </Provider>
    </>
  );
}
