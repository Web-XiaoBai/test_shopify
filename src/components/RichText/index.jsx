import React from 'react';
import styles from './style.css';

const RichTextComponent = () => {
  return (
    <div className={styles.rich_text}>
      <h2>Talk about your brand</h2>
      <div>Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.</div>
      <div><a className={styles.disable}>Button label</a></div>
    </div>
  )
};

export default RichTextComponent;