import React from 'react';
import styles from './style.css';

const ContactFormComponent = () => {
  return (
    <div className={styles.contact_form}>
      <h1>联系方式</h1>

      <div className={styles.form_row}>
        <div className={styles.field}>
          <input type="text" autoComplete="name" placeholder="名称" />
          <label>名称</label>
        </div>
        <div className={styles.field}>
          <input type="email" autoComplete="email" placeholder="电子邮箱" />
          <label>电子邮箱</label>
        </div>
      </div>
      <div className={styles.field}>
        <input type="tel" autoComplete="tel" placeholder="电话号码" />
        <label>电话号码</label>
      </div>
      <div className={styles.field}>
        <textarea rows="10" placeholder="评论"></textarea>
        <label>评论</label>
      </div>

      <div className={styles.send}><button>发送</button></div>
    </div>
  )
};

export default ContactFormComponent;