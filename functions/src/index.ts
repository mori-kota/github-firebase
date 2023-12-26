import * as functions from 'firebase-functions';

export const testFunction = functions.https.onRequest((request: functions.Request, response: functions.Response) => {
    const data = request.body.data;

    // Numbers passed from the client.
    const firstNumber = data.firstNumber;
    const secondNumber = data.secondNumber;

    const res = {
      Result: firstNumber * secondNumber,
    }

    response.status(200).send(res);
});