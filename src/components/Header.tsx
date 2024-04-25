"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/tailwind-utils";

const Header = () => {
    // Hamburger Func and States
    const [menuActive, setMenuActive] = useState(false);
    const menuHangdler = () => {
        setMenuActive(!menuActive);
    };

    return (
        <div
            className={cn(
                "w-full bg-white bg-opacity-55 flex flex-col justify-between items-center relative z-10 -top-36 transition-all duration-[600ms]",
                menuActive ? "top-0" : ""
            )}
        >
            <div className="max-sm:mb-0 max-sm:mt-4 w-full flex flex-col justify-start items-end mb-8">
                <button className="text-md font-medium py-2">تابلو - </button>
                <button className="text-md font-medium py-2">
                    درباره ما -{" "}
                </button>
                <button className="text-md font-medium py-2">پرسش - </button>
            </div>
            <div className="w-full flex justify-between items-center">
                <div>
                    <p className="text-2xl font-serif font-bold tracking-wide">
                        Mosavar.
                    </p>
                </div>
                <div className="max-md:hidden w-[13rem] flex justify-between items-center">
                    <button className="text-md font-medium">پرسش</button>
                    <button className="text-md font-medium">درباره ما</button>
                    <button className="text-md font-medium">تابلو</button>
                </div>
                <div
                    onClick={menuHangdler}
                    className="max-sm:mt-20 md:hidden flex justify-center w-[3rem]"
                >
                    <Image
                        src="/arrow.png"
                        alt="arrow icon"
                        width={20}
                        height={20}
                        className="animate-bounce"
                    />
                </div>
                <div>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        Instagram
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
