import { useState } from 'react';
import About from '@/components/About';
import RichText from '@/components/RichText';
import FeaturedProducts from '@/components/FeaturedProducts';
import ContactForm from '@/components/ContactForm';
import { useAsyncEffect } from '@/hooks';
import { getProducts } from './service';

/**
 * 产品卡片数据
 * @id 产品ID
 * @featured_image 产品图片
 * @title 产品标题
 * @available 产品状态
 * @handle 产品句柄
 * @compare_at_price 产品原价
 * @price 产品价格
 */
export interface IProductCart {
  id: number;
  featured_image: string | null;
  title: string;
  available: boolean;
  handle: string;
  compare_at_price: number | null;
  price: number;
}

export interface IHomeProps {
  products: IProductCart[];
}

const HomePage: React.FC = (props) => {
  console.log(props)
  const [products, setProducts] = useState<IProductCart[]>([]);

  useAsyncEffect(() => queryProducts(), [])

  /* 请求产品数据 */
  const queryProducts = async () => {
    const { result } = await getProducts();
    setProducts(result.products);
  }

  return (
    <div>
      <About />
      <RichText confirmText='重置数据' onConfirm={queryProducts} />
      <FeaturedProducts cards={products} />
      <ContactForm />
    </div>
  )
};

export default HomePage;