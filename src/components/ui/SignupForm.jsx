import {useState} from 'react';
import {PrimaryButton} from './Buttons';
import HashLoader from 'react-spinners/HashLoader';
import toast,{Toaster} from 'react-hot-toast'
import { signupUser } from '../../services/firebase';
import {useNavigate} from 'react-router-dom'



const SignupForm = () => {
const navigate = useNavigate()
  const [input, setInput] = useState ({
    email: '',
    password: '',
    fullname:''
  });
  const [loader, setLoader] = useState (false);
  function handleInput (e) {
    const {value, name} = e.target;
    setInput (prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
 function handleSubmit (){
    setLoader(true)
    if(Object.values(input).findIndex((v)=>v == '')>-1){
        setLoader(false)
        return toast.error("All fields are required")
    }else if(input.password.length<8){
        setLoader(false)
        return toast.error("Password must be atleast 8 characters") 
    }
    signupUser(input,setLoader)
    .then(user=>{
     if(user&& user.email === input.email.toLowerCase()){
        setInput({email:'',password:'',fullname:''})
        toast.success("Signup Successful")
        localStorage.setItem("username",input.fullname)
        setTimeout(()=>{
            navigate("/login")
        },1000)
     }

    })
  }
  return (
    <div className="flex justify-center items-center mt-28 px-10 w-[100%] h-[25rem]">
        <Toaster
        position='top-center'
        reverseOrder={false}/>
      <div className="flex flex-col justify-center bg-transaparent w-[30rem] h-[max-content] space-y-9 rounded-lg shadow-lg shadow-slate-700 px-8">
        <h2 className="text-2xl font-bold text-center">Get Started</h2>
        <div className="w-[100%]">
          <input
            onChange={handleInput}
            type="text"
            className="w-[100%] border-b-2 bg-transparent border-b-white h-[3rem] outline-none"
            name="fullname"
            value={input.fullname}
            placeholder="Enter Fullname"
          />
        </div>
        <div className="w-[100%]">
          <input
            onChange={handleInput}
            type="text"
            className="w-[100%] border-b-2 bg-transparent border-b-white h-[3rem] outline-none"
            name="email"
            value={input.email}
            placeholder="Enter email Address"
          />
        </div>
        <div className="w-[100%]">
          <input
            onChange={handleInput}
            type="password"
            className="w-[100%] border-b-2 bg-transparent border-b-white h-[3rem] outline-none"
            name="password"
            value={input.password}
            placeholder="Enter Password"
          />
        </div>
        {loader
          ? <div className='flex justify-center items-center'>
              <HashLoader
                color={'#fff'}
                loading={loader}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          : <PrimaryButton onSubmit={handleSubmit}>Signup</PrimaryButton>}

      </div>
    </div>
  );
};
export default SignupForm;
