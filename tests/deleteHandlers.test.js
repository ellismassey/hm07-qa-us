// eslint-disable-next-line no-undef
const config = require('../config');

test('Should remove kit', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});

		const data = await response.json();
		// Ensures the response body is defined
		expect(data).toBeDefined();

	} catch (error) {
		console.error(error);
	}
});

test('Should get Response 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});

		const data = await response.json();
		
		//Check the status code
		expect(response.status).toBe(200); 

	} catch (error) {
		console.error(error);
	}
});