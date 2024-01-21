import Button from "../element/button/button"
import Inputform from "../element/input/inputform"

const Registerpage = () => {
    return(
        <div className="space-y-5">
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
        type="Password"
        placeholder="********"
        htmlFor="Password"
        id="Password"
        name="Password"
        />
        <Inputform
        label="Confirm Password"
        type="Password"
        placeholder="********"
        htmlFor="Confirm Password"
        id="Confirm Password"
        name="Confirm Password"
        />
        <Button className="bg-blue-500 text-center text-white rounded-2xl py-4 mt-5 hover:bg-blue-700 w-full">Register</Button>
        </div>
    )
}

export default Registerpage