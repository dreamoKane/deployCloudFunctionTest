const functions = require('firebase-functions/v1');

exports.deploy_firebase_test = functions.https.onRequest((req, res) => {
    res.send('Hello World! My name is Kane!!!');
});
