import Link from "next/link";
import Container from "../Container";
import {Roboto} from "next/font/google";
import { getCurrentUser } from "@/actions/getCurrentUser";
import Button from "@/app/components/Button";
import { ImLocation } from "react-icons/im";
import { FaArrowRight  } from 'react-icons/fa';
import Image from "next/image";

const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
    const currentUser = await getCurrentUser();
  
    return ( 
        <div className="sticky top-0 w-full bg-zinc-900 z-50 shadow-sm">
            <div className="py-4 border-b[1px]">
                <Container>
                    <div className="flex items-center justify-between gap-3 md-gap-0">
                        <Link href="/" className={`${roboto.className} font-bold text-2xl text-sky-400 uppercase`}>
                            <Image
                                src="/TU0KMENCUOTASFFFBF1.png"
                                width={150}
                                height={100}
                                alt="Banner Image"
                            />
                        </Link>
                        <Link 
                            href='/planesdeahorro'
                            className='uppercase'
                        >
                            <button className='btn btn-outline md:btn-lg flex items-center align-middle navbar-btn'>
                                <span className="md:text-xl">Planes de Ahorro</span>
                                <span className="navbar-arrow"><FaArrowRight className="md:text-xl ml-2 self-center" /></span>
                            </button>
                        
                        </Link>
                        
                        <div className="items-center gap-8 md:gap-12 hidden md:flex">
                            <Link className="text-sky-600 hover:text-sky-400 uppercase" href="/multimarca">Multimarca</Link>
                            <Link 
                                className="text-sky-600 hover:text-sky-400 uppercase" 
                                href="#contact"
                            >
                                contacto
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
     );
}
 
export default NavBar;