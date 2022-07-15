import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import store from "../shared/store";
import { useNavigate } from 'react-router-dom';
const LoginPage = (props) => {
    // const user = useSelector(({store}) => {
    //     return store.items;
    // });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = React.useState("");
    console.log("🚀 ~ file: LoginPage.js ~ line 12 ~ LoginPage ~ setName", name)
    const [password, setPassword] = React.useState("");
    console.log("🚀 ~ file: LoginPage.js ~ line 14 ~ LoginPage ~ setPassword", password)
    const onSubmitLogin =  (e) => {
        e.preventDefault();
        const login = {
            type: "LOGIN",
            payload: {
                name: name,
                pass: password
            }
        }
        console.log("🚀 ~ file: LoginPage.js ~ line 24 ~ onSubmitLogin ~ login", login)
        dispatch(login)

        navigate("/")

    };
    
    const name1 = useSelector(function (state) {
        console.log("123456", state)
        return state.name;
    })
    console.log("name1", name1)
    return (
        <>
        <div className="container login">
            <h4 className="form-heading">Login</h4>
            <form  >
                    <label ><b>Name</b></label>
                    <input onChange={(e) => {
                        console.log(e.target.value)
                        setName(e.target.value)}
                    }
            value={name} type="text" placeholder="Enter name" name="name" required />
                    <label ><b>Password</b></label>
                    <input onChange={(e) => {console.log(e.target.value)
                        setPassword(e.target.value)}}
            value={password} required type="password" placeholder="Enter password" name="password"  />
                <button onClick={onSubmitLogin} type="submit"  >Login</button>
                {/* <a href="/register">Register</a> */}
            </form>
        </div>
        </>
    )
}
export default LoginPage