# Sprint 7 project 

Sprint 7 is the introduction to several technologies, one being JavaScript programming language. Programming is the process of writing instructions for computer to carry out. Whenever we need to repeat something manually, using programming languages is what we need to do that. We use Visual Studio Code to write test scripts and inspect our code. While testing our code we can utilize Node.js, which is a package manager that allowes us to use ready-to-use code. In this sprint we will use jest. Jest is a popular Javascript testing framework, that allowes us to describe and test our code. We also use Git/GitHub for version control. This allows you to work on your code without breaking something that is already running. It also allows you to work with a Team and gives the options to branch out your code for others to work on.

Our test will make HTTP requests with JavaScript using the fetch javascript method. Covering the GET, POST, PUT, and DELETE methods, and show examples of how to use each of these methods to interact with a server. With this knowledge, you should be able to start making HTTP requests in your own JavaScript projects. 

The stack being used is Node.js 18.20.3, NPM v 10.7.0, Visual Studio Code 1.90.2

API Documentation: https://cnt-a0e90330-3e07-4c4d-bb56-a83532e33de1.containerhub.tripleten-services.com/docs/

# TASK 1: GET (getHandlers.test.js)

In this code, we're making a GET request to the URL 'https://79ecc735-746a-4b71-838c-6f15a9ac17d9.containerhub.tripleten-services.com/api/v1/warehouses'. TEST 1 The fetch function returns a Promise, which resolves to a Response object. We're using the json method on the Response object to extract the JSON data from the response, and then we're logging it to the console. TEST 2 will use The "toBe" matcher checks for strict equality (===) between the actual value and the expected value. Both will use endpoint (/api/v1/warehouses)

## TEST 1 Get a list of Warehouses
Run:  npx jest tests/getHandlers.test.js

console.log
    [
      { name: 'Everything You Need', workingHours: { start: 7, end: 23 } },
      { name: 'Fresh Food', workingHours: { start: 8, end: 23 } },
      { name: 'Food City', workingHours: { start: 8, end: 21 } },
      { name: 'Big World', workingHours: { start: 5, end: 20 } }
    ]

      at Object.log (tests/getHandlers.test.js:9:11)
Results:   PASS  ./getHandlers.test.js
  √ Show a list of Warehouses (1134 ms)
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.156 s
Ran all test suites matching /tests\\getHandlers.test.js/i.

## Test 2 Get Response 200
Run:  npx jest tests/getHandlers.test.js

  √ Response 200 (813 ms)
Test Suites: 1 passed, 1 total                                                                                                                         
Tests:       1 passed, 1 total                                                                                                                                      Snapshots:   0 total
Time:        2.151 s, estimated 3 s
Ran all test suites matching /tests\\getHandlers.test.js/i.

# TASK 2: POST (postHandlers.test.js)

In this code, we're making a POST request to the URL 'https://79ecc735-746a-4b71-838c-6f15a9ac17d9.containerhub.tripleten-services.com/api/v1/warehouses/check'. We're also passing in an object that contains the data we want to send to the server. TEST 1 The method property is set to 'POST', and we're using the headers property to specify that we're sending JSON data. We're also using the JSON.stringify() method to convert the data object into a JSON string before sending it, and log it to the console using endpoint (/everything-you-need/v1/calculate). TEST 2 is to check the response to be 200 using endpoint (/everything-you-need/v1/calculate). TEST 3 will check the cost in different services with endpoint (/api/v1/couriers/check) and log it to the console. TEST 4 is adding items to the cart using endpoint (/api/v1/kits/8/products)

## Test 1 Everything you need log to console
Run: npx jest tests/postHandlers.test.js

  console.log
    {
      name: 'Everything You Need',
      workingHours: { start: 7, end: 23 },
      price: 9,
      isWarehouseWorking: true,
      isItemsAvailable: false,
      percentOfAvailableItems: 50,
      availableProducts: [ { id: 4, quantity: 9 } ]
    }

      at Object.log (tests/postHandlers.test.js:29:11)
PASS  ./postHandlers.test.js
  √ POST request to the specified URL and check response (855 ms)                                                                                                       
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total                                                                                                                                      Snapshots:   0 total
Time:        2.199 s, estimated 3 s
Ran all test suites matching /tests\\postHandlers.test.js/i

## TEST 2 Get Response 200
Run: npx jest tests/postHandlers.test.js
 PASS  ./postHandlers.test.js
  √ Response 200 (776 ms)                                                                                                                         
Test Suites: 1 passed, 1 total                                                                                                      
Tests:       1 passed, 1 total                                                                                                                                      Snapshots:   0 total
Time:        2.119 s, estimated 3 s
Ran all test suites matching /tests\\postHandlers.test.js/i.
console.log
    {
      'Fast Delivery': { deliveryPrice: 0 },
      Speedy: { deliveryPrice: 7 },
      'Food Service': { deliveryPrice: 0 },
      'Order and Go': { deliveryPrice: 5 }
    }

      at Object.log (tests/postHandlers.test.js:33:11)
PASS  ./postHandlers.test.js
  √ Response 200 (1155 ms)                                                                                                                                 
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.661 s, estimated 3 s
Ran all test suites matching /tests\\postHandlers.test.js/i.

## TEST 3 Delivery Cost
RUN: npx jest tests/postHandlers.test.js
console.log
    {
      'Fast Delivery': { deliveryPrice: 0 },
      Speedy: { deliveryPrice: 7 },
      'Food Service': { deliveryPrice: 0 },
      'Order and Go': { deliveryPrice: 5 }
    }

      at Object.log (tests/postHandlers.test.js:33:11)
PASS  ./postHandlers.test.js
  √ Response 200 (1155 ms)                                                                                                                                   
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.661 s, estimated 3 s
Ran all test suites matching /tests\\postHandlers.test.js/i.

## TEST 4 Adding items to the cart
console.log
    { code: 404, message: 'Not Found' }

      at Object.log (tests/postHandlers.test.js:160:11)
PASS  tests/postHandlers.test.js
  √ Should add items to the cart (950 ms)
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.193 s
Ran all test suites matching /tests\\postHandlers.test.js/i.

# TASK 3:PUT (putHandlers.test.js)

In this code, we're making a PUT request to the URL 'https://79ecc735-746a-4b71-838c-6f15a9ac17d9.containerhub.tripleten-services.com/api/v1/warehouses/check'. We're also passing in an object that contains the data we want to send to the server. The method property is set to 'PUT', and we're using the headers property to specify that we're sending JSON data. We're also using the JSON.stringify() method to convert the data object into a JSON string before sending it. TEST 1 will change the Kit using endpoint (/api/v1/products/5). TEST 2 will check the response to be 200.

## TEST 1 Grocery item price change
Run: npx jest tests/putHandlers.test.js

  console.log
    { ok: true }

      at Object.log (tests/putHandlers.test.js:22:11)
 PASS  tests/putHandlers.test.js
  √ Should put Grocery item price change to the console (715 ms)                                                                                                                         
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.076 s
Ran all test suites matching /tests\\putHandlers.test.js/i.

## TEST 2 Response 200
Run: npx jest tests/putHandlers.test.js

console.log
    { ok: true }

      at Object.log (tests/putHandlers.test.js:39:11)
PASS  ./putHandlers.test.js
  √ Response 200 (987 ms)
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.619 s
Ran all test suites matching /tests\\putHandlers.test.js/i.

# TASK 4: DELETE (deleteHandlers.test.js)

In this code, we're making a DELETE request to the URL 'https://79ecc735-746a-4b71-838c-6f15a9ac17d9.containerhub.tripleten-services.com/api/v1/kits/7', TEST 1 where 7 is the ID of the resource we want to delete. We're setting the method property to 'DELETE' to indicate that we want to delete the resource. TEST 2 We're then logging the status code of the response to the console.

## TEST 1 Delete the Kit 
Run: npx jest tests/deleteHandlers.test.js
 PASS  ./deleteHandlers.test.js
  √ Deleting a Kit from the specified URL (896 ms)                           
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total                                                                                                                                      Snapshots:   0 total
Time:        2.244 s
Ran all test suites matching /tests\\deleteHandlers.test.js/i.

## TEST 2 Response 200
Run: npx jest tests/deleteHandlers.test.js
 PASS  ./deleteHandlers.test.js
  √ Response 200 (943 ms)
Test Suites: 1 passed, 1 total                                                                                                                          Tests:       1 passed, 1 total                                                                                                                                      Snapshots:   0 total
Time:        2.282 s, estimated 3 s
Ran all test suites matching /tests\\deleteHandlers.test.js/i.

