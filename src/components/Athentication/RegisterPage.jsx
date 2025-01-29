import { useContext } from "react";
import { AuthContext } from "../Provider";

const RegisterPage = () => {
  const { RegisterUsser } = useContext(AuthContext);
  const handelRegister = (e) => {
    e.preventDefault();
    const from = e.target;
    const UserName = from.name.value;
    const UserEmail = from.email.value;
    const password = from.password.value;
    const UserPhoto = from.photo.value;
    console.log(UserEmail, UserName, password, UserPhoto);
    console.log(RegisterUsser);
    RegisterUsser(UserEmail, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-green-800 border-2 p-5 rounded-md shadow-lg">
        <h2 className="text-3xl font-bold my-5 capitalize text-center">
          Register
        </h2>
        <form onSubmit={handelRegister}>
          <div className="flex flex-col items-center gap-4 w-[300px]">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-success w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-success w-full"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-success w-full"
            />
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input input-success w-full"
            />
            <button className="btn btn-neutral w-full">register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
