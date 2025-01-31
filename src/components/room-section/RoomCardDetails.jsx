import { Link, useLoaderData } from "react-router-dom";

const RoomCardDetails = () => {
  const roomdata = useLoaderData();
  const { image, room_size, description, price, title, _id } = roomdata;

  console.log(roomdata);
  return (
    <div className="flex flex-row w-full justify-center mt-[100px]">
      <div className="space-y-[20px]">
        <h2 className="text-3xl font-bold"> titale:{title}</h2>
        <p className="font-medium w-[80%]">description:{description}</p>
        <div className="flex justify-between w-[80%] mb-[50px]">
          <p>price ${price}</p>
          <p>room size:{room_size}</p>
        </div>
        <div className="justify-end flex  w-[80%]">
          <Link to={`/booking/${_id}`} className="btn bg-green-600">
            book now
          </Link>
        </div>
      </div>
      <div className=" border-2">
        <img className="h-[400px] w-[400px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default RoomCardDetails;
