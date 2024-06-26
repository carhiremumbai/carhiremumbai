import Image from "next/image";
import Contactusform from "../Navbar/Contactus";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:mt-28 mt-32 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-4'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>TRAVEL AGENCY</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                            {/* Dedicated to <br /> bring your <br /> ideas to life. */}
                            {/* Customizing <br />your perfect <br /> Mumbai journey. */}
                            Explore Mumbai: Your Time, Your Terms.
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-lg md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-5 px-10 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                            Get Started
                        </button>
                        {/* <Contactusform/> */}
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20  lg:block'>
                    <Image src="/images/banner/taxiImage.svg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
