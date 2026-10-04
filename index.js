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

const HTMLbutton = $d.querySelector('#js-HTML-b');
HTMLbutton.addEventListener('click',()=>{
  const HTMLInp = $d.querySelector('#js-HTML-i').value;
  $d.querySelector('#js-HTML-o').srcdoc = HTMLInp;
});
