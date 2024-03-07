import PropTypes from 'prop-types'

export const PrimaryButton = ({children,style,onSubmit})=>{
   return(
    <button onClick={onSubmit} className={`cursor-pointer text-white bg-purple px- py-3 text-center transition-all ${style}`}>
        {children}
    </button>
   )
}
PrimaryButton.propTypes = {
    children:PropTypes.node,
    style:PropTypes.string,
    onSubmit:PropTypes.func
}

