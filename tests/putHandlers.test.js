// TEST 1 Grocery item price change

// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	
    "price": 175
    
	}


test('Should put Grocery item price change to the console', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		const data = await response.json();
		console.log(data);
        

	} catch (error) {
		console.error(error);
	}
});


// TEST 2 Repsonse 200

// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	
    "price": 175
    
	}


test('Should get Response 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/5`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});

		const data = await response.json();
		
        expect(response.status).toBe(200);

	} catch (error) {
		console.error(error);
	}
});
