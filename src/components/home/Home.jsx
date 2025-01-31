import GoogleMap from "../googlemap/GoogleMap";
import Rooms from "../room-section/Rooms";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GoogleMap></GoogleMap>
      <Rooms></Rooms>
    </div>
  );
};

export default Home;
