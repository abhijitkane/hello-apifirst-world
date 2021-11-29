const { expect } = require('chai'),
    greeting = require('../services/greeting');

describe("Greeting API", function() {
    it("sends a proper greeting", async function() {
        let message = await greeting.greetUser();
        expect(message.data.message).to.eql("Welcome to the API-first world!");
    });
  });