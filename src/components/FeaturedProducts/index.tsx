import type { IProductCart } from '@/pages/Home'
import ProductCard from '../ProductCard';
import styles from './style.less';

interface IProductsProps {
  cards: IProductCart[]
}

const RichTextComponent: React.FC<IProductsProps> = ({cards}) => {
  return (
    <div className={styles.products_wrapper}>
      <h2>Featured products</h2>
      <ul className={styles.products_ul}>
        {
          cards.map(card => (<li key={card.id}><ProductCard card={card}></ProductCard></li>))
        }
      </ul>
    </div>
  )
};

export default RichTextComponent;