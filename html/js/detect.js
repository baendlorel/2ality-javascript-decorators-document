a = new Set();
document.querySelectorAll('li').forEach((e) => {
  if (e.querySelector('ul')) {
    console.log(e.children);
    Array.from(e.children).forEach((sub) => {
      a.add(sub.tagName);
    });
  }
});
