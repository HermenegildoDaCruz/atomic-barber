import Hero from "../components/Hero";
import Products from "../components/Products";
import WhyUs from "../components/WhyUs";
import HairStylePrices from "../components/HairStylePrices";
import PlansAndProgramms from "../components/PlansAndProgramms";
import Footer from "../components/Footer";
import { redirect } from "react-router-dom";

function HomePage() {
  
  return (
    <>
      <Hero />
      <HairStylePrices />
      <Products />
      <PlansAndProgramms />
      <WhyUs />
      <Footer />
    </>
  );
}

export default HomePage;

export async function action ({request}){
  const data = await request.formData()

  const userData = {
    name: data.get('username'),
    email: data.get('email')
  }
  console.log(userData)
  
  // location.assign('/')
  return redirect('/')
    
}