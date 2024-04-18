"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Fleets', href: '/fleets', current: false },
    { name: 'Services', href: '/services-we-provide', current: false },
    { name: 'About Us', href: '#aboutus-section', current: false },
    { name: 'Testimonial', href: '#testimonial-section', current: false },
    { name: 'FAQ', href: '#faq-section', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-2">
                    {/* Mobile Number */}
                    <div className="flex justify-center -mt-4  items-center font-normal text-black">
                        <p className="md:hidden flex items-center font-semibold text-lg "> Call now : <a href="tel:9372230856" className='mx-2 underline' >9372230856</a> / <a href="tel:7021754006" className='mx-2 underline'>7021754006</a> </p>
                    </div>
                    <div className="flex h-12 sm:h-20 items-center">

                        {/* LOGO AND LINKS */}
                        <div className="flex md:mr-4 md:flex-1 items-center md:justify-between ">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center border-right">
                                <Link href="/" className='text-2xl sm:text-4xl font-semibold text-black'>
                                    CarHireMumbai
                                </Link>
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks hover:text-black',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                            </div>
                            {/* <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>Contact us</button> */}
                            <Contactusform />
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-8 w-8 font-bold" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
