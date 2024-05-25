import Image from "next/image";
import CallNowButton from "../components/CallButton";
import Insta from "../components/Insta";
import Join from "../components/Joinus";
import WhatsAppButton from "../components/WhatsappButton";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | CarHireMumbai",
};
interface DataType {
  heading: string;
  heading2: string;
  imgSrc: string;
  name: string;
  rating: number;
  msg: string;
  href?: string;
}

const postData: DataType[] = [
  {
    heading: "Mumbai Darshan",
    heading2: "Tour Package",
    name: "Experience Mumbai's highlights with our Mumbai Darshan Tour.",
    imgSrc: "/images/services/mumbai.jpg",
    rating: 4.7,
    msg: "Hello,I,m looking for a tour package for Mumbai Darshan. Can you please provide me with the details?",
    href: "/mumbai-darshan-cab",
  },
  {
    heading: "Mumbai to Shirdi",
    heading2: "Cab Service",
    name: "Shirdi: Spiritual pilgrimage, divine grace. Discover sacred wonders",
    imgSrc: "/images/services/shirdi.jpg",
    rating: 4.8,
    msg: "Hello,I,m looking for cab service from Mumbai to Shirdi. Can you please provide me with the details?",
    href: "/mumbai-to-shirdi-cab",
  },
  {
    heading: "Mumbai to Lonavala",
    heading2: "Cab Service",
    name: "Lonavala : Sacred sites, profound spirituality. Experience divine connection.",
    imgSrc: "/images/services/lonavala.jpg",
    rating: 4.9,
    msg: "Hello,I,m looking for cab service from Mumbai to Lonavala. Can you please provide me with the details?",
    href: "/mumbai-to-lonavala-cab",
  },
  {
    heading: "Mumbai to Pune",
    heading2: "Cab Service",
    name: "Pune: Sacred sites, profound spirituality. Experience divine connection.",
    imgSrc: "/images/services/puneImg.jpg",
    rating: 4.9,
    msg: "Hello,I,m looking for cab service from Mumbai to Pune. Can you please provide me with the details?",
    href: "/mumbai-to-pune-cab",
  },

  {
    heading: "Mumbai to Nashik",
    heading2: "Cab Service",
    name: "Nashik: Spiritual pilgrimage, divine grace. Discover sacred wonders",
    imgSrc: "/images/services/threeJyotirlinga.jpg",
    rating: 4.7,
    msg: "Hello,I,m looking for cab service from Mumbai to Nashik. Can you please provide me with the details?",
  },

  {
    heading: "Mumbai to Mahabaleshwar",
    heading2: "Cab Service",
    name: "Mahabaleshwar: Spiritual pilgrimage, divine grace. Discover sacred wonders",
    imgSrc: "/images/services/MahabaleshwarImg.jpg",
    rating: 4.8,
    msg: "Hello,I,m looking for cab service from Mumbai to Mahabaleshwar. Can you please provide me with the details?",
  },
];

const Services = () => {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-12 mb-10 md:my-16 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h3 className="text-center text-blue mt-20  text-lg tracking-widest">
          Our Services
        </h3>
        <div className="text-center">
          <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">
            Your travels, our trusted routes.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-2 gap-x-5 lg:gap-x-5">
          {postData.map((items, i) => (
            <div key={i}>
              <div className="bg-white m-3 px-3 pt-3 pb-4 my-5 shadow-lg rounded-2xl">
                <div className="relative rounded-3xl">
                  <Image
                    src={items.imgSrc}
                    alt="gaby"
                    width={389}
                    height={262}
                    className="m-auto object-cover rounded-xl"
                  />
                </div>
                <div className="px-3">
                  <h4 className="text-2xl font-bold pt-6 text-black">
                    {items.heading}
                  </h4>
                  <h4 className="text-2xl font-bold pt-1 text-black">
                    {items.heading2}
                  </h4>
                  <div>
                    <h3 className="line-clamp-2 text-base font-normal pt-2 opacity-75">
                      {items.name}
                    </h3>
                  </div>
                  <div className="flex justify-between gap-4 mt-3 items-center">
                    <Link href={items.href || ""} className="w-full">
                      <button className="p-3 lg:p-4 w-full focus:outline-none focus:shadow-outline text-black border border-Blueviolet bg-white hover:bg-blue hover:text-white hover:border-none duration-150 ease-in-out rounded-xl">
                        View Details
                      </button>
                    </Link>
                    <Link
                      href={`https://wa.me/7021754006?text=${items.msg}`}
                      className="w-full"
                    >
                      <button className="p-3 lg:p-4 w-full focus:outline-none focus:shadow-outline text-white bg-blue hover:bg-midnightblue duration-150 ease-in-out rounded-xl">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Join />
      <Insta />
      <WhatsAppButton textMessage="I'm interested in your car for sale" />
      <CallNowButton />
    </div>
  );
};

export default Services;
