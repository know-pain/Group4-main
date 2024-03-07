import PropTypes from 'prop-types'
import { PrimaryButton } from './Buttons'

const Card = ({image,header,price,oldPrice})=>{
    return(
        <div className="w-[100%] h-[19.8rem] md:h-[max-content] pb-2 flex flex-col bg-glassy rounded-lg overflow-hidden shadow-sm shadow-lightGray">
         <img src={image} className='w-[100%] h-[12rem]' alt="" />
         <div className='flex flex-col space-y-1 md:space-y-0 px-3'>
          <h2 className='text-md font-bold text-center'>{header}</h2>
          <div className='flex justify-between md:px-6'>
           <h5 className='text-[0.8rem] md:text-sm font-bold'>Current Price:</h5>
           <p className='text-[0.7rem] md:text-lg text-green-500'>₦ {price.toLocaleString({})}</p>
          </div>
          <div className='flex justify-between md:px-6 '>
           <h5 className='text-[0.8rem] md:text-sm font-bold'>Previous Price:</h5>
           <s className='text-[0.7rem] md:text-lg text-red'>₦ {oldPrice.toLocaleString({})}</s>
          </div>
          <PrimaryButton>Report Sales</PrimaryButton>
         </div>
        </div>
    )
}

export default Card

Card.propTypes = {
    image:PropTypes.any,
    header:PropTypes.any,
    price:PropTypes.any,
    oldPrice:PropTypes.any,
}