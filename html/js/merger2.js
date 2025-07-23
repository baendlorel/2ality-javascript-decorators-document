// 取消了标好index的部分，改为根据规则重新标
const KSKB = 'KSKB';

// # 包裹文字
function wrapTextNodes(root, tagName) {
  // 遍历目标元素下的所有元素节点
  const elements = root.querySelectorAll('*');

  elements.forEach((el) => {
    // 遍历子节点
    el.childNodes.forEach((node) => {
      // 如果是文本节点且内容不是纯空白
      if (
        node.nodeType === Node.TEXT_NODE &&
        !['', ':', '：'].includes(node.nodeValue.trim()) &&
        node.parentElement?.tagName !== 'CODE'
      ) {
        // 创建新的标签
        const wrapper = document.createElement(tagName);
        wrapper.textContent = node.nodeValue;
        // 用新标签替换原来的文本节点
        el.replaceChild(wrapper, node);
      }
    });
  });
}

// 使用示例：对整个文档 body 处理
// wrapTextNodes(document.body, KSKB);

// #
const list = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TABLE', 'P', 'LI']; //  'A', 'P',
const is = (el, tag) => el.tagName === tag;

const indexes = [];
const zhmap = new Map();
let index = 0;
document.querySelectorAll(`#page-core-content ${list.join(',')}`).forEach((el) => {
  const noSubList = el.tagName === 'LI' && el.querySelector(`LI`) === null;

  if ((list.some((tag) => is(el, tag)) || noSubList) && /[\u4e00-\u9fa5]/.test(el.textContent)) {
    console.log(el.tagName === 'LI', el.tagName);
    el.setAttribute('data-zh', index);
    zhmap.set(index, el);
    indexes.push(index);
  }
  index++;
});
console.log(indexes.join());

index = 0;
document.querySelectorAll(`#page-core-content2 ${list.join(',')}`).forEach((el) => {
  if (indexes.includes(index)) {
    const zh = zhmap.get(index);
    const en = el;
    en.setAttribute('data-en', index);
    en.title = '点击切换到中文/Click to switch to Chinese';
    zh.title = '点击切换到英文/Click to switch to English';

    en.setAttribute('data-en', index);
    zh.setAttribute('data-zh', index);

    en.style.display = 'none';
    zh.parentElement.insertBefore(en, zh);
    zh.addEventListener('click', () => {
      en.style.display = '';
      zh.style.display = 'none';
    });
    en.addEventListener('click', () => {
      zh.style.display = '';
      en.style.display = 'none';
    });
  }
  index++;
});
