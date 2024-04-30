"use client"
import { BiMessageDetail } from "react-icons/bi";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import ContactForm from "../Navbar/ContactForm";

const BottomNav = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const toggleContactForm = () => {
        setIsContactFormOpen(!isContactFormOpen);
    };

    return (
        <>
            <div className="grid grid-cols-3 fixed bottom-0 left-0 right-0 border-t-[1px] border-[#1F2937] text-white font-medium text-center w-screen m-0 p-0 h-16 bg-btnblue">
                <div className="flex flex-col justify-center border-r items-center" onClick={toggleContactForm}>
                    <BiMessageDetail className="h-6 w-6" />
                    <span>Send Query</span>
                </div>
                <div className="flex flex-col justify-center border-r items-center">
                    <IoMdCall className="h-6 w-6" />
                    <a href="tel:+919372230856">Call us</a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaWhatsapp className="h-6 w-6" />
                    <a href="https://wa.me/919372230856?">Whatsapp</a>
                </div>
            </div>
            {/* Render ContactForm conditionally */}
            {isContactFormOpen && (
                <ContactForm isOpen={isContactFormOpen} closeModal={toggleContactForm} />
            )}
        </>
    );
};

export default BottomNav;
