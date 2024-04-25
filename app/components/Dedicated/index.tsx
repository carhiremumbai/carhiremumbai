import Image from "next/image";
import Link from "next/link";

const Dedicated = () => {
    return (
        <div className="relative">

            <Image src="/images/dedicated/spiral.svg" height={272} width={686} alt="spiral-design" className="absolute left-0 hidden lg:block -z-10" />

            <div className='mx-auto max-w-7xl px-4 md:my-40 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 items-center md:grid-cols-2 my-8'>

                    {/* COLUMN-1 */}
                    <div>
                        <Image src="/images/dedicated/mumbai.jpg" alt="man-icon" width={500} height={530} className="mx-auto md:mx-0 rounded-2xl " />
                    </div>

                    {/* COLUMN-2 */}
                    <div className="relative">
                        {/* <Image src="images/dedicated/comma.svg" alt="comma-image" width={200} height={106} className="absolute comma-pos hidden lg:block" /> */}
                        <h2 className="text-4xl lg:text-5xl font-bold sm:leading-tight text-center lg:text-start">Experience Mumbai Like Never Before with Our Exclusive <span className="text-blue underline" >Mumbai Darshan Tour Package!</span></h2>
                        <p className="font-medium text-lightblack text-2xl mt-5 text-justify lg:text-justify">Get ready to experience the city like never before with our exclusive <span className="underline" >Mumbai Darshan Tour Package</span>. During this tour, you will explore iconic landmarks such as the Gateway of India, Elephanta Caves, Chhatrapati Shivaji Maharaj Terminus, and Marine Drive. You will also get to taste delicious street food at Chowpatty Beach, shop till you drop at Colaba Causeway, and witness the bustling local markets. Our experienced tour guides will share interesting facts and stories about Mumbai&apos;s rich history and culture. So come join us and immerse yourself in the vibrant spirit of this incredible city. Book your Darshan Tour Package today!</p>
                        {/* <p className="text-2xl font-semibold mt-12 lg:ml-32 preline text-center lg:text-start"> Cathy Hills, CEO</p> */}
                        <Link href="https://wa.me/919076182397?text=Hi, I'm interested in the Mumbai Darshan tour package. Can you provide me with the details" className="md:block hidden mt-8 text-center lg:text-start">
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Book Now</button>
                        </Link>
                    </div>
                    <div className="text-center md:hidden block mt-5 lg:text-start">
                        <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Book Now</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
