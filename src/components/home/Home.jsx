import ClientReview from "../clientreview/ClientReview";
import Footer from "../footer/Footer";
import GoogleMap from "../googlemap/GoogleMap";
import Rooms from "../room-section/Rooms";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GoogleMap></GoogleMap>
      <Rooms></Rooms>
      <ClientReview />
      <Footer />
    </div>
  );
};

export default Home;
