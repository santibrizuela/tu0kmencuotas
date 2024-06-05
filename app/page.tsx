
import {planesdeahorro} from "@/utils/planesdeahorro"
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import ProductCard from "./components/products/ProductCard";
import Carousel from "./components/carousel/Carousel";
import Categories from "./components/Categories";
import BannerChevrolet from "./components/bannerChevrolet/BannerChevrolet";
import VehicleForm from "./components/VehicleForm";

export default function Home() {
  return (
    <div>
      <div>
        <Carousel/>
      </div>
      
      <div className="p-8">
        <Container>
          <div>
            <Categories/>
          </div>
          <div>
            <HomeBanner/>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-8">
            {planesdeahorro.map((product: any) => {
              // eslint-disable-next-line react/jsx-key
              return <ProductCard data={product} />
            })}
          </div>
        </Container>
      </div>
      
            
      <VehicleForm/>
      <div>
        <BannerChevrolet/>
      </div>
    </div>
    
  );
}
