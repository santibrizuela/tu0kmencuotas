import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const HomeBanner = () => {
    return ( 
        <div className="relative bg-gradient-to-t from-sky-300 to-sky-600 mb-8 rounded-md">
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className="mb-8 md:mb-0 text-center ease-in duration-300">
                    <h1 className="text-4xl md:text-6xl font-bold text-sky-50 mb-4">Plan de Ahorro</h1>
                    <p className="text-lg md:text-xl text-sky-50 mb-2">Comprá tu 0km en</p>
                    <Link className="flex justify-center home-banner-link ease-in duration-300" href="/planesdeahorro#planesdeahorroform">
                        <button className='btn btn-outline md:btn-lg flex items-center align-middle navbar-btn home-banner-link'>
                            <span className="md:text-xl">120 Cuotas </span>
                            <span className="navbar-arrow"><FaArrowRight className="md:text-xl ml-2 self-center" /></span>
                        </button>
                    </Link>
                </div>
                <div className="w-1/2 lg:w-1/3 relative aspect-video">
                    <Image
                        src="/TU0KMENCUOTASFFFBF1.png"
                        fill
                        alt="Banner Image"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
     );
}
 
export default HomeBanner;