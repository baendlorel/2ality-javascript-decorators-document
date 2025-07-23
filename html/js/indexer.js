// 根据检测，li元素里面会有的子元素有UL,A,P,EM,CODE,PRE
const kskb = 'KSKB';
const list = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TABLE', 'P', 'LI', kskb]; //  'A', 'P',
const is = (el, tag) => el.tagName === tag;

const indexes = [];
const zhmap = new Map();
let index = 0;
document.querySelectorAll(`#page-core-content ${list.join(',')}`).forEach((el) => {
  const ul = el.querySelector(`UL`);
  if (ul === null) {
    el.setAttribute('data-en', index);
    zhmap.set(index, el);
    indexes.push(index);
  } else if (el.tagName === 'LI') {
    const nonSubEls = Array.from(el.childNodes).filter((child) => child.tagName !== 'UL');
    const kskbWrapper = document.createElement(kskb);
    kskbWrapper.append(...nonSubEls);
    el.insertBefore(kskbWrapper, ul);
    kskbWrapper.setAttribute('data-en', index);
  }
  index++;
});
