import PropTypes from 'prop-types' 

const TeamCard = ({name,role,regNo,info})=>{
    return(
        <div className="w-[100%] h-[15rem] flex flex-col bg-gradient-to-r from-indigo to-pink hover:from-pink hover:to-indigo shadow-md items-center space-y-3 rounded-lg">
            <div className="w-[5rem] h-[5rem] rounded-full bg-gradient-to-r from-indigo to-pink hover:from-pink hover:to-indigo -mt-8 shadow-lg flex items-center justify-center">
               <img src= "/src/components/ui/pngegg.png"></img>
            </div>
            <div className="flex flex-col items-center text-center text-white space-y-1">
            <h2 className="text-xl font-bold">{name}</h2>
            <h3 className="text-md font-bold">{role}</h3>
            <h4 className="text-md font-bold">{regNo}</h4>
            <p className="text-sm font-semibold">{info}</p>
            </div>
        </div>
    )
}
TeamCard.propTypes = {
    name:PropTypes.any,
    role:PropTypes.any,
    regNo:PropTypes.any,
    info:PropTypes.any,
}
export default TeamCard
