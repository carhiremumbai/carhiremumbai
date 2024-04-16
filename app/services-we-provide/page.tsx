import Image from "next/image"
import CallNowButton from "../components/CallButton"
import Insta from "../components/Insta"
import Join from "../components/Joinus"
import WhatsAppButton from "../components/WhatsappButton"
import Link from "next/link"

const servicesData = [
    {
        img: "/images/services/mumbaiImg.jpg",
        heading: "Mumbai to Pune Cab",
        desc: "Experience a comfortable ride from Mumbai to Pune with our top-notch cab service.",
        msg: "Hello, I'm looking for a cab from Mumbai to Pune."
    },
    {
        img: "/images/services/mumbaiImg.jpg",
        heading: "Mumbai to Lonavala Cab",
        desc: "Travel effortlessly from Mumbai to Lonavala with our reliable and safe cab service.",
        msg: "Hello, I'm looking for a cab from Mumbai to Lonavala."
    },
    {
        img: "/images/services/mumbaiImg.jpg",
        heading: "Mumbai to Nashik Cab",
        desc: "Enjoy a smooth journey from Mumbai to Nashik with our professional cab service.",
        msg: "Hello, I'm looking for a cab from Mumbai to Nashik."
    },
    {
        img: "/images/services/mumbaiImg.jpg",
        heading: "Mumbai to Mahabaleshwar Cab",
        desc: "Make your way from Mumbai to Mahabaleshwar with our comfortable cab service.",
        msg: "Hello, I'm looking for a cab from Mumbai to Mahabaleshwar."
    },
    {
        img: "/images/services/mumbaiImg.jpg",
        heading: "Mumbai to Surat Cab",
        desc: "Travel hassle-free from Mumbai to Surat with our dependable cab service.",
        msg: "Hello, I'm looking for a cab from Mumbai to Surat."
    },
    {
        img: "/images/services/mumbaiImg.jpg",
        heading: "Mumbai to Shirdi Cab",
        desc: "Experience a relaxed ride from Mumbai to Shirdi with our professional cab service.",
        msg: "Hello, I'm looking for a cab from Mumbai to Shirdi."
    },
    {
        img: "/images/services/mumbaiImg.jpg",
        heading: "Mumbai to Alibaug Cab",
        desc: "Enjoy a seamless journey from Mumbai to Alibaug with our trusted cab service.",
        msg: "Hello, I'm looking for a cab from Mumbai to Alibaug."
    },
    {
        img: "/images/services/mumbaiImg.jpg",
        heading: "Mumbai to Satara Cab",
        desc: "Travel comfortably from Mumbai to Satara with our premium cab service.",
        msg: "Hello, I'm looking for a cab from Mumbai to Satara."
    }
];


const Services = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl px-4 py-12 mb-10 md:my-16 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>Our Services</h3>
                <div className="text-center">
                    <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Your travels, our trusted routes.</h3>
                    <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">Your travels, our trusted routes.</h3>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-2 gap-x-5 lg:gap-x-5'>
                    {servicesData.map((item, i) => (
                        <div key={i} className="bg-white m-3 px-3 pt-3 pb-3 md:my-10 shadow-lg rounded-3xl relative">
                            <Image
                                src={item.img}
                                alt="gaby"
                                width={360}
                                height={200}
                                className="object-contain rounded-3xl overflow-hidden"
                            />

                            <h4 className="text-2xl font-bold pt-6 text-black">
                                {item.heading}
                            </h4>
                            <p>{item.desc}</p>
                            <div className="flex items-center w-full  justify-between gap-4 mt-4">

                                <Link href="/" className="w-1/2" >
                                    <h3 className="bg-blue text-xl text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-2xl article-img text-center ">
                                        Book Now
                                    </h3>
                                </Link>
                                {/* <h4 className="text-2xl  font-bold text-bluish mr-4">₹{item.rate}/km</h4> */}
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
    )
}

export default Services