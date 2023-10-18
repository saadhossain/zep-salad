import FoodMenus from './components/homecomponents/FoodMenus';
import HeroSection from './components/homecomponents/HeroSection';
import Subscribe from './components/homecomponents/Subscribe';
import Testimonials from './components/homecomponents/Testimonials';
import WhyChooseUs from './components/homecomponents/WhyChooseUs';


export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <Testimonials />
      <FoodMenus />
      <Subscribe />
    </main>
  )
}
