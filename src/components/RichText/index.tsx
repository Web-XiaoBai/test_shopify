import styles from './style.less';

interface IRichTextProp {
  confirmText?: string;
  onConfirm: () => void;
}

const RichTextComponent: React.FC<IRichTextProp> = ({ confirmText = 'Button label', onConfirm }) => {
  return (
    <div className={styles.rich_text}>
      <h2>Talk about your brand</h2>
      <div>Share information about your brand with your customers. Describe a product, make announcements, or welcome customers to your store.</div>
      <div><a onClick={onConfirm}>{confirmText}</a></div>
    </div>
  )
};

export default RichTextComponent;