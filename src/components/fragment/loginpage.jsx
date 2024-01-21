import Button from "../element/button/button";
import Inputform from "../element/input/inputform";

const Loginpage = (props) => {
  const { className } = props;

  return (
    <form className="space-y-5">
      <Inputform
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        htmlFor="Email"
        id="Email"
        name="Email"
      />
      <Inputform
        label="Password"
        type="password"
        placeholder="********"
        htmlFor="Password"
        id="Password"
        name="Password"
      />
      <Button className="bg-blue-500 text-center text-white rounded-2xl py-4 mt-5 hover:bg-blue-700 w-full">
        Login
      </Button>
    </form>
  );
};

export default Loginpage;
