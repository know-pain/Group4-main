

const About = ()=>{
    return(
    <section id="about">
     <div className="mx-auto px-8 text-white mt-16">
        <div className="flex items-center flex-col py-5">
            <span className="w-[2.5rem] h-[4px] bg-gradient-to-r from-indigo to-pink rounded-full"></span>
            <h2 className="text-lg font-bold">About Project</h2>
        </div>
        <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
        <div className="md:w-1/2 flex flex-col space-y-5 md:px-4">
           <p className="text-sm">"Welcome to our child adoption website, a place where love knows no boundaries and dreams of family come to life. We believe in the transformative power of adoption, where every child deserves a loving home and 
           every family has the opportunity to grow through the beautiful journey of parenthood. Here, we celebrate the diverse stories of hope, resilience, and unconditional love that define the adoption experience. Whether you're considering 
           adoption as a way to expand your family or seeking to offer a safe and nurturing environment for a child in need, 
           our platform is your guide. With a dedicated team of professionals and a wealth of resources, we're here to support you every step of the way. Together, let's embark on this meaningful journey of building brighter futures and creating lifelong bonds.
           We are committed to prioritizing the safety and happiness of both you and the child by adhering to the following principles:</p>
           <div className="flex space-x-3 items-center ">
            <div className="w-[2rem] h-[2rem] square-[50%] border border-white flex items-center justify-center">1</div>
            <p className="font-semibold text-md">Thorough background checks for safety</p>
           </div>
           <div className="flex space-x-3 items-center ">
            <div className="w-[2rem] h-[2rem] square-[50%] border border-white flex items-center justify-center">2</div>
            <p className="font-semibold text-md">Support for emotional well-being</p>
           </div>
           <div className="flex space-x-3 items-center ">
            <div className="w-[2rem] h-[2rem] square-[50%] border border-white flex items-center justify-center">3</div>
            <p className="font-semibold text-md">Clear communication for trust</p>
           </div>
           <div className="flex space-x-3 items-center ">
            <div className="w-[2rem] h-[2rem] square-[50%] border border-white flex items-center justify-center">4</div>
            <p className="font-semibold text-md">Prioritizing the child's needs</p>
           </div>
        </div>
        <div className="md:w-1/2 flex flex-col space-y-3">
         <div className="flex space-x-5">
          <div className="bg-transaparent w-1/2 h-[12rem] rounded-lg shadow-xl justify-center items-center flex flex-col">
<div className="w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
    <i className="fas fa-heart text-black text-lg"></i>
</div>
<h2 className="text-center">Love and Care</h2>
          </div>
          <div className="bg-transaparent w-1/2 h-[12rem] rounded-lg shadow-xl justify-center items-center flex flex-col mt-10">
          <div className="w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
    <i className="fas fa-users text-black text-lg"></i>
</div>
<h2 className="text-center">One Big Family</h2>
          </div>
         </div>
         <div className="flex space-x-5">
          <div className="bg-transaparent w-1/2 h-[12rem] rounded-lg shadow-xl justify-center items-center flex flex-col -mt-5">
<div className="w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
    <i className="fas fa-child text-black text-lg"></i>
</div>
<h2 className="text-center">Prioritize Children Rights</h2>
          </div>
          <div className="bg-transaparent w-1/2 h-[12rem] rounded-lg shadow-xl justify-center items-center flex flex-col mt-5">
          <div className="w-[3rem] h-[3rem] rounded-full bg-white flex justify-center items-center">
    <i className="fas fa-hands-helping text-black text-lg"></i>
</div>
<h2 className="text-center">24/7 Support and Assistance</h2>
          </div>
         </div>
        </div>
        </div>
     </div>
    </section>
    )
}

export default About