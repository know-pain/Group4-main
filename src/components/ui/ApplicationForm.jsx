import Navbar from "./Navbar"
import { useState } from "react"
import { PrimaryButton } from "./Buttons"
import Footer from "../layout/Footer"
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import { create } from "../../services/firebase"
import ScaleLoader from 'react-spinners/ScaleLoader';

const Form1 = ({data,method})=>{
    function setValue(e){
        const {name,value} = e.target
        method(prev=>{
            return{
                ...prev,
                [name]:value
            }
        }) 
    }
    return(
        <div className="container mx-auto flex items-center justify-center my-3 flex-col space-y-5">
          <h2 className="text-2xl font-bold">Personal Information</h2>
          <div className="flex flex-col w-[100%] space-y-3">
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">1</div>
                 <input type="text" onChange={setValue} name="firstname" value={data.firstname} className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="Enter Your First Name" />
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">2</div>
                 <input type="text" onChange={setValue} name="lastname" className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="Enter Your Last Name" />
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">3</div>
                 <input type="text" onChange={setValue} name="email" className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="Enter Your Email Address" />
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">4</div>
                 <input type="date" onChange={setValue} name="dob" className=" bg-white text-black outline-none flex-1" placeholder="Enter Your Date of birth" />
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">5</div>
                 <select name="gender" onChange={setValue} className=" bg-white text-black outline-none flex-1" placeholder="Your Gender" >
                    <option value="M" key="">Male</option>
                    <option value="F" key="">Female</option>
                 </select>
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">6</div>
                 <input type="text" onChange={setValue} name="state" className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="Enter Your State of Origin" />
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">7</div>
                 <input type="text" onChange={setValue} name="lga" className="  bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="Enter Your LGA" />
              </div>
          </div>
        </div>
    )
}
Form1.propTypes ={
    data:PropTypes.object,
    method:PropTypes.func
}
const Form2 = ({data,method})=>{
    function setValue(e){
        const {name,value} = e.target
        method(prev=>{
            return{
                ...prev,
                [name]:value
            }
        }) 
    }
    return(
        <div className="container mx-auto flex items-center justify-center my-3 flex-col space-y-5">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <div className="flex flex-col w-[100%] space-y-3">
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">1</div>
                 <input onChange={setValue} name="phone" value={data.phone} type="text" className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="Enter Your Phone Number" />
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">2</div>
                 <input onChange={setValue} name="home_address" value={data.home_address} type="text" className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="Enter Your Home Address" />
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">3</div>
                 <input onChange={setValue} name="work_address" value={data.work_address} type="text" className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="Enter Your Work Address" />
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">4</div>
                 <input onChange={setValue} name="sponsors_number" value={data.sponsors_number} type="text" className=" bg-transparent text-white outline-none flex-1 border-b border-b-white" placeholder="Enter Your Sponsor's Phone number" />
              </div>
              <div className="flex space-x-5 w-[100%] px-3 items-center">
                 <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">5</div>
                 <input onChange={setValue} name="nextofkin_number" value={data.nextofkin_number} type="text" className=" bg-transparent text-white outline-none flex-1 border-b border-b-white" placeholder="Enter Next of Kin's Phone number" />
              </div>
              
          </div>
        </div>
    )
}
Form2.propTypes ={
    data:PropTypes.object,
    method:PropTypes.func
}
const Form3 = ({data,method})=>{
    function setValue(e){
        const {name,value} = e.target
        method(prev=>{
            return{
                ...prev,
                [name]:value
            }
        }) 
    }
  return  <div className="container mx-auto flex items-center justify-center my-3 flex-col space-y-5">
    <h2 className="text-2xl font-bold">Questionaire Section</h2>
    <div className="flex flex-col w-[100%] space-y-3 ">
        <div className="flex space-x-5 w-[100%] px-3 items-center">
           <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">1</div>
           <input type="text" name="q1" value={data.q1} onChange={setValue} className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="What is your religion?" />
        </div>
        <div className="flex space-x-5 w-[100%] px-3 items-center">
           <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">2</div>
           <input type="text" name="q2" value={data.q2} onChange={setValue} className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="What is your highest academic qualification?" />
        </div>
        <div className="flex space-x-5 w-[100%] px-3 items-center">
           <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">3</div>
           <input type="text" name="q3" value={data.q3} onChange={setValue} className=" bg-transparent text-white outline-none border-b border-b-white flex-1" placeholder="What language/languages are you fluent in?" />
        </div>
        <div className="flex space-x-5 w-[100%] px-3 items-center">
           <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">4</div>
           <input type="text" name="q4" value={data.q4} onChange={setValue} className=" bg-transparent text-white outline-none flex-1 border-b border-b-white" placeholder="Comment down your marital status" />
        </div>
        <div className="flex space-x-5 w-[100%] px-3 items-center">
           <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">5</div>
           <input type="text" name="q5" value={data.q5} onChange={setValue} className=" bg-transparent text-white outline-none flex-1 border-b border-b-white" placeholder="Have you adopted a child before?" />
        </div>
        <div className="flex space-x-5 w-[100%] px-3 items-center">
           <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">6</div>
           <input type="text" name="q6" value={data.q6} onChange={setValue} className=" bg-transparent text-white outline-none flex-1 border-b border-b-white" placeholder="Any preferences for children to be matched with?"/>
        </div>
        <div className="flex space-x-5 w-[100%] px-3 items-center">
           <div className="w-[3rem] h-[3rem] rounded-full border border-white flex items-center justify-center px-4">7</div>
           <input type="text" name="q7" value={data.q7} onChange={setValue} className=" bg-transparent text-white outline-none flex-1 border-b border-b-white" placeholder="Provide your National Identification Number(NIN)" />
        </div>
    </div>
  </div>
}
Form3.propTypes ={
    data:PropTypes.object,
    method:PropTypes.func
}
const ApplicationForm = ()=>{
    const [count,setCount] = useState(0)
    const [loader,setLoader] = useState(false)
    const [form1,setForm1] = useState({
        firstname:'',
        lastname:'',
        dob:'',
        email:'',
        gender:'M',
        lga:'',
        state:''
    })
    const [form2,setForm2] = useState({
        phone:'',
        home_address:'',
        work_address:'',
        sponsors_number:''
    })
    const [form3,setForm3] = useState({
        q1:'',
        q2:'',
        q3:'',
        q4:'',
        q5:'',
        q6:'',
        q7:''
    })
    function setCounter(type){
    if(type=="next"){
        switch (count) {
            case 0:
                if(Object.values(form1).findIndex(v=>v=='')>-1){
                    Swal.fire({
                        icon:'error',
                        titleText:'Oops!',
                        text:'All fields are required!'
                    })
                }else{
                    setCount(count+1)
                }
                break;
                case 1:
                    if(Object.values(form2).findIndex(v=>v=='')>-1){
                        Swal.fire({
                            icon:'error',
                            titleText:'Oops!',
                            text:'All fields are required!'
                        })
                    }else{
                        setCount(count+1)
                    }
                    break;
            default:
                break;
        }
    }else{
        setCount(count-1)
    }
    }
    return(
        <div className="w-[100%] h-[100vh]">
<Navbar/>
<div className="mt-5 w-[100%] h-[2px] bg-white flex container mx-auto">
    <div className={`w-1/3 h-[100%] ${count==0?'bg-red':''}`}></div>
    <div className={`w-1/3 h-[100%] ${count==1?'bg-red':''}`}></div>
    <div className={`w-1/3 h-[100%] ${count==2?'bg-red':''}`}></div>
</div>
{count ==0?(<><Form1 data={form1} method={setForm1}/>
<div className="flex items-center justify-center">
<PrimaryButton onSubmit={setCounter.bind(this,"next")} style={'bg-cyan-500'}>Next</PrimaryButton>
</div></>):count ==1?(<><Form2 data={form2} method={setForm2}/>
<div className="flex items-center justify-center">
<PrimaryButton onSubmit={()=>{
    setCounter("back")
}} style={'bg-cyan-500'}>Back</PrimaryButton>
<PrimaryButton onSubmit={setCounter.bind(this,"next")} style={'bg-cyan-500'}>Next</PrimaryButton>
</div></>):(<>
    <Form3 data={form3} method={setForm3}/>
<div className="flex items-center justify-center">
<PrimaryButton onSubmit={()=>{
    setCounter("back")
}} style={'bg-cyan-500'}>Back</PrimaryButton>
     {loader
          ? <div className='flex justify-center items-center'>
              <ScaleLoader
                color={'#fff'}
                loading={loader}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          : <PrimaryButton onSubmit={async()=>{
            setLoader(true)
            const res = await create (
                    'parents',
                    {
                      ...form1,
                      ...form2,
                      ...form3
                    },
                    setLoader
                  );
                  if(res&& typeof res !== 'undefined'){
setLoader(false)
                      Swal.fire({
                          icon:'success',
                          text:'Response has been submitted',
                          title:"Success",
                          titleText:'Great!'
                      })
                  }
        }}  style={'bg-cyan-500'}>Submit</PrimaryButton>}
        
</div>
</>)}
        </div>
    )
}

export default ApplicationForm