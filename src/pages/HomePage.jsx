import Hero from "../components/Hero";
import Products from "../components/Products";
import WhyUs from "../components/WhyUs";
import HairStylePrices from "../components/HairStylePrices";
import PlansAndProgramms from "../components/PlansAndProgramms";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

function HomePage() {
  const favorites = useSelector((state) => state.favorites);

  // Store favorites in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <Hero />
      <HairStylePrices />
      <Products />
      <PlansAndProgramms />
      <WhyUs />
    </>
  );
}

export default HomePage;

export async function action({ request }) {
  const data = await request.formData();

  const userData = {
    name: data.get("username"),
    email: data.get("email"),
  };
  console.log(userData);

  // location.assign('/')
  return redirect("/");
}
