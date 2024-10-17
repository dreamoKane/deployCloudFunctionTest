const functions = require('firebase-functions/v1');

exports.deploy_fiebase_test = functions.https.onRequest((req, res) => {
    res.send('Hello World!');
})