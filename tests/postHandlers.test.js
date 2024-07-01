// TEST 1 : Everything you need is log to the console

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
test('Should display Everything you need to console', async () => {
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
		expect(data).toBeDefined();
        expect(data.name).toBe("Everything You Need");

	} catch (error) {
		console.error(error);
	}
});

/*
// TEST 2 : Response 200

// eslint-disable-next-line no-undef
//const config = require('../config');

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
test('Should display Response 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
			method: 'POST',
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

// TEST 3 : Check the delivery cost

// eslint-disable-next-line no-undef
//const config = require('../config');

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
test('Should display Delivery type and cost', async () => {
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

	    expect(data).toBeDefined();
        expect(data.deliveryType.length).toBe(4);


	} catch (error) {
		console.error(error);
	}
});



// TEST 4 Adding items to the cart

// eslint-disable-next-line no-undef
//const config = require('../config');

const requestBody = {
	"productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 6,
            "quantity": 2
        }
    ]
   }
test('Should add items to the cart', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/8/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			
			body: JSON.stringify(requestBody)
		});

		const data = await response.json();
		console.log(data);

	    expect(data).toBeDefined();


	} catch (error) {
		console.error(error);
	}
});

*/