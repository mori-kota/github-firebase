import * as functions from 'firebase-functions';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const testFunction = functions.https.onRequest((request: functions.Request, response: functions.Response) => {
    const data = request.body.data;
    console.log("data", data);

    // Numbers passed from the client.
    const firstNumber = data.firstNumber;
    const secondNumber = data.secondNumber;
  
    // Checking that attributes are present and are numbers.

  
    const res = {
      firstNumber: firstNumber,
      secondNumber: secondNumber,
      operator: "-",
      operationResult: firstNumber - secondNumber,
    }

    response.status(200).send(res);
});

exports.helloWorld = functions.https.onRequest((req, response) => {
  response.status(500).send("e");
});