const express = require('express');
const app = express();

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send('Hello World!! hi hi hi');
});

// Cloud Functions에서 사용할 엔트리 포인트 함수
exports.test_func = (req, res) => {
    app(req, res);
};
