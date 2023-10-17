import FoodMenus from './components/FoodMenus';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Subscribe from './components/Subscribe';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <FoodMenus/>
      <Subscribe/>
      <Footer/>
    </main>
  )
}
