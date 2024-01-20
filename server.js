const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS を有効にする
app.use(cors({
    origin: 'https://toshikyon-fansite-9a0912894d4b.herokuapp.com/',  // クライアントのオリジン
}));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const distPath = path.join(__dirname, 'dist');

// express.static で dist ディレクトリを静的ファイルとして提供
app.use(express.static(distPath));

// サーバーの起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
