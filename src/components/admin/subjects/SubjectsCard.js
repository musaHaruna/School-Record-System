import { Link } from "react-router-dom";
import { IoMdBook, IoMdBookmark } from "react-icons/io";
import "./ClassesCard.css";

const SubjectsCard = (props) => {
  return (
    <div className="classesCard border-gray-200 w-[300px]">
      <div className="classesCard-top">
        <img
          src={
            "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
          alt="img"
          className="object-cover w-full rounded-t-xl h-[160px] "
        />
      </div>

      <div className="classesCard-body">
        <h2 className="font-bold">{props.title}</h2>
        {/* <p className="font-semibold">All Subjects </p> */}
      </div>

      <div className="classesCard-details">
        <p>
          <IoMdBook size={24} className="text-[#687EFF]" />5 Classes
        </p>
        <span>
          <IoMdBookmark size={24} className="text-[#2f309b]" /> 14 Subjects
        </span>
      </div>

      {/* <hr />
      <div className="classesCard-button flex justify-end p-2">
        <Link to="">
          <span>View Class </span>
        </Link>
      </div> */}
    </div>
  );
};

export default SubjectsCard;
