// TEST 1 : Get a list of Warehouses and log to console

// eslint-disable-next-line no-undef
const config = require('../config');

test('Should Get a list of Warehouses', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		const data = await response.json();

		console.log(data);


	} catch (error) {
		console.error(error);
	}
});

/*

// TEST 2 : Response 200

// eslint-disable-next-line no-undef
//const config = require('../config');

test('Should display Response 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		const data = await response.json();

		expect(response.status).toBe(200);
		

	} catch (error) {
		console.error(error);
	}
});

*/