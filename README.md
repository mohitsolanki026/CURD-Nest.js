<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

Employee Management API
This API provides endpoints for managing employee information, including their contact details.

Getting Started
To run the API locally, follow these steps:

Clone the repository: git clone https://github.com/mohitsolanki026/CURD-Nest.js.git
Install the dependencies: npm install
Set up the database connection in the ormconfig.json file.
Run the migrations: npm run typeorm migration:run
Start the server: npm run start:dev
The API will be accessible at http://localhost:3000.
Endpoints
Create Employee

POST /employees

Create a new employee with the provided data.

Request Body:

{

  "fullName": "John Doe",
  
  "jobTitle": "Software Engineer",
  
  "phoneNumber": "1234567890",
  
  "email": "johndoe@example.com",
  
  "address": "123 Main Street",
  
  "city": "Anytown",
  
  "state": "Anystate",
  
  "contactDetails": [
    {
    
      "phoneNumber": "0987654321",
      "relationship": "Primary Emergency Contact"
    },
    {
      "phoneNumber": "5678901234",
      "relationship": "Secondary Emergency Contact"
    }
  ]
}

Get Employee

GET /employees/:id

Retrieve employee details by their ID.

Response Body:

{
  "id": 1,
  
  "fullName": "John Doe",
  
  "jobTitle": "Software Engineer",
  
  "phoneNumber": "1234567890",
  
  "email": "johndoe@example.com",
  
  "address": "123 Main Street",
  
  "city": "Anytown",
  
  "state": "Anystate",
  
  "contactDetails": [
  
    {
      "id": 1,
      "phoneNumber": "0987654321",
      "relationship": "Primary Emergency Contact"
    },
    {
      "id": 2,
      "phoneNumber": "5678901234",
      "relationship": "Secondary Emergency Contact"
    }
  ]
}

Update Employee

PATCH /employees/:id

Update an existing employee with the provided data.

Request Body:

{
  "fullName": "Updated Name",
  
  "jobTitle": "Updated Job Title"
}

Delete Employee

DELETE /employees/:id

Delete an employee by their ID.

List Employees

GET /employees

List all employees with pagination support.

Query Parameters:

page (optional, default: 1): Page number.

limit (optional, default: 10): Number of employees per page.

Response Body:

[

  {
  
    "id": 1,
    "fullName": "John Doe",
    "jobTitle": "Software Engineer",
    "phoneNumber": "1234567890",
    "email": "johndoe@example.com",
    "address": "123 Main Street",
    "city": "Anytown",
    "state": "Anystate",
    "contactDetails": [
    
      {
        "id": 1,
        "phoneNumber": "0987654321",
        "relationship": "Primary Emergency Contact"
      },
      {
        "id": 2,
        "phoneNumber": "5678901234",
        "relationship": "Secondary Emergency Contact"
      }
    ]
  },
  {
  
    "id": 2,
    "fullName": "Jane Smith",
    "jobTitle": "Product Manager",
    "phoneNumber": "9876543210",
    "email": "janesmith@example.com",
    "address": "456 Oak Avenue",
    "city": "Othertown",
    "state": "Otherstate",
    "contactDetails": [
    
     {
        "id": 3,
        "phoneNumber": "4567890123",
        "relationship": "Primary Emergency Contact"
      }
    ]
  }
]
Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.





