import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RoomCard = () => {
  const [roomsd, setRoomsd] = useState();
  //   const { setLoader } = useContext(AuthContext);
  useEffect(() => {
    // setLoader(true);
    fetch("http://localhost:5000/allroom")
      .then((res) => res.json())
      .then((data) => {
        setRoomsd(data);
        console.log(data);
        // setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mt-[100px]">
      <div className="grid grid-cols-3 gap-[20px]">
        {roomsd?.map((data) => (
          <div
            data-aos="zoom-in-up"
            key={data._id}
            className="card bg-base-100 w-full shadow-xl"
          >
            <Link to={`/carddetails/${data._id}`}>
              <figure>
                <img className="h-[350px]" src={data.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomCard;
