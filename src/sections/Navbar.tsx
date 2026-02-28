"use client";
import Image from "next/image";
import logo from '@/assets/images/logo.svg'
import Button from "@/components/Button";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (<>

        <section className="py-4 lg:py-8 fixed w-full top-0 z-50 ">
            <div className="container max-w-5xl">
                <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                    <div className="grid grid-cols-2 lg:grid-cols-3 p-2 items-center px-4 md:px-2">
                        <div>
                            <Image src={logo} alt="logo" className="h-9 md:h-auto w-auto " />
                        </div>
                        <div className="hidden lg:flex justify-center items-center">
                            <nav className="flex gap-6 font-medium">
                                {navLinks.map((link) => (
                                    <a key={link.label} href={link.href}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="flex justify-end gap-4 ">
                            <svg onClick={() => setIsOpen(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu md:hidden">
                                <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left", isOpen && "rotate-45 -translate-y-1 transition")}></line>
                                <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen ? "opacity-0" : "opacity-100")} ></line>
                                <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left", isOpen && "-rotate-45 translate-y-1 transition")}></line>

                            </svg>
                            <Button variant="secondary" className="hidden md:block ">Log In</Button>
                            <Button variant="primary" className="hidden md:block ">Sign Up</Button>
                        </div>

                    </div>
                    <AnimatePresence>
                        {
                            isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className=" overflow-hidden">
                                    <div className="flex flex-col  items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a className="py-2" key={link.label} href={link.href}>
                                                {link.label}
                                            </a>

                                        ))}
                                        <Button variant="secondary" className="">Log In</Button>
                                        <Button variant="primary" className="">Sign Up</Button>
                                    </div>
                                </motion.div>)
                        }
                    </AnimatePresence>
                </div>

            </div>
        </section>
        <div className="pb-[86px] md:pb-[98px] lg:[130px]"></div>

    </>)


}
