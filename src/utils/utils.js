/**
 * 全局工具方法
 */

/**
 * 渲染React组件方法
 * @param {string} renderName 渲染的组件名称
 * @param {object} props 传递参数
 */
const _cacheMap = new Map();
const _sunziRenderDom = (renderName, props = {}) => {
  const scriptDom = document.querySelector(`script[data-render=${renderName}]`);
  const DOM = document.createElement('div');
  DOM.classList = '_sunziRenderDom';
  const parentNode = scriptDom.parentNode;
  /* ReactDom渲染组件 */
  const renderDom = () => ReactDOM.render(React.createElement(window[renderName], props), DOM);
  /* 将注册的回调取出执行 */
  const handleFunction = () => {
    const _list = _cacheMap.get(renderName).list;
    _list.forEach(fn => {
      fn();
      const i = _list.indexOf(fn);
    });
    _list.length = 0; // 清空队列
  };
  /* 已加载组件 */
  if (_cacheMap.has(renderName)) {
    const _cache = _cacheMap.get(renderName);
    _cache.list.push(renderDom);
    if (_cache.isLoad) {
      handleFunction();
    }
  } else {
    /* 未加载组件 */
    _cacheMap.set(renderName, { isLoad: false, list: [renderDom] });
    const SCRIPTDOM = document.createElement('script');
    SCRIPTDOM.src = scriptDom.dataset.src;
    SCRIPTDOM.defer = 'defer';
    SCRIPTDOM.addEventListener('load', () => {
      _cacheMap.get(renderName).isLoad = true;
      handleFunction();
    });
    parentNode.insertBefore(SCRIPTDOM, scriptDom);
  }

  parentNode.insertBefore(DOM, scriptDom);
  scriptDom.remove();
};