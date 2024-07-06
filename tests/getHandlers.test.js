// eslint-disable-next-line no-undef
const config = require('../config');


test('Should Get a list of Warehouses', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		const data = await response.json();

		console.log(data);

		expect(data).toBeDefined();

	} catch (error) {
		console.error(error);
	}
});

test('Should get Response 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		const data = await response.json();

		console.log(data);

		expect(response.status).toBe(200);
		
	} catch (error) {
		console.error(error);
	}
});