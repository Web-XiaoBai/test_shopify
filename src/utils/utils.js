/**
 * 全局工具方法
 */

/**
 * 渲染React组件方法
 * @param {HTMLElement} domName DOM名称
 * @param {object} props 传递参数
 */
const _sunziRenderDom = (domName, props = {}) => {
  const scriptDom = document.querySelector(`script[data-render=${domName}]`);
  const DOM = document.createElement('div');
  DOM.classList = '_sunziRenderDom';
  const SCRIPTDOM = document.createElement('script');
  SCRIPTDOM.src = scriptDom.dataset.src;
  SCRIPTDOM.defer = 'defer';
  SCRIPTDOM.addEventListener('load', () => {
    window[domName] && ReactDOM.render(React.createElement(window[domName], props), DOM);
  });
  const parentNode = scriptDom.parentNode;
  parentNode.insertBefore(DOM, scriptDom);
  parentNode.insertBefore(SCRIPTDOM, scriptDom);
};