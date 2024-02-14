import "./HospitalRegister.css"
import LoginSignupBg from "../LoginSignupBg/LoginSignupBg"
import LoginSignupNav from "../LoginSignupNav/LoginSignupNav"
import LoginSignupFoot from "../LoginSignupFoot/LoginSignupFoot"
import { useState } from "react"

const HospitalRegister = () => {
    const [formHover, setFormHover] = useState(false);
    return (
        <div className="relative h-lvh w-lvw flex flex-col justify-between items-center bg-cover overflow-hidden ">
            <LoginSignupBg formHover = { formHover } />
            <LoginSignupNav/>
            <form onMouseEnter={() => setFormHover(true)} onMouseLeave={() => setFormHover(false)} className="container h-4/5 w-[24vw] rounded-3xl p-10 flex flex-col justify-between gap-10 backdrop-blur-lg overflow-scroll">
                <p className="text-center text-3xl">Hospital's Register</p>
                <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="text" placeholder="Hospital Name"/>
                <div>
                    <p className="text-xl">Contact information</p>
                    <div className="flex flex-col justify-center gap-5 mt-4">
                        <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="number" placeholder="Phone Number"/>
                        <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="email" placeholder="Email Address"/>
                        <textarea className="bg-transparent border-b-2 border-b-black border-b-solid resize-none" placeholder="Address"/>
                    </div>
                </div>
                <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="password" placeholder="Set Password"/>
                <button className="border-2 border-black border-solid rounded-xl p-1 w-20 relative left-1/2 -translate-x-1/2" type="submit">Register</button>
            </form>
            <LoginSignupFoot/>
        </div>
    )
}

export default HospitalRegister