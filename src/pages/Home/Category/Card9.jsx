import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Rating } from "@mui/material";

const Card9 = ({ toy }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="max-[350px] md:w-[350px] bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
      {/* Card Image */}
      <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={toy.picture} alt="" />
      {/* Card Heading */}
      <div className="space-y-2">
        <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">{toy.name}</h2>
        {/* rating  */}
        <p className='flex gap-2 items-center'><Rating name="half-rating-read" defaultValue={toy.rating} precision={0.1} readOnly />  <span>{toy.rating}</span></p>




      </div>
      {/* Price and action button */}
      <div className="mt-5 flex justify-between items-center font-medium">
        <h2 className="md:text-xl text-gray-800">${toy.price}</h2>
        {user ? (
          <Link to={`/categories/${toy._id}`}>
            <button className="bg-[#ff6e13]  text-white px-4 py-2 rounded-md mt-4">
              View Details
            </button>
          </Link>
        ) : (
          <Link className="" to={`/categories/${toy._id}`}>
            <button
              className="rounded-lg border-0  text-white bg-[#ff6e13] px-5 py-2.5 mt-4 hover:bg-black"
              onClick={() => {
                Swal.fire({
                  position: "top-center",
                  icon: "error",
                  title: "Please login first",
                  showConfirmButton: false,
                  timer: 3000,
                });
              }}
            >
              View Details
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Card9;