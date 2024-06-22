import React from "react";
import './LoginForm.css'
import { FaUser, FaLock} from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const SignUpForm = () => {  
    return (
        <div className="wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="email" placeholder="Email" required />
                    <CiMail className="icon"/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon"/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />I agree to the terms & conditions</label>
                </div>

                <button type="submit">Sign Up</button>

                <div className="register-link">
                    <p>Already have an account? <a href="#">Login</a></p>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm