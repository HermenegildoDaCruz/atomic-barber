import Nav from "./components/Nav";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import HairStylePrices from "./components/HairStylePrices";
import PlansAndProgramms from "./components/PlansAndProgramms";
import { useBooleanHook } from "./hooks/useBooleanHook";

function App() {
  const { value: sideBarOpen, toggle: toggleSideBar } = useBooleanHook(false);

  return (
    <>
      <Nav isSideBarOpen={sideBarOpen} onToggleSideBar={toggleSideBar} />
      {sideBarOpen && <SideBar open={sideBarOpen} />}
      <Hero />
      <WhyUs />
      <HairStylePrices />
      <PlansAndProgramms />
    </>
  );
}

export default App;
