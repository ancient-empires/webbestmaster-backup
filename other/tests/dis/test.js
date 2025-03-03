/*

 assert(value) — проверяет что value является true в логическом контексте.
 assert.equal(value1, value2) — проверяет равенство value1 == value2.
 assert.strictEqual(value1, value2) — проверяет строгое равенство value1 === value2.
 assert.notEqual, assert.notStrictEqual — проверки, обратные двум предыдущим.
 assert.isTrue(value) — проверяет, что value === true
 assert.isFalse(value) — проверяет, что value === false
 http://chaijs.com/api/assert/
*/

describe("pow", function () {

	describe("pow - inner, suppert several inners", function () {

		before(function() { console.log("Начало тестов"); });
		after(function() { console.log("Конец тестов"); });

		beforeEach(function() { console.log("Вход в тест"); });
		afterEach(function() { console.log("Выход из теста"); });

		// simple test
		it("при возведении 3 в 4ю степень равен 81", function () {
			assert.equal(pow(3, 4), 81);
		});

		// async test
		it("при возведении 2 в 3ю степень результат 8 - async -", function (done) {
			setTimeout(function () {
				assert.equal(pow(2, 3), 8);
				done();
			}, 100);
		});

		// several tests
		function makeTest(x) {
			var expected = x * x * x;
			it("при возведении " + x + " в степень 3 результат: " + expected, function() {
				assert.equal(pow(x, 3), expected);
			});
		}

		for (var x = 1; x <= 5; x++) {
			makeTest(x);
		}

	});

});