"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import SetQuantity from "@/app/components/products/SetQuantity";
import { useCart } from "@/hooks/useCart";
import { formatKms } from "@/utils/formatKms";
import { formatPrice } from "@/utils/formatPrice";
import { Rating } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

//mp
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
//axios
import axios from "axios";

interface ProductDetailsProps{
    product: any
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number
}

export type SelectedImgType ={
    color: string,
    colorCode: string,
    image: string
}

const Horizontal = () =>{
    return <hr className="w-[30%] my-2"/>
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const {handleAddProductToCart, cartProducts} = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id:product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: {...product.images[0]},
        quantity: 1,
        price: product.price,
    });
    const router = useRouter();

    console.log(cartProducts);

    useEffect(() => {
        setIsProductInCart(false)
    
        if(cartProducts){
            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
            );
            
            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartProducts])

    const productRating = 
        product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / 
        product.reviews.length;

    const handleColorSelect = useCallback(
        (value: SelectedImgType) => {
            setCartProduct((prev) => {
                return { ...prev, selectedImg: value };
            });
        }, 
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [cartProduct.selectedImg]
    );

    const handleQtyIncrease = useCallback(() => {
        if(cartProduct.quantity === 99) {
            return;
        }
        setCartProduct((prev) => {
            return{ ...prev, quantity: ++prev.quantity };
        });
    }, [cartProduct]);
    const handleQtyDecrease = useCallback(() => {
        if(cartProduct.quantity === 1) {
            return;
        }
        setCartProduct((prev) => {
            return{ ...prev, quantity: --prev.quantity };
        });
    }, [cartProduct]);

    //CORREGIDO X CHATGPT
    //const handleQtyIncrease = useCallback(() => {
    //    if(cartProduct.quantity === 99) {
    //        return;
    //    }

    //    setCartProduct((prev) => {
    //        return { ...prev, quantity: prev.quantity ++ };
    //    });
    //}, [cartProduct]);
    
    //const handleQtyDecrease = useCallback(() => {
    //    if(cartProduct.quantity === 1) {
    //        return;
    //    }

    //    setCartProduct((prev) => {
    //        return { ...prev, quantity: prev.quantity -- };
    //    });
    //}, [cartProduct]);

    const [preferenceId, setPreferenceId] = useState(null)
    
    initMercadoPago('YOUR_PUBLIC_KEY',{
        locale: "es-AR",
    });

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:3000/create_preference", {
                title: product.name, // Utiliza el nombre del producto aquí
                quantity: 1,
                price: product.price,
            });
    
            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreferenceId(id);
        }
    };

    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-slate-50 p-3">
            <ProductImage 
                cartProduct={cartProduct}
                product={product}
                handleColorSelect={handleColorSelect}
            />
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-bold text-yellow-300">{product.name}</h2>
                <Horizontal/>
                <h3 className="text-2xl font-bold text-slate-700">{formatPrice(product.price)}</h3>
                <div className={product.inStock ? "text-teal-400" : "text-rose-400"}>{product.inStock ? "En stock" : "Out of stock"}</div>
                <Horizontal/>
                <div className="text-justify" dangerouslySetInnerHTML={{ __html: product.description }} ></div>
                <Horizontal/>
                <p className="font-bold">{formatKms(product.kms)}</p>
                <div>
                    <span className="font-semibold">CATEGORIA:</span> {product.category}
                </div>
                <div>
                    <span className="font-semibold">MARCA:</span> {product.brand}
                </div>
                <div>
                    <span className="font-semibold">AÑO:</span> {product.year}
                </div>
                <Horizontal />
                {isProductInCart ? (
                    <>
                        
                    </>
                ) : (
                    <>
                        <div className="max-w-[300px]">
                            <Link 
                                href='#contact'
                                className='uppercase'
                            >
                                <button 
                                    onClick={handleBuy}
                                    className='btn btn-outline md:btn-lg flex items-center align-middle navbar-btn'
                                >
                                    <span className="md:text-xl">Contactanos </span>
                                    <span className="navbar-arrow"><FaArrowRight className="md:text-xl ml-2 self-center" /></span>
                                </button>
                            
                            </Link>
                            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} customization={{ texts:{ valueProp: 'smart_option'}}} />}
                            
                            
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
 
export default ProductDetails;