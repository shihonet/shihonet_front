const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');

// express.static で dist ディレクトリを静的ファイルとして提供
app.use(express.static(distPath));

// ルートへのリクエストに対するレスポンス
app.get('/', function (req, res) {
    res.render(path.join(__dirname + '/dist/index.html'));
});

// サーバーの起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
