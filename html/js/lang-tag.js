const langTag = document.createElement('div');
langTag.classList.add('lang-tag');
langTag.innerHTML = `> 点击切换中英文/Click to switch between Chinese and English`;
document.body.append(langTag);

document.querySelectorAll('[data-zh],[data-en]').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    langTag.style.top = `${el.getBoundingClientRect().top + window.scrollY - 20}px`;
    langTag.style.left = `${el.getBoundingClientRect().left + window.scrollX}px`;
    langTag.style.display = 'block';
  });

  el.addEventListener('mouseleave', () => {
    langTag.style.display = 'none';
  });
});
