import { PrimaryButton } from "../ui/Buttons"
import { useRef,useEffect } from "react"
import Typed from 'typed.js'
import { Link } from "react-router-dom"

const Hero = ()=>{
    const typedEl = useRef(null)
    return(
        <div id="hero" className="flex flex-col justify-center items-center px-10 md:flex-row text-white w-[100%] h-[100vh]">
           <div className="flex flex-col">
            <div className="space-y-5 flex flex-col my-6 mx-auto md:w-[22.6rem]">
             <h2 className="text-3xl text-center md:text-center md:text-5xl font-bold">Love Knows No Bounds: Start Your Adoption Story Today with Our Dedicated Team!</h2>
             <h3 className="text-md text-xl text-center">
             "Welcome to a world of compassion and connection, where dreams of family come true. Our child adoption website is 
             a beacon of hope, offering a heartfelt journey towards creating forever homes. Explore our stories, embrace the joy of building 
             families, and take the first step in changing lives. Your path to love begins here."</h3>
<div className="flex items-center justify-center">
<PrimaryButton style={'flex justify-between items-center space-x-4 text-center px-3'}>
    <Link to={'/apply'}>Apply</Link>
<i className="fas fa-angle-right"></i>
</PrimaryButton>
</div>
            </div>
                
           </div>
        </div>
    )
}
export default Hero