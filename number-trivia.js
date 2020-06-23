const fetch = require('node-fetch');

exports.handler = function(context, event, callback) {
    let twiml = new Twilio.twiml.MessagingResponse();
    let body = event.Body;
    const parsed = parseInt(body);

    if (isNaN(parsed)) {
        twiml.message('Unfortunately ' + body + ' is not an integer. Please try again with an integer!');
        callback(null, twiml);
    }   

    fetch('http://numbersapi.com/' + body + '/trivia', {
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(payload => {
        twiml.message(payload.text);
        callback(null, twiml);
    })
    .catch(error => {
        console.log(error);
        callback(error);
    })
};