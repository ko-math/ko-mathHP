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

const encryptedDataHex = '3ba3104e915fc3fcd4e3501cb9f3e09ed1b287d4f1750ecf5883b66df3e923f4e8deed63';
const ivHex = '3c0ec7c82ed3073f698e3ea0';

const hexToBytes = hex => new Uint8Array(hex.match(/.{1,2}/g).map(b => parseInt(b, 16)));
async function decrypt(input) {
  try {
    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.digest('SHA-256', encoder.encode(input));
    const key = await crypto.subtle.importKey('raw', keyMaterial, { name: 'AES-GCM' }, false, ['decrypt']);
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: hexToBytes(ivHex) },
      key,
      hexToBytes(encryptedDataHex)
    );

    return new TextDecoder().decode(decryptedBuffer);
  } catch (e) {
    return null;
  }
}

const HobbyQuiz0 = $d.querySelector('');
