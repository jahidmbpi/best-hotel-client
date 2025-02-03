import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";

const BookingPage = () => {
  const { user } = useContext(AuthContext);
  const bokkingdata = useLoaderData();
  const { image, price, title } = bokkingdata;

  const userEmail = user?.email;
  console.log(bokkingdata);
  const handelbooking = (e) => {
    e.preventDefault();
    const from = e.target;

    const username = from.name.value;
    const CheckinDate = from.CheckinDate.value;
    const CheckoutDate = from.CheckoutDate.value;
    const creationdate = moment().format("MMMM Do YYYY, h:mm:ss a");
    console.log(creationdate);

    const roomprice = price;
    const roomTitle = title;
    const roomImage = image;
    const bookingData = {
      username,
      userEmail,
      CheckinDate,
      CheckoutDate,
      roomprice,
      roomTitle,
      roomImage,
      creationdate,
    };
    console.log(bookingData);
    axios
      .post("http://localhost:5000/bookings", bookingData, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result);
        console.log("post data succesfully");
        toast.success("Successfully created!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className=" m-auto w-full">
      <div className="card bg-[#F3F3F3] p-[70px] w-full shrink-0 shadow-2xl mb-[130px]">
        <div className="text-center text-2xl font-medium">
          <h2>please filap form</h2>
        </div>
        <form onSubmit={handelbooking} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex flex-row w-full items-center justify-center space-x-1">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Check-in Date</span>
                </label>
                <input
                  type="date"
                  placeholder="date"
                  name="CheckinDate"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Check-out Date</span>
                </label>
                <input
                  type="date"
                  placeholder="date"
                  name="CheckoutDate"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due amount</span>
              </label>
              <input
                type="text"
                placeholder="passsword"
                defaultValue={price}
                name="price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#FF3811] capitalize w-full">
              booking confirm
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default BookingPage;
