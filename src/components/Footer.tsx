import React from "react";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="max-sm:flex-col-reverse w-full bg-black flex flex-row justify-center items-center text-white p-2">
            <p>All Rights Reserved By Mosaver 2024&copy; -</p>
            <Image
                src="/heart.png"
                alt="heart"
                width={16}
                height={16}
                className="mx-2"
            />
            ساخته شده با
        </div>
    );
};

export default Footer;
