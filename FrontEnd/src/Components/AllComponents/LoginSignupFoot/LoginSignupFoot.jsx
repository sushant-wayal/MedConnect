import "./LoginSignupFoot.css"

const LoginSignupFoot = () => {
    return (
        <div className="w-full h-16 flex justify-center items-center gap-[1050px] text-white">
            <p>©MedConnect | 2024</p>
            <div className="flex justify-center gap-10 relative">
                <a className="relative footcont" href="">Contact us</a>
                <a className="relative footcont" href="">About us</a>
                <a className="relative footcont" href="">Privacy</a>
            </div>
        </div>
    )
}

export default LoginSignupFoot