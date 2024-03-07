import {Link} from 'react-router-dom';

const Footer = ()=>{
    return (
        <footer className="bg-purple">
        <div className="flex flex-col items-center justify-between px-6 py-10 mx-auto">
        <div className="flex space-x-12 text-white">
                    <Link to={'/'} className="text-white">Home</Link>
                    <Link to={'/apply'} className="text-white">Apply</Link>
                    <Link to={'/login'} className="text-white">Log In</Link>
                </div>
                <p className="mx-auto my-2 text-center text-white">  Copyright &copy; 2024, All Rights Reserved.</p>
        </div>
    </footer>
    )
}
export default Footer