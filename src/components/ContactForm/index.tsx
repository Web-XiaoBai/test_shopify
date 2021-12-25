import { useReducer } from 'react';
import styles from './style.less';

/**
 * @type 类型
 * @payload 负载信息
 */
interface IAction {
  type: string;
  payload: string;
}
/**
 * 表单数据
 * @name 名称
 * @email 邮箱
 * @tel 电话号码
 * @comment 评论消息
 */
interface IFormData {
  name: string;
  email: string;
  tel: string;
  comment: string;
}

const ContactFormComponent: React.FC = () => {
  const [state, dispatch] = useReducer((state: IFormData, action: IAction) => {
    const { type, payload } = action;
    return { ...state, [type]: payload };
  }, {
    name: '',
    email: '',
    tel: '',
    comment: ''
  });

  return (
    <div className={styles.contact_form}>
      <h1>联系方式</h1>

      <div className={styles.form_row}>
        <div className={styles.field}>
          <input type="text" autoComplete="name" placeholder="名称" onChange={(event) => dispatch({ type: 'name', payload: event.target.value })} value={state.name} />
          <label>名称</label>
        </div>
        <div className={styles.field}>
          <input type="email" autoComplete="email" placeholder="电子邮箱" onChange={(event) => dispatch({ type: 'email', payload: event.target.value })} value={state.email} />
          <label>电子邮箱</label>
        </div>
      </div>
      <div className={styles.field}>
        <input type="tel" autoComplete="tel" placeholder="电话号码" onChange={(event) => dispatch({ type: 'tel', payload: event.target.value })} value={state.tel} />
        <label>电话号码</label>
      </div>
      <div className={styles.field}>
        <textarea rows={10} placeholder="评论" onChange={(event) => dispatch({ type: 'comment', payload: event.target.value })} value={state.comment}></textarea>
        <label>评论</label>
      </div>

      <div className={styles.send}><button onClick={() => { console.log(state) }}>发送</button></div>
    </div>
  )
};

export default ContactFormComponent;