import FAQ from '../../sections/FAQ/FAQ';
import Footer from '../../sections/Footer/Footer';
import AboutUs from '../../sections/AboutUs/AboutUs';
import NavBar from '../../sections/NavBar/NavBar';
import OurServices from '../../sections/OurServices/OurServices';
import Booking from '../../sections/Booking/Booking';
import InstagramPosts from '../../sections/InstagramPosts/InstagramPosts';

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Booking />
      <OurServices />
      <AboutUs />
      <FAQ />
      <InstagramPosts />
      <Footer />
    </div>
  );
};

export default HomePage;
