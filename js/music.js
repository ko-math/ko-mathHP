const musics = [];
//Vocaloid
addMusic('ルスバンウェイブ','日向電工','ボカロ','NpiQ5p7i5AU');
addMusic('ブリキノダンス','日向電工','ボカロ','6EuR6FuOXXw');
addMusic('スパークガールシンドローム','日向電工','ボカロ','u6W4B3Gup6A');
addMusic('春嵐','john','ボカロ','pUH9vCsvq08');
addMusic('ワールズエンド・ダンスホール','wowaka','ボカロ','ZB75e7vzX0I');
addMusic('ブレインロット','東京真中','ボカロ','UsjsYMo3O1Q');
addMusic('脳漿炸裂ガール','れるりり','ボカロ','Ey_NHZNYTeE');
addMusic('マーシャル・マキシマイザー','柊マグネタイト','ボカロ','jMKPYg0uhCI');
addMusic('或世界消失','柊マグネタイト','ボカロ','UgXJBoqbC78');
addMusic('終焉逃避行','柊マグネタイト','ボカロ','yVi3mhLr0uU');
addMusic('IMAWANOKIWA','いよわ','ボカロ','OVwCr2MESfo');
addMusic('黄金数','いよわ','ボカロ','YpcTBm15QU');
addMusic('エンヴィーベイビー','Kanaria','ボカロ','dgS6HvEohsw');
addMusic('KING','Kanaria','ボカロ','cm-l2h6GB8Q');
addMusic('少女レイ','みきとP','ボカロ','JW3N-HvU0MA');
addMusic('愛して愛して愛して','Kikuo','ボカロ','NTrm_idbhUk');
addMusic('人マニア','原口沙輔','ボカロ','HTxwOxFt5d4');
addMusic('イガク','原口沙輔','ボカロ','F38EuG2dAyM');
addMusic('ループザルーム','ルシノ','ボカロ','icBDYkfxpMs');
//Foreign country 
addMusic('Shape of you','Ed Sheeran','洋楽','JGwWNGJdvx8');
addMusic('September','Earth Wind & Fire','洋楽','');
addMusic('Runaway Baby','Bruno Mars','洋楽','');
addMusic('STAY','Justin Bieber , The Kid LAROI','洋楽','');
addMusic('Virtual Insanity','Jamiroquai','洋楽','');
addMusic('High Hopes','Panic! at the Disco','洋楽','');
addMusic('Biliever','','洋楽','');
addMusic('Fight Song','','洋楽','');
addMusic('Life goes on','','洋楽','');
//Hololive
addMusic('ソワレ','星街すいせい','Hololive','');
addMusic('ビビデバ','星街すいせい','Hololive','');
addMusic('GUM&DROP','星街すいせい','Hololive','');
addMusic('Caramel Pain','星街すいせい','Hololive','');
addMusic('KINGWORLD','白上フブキ','Hololive','');
addMusic('YOU&合図','音乃瀬奏','Hololive','');
//界隈曲
addMusic('ᅠ   ','Or_Should_I','界隈','Wqswt2Sl9KM');
//j-pop
addMusic('シル・ヴ・プレジデント','P丸様。','J-pop','');
//function
function addMusic(title,singer,genre,query){
  musics.push({
    title: title,
    singer: singer,
    genre: genre,
    url: 'https://www.youtube.com/embed/' + query,
  });
}

export { musics };
