const musics = [];
//Vocaloid
addMusic('ルスバンウェイブ(ドライブ)','日向電工','ボカロ','');
addMusic('ブリキノダンス','日向電工','ボカロ','6EuR6FuOXXw');
addMusic('スパークガールシンドローム','日向電工','ボカロ','');
addMusic('春嵐','john','ボカロ','pUH9vCsvq08');
addMusic('ワールズエンド・ダンスホール','wowaka','ボカロ','ZB75e7vzX0I');
addMusic('ブレインロット','東京真中','ボカロ','');
addMusic('脳漿炸裂ガール','れるりり','ボカロ','Ey_NHZNYTeE');
addMusic('マーシャル・マキシマイザー','柊マグネタイト','ボカロ','jMKPYg0uhCI');
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
//Hololive
addMusic('ソワレ','星街すいせい','Hololive','');
addMusic('ビビデバ','星街すいせい','Hololive','');
addMusic('GUM&DROP','星街すいせい','Hololive','');
addMusic('Caramel Pain','星街すいせい','Hololive','');
addMusic('KINGWORLD','白上フブキ','Hololive','');
addMusic('YOU&合図','音乃瀬奏','Hololive','');
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
