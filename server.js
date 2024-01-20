const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

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
