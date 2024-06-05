import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import { usados } from "@/utils/usados";
import ProductCard from "../components/products/ProductCard";
import TopImage from "@/public/headerImg.png"
import Image from "next/image";
import SachLogo from "@/public/sachLogo.png"

const Multimarca = async () => {
    const currentUser = await getCurrentUser();
    return ( 
        <div>
            <div className='w-full h-full text-center'>
                <div className='w-screen h-[30vh] lg:h-[40vh] top-0'>
                    <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] z-10'/>
                    <Image className='h-full w-full object-cover' src={TopImage} alt='Catalogo completo'/>
                    <div className='absolute top-[20%] max-w-[1240px] w-full text-white z-20 p-2 text-left'>
                        <h2 className='p-2 font-bold text-gradient text-[2.6rem] uppercase text-sky-500'>Multimarca</h2>
                    </div>
                </div>
            </div>
            <Container>
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8 mt-2">
                    {usados.map((product: any) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </Container>
        </div>
     );
}
 
export default Multimarca;