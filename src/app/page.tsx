import Aboutus from "@/components/Aboutus";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Qanda from "@/components/Qanda";

export default function Home() {
    return (
        <main className="w-full inset-0 overflow-hidden">
            <div className="max-lg:px-16 max-sm:px-8 max-sm:mt-0 w-full absolute px-28 mt-7">
                <Header />
            </div>
            <div className="w-full">
                <Hero />
            </div>
            <div className="w-full">
                <Aboutus />
            </div>
            <div className="w-full">
                <Qanda />
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </main>
    );
}
