{
  const tagsCanBeSingle = ['UL', 'OL', 'A', 'P'];
  const list = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'TABLE']; //  'A', 'P',
  const is = (el, tag) => el.tagName === tag;

  const indexes = [];
  let index = 0;
  document.querySelectorAll('*').forEach((el) => {
    // a、p等元素不在别的列表里
    const noParentList =
      (el.parentElement === null ? true : el.parentElement.closest('UL,OL,P') === null) &&
      tagsCanBeSingle.includes(el.tagName);

    if (
      (list.some((tag) => is(el, tag)) || noParentList) &&
      /[\u4e00-\u9fa5]/.test(el.textContent)
    ) {
      el.setAttribute('zh', index);
      indexes.push(index);
    }
    index++;
  });
  console.log(indexes.join());
}
