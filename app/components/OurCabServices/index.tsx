import Link from "next/link";
import { TiStarOutline } from "react-icons/ti";

const OurCabServices = () => {
  return (
    <div className="w-full mt-10 h-fit text-center  shadow-2xl rounded-lg p-6 ">
      <p className=" mb-4 font-semibold text-2xl text-center">Our Services</p>
      <ul className="space-y-4 font-semibold ">
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline />{" "}
          <Link href="/mumbai-darshan-cab">Mumbai Darshan Cab</Link>
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline />{" "}
          <Link href="mumbai-to-pune-cab"> Mumbai To Pune Cab</Link>
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline />{" "}
          <Link href="mumbai-to-lonavala-cab"> Mumbai To Lonavala Cab</Link>
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Intercity Cab
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Airport Pickup and Drop
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Hourly Rental Cab
        </li>
        <li className="flex items-center cursor-pointer gap-4 underline">
          <TiStarOutline /> Local Cab Service
        </li>
      </ul>
    </div>
  );
};

export default OurCabServices;
