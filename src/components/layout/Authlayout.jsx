import { Link } from "react-router-dom";

const Authlayout = (props) => {
  const { text, children, type } = props;

  return (
    <div className="max-w-xs mx-auto flex flex-col">
      <h1 className="text-xl font-semibold mt-8">{text}</h1>
      <h1 className="text-3xl mt-24 font-semibold">Welcome To FoodIn</h1>
      <p className="mt-2 text-sm">Welcome back! Please enter your details</p>
      <div className="mt-8 ">{children}</div>

      <p className="text-center my-5">
        {type === "login" ? "Don't have account? " : "Already have account? "}

        {type === "login" && (
          <Link to="/register" className="text-blue-500 font-semibold">
            Register
          </Link>
        )}

        {type === "register" && (
          <Link to="/login" className="text-blue-500 font-semibold">
            Login
          </Link>
        )}
        
      </p>
    </div>
  );
};

export default Authlayout;
