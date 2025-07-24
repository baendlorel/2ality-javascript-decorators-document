document.querySelectorAll('[data-zh]').forEach((zh) => {
  const index = zh.getAttribute('data-zh');
  const en = document.querySelector(`[data-en="${index}"]`);
  if (!en) {
    console.log('zh=' + index, zh);
    return;
  }

  const originZhDisplay = zh.style.display;
  const originEnDisplay = en.style.display;

  en.style.display = 'none';
  zh.parentElement.insertBefore(en, zh);
  zh.addEventListener('click', () => {
    en.style.display = originEnDisplay;
    zh.style.display = 'none';
  });
  en.addEventListener('click', () => {
    en.style.display = 'none';
    zh.style.display = originZhDisplay;
  });
});

document.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
