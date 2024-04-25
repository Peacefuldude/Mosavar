"use client";
import { cn } from "@/utils/tailwind-utils";
import Image from "next/image";
import React from "react";
import { useState } from "react";
const Qanda = () => {
    // Qanda states and Func
    const [btnBlue, setBtnBlue] = useState(false);
    const [btnRed, setBtnRed] = useState(false);
    const [btnBlack, setBtnBlack] = useState(false);
    const [btnYellow, setBtnYellow] = useState(false);

    const heroHandler = (item: string) => {
        if (item === "blue") {
            setBtnBlue(!btnBlue);
            setBtnBlack(false);
            setBtnRed(false);
            setBtnYellow(false);
        } else if (item === "red") {
            setBtnBlue(false);
            setBtnBlack(false);
            setBtnRed(!btnRed);
            setBtnYellow(false);
        } else if (item === "black") {
            setBtnBlue(false);
            setBtnBlack(!btnBlack);
            setBtnRed(false);
            setBtnYellow(false);
        } else {
            setBtnBlue(false);
            setBtnBlack(false);
            setBtnRed(false);
            setBtnYellow(!btnYellow);
        }
    };

    return (
        <div className="w-full flex flex-col justify-start items-center py-20">
            <h2 className="max-sm:text-2xl font-bold text-4xl mb-6">
                سوالی هست؟
            </h2>
            <span className="max-md:px-36 max-sm:px-10 text-md text-right text-gray-600 mb-12">
                در اینجا می توانید سوالات متداول را بخوانید و در صورتی که جواب
                خود را نیافتید با ما ارتباط بگیرید
            </span>
            <div
                className={cn(
                    "max-lg:w-[70%] max-md:w-[60%] max-sm:w-[90%] max-sm:px-4 w-[50%] overflow-hidden transition-all duration-[600ms] inline-block max-h-[6rem] flex-col justify-center items-center px-10 py-6 bg-black rounded-3xl mb-6",
                    btnBlue ? "max-h-[11rem]" : ""
                )}
            >
                <div className="w-full flex flex-row-reverse justify-between items-center">
                    <h2 className="font-bold text-lg text-white">
                        کیفیت قاب و فیگور ها چطور هست؟
                    </h2>
                    <button
                        onClick={() => heroHandler("blue")}
                        className="rounded-full border-2 border-zinc-400 p-2"
                    >
                        {btnBlue ? (
                            <Image
                                src="/singlearrowup.png"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        ) : (
                            <Image
                                src="/singlearrow.png"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        )}
                    </button>
                </div>
                <div>
                    <p className="text-white text-right mt-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quasi labore ab, atque voluptas rem perferendis.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "max-lg:w-[70%] max-md:w-[60%] max-sm:w-[90%] max-sm:px-4 w-[50%] overflow-hidden transition-all duration-[600ms] inline-block max-h-[6rem] flex-col justify-center items-center px-10 py-6 bg-black rounded-3xl mb-6",
                    btnRed ? "max-h-[11rem]" : ""
                )}
            >
                <div className="w-full flex flex-row-reverse justify-between items-center">
                    <h2 className="font-bold text-lg text-white">
                        کیفیت قاب و فیگور ها چطور هست؟
                    </h2>
                    <button
                        onClick={() => heroHandler("red")}
                        className="rounded-full border-2 border-zinc-400 p-2"
                    >
                        {btnRed ? (
                            <Image
                                src="/singlearrowup.png"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        ) : (
                            <Image
                                src="/singlearrow.png"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        )}
                    </button>
                </div>
                <div>
                    <p className="text-white text-right mt-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quasi labore ab, atque voluptas rem perferendis.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "max-lg:w-[70%] max-md:w-[60%] max-sm:w-[90%] max-sm:px-4 w-[50%] overflow-hidden transition-all duration-[600ms] inline-block max-h-[6rem] flex-col justify-center items-center px-10 py-6 bg-black rounded-3xl mb-6",
                    btnBlack ? "max-h-[11rem]" : ""
                )}
            >
                <div className="w-full flex flex-row-reverse justify-between items-center">
                    <h2 className="font-bold text-lg text-white">
                        کیفیت قاب و فیگور ها چطور هست؟
                    </h2>
                    <button
                        onClick={() => heroHandler("black")}
                        className="rounded-full border-2 border-zinc-400 p-2"
                    >
                        {btnBlack ? (
                            <Image
                                src="/singlearrowup.png"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        ) : (
                            <Image
                                src="/singlearrow.png"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        )}
                    </button>
                </div>
                <div>
                    <p className="text-white text-right mt-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quasi labore ab, atque voluptas rem perferendis.
                    </p>
                </div>
            </div>
            <div
                className={cn(
                    "max-lg:w-[70%] max-md:w-[60%] max-sm:w-[90%] max-sm:px-4 w-[50%] overflow-hidden transition-all duration-[600ms] inline-block max-h-[6rem] flex-col justify-center items-center px-10 py-6 bg-black rounded-3xl mb-6",
                    btnYellow ? "max-h-[11rem]" : ""
                )}
            >
                <div className="w-full flex flex-row-reverse justify-between items-center">
                    <h2 className="font-bold text-lg text-white">
                        کیفیت قاب و فیگور ها چطور هست؟
                    </h2>
                    <button
                        onClick={() => heroHandler("yellow")}
                        className="rounded-full border-2 border-zinc-400 p-2"
                    >
                        {btnYellow ? (
                            <Image
                                src="/singlearrowup.png"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        ) : (
                            <Image
                                src="/singlearrow.png"
                                alt="arrow"
                                width={24}
                                height={24}
                            />
                        )}
                    </button>
                </div>
                <div>
                    <p className="text-white text-right mt-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quasi labore ab, atque voluptas rem perferendis.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Qanda;
