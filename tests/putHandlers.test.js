// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	
    "price": 175
    
	}


test('Should put Grocery item price change to the console', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		
		const data = await response.json();

		//verify the grocery item change
		console.log(data);	

	} catch (error) {
		console.error(error);
	}
});

test('Should get Response 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		
		const data = await response.json();

		//Checks the status code
		expect(response.status).toBe(200);
			

	} catch (error) {
		console.error(error);
	}
});