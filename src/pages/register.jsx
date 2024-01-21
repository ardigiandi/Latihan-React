import Registerpage from "../components/fragment/registerpage"
import Authlayout from "../components/layout/Authlayout"

const Register = () => {
    return(
        <Authlayout text="Register" type="register">
            <Registerpage/>
        </Authlayout>
    )
}

export default Register