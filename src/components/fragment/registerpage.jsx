import Button from "../element/button/button";
import Inputform from "../element/input/inputform";


const Registerpage = () => {

    const handleRegister = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        localStorage.setItem('confirm password', event.target.password.value);
        window.location.href = '/product';
    };

  return (
    <div className="space-y-5" onSubmit={handleRegister}>
      <Inputform
        label="email"
        type="email"
        placeholder="example@gmail.com"
        htmlFor="email"
        id="email"
        name="email"
      />
      <Inputform
        label="password"
        type="password"
        placeholder="********"
        htmlFor="password"
        id="password"
        name="password"
      />
      <Inputform
        label="confirm Password"
        type="password"
        placeholder="********"
        htmlFor="confirm Password"
        id="confirm Password"
        name="confirm Password"
      />
      <Button
        className="bg-blue-500 text-center text-white rounded-2xl py-4 mt-5 hover:bg-blue-700 w-full"
        type="submit"
      >
        Register
      </Button>
    </div>
  );
};

export default Registerpage;
