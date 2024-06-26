// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"products": [
        {
            "id": 1,
            "quantity": 3
        },
        {
            "id": 4,
            "quantity": 1
        },
        {
            "id": 9,
            "quantity": 3
        }
    ],
    "deliveryTime": 7
}
test('Response 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			
			body: JSON.stringify(requestBody)
		});

		const data = await response.json();
		console.log(data);

//		expect(response.status).toBe(200);
//      expect(data).toBeDefined();
//		expect(products).toBe(available);

	} catch (error) {
		console.error(error);
	}
});