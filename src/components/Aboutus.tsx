import React from "react";
import Image from "next/image";

const Aboutus = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-14">
            <div className="max-xl:flex-col max-sm:px-12 w-full flex flex-row-reverse justify-between items-center pb-20 px-28 ">
                <Image
                    src="/Galaxy.jpg"
                    alt="aboutus"
                    width={600}
                    height={600}
                    className="max-xl:mb-6 rounded-3xl drop-shadow-2xl shadow-lg"
                />
                <div className="max-xl:w-[60%] max-lg:w-[80%] max-sm:w-full w-[50%] flex flex-col justify-center items-end">
                    <h2 className="max-sm:text-4xl w-full max-xl: font-bold text-6xl text-right mb-6">
                        یه سری تابلوی خاص
                    </h2>
                    <p className="w-full max-xl: text-xl text-right text-gray-600">
                        جریان از این قراره که توی مصور همه چیز برای زیباتر شدن
                        ساخته میشه. از غالب ها بگیر تا فیگور ها. جریان زیبایی هم
                        بر میگرده به نگاه به زندگی. نه ما هرگز سعی نمی کنیم بگیم
                        می خوایم جهان رو به یه جای زیباتری تبدیل کنیم، اما می
                        دونیم که شما می تونین تابلوتون رو زیباتر کنید.
                    </p>
                </div>
            </div>
            <div className="max-xl:flex-col max-sm:px-12 w-full bg-black text-white flex flex-row justify-between items-center pb-20 pt-20 px-28">
                <Image
                    src="/astronaut.jpg"
                    alt="aboutus"
                    width={600}
                    height={600}
                    className="max-xl:mb-6 rounded-3xl drop-shadow-2xl"
                />
                <div className="max-xl:w-[60%] max-lg:w-[80%] max-sm:w-full w-[50%] flex flex-col justify-center items-end">
                    <h2 className="max-sm:text-4xl w-full max-xl: font-bold text-6xl text-right mb-6">
                        یه سری تابلوی خاص
                    </h2>
                    <p className="w-full max-xl: text-xl text-right">
                        جریان از این قراره که توی مصور همه چیز برای زیباتر شدن
                        ساخته میشه. از غالب ها بگیر تا فیگور ها. جریان زیبایی هم
                        بر میگرده به نگاه به زندگی. نه ما هرگز سعی نمی کنیم بگیم
                        می خوایم جهان رو به یه جای زیباتری تبدیل کنیم، اما می
                        دونیم که شما می تونین تابلوتون رو زیباتر کنید.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
