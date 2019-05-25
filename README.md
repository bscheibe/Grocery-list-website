# grocery_list

Bruce Scheibe, 2019

Rest service and mongo DB with a website to manage grocery items. 

INSTALLING AND SETTING UP DB, API, AND WEBSITE:

// 1. Run database
cd db-api
npm i
sudo mongod --dbpath ../data

// 2. Then, run api
cd db-api
node index.js

// 3. Open postman and run this test GET request
localhost:3000/api/test

// 4. Run site.
cd website
npm install -g @angular/cli
npm install --save-dev @angular-devkit/build-angular
npm i
sudo ng serve --host=0.0.0.0 --port 80 --disableHostCheck true

// In case you run into angular issues.
npm install -g npm-check-updates
ncu -u
ng update @angular/cli
npm install

EXAMPLE API CALLS:

// Registering a new user request
http://localhost:3000/api/auth/register
POST
Headers:
Content-Type application/json
Body:
{
	"email": "email@email.com",
	"firstName": "bob",
	"lastName": "silver",
	"password": "password1",
	"clientid": 1
}

// Logging in as an existing user
localhost:3000/api/auth/login
POST
Headers:
Content-Type application/json
Body:
{
	"email": "email@email.com",
	"password": "password1"
}

// Request a catagory of groceries
// Returns a JSON array
localhost:3000/api/groceries
GET
Headers:
Content-Type application/json
Body:

// Add a new product to our database
localhost:3000/api/import
POST
Headers:
Content-Type application/json
Body:
{
		"catagory": "groceries",
    	"price": 1,
    	"quantity": 1000,
		"productName": "Pen",
    	"description": "A nice pen.",
    	"image": "someurl"
}

// Check if our token is valid
// The 'Bearer eyJ....." is just an example, 
// we just put our login token here.
GET /api/auth/authorize HTTP/1.1
Host: localhost:3000
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA4MDUzNzUyYjUyOTI0Mjk3OGQ0YjMiLCJmaXJzdE5hbWUiOiJiaWxsIiwibGFzdE5hbWUiOiJyb2JlcnRzIiwiZW1haWwiOiJiaWxsQGVtYWlsLmNvbSIsImlhdCI6MTU0NDAzNjQwMCwiZXhwIjoxNTQ0MDQ2NDgwfQ.3pPj50tW3_m8hmS2pfXcTNiI-d-aGhf4hqEQOv4lXC8

// Checkout request
// We give a token and a 'cost' as a put request
PUT /api/auth/transaction HTTP/1.1
Host: localhost:3000
Authorization: Bearer >>token here<<
{
	"cost": 500
}