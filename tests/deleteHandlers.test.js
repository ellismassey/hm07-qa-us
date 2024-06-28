// eslint-disable-next-line no-undef
const config = require('../config');

test('Response 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/orders/7`, {
			method: 'DELETE',
		});

		expect(response.status).toBe(200); 

	} catch (error) {
		console.error(error);
	}
});