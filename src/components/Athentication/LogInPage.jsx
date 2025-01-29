import { useContext } from "react";
import { AuthContext } from "../Provider";

// import { GoogleAuthProvider } from "firebase/auth/web-extension";

// git hub log in link
// https:best-hotel-6a827.firebaseapp.com/__/auth/handler

const LogInPage = () => {
  const { loginUser, googlelOgin } = useContext(AuthContext);
  const handelLogIn = (e) => {
    e.preventDefault();
    const from = e.target;

    const UserEmail = from.email.value;
    const password = from.password.value;

    loginUser(UserEmail, password)
      .then((result) => {
        const logednuser = result.user;
        console.log(logednuser);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handelGoogleLogIn = () => {
    console.log("googole work");
    console.log();
    googlelOgin()
      .then((result) => {
        console.log("log in succesfull");

        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // eslint-disable-next-line no-unused-vars
        const errorCode = error.code;
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-green-800 border-2 p-5 rounded-md shadow-lg">
        <h2 className="text-3xl font-bold my-5 capitalize text-center">
          please log in
        </h2>
        <form onSubmit={handelLogIn}>
          <div className="flex flex-col items-center gap-4 w-[300px]">
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

            <button className="btn btn-neutral w-full">log in</button>
          </div>
        </form>
        <h2 className="capitalize text-2xl text-center">or</h2>
        <div className="space-y-[6px]">
          <button
            onClick={handelGoogleLogIn}
            className="btn btn-neutral w-full"
          >
            google
          </button>
          <button className="btn btn-neutral w-full">github</button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
