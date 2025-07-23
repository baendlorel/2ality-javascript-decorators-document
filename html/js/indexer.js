'use strict';
// 根据检测，li元素里面会有的子元素有UL,A,P,EM,CODE,PRE
const kskb = 'KSKB';
const list = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TABLE', 'P', 'LI', kskb]; //  'A', 'P',
const is = (el, tag) => el.tagName === tag;

const indexes = [];
const zhmap = new Map();
let index = 0;
document.querySelectorAll(`#page-core-content ${list.join(',')}`).forEach((el) => {
  index++;
  const ls = el.querySelectorAll(`UL,OL`);
  const ps = el.querySelectorAll(`P`);

  // 子元素中有列表的li元素
  if (ls.length > 0 && el.tagName === 'LI') {
    const otherEls = Array.from(el.childNodes).filter(
      (child) => child.tagName !== 'UL' && child.tagName !== 'OL'
    );
    const kskbWrapper = document.createElement(kskb);
    kskbWrapper.append(...otherEls);
    if (kskbWrapper.textContent.trim() === '') {
      return;
    }

    kskbWrapper.setAttribute('data-en', index);
    kskbWrapper.style.display = 'block';
    el.insertBefore(kskbWrapper, ls[0]);
    return;
  }

  // 子元素中有p元素的li元素
  if (ls.length === 0 && ps.length > 0 && el.tagName === 'LI') {
    const otherEls = Array.from(el.childNodes).filter((child) => child.tagName !== 'P');
    const kskbWrapper = document.createElement(kskb);
    kskbWrapper.append(...otherEls);
    if (kskbWrapper.textContent.trim() === '') {
      return;
    }

    kskbWrapper.setAttribute('data-en', index);
    kskbWrapper.style.display = 'block';
    el.insertBefore(kskbWrapper, ps[0]);
    return;
  }

  // 没有子列表的
  if (ls.length === 0) {
    el.setAttribute('data-en', index);
    zhmap.set(index, el);
    indexes.push(index);
    return;
  }
});
