"use client";
import { formatKms } from '@/utils/formatKms';
import { formatPrice } from '@/utils/formatPrice';
import { truncateText } from '@/utils/truncateText';
import { Rating } from '@mui/material';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
    data:any;
}

const ProductCard: React.FC<ProductCardProps> = ({data}) => {

    const router = useRouter();

    const productRating = 
        data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / 
        data.reviews.length;
    
    return(
        <div 
            onClick={() => router.push(`/product/${data.id}`)}
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 hover:bg-slate-100 rounded-sm p-2 transition hover:shadow-2xl ease-in duration-300 text-center text-sm">
            <div className="flex flex-col items-center w-full gap-1">
                <div className='aspect-square overflow-hidden relative w-full'>
                    <Image
                    fill
                    src={data.images[0].image}
                    alt={data.name}
                    className='w-full h-full object-contain hover:scale-125 ease-in duration-300'/>
                </div>
                <div className='mt-8 font-bold text-md'>
                    {truncateText(data.name)}
                </div>
                    {data.brand} {data.year}
                <div>
                    {data.category}
                </div>
                <div className='font-semibold text-xl text-sky-500'>{formatPrice(data.price)}</div>
                
            </div>
        </div>
    );
};
 
export default ProductCard;