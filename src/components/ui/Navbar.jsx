import {PrimaryButton} from './Buttons';
import {Link} from 'react-router-dom';
import {useAuth} from '../../contexts/AuthContext';
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  const auth = useAuth ();
  return (
    <header className="bg-white w-[100%] h-[5rem] mx-auto shadow-lg flex items-center justify-between">
      <div className='flex items-center'>
      <Link to={'/'} className=' flex items-center'>
      <div className><img src={logo} alt='logo' width={80}/></div>      
      <h2 className='text-darkGreen text-2xl hidden md:flex font-bold'>CHILD ADOPTION PROGRAM</h2>
      <h2 className='text-indigo text-2xl font-bold'></h2>
      </Link>
      </div>
      <nav className="flex items-center px-8 md:px-12 space-x-5">
        <Link to={'/apply'} className="text-black">Apply</Link>
        <PrimaryButton style={'px-3 cursor-pointer shadow-md'}>
          {auth.isAuthenticated
            ? <Link to={'/dashboard'}>Account</Link>
            : <Link to={'/login'}>Admin Log In</Link>}
        </PrimaryButton>
      </nav>
    </header>
  );
};
export default Navbar;
