import ProductDetails from "./ProductDetails";
import Container from "../../components/Container";
import ListRating from "./ListRating";
import { products } from "@/utils/products";

interface IPrams {
    productId?: string;
}

const Product = ({ params }: { params: IPrams }) => {
    console.log('params', params)

    const product = products.find((item) => item.id === params.productId);
    
    return ( <div className="p-8">
        <Container>
            <ProductDetails product={product}/>
        </Container>
    </div> );
}
 
export default Product;