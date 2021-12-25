import styles from './style.less';
import BannerSvg from '@/assets/svg/banner.svg';

const AboutComponent: React.FC = () => {
  return (
    <div className={styles.conintaer}>
      <div className={styles.about_banner}><BannerSvg /></div>
      <div className={styles.about_brand}> 
        <div className={styles.brand_box}>
          <h2>Talk about your brand</h2>
          <div><a href="/collections/all">Shop all</a></div>
        </div>
      </div>
    </div>
  )
};

export default AboutComponent;