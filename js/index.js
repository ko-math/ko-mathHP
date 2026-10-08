const $d = document; //$付きはjs標準オブジェクト
//import
import { musics } from '/js/music.js'; //musics

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
//music
const musicb = $d.querySelector('#js-music-b');
musicb.addEventListener('click',()=>{
  const music = musics[Math.floor(Math.random() * musics.length)];
  const i = $d.querySelector('#js-music-iframe');
  if(i) i.remove();
  const o = $d.querySelector('#js-music-o');
  const iframe = YoutubeEmbed(music.url,560,315);
  iframe.id = 'js-music-iframe';
  o.append(iframe);
  const p = $d.querySelector('#js-music-desc');
  p.textContent = `曲名:${music.title}/${music.singer} ジャンル:${music.genre}`;
});
//hobby quizes
const Flags = {
  hobbyQuiz0: true,
};
const encryptedDataHex = '990bc3d7ea3fb09f773e61cfbeb3f2d9023c897f853a82d9aac12881373b42128349f9e7a094f4b5aa3278b49342959e1806104f827a254fd9ad01a10eaeb8';
const ivHex = '9db1d618170cfb922b37410d';

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

const hobbyQuiz0b = $d.querySelector('#hobby-quiz-0-b');
hobbyQuiz0b.addEventListener('click',async ()=>{
  if(Flags.hobbyQuiz0){
    const i = $d.querySelector('#hobby-quiz-0-i').value;
    const c = await decrypt(i);
    if(c){
      const embed = YoutubeEmbed('https://www.youtube.com/embed/' + c,560,315);
      $d.querySelector('#hobby-quiz-0 button').before(embed);
      Flags.hobbyQuiz0 = false;
    }
  }
});
//forms
const contactUrls = {};
formAddRadio('Scratch','contact-scratch','https://scratch.mit.edu/users/ko-math');
formAddRadio('Discord','contact-discord','');
formAddRadio('Gmail','contact-gmail','mailto:komathtech@gmail.com');

try{
  const form = $d.querySelectorAll('#mail-form input');
  form.forEach((e)=>{
    e.addEventListener('change',()=>{
      const s = $d.querySelector('#mail-address');
      s.innerHTML = `
        <a href="${contactUrls[e.value]}" target="_blank">${e.value}</a>
      `;
    });
  });
} catch(e) {
  alert(e.message);
}
function formAddRadio(value,id,url){
  contactUrls.value = {
    value: url,
  };
  const par = $d.querySelector('#mail-form');
  const input = $d.createElement('input');
  input.type = 'radio';
  input.name = 'mail-radio';
  input.value = value;
  input.id = id;
  const label = $d.createElement('label');
  label.for = id;
  label.textContent = value;

  par.append(input);
  par.append(label);
  //name = 'mail-radio';
}

//global functions
function YoutubeEmbed(url,w,h) {
  const iframe = document.createElement('iframe');
  iframe.width = w;
  iframe.height = h;
  iframe.src = url;
  iframe.title = 'Youtube video player';
  iframe.frameBorder = 0;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerpolicy = 'strict-origin-when-cross-origin';
  iframe.allowfullscreen = true;
  return iframe;
};
