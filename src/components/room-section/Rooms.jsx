import RoomCard from "./RoomCard";

const Rooms = () => {
  return (
    <div className="mt-[100px]">
      <div className=" text-center">
        <h1 className="capitalize text-4xl font-bold">our rooms</h1>
        <p>
          Opal Blossom inn – Your ultimate destination for premium service,{" "}
          <br />
          comfortable accommodation, and an excellent experience. Easy booking,{" "}
          <br />
          luxurious amenities, and reliable service! <br />
        </p>
      </div>
      <RoomCard></RoomCard>
    </div>
  );
};

export default Rooms;
