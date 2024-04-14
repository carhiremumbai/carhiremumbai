import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { FaCar } from "react-icons/fa";

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Cab Services.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Reliable transportation solutions tailored to your needs, ensuring comfort, safety, and convenience for every journey, anytime, anywhere.',
        link: 'Learn more'
    },
    {
        heading: "Local Rental.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: ' Explore your city hassle-free with flexible and affordable local rental options, offering convenience and comfort at your fingertips',
        link: 'Learn more'
    },
    {
        heading: "Outstation Cab.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Venture beyond city limits with ease, enjoying hassle-free outstation cab services offering comfort, safety, and scenic travel experiences.',
        link: 'Learn more'
    },
    {
        heading: "One-way Cab.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: ' Convenient one-way cab/taxi options for solo or group travel, ensuring economical fares and comfortable rides to your destination.',
        link: 'Learn more'
    },
    {
        heading: "Round Trip Cab.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Enjoy stress-free round trip cab services, offering convenience, reliability, and comfort for your complete travel itinerary, with flexible scheduling options.',
        link: 'Learn more'
    },
    {
        heading: "Airport Transfer.",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'Seamless airport transfer services ensuring timely arrivals and departures, with professional chauffeurs and comfortable vehicles for a stress-free travel experience.',
        link: 'Learn more'
    }
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-12 my-16 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>ABOUT US</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>What We Do.</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-2 gap-x-16 lg:gap-x-16'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-8 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;