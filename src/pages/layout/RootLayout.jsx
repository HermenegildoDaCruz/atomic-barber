import { useBooleanHook } from "../../hooks/useBooleanHook";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const {
    value: sideBarOpen,
    toggle: toggleSideBar,
    setFalse: closeSideBar,
  } = useBooleanHook(false);

  return (
    <>
      <Provider store={store}>
        <Nav isSideBarOpen={sideBarOpen} onToggleSideBar={toggleSideBar} />
        {sideBarOpen && <SideBar open={sideBarOpen} onClose={closeSideBar} />}
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}
