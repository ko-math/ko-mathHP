const musics = [];
//Vocaloid
//addMusic('ルスバンウェイブ','日向電工','ボカロ','NpiQ5p7i5AU');
addMusic('ブリキノダンス','日向電工','ボカロ','6EuR6FuOXXw',);
//addMusic('スパークガールシンドローム','日向電工','ボカロ','u6W4B3Gup6A');
addMusic('春嵐','john','ボカロ','pUH9vCsvq08');
addMusic('ワールズエンド・ダンスホール','wowaka','ボカロ','ZB75e7vzX0I');
//addMusic('ブレインロット','東京真中','ボカロ','UsjsYMo3O1Q');
//addMusic('脳漿炸裂ガール','れるりり','ボカロ','Ey_NHZNYTeE');
addMusic('マーシャル・マキシマイザー','柊マグネタイト','ボカロ','jMKPYg0uhCI','マキシマイザー　マキシマイザー！',`
  柊マグネタイトさんの曲で最も好きな曲です。可不の良さを理解した曲です。静かな声とは裏腹に裏では少しでもずれれば死ぬ実験が行われているんですね〜。背景のコード進行がオシャレすぎて潰れます。
  この曲と対応する同氏の曲、「カノン」も聴いてみてはいかがでしょうか。
`);
//addMusic('或世界消失','柊マグネタイト','ボカロ','UgXJBoqbC78');
addMusic('終焉逃避行','柊マグネタイト','ボカロ','yVi3mhLr0uU','さあ、峡谷ノ都市へと急ごう！',`
  柊マグネタイトさんの或世界消失シリーズの曲です。このサビ前のメロディーが好きです。ちょっと古風で美しい言葉遣いと高音に魅せられ、あなたは昇天するでしょう！
`);
//addMusic('IMAWANOKIWA','いよわ','ボカロ','OVwCr2MESfo');
//addMusic('黄金数','いよわ','ボカロ','YpcTBm15QU');
//addMusic('エンヴィーベイビー','Kanaria','ボカロ','dgS6HvEohsw');
addMusic('KING','Kanaria','ボカロ','cm-l2h6GB8Q','You are KING.',`
  中学一年生の夏休み中聴いてましたね。Kanariaさんを好きになったきっかけです。激しい曲調でかっこいいボカロというものを知りました。すいちゃんの歌ってみたも好きです:D
`);
addMusic('命に嫌われている。','カンザキイオリ','ボカロ','','君だって　僕だって　いつかは枯れ葉のように朽ちてく',`
  ボカロでの表現の幅の広さを教えてくれた曲です。ボカロによる感動を直接伝えてくれます。始終命の尊さについて語られたのちに、メタ的とも取れる歌詞がありますのでご注目！
`);
//addMusic('少女レイ','みきとP','ボカロ','JW3N-HvU0MA');
addMusic('愛して愛して愛して','Kikuo','ボカロ','NTrm_idbhUk','もっともっと愛して愛して愛して　狂おしいほどに',`
  狂気的です。静かな曲調からは想像のつかないほど怖いです。ヘラってます。人間の「憎悪」というものに対する畏怖と相反する曲の美しさが刺さります。
`);
//addMusic('人マニア','原口沙輔','ボカロ','HTxwOxFt5d4');
addMusic('イガク','原口沙輔','ボカロ','F38EuG2dAyM','顔が→鈍器になっちゃうヨ',`
  ボカロを聴き始めるきっかけになった曲です。原口沙輔さんの世界観が詰まっています。あなたは、彼が自分自身を表現する手段として音楽を使うことを悟り、型にははまらない美しさを知るでしょう。
`);
//addMusic('ループザルーム','ルシノ','ボカロ','icBDYkfxpMs');
addMusic('プロポーズ','内緒のピアス','ボカロ','ST_AJmY_Tcc','君はずるいずるいずるいずるいずるい人だ',`
  静かなところから急にがなりが入るのが好きです。こんな可不は聴いたことがなかったです。狂気的にして切ない恋愛をあまりにもリアルに表現されています。鳥肌立ちますよ、聴きなさい。
`);

//Foreign country 
addMusic('Shape of you','Ed Sheeran','洋楽','JGwWNGJdvx8');
addMusic('September','Earth Wind & Fire','洋楽','');
//addMusic('Runaway Baby','Bruno Mars','洋楽','');
addMusic('STAY','Justin Bieber , The Kid LAROI','洋楽','');
//addMusic('Virtual Insanity','Jamiroquai','洋楽','');
addMusic('High Hopes','Panic! at the Disco','洋楽','');
//addMusic('Biliever','','洋楽','');
//addMusic('Fight Song','','洋楽','');
//addMusic('Life goes on','','洋楽','');

//Hololive
addMusic('ソワレ','星街すいせい','Hololive','');
addMusic('ビビデバ','星街すいせい','Hololive','');
//addMusic('GUM&DROP','星街すいせい','Hololive','');
//addMusic('Caramel Pain','星街すいせい','Hololive','');
addMusic('KINGWORLD','白上フブキ','Hololive','');
//addMusic('YOU&合図','音乃瀬奏','Hololive','');

//界隈曲
//addMusic('ᅠ   ','Or_Should_I','界隈','Wqswt2Sl9KM');

//j-pop
//addMusic('シル・ヴ・プレジデント','P丸様。','J-pop','');
//function
function addMusic(title,singer,genre,query,highlight,comment){
  musics.push({
    title: title,
    singer: singer,
    genre: genre,
    url: 'https://www.youtube.com/embed/' + query,
    highlight: highlight,
    comment: comment,
  });
}

export { musics };
