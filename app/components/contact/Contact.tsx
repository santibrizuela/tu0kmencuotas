import React from 'react';
// motion
import { FaInstagram, FaWhatsapp, FaRegClock, FaEnvelope } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineMail } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { IoLocationOutline } from "react-icons/io5";


const Contact = () => {
  return (
    <section className='py-24 lg:py-32 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row'>
          
          
          {/* text */}
          <div 
            className='max-w-[1240px] flex items-center mx-auto text-center lg:text-start md:px-2'
          >
            <div>
              <h2 className='text-sky-500 font-bold text-[45px] lg:text-[86px] leading-none mb-8'>
                Contacto
              </h2>
              <a className='flex menuNav' target='_blank' rel='noreferrer' href='https://wa.link/fpullv'>
              
                  <FaWhatsapp className='my-auto mx-1'/> 11-2399-6826
         
              </a>
              <a className='flex menuNav' target='_blank' rel='noreferrer' href='https://www.instagram.com/_tu0kmencuotas/'>
                
                  <FaInstagram className='my-auto mx-1'/> _tu0kmencuotas
             
              </a>
              <a className='flex menuNav' target='_blank' rel='noreferrer' href='https://www.facebook.com/profile.php?id=61559732164299'>
                
                  <AiOutlineFacebook className='my-auto mx-1'/> TU 0KM EN CUOTAS
             
              </a>
              <a className='flex menuNav' href='mailto:somostu0kmencuotas@gmail.com'>
                
                  <AiOutlineMail className='my-auto mx-1'/> somostu0kmencuotas@gmail.com
             
              </a>

              
              {/* socials */}
              <div 
                className='flex-1 flex text-[20px] gap-x-6 my-6 max-w-max mx-auto lg:mx-2'
              >
                <a target='_blank' rel='noreferrer' href='https://wa.link/fpullv'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <FaWhatsapp/>
                    </div>
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.instagram.com/_tu0kmencuotas/'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <FaInstagram/>
                    </div>
                </a>    
                <a target='_blank' rel='noreferrer' href='mailto:somostu0kmencuotas@gmail.com'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                </a>    
                <a target='_blank' rel='noreferrer' href='https://www.facebook.com/profile.php?id=61559732164299'>
                    <div className='rounded-full icolink shadow-lg shadow-grey-400 p-6 hover:scale-110 ease-in duration-300'>
                        <AiOutlineFacebook/>
                    </div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
