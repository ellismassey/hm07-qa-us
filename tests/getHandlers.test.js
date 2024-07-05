// eslint-disable-next-line no-undef
const { default: expect } = require('expect');
const config = require('../config');

test('Should Get a list of Warehouses and Response 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		const data = await response.json();

		console.log(data);

		//logs the data to the console
		expect(data).toBeDefined();

		//checks the status code
		expect(response.status).toBe(200);
		
	} catch (error) {
		console.error(error);
	}
});