const functions = require('firebase-functions/v1');

exports.func_B = functions.https.onRequest((req, res) => {
    res.send('func B');
});
