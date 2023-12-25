import * as functions from 'firebase-functions';

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const httpFunction = functions.https.onRequest((request: functions.Request, response: functions.Response) => {
    const body = request.body;
    console.log("body", body);

    // Numbers passed from the client.
    const firstNumber = body.firstNumber;
    const secondNumber = body.secondNumber;
  
    // Checking that attributes are present and are numbers.
    if (!Number.isFinite(firstNumber) || !Number.isFinite(secondNumber)) {
      response.status(400);
    }
  
    const res = {
      firstNumber: firstNumber,
      secondNumber: secondNumber,
      operator: "+",
      operationResult: firstNumber + secondNumber,
    }

    response.status(200).send(res);
});