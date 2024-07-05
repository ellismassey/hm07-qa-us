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
test('Should display Everything you need to console and Response 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			
			body: JSON.stringify(requestBody)
		});

		const data = await response.json();
        console.log(data);

        //logs data to the console
		expect(data).toBeDefined();

        //checks the status code
        expect(response.status).toBe(200);

        //displays "Everything You Need" to the console
        expect(data.name).toBe("Everything You Need");

	} catch (error) {
		console.error(error);
	}
});
