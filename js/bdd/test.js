describe("pow", function () {
  describe("Random tests Group", () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const makeRandomTest = () => {
      const number = BigInt(getRandomInt(1000));
      const order = BigInt(getRandomInt(100));

      const expectedResult = BigInt(number ** order);
      it(`${number} in order ${order}: ${expectedResult}`, () =>
        assert.equal(pow(number, order), expectedResult));
    };

    for (let i = 0; i < 5; i++) {
      makeRandomTest();
    }
  });

  describe("Negative and fractial numbers", () => {
    it("для отрицательных n возвращает NaN", function () {
      assert.isNaN(pow(2, -1));
    });

    it("для дробных n возвращает NaN", function () {
      assert.isNaN(pow(2, 1.5));
    });
  });
});
