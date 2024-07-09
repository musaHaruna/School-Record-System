import spinner from "../../assets/svg/Spinner.svg"
const Spinner = ()=>{
    return (
        <div className="flex justify-center  items-center mx-auto ">
            <img className="text-[20px]" src={spinner} alt="loading" />
        </div>
    )
}


export default Spinner