import Loginpage from "../components/fragment/loginpage"
import Authlayout from "../components/layout/Authlayout"

const Login = () => {
    return(
        <Authlayout text="Login" type="login">
            <Loginpage/>
        </Authlayout>
    )
}

export default Login