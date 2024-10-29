const functions = require('firebase-functions/v1');

exports.func_A = functions.https.onRequest((req, res) => {
    res.send('func A');
});
