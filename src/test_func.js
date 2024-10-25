const functions = require('firebase-functions/v1');

exports.test_func = functions.https.onRequest((req, res) => {
    res.send('Hello World! My name is Kane!!');
});
