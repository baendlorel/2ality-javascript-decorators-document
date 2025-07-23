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
const bzh = document.createElement('button');
bzh.textContent = '中文';
bzh.style.position = 'fixed';
bzh.style.top = '20px';
bzh.style.right = '90px';
bzh.style.height = '30px';
const ben = document.createElement('button');
ben.textContent = 'English';
ben.style.position = 'fixed';
ben.style.top = '20px';
ben.style.right = '20px';
ben.style.height = '30px';
document.body.append(bzh, ben);

bzh.addEventListener('click', () => {
  document.querySelectorAll('[data-zh]').forEach((el) => (el.style.display = ''));
  document.querySelectorAll('[data-en]').forEach((el) => (el.style.display = 'none'));
});

ben.addEventListener('click', () => {
  document.querySelectorAll('[data-zh]').forEach((el) => (el.style.display = 'none'));
  document.querySelectorAll('[data-en]').forEach((el) => (el.style.display = ''));
});
