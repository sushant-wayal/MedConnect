import { useState } from "react";
import { NavLink } from "react-router-dom";

const LoginSignupNav = () => {
    const active = (isActive) => {
        let style = "p-3 text-white";
        if (isActive) {
            style += " rounded-3xl border-2 border-solid border-white";
        }
        return style;
    }
    const [seeing, setSeeing] = useState(false);
    const [signingUp, setSigninUp] = useState(false);
    const activeSignUp = (isActive) => {
        let style = "hover:text-lg transition-all cursor-pointer";
        if (isActive) {
            setSigninUp(true);
            style += " border-b-2 border-b-blue-300 vorder-b-solid";
        }
        return style
    }
    return (
        <div className="navbar py-10 flex w-full h-16 justify-center gap-[1000px] relative">
            <img className="w-[300px] z-50 h-[64px] relative -top-8" src="../../../../logo.png"/>
            <div className="flex justify-center gap-16 items-center">
                <NavLink onClick={() => {
                    setSeeing(false);
                    setSigninUp(false);
                }} className={({isActive}) => active(isActive)} to="/">Sign In</NavLink>
                <button onClick={() => {
                    setSeeing(!seeing);
                    setSigninUp(!signingUp);
                }} className={`${signingUp ? active(true) : active(false) }`}>Sign Up</button>
                <div className={`${seeing ? "h-32 p-2" : "h-0 p-0"} flex flex-col gap-3 overflow-hidden absolute top-20 rounded-2xl text-white backdrop-blur-lg`}>
                    <NavLink onClick={() => setSigninUp(true)} className={({isActive}) => activeSignUp(isActive)} to="/hospitalRegister">Hospital's Registration</NavLink>
                    <NavLink onClick={() => setSigninUp(true)} className={({isActive}) => activeSignUp(isActive)} to="/doctorRegister">Doctor's Registration</NavLink>
                    <NavLink onClick={() => setSigninUp(true)} className={({isActive}) => activeSignUp(isActive)} to="/pateintRegister">Pateint's Registration</NavLink>
                </div>
            </div>
        </div>
    )
}

export default LoginSignupNav