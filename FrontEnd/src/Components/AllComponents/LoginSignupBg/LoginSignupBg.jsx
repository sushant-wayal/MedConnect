const LoginSignupBg = ({ formHover }) => {
    return (
        <div className={`bg-cover absolute w-[101vw] h-[101vh] -z-10 -top-2 bottom-0 ${ formHover ? "blur-[4px]" : "" }`} style = {{backgroundImage: "url(../../../../bgImage.jpg)"}}>
        </div>
    )
}

export default LoginSignupBg