const functions = require('firebase-functions/v1');

exports.test_cloud_function = functions.https.onRequest((req, res) => {
    res.send('Hello World! My name is Kane!');
});
