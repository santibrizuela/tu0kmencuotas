import Image from 'next/image'
import React from 'react'
import TopImage from "@/public/orgSachLogo.png"
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'
import { AiFillInstagram, AiFillLinkedin, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai'
import { FaSquareWhatsapp } from 'react-icons/fa6'
import { FaArrowRight, FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import FooterList from '../components/footer/FooterList'

const About = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
            <Image className='absolute z-1' layout='fill' objectFit='' src={TopImage} alt='Agencia de autos con plan de ahorro'/>
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Acerca de</h2>
                <h3 className='text-5xl text-sky-500'>Nosotros</h3>
            </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4 text-justify mx-5'>
                <p className='text-xl pb-2'>
                    En Organización Sach, nuestra misión es ofrecerte una experiencia 
                    única y personalizada para que tengas tu próximo vehículo. Desde nuestra 
                    fundación en 2020, nos hemos dedicado a brindar un servicio excepcional 
                    a nuestros clientes, combinando la pasión por los automóviles con un 
                    compromiso inquebrantable en el servicio postventa.
                </p>
                <p className='text-xl pb-2'>
                    Nuestro enfoque se centra en la transparencia y la confianza en cada 
                    interacción que tenemos con nuestros clientes. Nos enorgullece ofrecer una amplia 
                    gama de vehículos 0km y multimarca, respaldados por asesores comerciales 
                    expertos que están aquí para acompañarte en cada paso del proceso de compra.
                </p>
                <p className='text-xl pb-2'>
                    Con una visión clara de convertirnos en el principal concesionario de 
                    Zona Sur y Capital Federal, nos esforzamos por superar tus expectativas 
                    en cada transacción. Estamos comprometidos a brindarte una experiencia 
                    sin igual en la adquisición de vehículos, y esperamos poder ayudarte a 
                    encontrar el automóvil de tus sueños.
                </p>
                <Link href='#contact'>
                    <button className='btn md:btn-lg flex items-center align-middle navbar-btn'>
                        <span className="md:text-xl">Contactanos </span>
                        <span className="navbar-arrow"><FaArrowRight className="md:text-xl ml-2 self-center" /></span>
                    </button>
                </Link>
            </div>

            <div className='bg-slate-50 col-span-4 md:col-span-1 shadow-xl shadow-gray-300 rounded-xl p-4 scale-90 hover:scale-100 ease-in duration-300 h-min'>
                <div className='p-2'>
                    <p className='text-center folt-bold pb-2'>Redes</p>
                    <div className="flex justify-center">
                        <div className="flex justify-center md:grid md:grid-cols-2 gap-2">
                            <Link 
                                href="https://www.instagram.com/_tu0kmencuotas/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram className='text-5xl text-sky-400'/>
                            </Link>
                            <Link 
                                href="https://www.facebook.com/profile.php?id=61559732164299"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiOutlineFacebook className='text-5xl text-sky-400'/>
                            </Link>
                            <Link 
                                href="https://wa.link/fpullv"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaWhatsapp className='text-5xl text-sky-400'/>
                            </Link>
                            <Link 
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <AiOutlineLinkedin className='text-5xl text-sky-400'/>
                            </Link>
                        </div>
                    </div>
                    
                </div>

            </div>

            
        </div>
    </div>
  )
}

export default About