import LoginSignupBg from "../LoginSignupBg/LoginSignupBg";
import LoginSignupFoot from "../LoginSignupFoot/LoginSignupFoot";
import LoginSignupNav from "../LoginSignupNav/LoginSignupNav";
import { useState } from "react";

const PateintRegister = () => {
    const [formHover, setFormHover] = useState(false);
    return (
        <div className="relative h-lvh w-lvw flex flex-col justify-between items-center bg-cover overflow-hidden ">
            <LoginSignupBg formHover = { formHover } />
            <LoginSignupNav/>
            <form onMouseEnter={() => setFormHover(true)} onMouseLeave={() => setFormHover(false)} className="container h-4/5 w-[24vw] rounded-3xl p-10 flex flex-col justify-between gap-10 backdrop-blur-lg overflow-scroll">
                <p className="text-center text-3xl">Pateint's Register</p>
                <p className="relative -top-3 text-xl">Personal information</p>
                <div className="flex flex-col justify-center gap-5 -mt-8">
                    <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="text" placeholder="First Name"/>
                    <input className="bg-transparent border-b-2 border-b-black border-b-solid " type="text" placeholder="Last Name"/>
                    <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="date"/>
                    <div>
                        <p className="mb-3 relative -top-3 text-xl">Gender</p>
                        <label className="mr-3" for="male">
                            <input className="mr-2" id="male" type="radio"/> Male
                        </label>
                        <label className="mr-3" for="female">
                            <input className="mr-2" id="female" type="radio"/> Female
                        </label>
                        <label className="mr-3" for="other">
                            <input className="mr-2" id="other" type="radio"/> Other
                        </label>
                    </div>
                </div>
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

export default PateintRegister;