// Create floating lang tag for hover tips
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

// Add a fixed button at the top-right corner for language switching
const wrapper = document.createElement('div');
wrapper.classList.add('tools');

const bzh = document.createElement('button');
bzh.textContent = '中文';
const ben = document.createElement('button');
ben.textContent = 'English';
const toTop = document.createElement('button');
toTop.textContent = '↑';
toTop.title = '回到顶部';
wrapper.append(bzh, ben, toTop);
document.body.append(wrapper);

// Scroll to top when clicking the arrow button
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

bzh.addEventListener('click', () => {
  document.querySelectorAll('[data-zh]').forEach((el) => (el.style.display = ''));
  document.querySelectorAll('[data-en]').forEach((el) => (el.style.display = 'none'));
});

ben.addEventListener('click', () => {
  document.querySelectorAll('[data-zh]').forEach((el) => (el.style.display = 'none'));
  document.querySelectorAll('[data-en]').forEach((el) => (el.style.display = ''));
});
