import Card from "../ui/Card";
import img1 from '../../assets/images/petrol.jfif'
import { useEffect,useState } from "react";
import { calc, fetch } from "../../services/firebase";
import HashLoader from 'react-spinners/HashLoader';

const Commodities = () => {
  const [products,setProducts] = useState(null)
  async function fetchProducts () {
    const res = await fetch ('parents');
    if(res){
      const data = await calc(res)
      setparents (data);
    }else{
      setProducts([])
    }
    }
  useEffect (() => {
    fetchProducts ();
  }, []);
  return (
    <section id="commodities">
      <div className="flex flex-col mt-12 py-8">
        <div className="flex items-center flex-col py-5">
          <span className="w-[2.5rem] h-[4px] bg-gradient-to-r from-pink to-indigo rounded-full" />
          <h2 className="text-md font-bold">Commodities</h2>
        </div>

        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 justify-center items-center gap-3 px-4 md:px-0">
        {!products?<> <div className="flex justify-center items-center">
                <HashLoader
                  color={'#ccc'}
                  loading={true}
                  size={60}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div></>:products.map((d,i)=>{
       
          return(
            <Card key={i} image={d.image} header={d.name} price={parseFloat(d.newPrice)} oldPrice={d.price}/>
          )
        })}
        </div>
      </div>

    </section>
  );
};
export default Commodities;
