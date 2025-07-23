document.querySelectorAll('[data-zh]').forEach((zh) => {
  const index = zh.getAttribute('data-zh');
  const en = document.querySelector(`[data-en="${index}"]`);
  if (!en) {
    console.log('zh=' + index, zh);
    return;
  }

  en.title = '点击切换到中文/Click to switch to Chinese';
  zh.title = '点击切换到英文/Click to switch to English';

  en.style.display = 'none';
  zh.parentElement.insertBefore(en, zh);
  zh.addEventListener('click', () => {
    en.style.display = 'block';
    zh.style.display = 'none';
  });
  en.addEventListener('click', () => {
    zh.style.display = 'block';
    en.style.display = 'none';
  });
});
