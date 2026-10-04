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


(async ()=>{
  const fail = await decrypt('none');
  console.log(fail);
})


const encryptedDataHex = "59e44ffc96df7cb192eb6bf1e3c887ec1d9f4a0c870407a536";
const ivHex = "3a2f8b1c4d5e6f7a8b9c0d1e";

const hexToBytes = hex => new Uint8Array(hex.match(/.{1,2}/g).map(b => parseInt(b, 16)));
async function decrypt(input) {
  try {
    const encoder = new TextEncoder();
    const keyMaterial = await crypto.subtle.digest("SHA-256", encoder.encode(input));
    const key = await crypto.subtle.importKey("raw", keyMaterial, { name: "AES-GCM" }, false, ["decrypt"]);
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: hexToBytes(ivHex) },
      key,
      hexToBytes(encryptedDataHex)
    );

    return new TextDecoder().decode(decryptedBuffer);
  } catch (e) {
    return null;
  }
}
