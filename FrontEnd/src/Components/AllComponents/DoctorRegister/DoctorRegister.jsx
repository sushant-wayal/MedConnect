import { useState } from "react"
import LoginSignupFoot from "../LoginSignupFoot/LoginSignupFoot";
import LoginSignupBg from "../LoginSignupBg/LoginSignupBg";
import LoginSignupNav from "../LoginSignupNav/LoginSignupNav";
import "./DoctorRegister.css"



const DoctorRegister = () => {
    const [formHover, setFormHover] = useState(false);
    const selectedStyle = ["inline-block","bg-black","p-1","rounded-xl","text-white","m-2","relative"];
    const cutStyle = ["absolute","h-5","w-5","rounded-full","bg-white","text-black","top-[-4px]","right-[-4px]","flex","justify-center","items-center","cursor-pointer"];
    let departments = [];
    let degrees = [];
    const multiSelect = (selections,e,flag) => {
        selections = document.querySelector(selections);
        let newSelection = document.createElement("p");
        if (flag) {
            for (let i = 0; i < departments.length; i++) {
                if (departments[i] == e.target.value) {
                    return;
                }
            }
        }
        else {
            for (let i = 0; i < degrees.length; i++) {
                if (degrees[i] == e.target.value) {
                    return;
                }
            }
        }
        newSelection.innerText = e.target.value;
        let selectedValue = newSelection.innerText;
        if (flag) {
            departments.push(e.target.value);
        }
        else {
            degrees.push(e.target.value);
        }
        selectedStyle.forEach(style => newSelection.classList.add(style));
        let cut = document.createElement("div");
        let cross = document.createElement("p");
        cross.innerText = "X";
        cut.append(cross);
        cutStyle.forEach(style => cut.classList.add(style));
        cut.addEventListener("click", () => {
            newSelection.remove();
            if (flag) {
                departments.splice(departments.indexOf(selectedValue),1);
            }
            else {
                degrees.splice(degrees.indexOf(selectedValue),1);
            }
        })
        newSelection.append(cut);
        selections.append(newSelection);
    }
    return (
        <div className="relative h-lvh w-lvw flex flex-col justify-between items-center bg-cover overflow-hidden ">
            <LoginSignupBg formHover = { formHover } />
            <LoginSignupNav/>
            <form onMouseEnter={() => setFormHover(true)} onMouseLeave={() => setFormHover(false)} className="container h-4/5 w-[24vw] rounded-3xl p-10 flex flex-col justify-between gap-10 backdrop-blur-lg overflow-scroll">
                <p className="text-center text-3xl">Doctor's Register</p>
                <p className="relative -top-3 text-xl">Personal information</p>
                <div className="flex flex-col justify-center gap-5 -mt-8">
                <div><input className="bg-transparent border-b-2 border-b-black border-b-solid" type="text" placeholder="First Name"/></div>
                <div><input className="bg-transparent border-b-2 border-b-black border-b-solid " type="text" placeholder="Last Name"/></div>
                </div>
                <div>
                    <p className="text-xl">Contact information</p>
                    <div className="flex flex-col justify-center gap-5 mt-4">
                    <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="number" placeholder="Phone Number"/>
                    <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="email" placeholder="Email Address"/>
                    </div>
                </div>
                <p className="text-xl">Professional information</p>
                <div className="flex flex-col justify-center gap-6 -mt-4">
                    <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="text" placeholder="Registration Number"/>
                    <div className="w-full flex flex-col gap-3">
                        <p>Departments</p>
                        <select onChange={(e) => multiSelect("#selectedDepartment",e,true)} className="bg-transparent border-2 border-black border-solid rounded-xl px-2 py-1 w-full">
                            <option selected disabled>Select Department</option>
                            <option >Cardiology</option>
                            <option >Neurology</option>
                            <option >Opthamlogy</option>
                            <option >Orthopedics</option>
                        </select>
                        <div id="selectedDepartment" className="selections bg-tarnsparent overflow-scroll border-2 border-black border-solid rounded-xl w-full h-24 p-1">
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-3">
                        <p>Degree</p>
                        <select onChange={(e) => multiSelect("#selectedDegree",e,false)} className="bg-transparent border-2 border-black border-solid rounded-xl px-2 py-1 w-full">
                            <option selected disabled>Select Degree</option>
                            <option >Cardiology</option>
                            <option >Neurology</option>
                            <option >Opthamlogy</option>
                            <option >Orthopedics</option>
                        </select>
                        <div id="selectedDegree" className="selections bg-tarnsparent overflow-scroll border-2 border-black border-solid rounded-xl w-full h-24 p-1">
                        </div>
                    </div>
                    <p className="mb-1">Hospital</p>
                    <select className="bg-transparent border-2 border-black border-solid rounded-xl px-2 py-1 w-full mb-3">
                        <option selected disabled>Select Hospital</option>
                        <option>Hospital 1</option>
                        <option>Hospital 2</option>
                        <option>Hospital 3</option>
                        <option>Hospital 4</option>
                    </select>
                </div>
                <input className="bg-transparent border-b-2 border-b-black border-b-solid" type="password" placeholder="Set Password"/>
                <button className="border-2 border-black border-solid rounded-xl p-1 w-20 relative left-1/2 -translate-x-1/2" type="submit">Register</button>
            </form>
            <LoginSignupFoot/>
        </div>
    )
}

export default DoctorRegister