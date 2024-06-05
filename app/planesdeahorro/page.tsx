import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import { planesdeahorro } from "@/utils/planesdeahorro";
import ProductCard from "../components/products/ProductCard";
import TopImage from "@/public/categoriesplanesdeahorro.png"
import Image from "next/image";
import SachLogo from "@/public/sachLogo.png"
import VehicleForm from "../components/VehicleForm";

const Planesdeahorro = async () => {
    const currentUser = await getCurrentUser();
    return ( 
        <div>
            <div className='w-full h-full text-center'>
                <div className='w-screen h-[30vh] lg:h-[40vh] top-0'>
                    <div className='absolute top-30 w-full h-[30vh] lg:h-[40vh] z-10'/>
                    <Image className='h-full w-full object-cover z-1' src={TopImage} alt='Planes de ahorro'/>
                    <div className='absolute top-[15%] max-w-[1240px] w-full text-white z-20 p-2 text-left'>
                        <h2 className='p-2 font-bold text-[2.2rem] md:text-[2.4rem] lg:text-[2.6rem] uppercase text-sky-500'>PLANES DE AHORRO</h2>
                    </div>
                </div>
            </div>
            <Container>
                <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8 mt-2">
                    {planesdeahorro.map((product: any) => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </div>
            </Container>
            
            <VehicleForm/>
        </div>
     );
}
 
export default Planesdeahorro;