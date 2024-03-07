import {PrimaryButton} from '../components/ui/Buttons';
import {useAuth} from '../contexts/AuthContext';
import toast, {Toaster} from 'react-hot-toast';
import Modal from 'react-modal';
import {useState, useEffect} from 'react';
import {fetch} from '../services/firebase';
import ScaleLoader from 'react-spinners/ScaleLoader';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    color: '#ccc',
    borderRadius: 10,
  },
};
Modal.setAppElement ('#root');

const Dashboard = () => {
  const auth = useAuth ();
  const [modal, setmodal] = useState (false);
  const [selected,setSelected] = useState(null)
  const [products, setProducts] = useState (null);
  const [loader, setLoader] = useState (false);
  async function fetchProducts () {
    const res = await fetch ('parents');
    if(res){
      const data = Object.values (res);
      data.forEach ((d, i) => {
        d['id'] = Object.keys (res)[i];
      });
      setProducts (data);
    }else{
      setProducts([])
    }
    }
  useEffect (() => {
    fetchProducts ();
  }, [products]);
  function activateModal () {
    setmodal (() => {
      return !modal;
    });
  }
  if (products == null) {
    return (
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <ScaleLoader
          color={'#ccc'}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <section className=" w-[100%]  min-h-[100%] md:h-[100vh]">
      <Toaster position="top" />
      <Modal
        isOpen={modal}
        onRequestClose={activateModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-8 space-y-2 bg-purple text-white p-8 h-[80vh] overflow-y-scroll md:overflow-hidden">
   <div className='flex flex-col space-y-3'>
   <div className='flex items-center space-x-4'>
        <div className='w-[3rem] h-[3rem] border border-white rounded-full flex items-center justify-center'>1</div>
        <h2>User Information:</h2>
        </div>
        <hr/>
     <div className='flex flex-col'>
     <div className='flex space-x-2'>
         <h2>First Name:</h2>
         <p>{selected?.firstname}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>Last Name:</h2>
         <p>{selected?.lastname}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>Email:</h2>
         <p>{selected?.email}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>Gender:</h2>
         <p>{selected?.gender}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>Date Of Birth:</h2>
         <p>{selected?.dob}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>Home Address:</h2>
         <p>{selected?.home_address}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>Work Address:</h2>
         <p>{selected?.work_address}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>Phone Number:</h2>
         <p>{selected?.phone}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>Sponsor&apos;s Number:</h2>
         <p>{selected?.sponsors_number}</p>
       </div>
       <div className='flex space-x-2'>
         <h2> of Kin&apos;s Number:</h2>
         <p>{selected?.nextofkin_number}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>State Of Origin:</h2>
         <p>{selected?.state}</p>
       </div>
       <div className='flex space-x-2'>
         <h2>LGA Of Origin:</h2>
         <p>{selected?.lga}</p>
       </div>
     </div>
   </div>
<div className='flex flex-col space-y-3'>
     
<div className='flex items-center space-x-4'>
        <div className='w-[3rem] h-[3rem] border border-white rounded-full flex items-center justify-center'>2</div>
        <h2>Answers to Questionaire:</h2>
        </div>
     <hr/>
     <div className='flex flex-col space-y-4'>
       <div className='flex flex-col'>
          <div className='flex space-x-3'>
            <h2>Question:</h2>
            <h2>What is your religion?</h2>
          </div>
          <div className='flex space-x-3'>
          <h2>Answer:</h2>
          <h2>{selected?.q1}</h2>
          </div>
       </div>
       <div className='flex flex-col'>
          <div className='flex space-x-3'>
            <h2>Question:</h2>
            <h2>What is your highest academic qualification?</h2>
          </div>
          <div className='flex space-x-3'>
          <h2>Answer:</h2>
          <h2>{selected?.q2}</h2>
          </div>
       </div>
       <div className='flex flex-col'>
          <div className='flex space-x-3'>
            <h2>Question:</h2>
            <h2>What language/languages are you fluent in?</h2>
          </div>
          <div className='flex space-x-3'>
          <h2>Answer:</h2>
          <h2>{selected?.q3}</h2>
          </div>
       </div>
       <div className='flex flex-col'>
          <div className='flex space-x-3'>
            <h2>Question:</h2>
            <h2>What is your marital status?</h2>
          </div>
          <div className='flex space-x-3'>
          <h2>Answer:</h2>
          <h2>{selected?.q4}</h2>
          </div>
       </div>
       <div className='flex flex-col'>
          <div className='flex space-x-3'>
            <h2>Question:</h2>
            <h2>Previously adopted a child?</h2>
          </div>
          <div className='flex space-x-3'>
          <h2>Answer:</h2>
          <h2>{selected?.q5}</h2>
          </div>
       </div>
       <div className='flex flex-col'>
          <div className='flex space-x-3'>
            <h2>Question:</h2>
            <h2>Preferences for children to be adopted:</h2>
          </div>
          <div className='flex space-x-3'>
          <h2>Answer:</h2>
          <h2>{selected?.q6}</h2>
          </div>
       </div>
       <div className='flex flex-col'>
          <div className='flex space-x-3'>
            <h2>Question:</h2>
            <h2>NIN</h2>
          </div>
          <div className='flex space-x-3'>
          <h2>Answer:</h2>
          <h2>{selected?.q7}</h2>
          </div>
       </div>
     </div>
</div>

        </div>
        <div className='flex justify-center'>
        <PrimaryButton style={'bg-blacki'} onSubmit={()=>{
            setmodal(false)
          }}>
Close
          </PrimaryButton>
        </div>
      </Modal>
      <div className="container mx-auto px-8 py-4 flex flex-col space-y-10">
        <div className="flex space-y-3 md:space-y-0 md:space-x-4 flex-col md:flex-row text-black">
          <div className="md:w-1/3 cursor-pointer bg-lightGray hover:shadow-cyan-500/50 px-3 py-8 flex flex-col space-y-2 shadow-lg">
            <h2>Applied Personnel:</h2>
            <p className="w-[3rem] h-[3rem] rounded-full border-2 border-black flex justify-center items-center">
              {products.length}
            </p>
          </div>
          <div className="md:w-1/3 bg-lightGray shadow-lg hover:shadow-blue-500/50 px-3 py-8 cursor-pointer flex flex-col space-y-2">
            <h2>Logout:</h2>
            <div className="w-[100%]">
              <PrimaryButton onSubmit={()=>{
                auth.logout()
              }} style={'px-4'}>
                Log out
              </PrimaryButton>
            </div>
          </div>
          <div className="md:w-1/3 bg-lightGray shadow-lg hover:shadow-lightPurple px-3 py-8 cursor-pointer flex flex-col space-y-2">
            <h2>Current Login Date:</h2>
            <p className="py-3">{new Date (Date.now ()).toDateString ()}</p>
          </div>
        </div>
        <div className="px-3 bg-glassy w-[100%] h-[max-content] flex rounded-lg flex-col py-4">
          <h2 className="text-lg font-bold flex justify-center">
            Applied Personels
          </h2>
          <div className='  overflow-scroll md:overflow-visible w-[100%]'>
          <table className="table-auto w-[100%]">
            <thead>
              <tr key="1" className="py-4 border-b-black border-b-2">
                <td>First Name</td>
                <td>Last Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>Details</td>
              </tr>
            </thead>
            <tbody>
              {products.map ((d, i) => {
                return (
                  <tr key={i} className="py-4 border-b-lightGray border-b-2">
                    <td>{d.firstname}</td>
                    <td>{d.lastname}</td>
                    <td>{d.phone}</td>
                    <td>{d.email}</td>
                    <td>
                      <PrimaryButton onSubmit={()=>{
                        setSelected(()=>{
                          return products[i]
                        })
                        setmodal(true)
                      }}>
                        View
                      </PrimaryButton>
                    </td>
                  </tr>
                );
              })}

            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dashboard;
