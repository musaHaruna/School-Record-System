import spinner from "../../assets/svg/SmallSpinner.svg"
const SmallSpinner = ()=>{
    return (
        <div className="flex justify-center  items-center mx-auto ">
            <img className="text-[20px]" src={spinner} alt="loading" />
        </div>
    )
}


export default SmallSpinner