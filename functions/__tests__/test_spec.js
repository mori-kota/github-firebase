const frisby = require('frisby');

describe("Firebase Functions Unit Tests", () => {
  describe("addPoint", () => {
    test("Should contain status as ok", () => 
      frisby.post(`http://127.0.0.1:5001/fir-pj777/us-central1/testFunction` ,{
        body:{
          data: {
            firstNumber: 14,
            secondNumber: 4,      
          }
        },
      })
      .expect('status', 200)
      .then(function (res) {
        console.log(res);
        json = JSON.parse(res.body);
        expect(json.operationResult).toBe(56);
      })
    );
  });
});