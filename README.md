# twilio-number-trivia

A simple Node.js Twilio Function that can be used to fetch trivia about your favorite numbers!

Can be used to respond to an incoming message to a Twilio phone number with trivia about a
specified integer (ex. "7 is the number of SI base units.").

To set up, follow the instructions to set up basic Programmable SMS with Twilio Functions at
https://www.twilio.com/docs/runtime/quickstart/programmable-sms-functions. Then replace the code
in your Twilio Function with the code in number-trivia.js. Make sure to also include node-fetch
as a dependency for your function (you can see how to do that at https://www.twilio.com/docs/runtime/functions/packages).

Once that's set up, you should be able to text an integer to your Twilio phone number, and receive
a response with a trivia fact about that integer.

You can also check out the Numbers API being used at http://numbersapi.com/#42.