import React from 'react';
import ProductCard from '@/global/ProductCard';
import styles from './style.css';

const RichTextComponent = (props) => {
  const { product } = props;
  console.log(product);
  return (
    <div className={styles.products_wrapper}>
      <h2>Featured products</h2>
      <ul className={styles.products_ul}>
        {
          product.map(card => (<li key={card.id}><ProductCard card={card}></ProductCard></li>))
        }
      </ul>
    </div>
  )
};

export default RichTextComponent;