const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 静的ファイルの提供 (例: public ディレクトリ内のファイル)
app.use(express.static(path.join(__dirname, 'public')));

// ルートへのリクエストに対するレスポンス
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// サーバーの起動
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
