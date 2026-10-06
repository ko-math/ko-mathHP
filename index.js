//$付きはjs標準オブジェクト
const $d = document;
const Flags = {
  hobbyQuiz0: true,
};
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
const musics = [];
//Vocaloid
addMusic('ルスバンウェイブ(ドライブ)','日向電工','ボカロ','');
addMusic('ブリキノダンス','日向電工','ボカロ','6EuR6FuOXXw');
addMusic('スパークガールシンドローム','日向電工','ボカロ','');
addMusic('春嵐','john','ボカロ','pUH9vCsvq08');
addMusic('ワールズエンド・ダンスホール','wowaka','ボカロ','ZB75e7vzX0I');
addMusic('ブレインロット','東京真中','ボカロ','');
addMusic('脳漿炸裂ガール','れるりり','ボカロ','Ey_NHZNYTeE');
addMusic('マーシャル・マキシマイザー','柊マグネタイト','ボカロ','');
addMusic('或世界消失','柊マグネタイト','ボカロ','');
addMusic('終焉逃避行','柊マグネタイト','ボカロ','');
addMusic('IMAWANOKIWA','いよわ','ボカロ','');
addMusic('エンヴィーベイビー','Kanaria','ボカロ','dgS6HvEohsw');
addMusic('KING','Kanaria','ボカロ','cm-l2h6GB8Q');
addMusic('少女レイ','みきとP','ボカロ','JW3N-HvU0MA');
addMusic('愛して愛して愛して','Kikuo','ボカロ','NTrm_idbhUk');
addMusic('人マニア','原口沙輔','ボカロ','');
addMusic('イガク','原口沙輔','ボカロ','');
//Foreign country 
addMusic('Shape of you','Ed Sheeran','洋楽','');
addMusic('September','Earth Wind & Fire','洋楽','');
addMusic('Runaway Baby','Bruno Mars','洋楽','');
addMusic('STAY','Justin Bieber , The Kid LAROI','洋楽','');
//Hol
addMusic('ソワレ','星街すいせい','Hololive','');
addMusic('ビビデバ','星街すいせい','Hololive','');
addMusic('GUM&DROP','星街すいせい','Hololive','');
addMusic('Caramel Pain','星街すいせい','Hololive','');
addMusic('KINGWORLD','白上フブキ','Hololive','');
addMusic('YOU&合図','音乃瀬奏','Hololive','');
//gen
addMusic('シル・ヴ・プレジデント','P丸様。','J-pop','');

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
function addMusic(title,singer,genre,query){
  musics.push({
    title: title,
    singer: singer,
    genre: genre,
    url: 'https://www.youtube.com/embed/' + query,
  });
}
//hobby quizes.
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
//global functions
function YoutubeEmbed(url,w,h) {
  const iframe = document.createElement('iframe');
  iframe.width = w;
  iframe.height = h;
  iframe.src = url;
  iframe.title = 'Youtube video player';
  iframe.frameborder = 0;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.referrerpolicy = 'strict-origin-when-cross-origin';
  iframe.allowfullscreen = true;
  return iframe;
};
