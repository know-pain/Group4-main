import {useState} from 'react';
import {PrimaryButton} from './Buttons';
import ScaleLoader from 'react-spinners/ScaleLoader';
import toast,{Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom';
import { signinUser } from '../../services/firebase';
import { useAuth } from '../../contexts/AuthContext';
import {useNavigate} from 'react-router-dom'

const LoginForm = () => {
  const [input, setInput] = useState ({
    email: '',
    password: '',
  });
  const auth = useAuth()
  const navigate = useNavigate()
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
    signinUser(input,setLoader)
    .then(user=>{
        if(user&& user.email === input.email.toLowerCase()){
           setInput({email:'',password:''})
           toast.success("Signin Successful")
           auth.login(user.accessToken)
           setTimeout(()=>{
           navigate("/dashboard")
           },1000)
        }
   
       })
  }
  return (
    <div className="flex justify-center items-center mt-28 px-10 w-[100%] h-[100vh]">
        <Toaster
        position='top-center'
        reverseOrder={false}/>
      <div className="flex flex-col justify-center bg-transaparent w-[30rem] h-[max-content] space-y-9 rounded-lg shadow-lg shadow-slate-700 px-8 py-4">
        <h2 className="text-2xl font-bold text-center">Welcome Back {localStorage.getItem("username")}</h2>
        <div className="w-[100%]">
          <input
            onChange={handleInput}
            type="text"
            className="w-[100%] border-2 px-3 bg-transparent border-b-white h-[3rem] outline-none"
            name="email"
            value={input.email}
            placeholder="Enter email Address"
          />
        </div>
        <div className="w-[100%]">
          <input
            onChange={handleInput}
            type="password"
            className="w-[100%] border-2 px-3 bg-transparent border-b-white h-[3rem] outline-none"
            name="password"
            value={input.password}
            placeholder="Enter Password"
          />
        </div>
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
          : <PrimaryButton onSubmit={handleSubmit}>Sigin</PrimaryButton>}
      </div>
    </div>
  );
};
export default LoginForm;
