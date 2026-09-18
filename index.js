//$付きはjs標準オブジェクト
const $d = document;
//lastModified
(() => {
  const content = $d.querySelector('#lastModified');
  const lastModified = new Date($d.lastModified);
  content.textContent = `
    lastModified: ${lastModified.getFullYear()}-${lastModified.getMonth() + 1}-${lastModified.getDate()}
  `;
})();
