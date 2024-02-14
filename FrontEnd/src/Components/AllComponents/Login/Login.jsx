import { useState } from "react"
import "./Login.css"
import { LoginSignupBg, LoginSignupFoot, LoginSignupNav } from "../.."

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formHover, setFormHover] = useState(false);
    const [seeing, setSeeing] = useState(false);
    return (
        <div className="relative h-lvh w-lvw flex flex-col justify-between items-center bg-cover overflow-hidden">
            <LoginSignupBg formHover = { formHover } />
            <LoginSignupNav/>
            <form onMouseEnter={() => setFormHover(true)} onMouseLeave={() => setFormHover(false)} className="container h-3/5 w-[24vw] rounded-3xl p-10 flex flex-col justify-between gap-10 backdrop-blur-lg" action="">
                    <h2 className="text-center text-3xl">Login</h2>
                    <div className="flex flex-col justify-center gap-8 relative">
                        <input className="p-2 border-b-2 border-b-black border-solid bg-transparent" onChange={(e) => setUsername(e.target.value)} type="text" required placeholder="Registration No"/>
                        <input id="password" className="p-2 border-b-2 border-b-black border-solid bg-transparent" onChange={(e) => setPassword(e.target.value)} type={`${seeing ? "text" : "password"}`} required placeholder="Password"/>
                        <img className="absolute h-6 right-3 top-[90px]" onClick={() => setSeeing(!seeing)} src={`${seeing ? "../../../../hide.png" : "../../../../see.png" }`}/>
                        <label >
                            <input className="font-[17px] mr-2" type="checkbox"/>Remember me
                        </label>
                    </div>
                    <button className="border-2 border-black p-3 rounded-3xl w-20 relative left-1/2 -translate-x-1/2" type="submit" id="submit">Login</button>
            </form>
            <LoginSignupFoot/>
        </div>
    )
}

export default Login