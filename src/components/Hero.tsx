"use client";
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
    // Hero states and Func
    const [btnBlue, setBtnBlue] = useState(true);
    const [btnRed, setBtnRed] = useState(false);
    const [btnBlack, setBtnBlack] = useState(false);
    const [btnYellow, setBtnYellow] = useState(false);

    const heroHandler = (item: string) => {
        if (item === "blue") {
            setBtnBlue(true);
            setBtnBlack(false);
            setBtnRed(false);
            setBtnYellow(false);
        } else if (item === "red") {
            setBtnBlue(false);
            setBtnBlack(false);
            setBtnRed(true);
            setBtnYellow(false);
        } else if (item === "black") {
            setBtnBlue(false);
            setBtnBlack(true);
            setBtnRed(false);
            setBtnYellow(false);
        } else {
            setBtnBlue(false);
            setBtnBlack(false);
            setBtnRed(false);
            setBtnYellow(true);
        }
    };

    return (
        <div className="w-full flex flex-col justify-center items-center mt-28">
            <div className="flex flex-col justify-center items-center">
                {btnBlue && (
                    <Image
                        src="/car-b.png"
                        alt="hero"
                        width={480}
                        height={480}
                        className=""
                    />
                )}
                {btnRed && (
                    <Image
                        src="/car-r.png"
                        alt="hero"
                        width={480}
                        height={480}
                        className=""
                    />
                )}
                {btnBlack && (
                    <Image
                        src="/car-bl.png"
                        alt="hero"
                        width={480}
                        height={480}
                        className=""
                    />
                )}
                {btnYellow && (
                    <Image
                        src="/car-y.png"
                        alt="hero"
                        width={480}
                        height={480}
                        className=""
                    />
                )}
                <div className="mt-8">
                    <button
                        onClick={() => heroHandler("blue")}
                        className="bg-blue-500 p-6 ml-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border-2 border-white"
                    ></button>
                    <button
                        onClick={() => heroHandler("red")}
                        className="bg-red-500 p-6 ml-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border-2 border-white"
                    ></button>
                    <button
                        onClick={() => heroHandler("black")}
                        className="bg-slate-800 p-6 ml-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border-2 border-white"
                    ></button>
                    <button
                        onClick={() => heroHandler("yellow")}
                        className="bg-yellow-400 p-6 ml-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out border-2 border-white"
                    ></button>
                </div>
                <div className="max-lg:px-28 max-lg:flex-col-reverse max-sm:px-12 w-full mt-8 flex flex-row justify-between items-center text-white bg-black py-8 px-36">
                    <p className="max-lg:w-full w-[40%] text-md text-right">
                        در آغوش دیوارهایی که داستان‌ها را زمزمه می‌کنند، تابلویی
                        به آرامی نقش می‌بندد. هر خط و رنگ، فصلی نو از زندگی را
                        رقم می‌زند. اتاق خواب شما، با این اثر هنری، به گالری
                        خاطرات تبدیل می‌شود. تابلویی که نه تنها دیوارها، بلکه
                        روح اتاق را نیز زیبا می‌کند، دعوتی است به سفری در اعماق
                        زیبایی‌های بی‌پایان
                    </p>
                    <h1 className="max-lg:mb-8 text-4xl font-bold underline decoration-solid">
                        !مصور کن
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
