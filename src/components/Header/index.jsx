import React from 'react';
import styles from './style.css';

const HeaderComponent = (payload = {}) => {
  let props = {
    title: 'JianhuiChen',
    navs: [{ label: '主页', url: '/' }, { label: '产品目录', url: '/collections/all' }, { label: '联系方式', url: '/pages/contact' }],
    buttons: [{ icon: 'icon-search', click: () => console.log('query') }, { icon: 'icon-store', click: () => console.log('store') }]
  };
  props = {...props, ...payload};
  const pathname = location.pathname;
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{props.title}</h1>
      <nav className={styles.nav}>
        <ul className={styles.nav_ul}>
          {
            props.navs.map((item, i) => (
              <li className={item.url === pathname ? styles.current : ''} key={i}><a href={item.url}><span>{item.label}</span></a></li>
            ))
          }
        </ul>
      </nav>
      <ul className={styles.button_ul}>
        {
          props.buttons.map((item, i) => (
            <li key={i}><i className={`iconfont ${item.icon}`} onClick={item.click}></i></li>
          ))
        }
      </ul>
    </header>
  )
};

export default HeaderComponent;