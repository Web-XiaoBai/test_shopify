import type { IProductCart } from '@/pages/Home';
import styles from './style.less';

interface ICardProps {
  card: IProductCart
}

const ProductCard: React.FC<ICardProps> = ({card}) => {
   /**
    * 格式化价格
    * @param price 整数价格
    */
  function toFixedPrice(price:number): string {
    return `$${(price / 100).toFixed(2)} USD`;
  };

  return (
    <div className={styles.card_wrapper}>
      {/* 产品卡片图片 */}
      <div className={styles.card_img}>
        <div className={styles.card_img_box}>
          {
            card.featured_image && <img src={card.featured_image} alt={card.title} />
          }
        </div>
        <div className={`${styles.card_state} ${card.available && styles.sell}`}>{card.available ? '销售中':'售罄'}</div>
      </div>
      {/* 产品卡片信息 */}
      <div className={styles.card_info}>
        <h3><a href={`/products/${card.handle}`}>{card.title}</a></h3>
        <div>
          {
            card.compare_at_price && <span className={styles.compare_price}>{toFixedPrice(card.compare_at_price)}</span>
          }
          <span className={styles.price}>{toFixedPrice(card.price)}</span>
        </div>
      </div>
    </div>
  )
};

export default ProductCard;