const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS を有効にする
app.use(cors({
    origin: 'https://toshikyon-fansite-9a0912894d4b.herokuapp.com/',  // クライアントのオリジン
    credentials: true,  // 認証情報（Cookieなど）の送信を許可
}));

const distPath = path.join(__dirname, 'dist');

// express.static で dist ディレクトリを静的ファイルとして提供
app.use(express.static(distPath));

// ルートへのリクエストに対するレスポンス
app.get('/', (req, res) => {
    // index.html は静的ファイルとして提供されるため、ここでは何もしなくて良い
});

// サーバーの起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
