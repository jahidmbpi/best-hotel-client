import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider";

const MybookingPage = () => {
  const { user } = useContext(AuthContext);
  const [booking, setBokking] = useState([]);
  const userEmail = user?.email;
  useEffect(() => {
    if (userEmail) {
      axios
        .get(`http://localhost:5000/mybooking?email=${userEmail}`, {
          withCredentials: true,
        })
        .then((result) => {
          console.log(result.data);
          setBokking(result.data);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [userEmail]);
  return (
    <div className="space-y-1">
      {booking?.map((data) => (
        <div
          key={data._id}
          className="flex justify-between border-2 p-1 text-center items-center"
        >
          <div className="flex space-x-1 text-center items-center">
            <img className="w-[100px]" src={data.roomImage} alt="" />
            <h2>{data.username}</h2>
          </div>
          <div>
            <h2>Room-title:{data.roomTitle}</h2>
          </div>
          <div>
            <h2> booked-date:{data.creationdate}</h2>
          </div>
          <div>
            <p>cheak-in-date: {data.CheckinDate} </p>
            <p>Cheak-out-date:{data.CheckoutDate} </p>
          </div>
          <button>cencel booking</button>
        </div>
      ))}
    </div>
  );
};

export default MybookingPage;
